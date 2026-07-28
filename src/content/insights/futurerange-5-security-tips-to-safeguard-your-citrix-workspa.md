---
title: "5 Security Tips to Safeguard Your Citrix Workspace Environment"
description: "Cloud adoption is nearing completion, with most companies worldwide migrating to cloud solutions — here are five security best practices to safeguard your Citrix Workspace environment from costly breaches."
category: 'Cybersecurity'
date: 2021-09-21
---

*Originally published by [FutureRange](https://web.archive.org/web/20220524063711/https://futurerange.ie/blog/5-security-tips-to-safeguard-your-citrix-workspace-environment/).*

[65% of](https://www.skyhighnetworks.com/cloud-security-blog/5-key-findings-from-2019-cloud-adoption-and-risk-report/) global organisations use some form of Infrastructure as a Service (IaaS) or Platform as a Service (PaaS). What IaaS and PaaS offer businesses, is one integrated platform upon which they can base a number of their business apps and processes. This makes things more streamlined, easier for employees to use, and ensures fluid data sharing.

A popular cloud platform that incorporates these benefits is Citrix. Citrix cloud solutions include a full range of virtualisation services including Citrix Workspace, virtual apps and desktops.

One of the powerful features of Citrix is that it integrates with multiple other technology tools. While this is a benefit, it can also be a concern when it comes to cybersecurity.

***The average organisation [has 12.2](https://www.skyhighnetworks.com/cloud-security-blog/5-key-findings-from-2019-cloud-adoption-and-risk-report/) compromised account threats in the cloud each month.***

Sensitive data in cloud environments is a prime target for hackers. They continually try to compromise user accounts and gain access to company assets.

The more moving parts you have to your cloud technology infrastructure, the more difficult securing your network and data can be. But if you employ good security practices when it comes to your cloud infrastructure, you can significantly mitigate your risk of a costly breach.

## Security Best Practices for Citrix Solutions

While every cloud platform deployment can be different and tailored to the distinct needs of each business, security is a shared theme. Threats that hit each organisation are the same, and include things like:

- Phishing campaigns
- Credential theft
- Malware, ransomware, virus infections
- Automated bot attacks
- Targeted attacks
- Fileless attacks
- Malicious mobile apps

The following tips will help you better secure your Citrix cloud environment, as well as other cloud services that you may use.

### Safeguard User Credentials

Many phishing campaigns are designed to steal user credentials, which give hackers an open door to your data. If these credential lists are stored on systems that aren't secure or are transferred throughout networks using non-encrypted methods, it can leave them open to being intercepted.

Additionally, if user or admin credentials are left behind on certain systems that are unsecure (such as a 3rd party tool you've integrated with Citrix), they can be harvested using a pass-the-hash type attack.

To keep this from happening, protect user and admin credentials by restricting permissions of your accounts to limit what a bad actor can do. If you're deploying Citrix with Windows 10 and Windows Server 2016 you can also use [Credential Guard](https://docs.microsoft.com/en-us/windows/security/identity-protection/credential-guard/credential-guard), which provides a virtualization-based security.

### Segment High Risk and Highly Sensitive Data

There are certain computing activities that are considered "high risk." One of these is web browsing and email. Why? Because malware overwhelmingly comes in via a phishing email and often those emails contain links to malicious websites.

If you are using the same VDA (Virtual Delivery Agent) that powers a virtual desktop or app for both browsing the web and a connection to highly sensitive data, that greatly increases your data compromise risk.

It's somewhat like using your post box to store your money instead of keeping it in the bank.

You want to segment different processes that your employees undertake in the Citrix workspace by keeping those that are highly sensitive separated virtually from those that are considered higher risk for a breach.

### Use the Principle of Least Privilege

The principle of least privilege is a good best practice to use for all your company applications and web accounts. It is simply granting a user the minimum privilege needed to perform their job functions.

What happens all too often, is that to ward off any potential access issues, admins get in the habit of just giving everyone the same access level, which may be higher than they need.

By reducing the activities that a user can perform on your Citrix platform, you reduce the amount of harm a bad actor can do if they compromise that user account.

### Encrypt Transmission of Sensitive Data

While encryption is often put into place on data that travels outside an organisation, it's often overlooked when it comes to internal data sharing.

Approximately [35% of](https://www.observeit.com/blog/2019-verizon-data-breach-investigations-report-shows-spike-in-insider-threats-our-top-3-takeaways/) security breaches are the result of insider threat actors. Rather than employees going rogue, this is often due to stolen login credentials, where a hacker can login as an insider.

You want to take a look at internal communications throughout your Citrix environment and ensure things like user credentials are encrypted both while in transit through the system and when at rest (being stored).

### Deploy Application Whitelisting

When a user deploys an application that an administrator did not specifically provide to users, it can lead to what's called a "session breakout" and allow a malicious script to run.

For example, if your users are using Citrix virtual desktops with Windows 10, one of your users might innocently install a free photo editing software they found online. Unbeknownst to them, that program may open a command prompt in the background and send a malicious command to Windows PowerShell.

By whitelisting programs that are allowed to execute those types of commands, you cut off any of those "fileless" attacks from rogue software and greatly increase system security.
