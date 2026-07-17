// Revolving carousel with a seamless loop. The card set is cloned once so there
// is always content to the right; scrollLeft is normalised by one set width
// after each move, so "next" keeps going forward forever and "prev" wraps back.
// Native swipe works for free. Optional gentle autoplay pauses on hover/focus.
export interface CarouselOpts {
  cardSelector?: string;
  prevSelector?: string;
  nextSelector?: string;
  navSelector?: string; // un-hide when JS wires up
  autoplayMs?: number;
}

export function initCarousel(vp: HTMLElement, opts: CarouselOpts = {}): () => void {
  const cardSel = opts.cardSelector || '.acard';
  const originals = [...vp.querySelectorAll<HTMLElement>(`${cardSel}:not([data-clone])`)];
  if (originals.length < 2) return () => {};
  const n = originals.length;

  if (!vp.querySelector('[data-clone]')) {
    originals.forEach((card) => {
      const c = card.cloneNode(true) as HTMLElement;
      c.setAttribute('data-clone', 'true');
      c.setAttribute('aria-hidden', 'true');
      c.setAttribute('tabindex', '-1');
      c.querySelectorAll('a,button').forEach((el) => el.setAttribute('tabindex', '-1'));
      vp.appendChild(c);
    });
  }

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (opts.navSelector) document.querySelector(opts.navSelector)?.removeAttribute('aria-hidden');

  const step = () => {
    const gap = parseFloat(getComputedStyle(vp).columnGap) || 20;
    return originals[0].getBoundingClientRect().width + gap;
  };
  const setWidth = () => n * step();
  const normalize = () => {
    const w = setWidth();
    if (w <= 0) return;
    if (vp.scrollLeft >= w) vp.scrollLeft -= w;
    else if (vp.scrollLeft < 0) vp.scrollLeft += w;
  };
  const go = (dir: number) => {
    const behavior: ScrollBehavior = reduce ? 'auto' : 'smooth';
    if (dir < 0 && vp.scrollLeft < step() - 1) vp.scrollLeft += setWidth();
    vp.scrollBy({ left: dir * step(), behavior });
  };

  const cleaners: Array<() => void> = [];
  const on = (t: EventTarget, e: string, f: EventListenerOrEventListenerObject, o?: any) => {
    t.addEventListener(e, f, o);
    cleaners.push(() => t.removeEventListener(e, f, o));
  };

  if (opts.prevSelector) {
    const b = document.querySelector(opts.prevSelector);
    if (b) on(b, 'click', () => go(-1));
  }
  if (opts.nextSelector) {
    const b = document.querySelector(opts.nextSelector);
    if (b) on(b, 'click', () => go(1));
  }

  let settle = 0;
  on(vp, 'scroll', () => { clearTimeout(settle); settle = window.setTimeout(normalize, 120); }, { passive: true });

  let timer = 0;
  let paused = false;
  if (opts.autoplayMs && !reduce) {
    const start = () => { if (!timer) timer = window.setInterval(() => { if (!paused) go(1); }, opts.autoplayMs); };
    const stop = () => { if (timer) { clearInterval(timer); timer = 0; } };
    on(vp, 'pointerenter', () => (paused = true));
    on(vp, 'pointerleave', () => (paused = false));
    on(vp, 'focusin', () => (paused = true));
    on(vp, 'focusout', () => (paused = false));
    const io = new IntersectionObserver((es) => es.forEach((e) => (e.isIntersecting ? start() : stop())), { threshold: 0.2 });
    io.observe(vp);
    cleaners.push(() => { stop(); io.disconnect(); });
  }

  return () => { cleaners.forEach((c) => c()); clearTimeout(settle); };
}
