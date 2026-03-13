---
home: true
heroImage: /favicon.png
heroText: Hydro
tagline: High-performance Online Judge System
actions:
  - text: Introduction 💡
    link: /docs/
    type: primary
  - text: Deployment Guide
    link: /docs/install/
features:
- title: Secure
  details: Uses Linux container technology to isolate user programs
- title: Convenient
  details: Supports one-click deployment with scripts
- title: Powerful
  details: Provides contests, training, discussions, editorials, assignments, and more, and can be extended by installing add-ons
- title: Fast
  details: Sandbox reuse and delayed calculation improve execution efficiency
footer: AGPL3.0 Licensed | Copyright © 2021-present Undefined
---



![LICENSE](https://img.shields.io/github/license/hydro-dev/Hydro)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/hydro-dev/hydro/build.yml?branch=master)
![hydrooj](https://img.shields.io/npm/dm/hydrooj)
![npm](https://img.shields.io/npm/v/hydrooj?label=hydrooj)
![node-current](https://img.shields.io/node/v/hydrooj)
![GitHub contributors](https://img.shields.io/github/contributors/hydro-dev/Hydro)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/hydro-dev/Hydro)

Hydro is an efficient online judge system for informatics. Features: easy deployment (with installation scripts provided), lightweight, powerful, and easy to extend.  

[GitHub Repository](https://github.com/hydro-dev/Hydro)

Welcome to star this project; it encourages the developers.  
Project development and maintenance require funding, and donations are welcome.  
Hydro provides paid custom feature development services; contact us if needed.  
If related documentation is not detailed enough, please submit a Pull Request or contact the development team with details.  
Please submit bug reports and feature suggestions in [Issues](https://github.com/hydro-dev/Hydro/issues).

[Open the preconfigured test environment on Gitpod](https://gitpod.io/#https://github.com/hydro-dev/Hydro)

[Hydro Online Judge](https://hydro.ac/)

## Contact Us

Email [i@undefined.moe](mailto:i@undefined.moe)  
Telegram [@undefinedmoe](https://t.me/undefinedmoe)  
Hydro user group: 1085853538  

Note 1: Hydro is an open-source framework. Anyone can use this framework as long as they comply with the license.  
For copyright complaint issues, please contact the administrator of the corresponding website (usually the user with UID=2), which is unrelated to the developers.

Note 2: Before joining the user group, please read ["How To Ask Questions The Smart Way"](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md).  
Also, there may be content in the group that could make you uncomfortable or feel offended. If you have concerns about this, **please do not join the group**.

## Open-source License

Content under examples/, install/, and packages/ui-default/ in this project is licensed only under AGPL-3.0.
The rest of the project uses dual licensing:

1. You may use this code for free as long as you comply with the AGPL-3.0 license and the additional terms section below;  
2. If you need closed-source usage, you may also contact us to purchase another license.

## Additional Terms

Based on Article 7 of the AGPL3 license, when using this project, you must comply with the following additional terms:

1. You may not remove copyright notices and author/source attribution from this project; ([AGPL3 7(b)](LICENSE#L356))
2. When redistributing modified versions of this software, you must clearly indicate modifications in the software name or version number; ([AGPL3 7(c)](LICENSE#L360))
3. Unless permitted, the author's name may not be used for promotional purposes; ([AGPL3 7(d)](LICENSE#364))

That is:  
When deploying Hydro, you must keep the footer text `Powered by Hydro`, and the `Hydro` text must link to one of `hydro.js.org/this-repo/fork`.  
If you modify/extend the source code, you must also open-source it under AGPL-3.0-or-later, and you may indicate this in the footer as `Powered by Hydro, Modified by xxx`.  
This restriction still applies to the following modules:  

- Hydro plugins;
- Components including but not limited to those interacting with Hydro over HTTP;

If you need to keep these modules closed-source, please consider contacting us to purchase a license.  
In view of the [discord incident](https://github.com/mamoe/mirai/issues/850) related to Mirai, this project makes the following statements:

- Open-sourcing the project does not mean developers are obligated to provide service.
- Please read "How To Ask Questions The Smart Way" before asking questions.
- If necessary, developers reserve the right to stop providing any technical support to you.
- The development team will **do its best** to ensure smooth upgrades, but cannot guarantee that new versions will not introduce usage-impacting issues, and internal implementations may be renamed/modified/removed without any notice.  

If you feel uncomfortable with the above terms, we recommend you stop using this project.

## Acknowledgements

Order is not ranked and follows link lexicographical order.

- [GitHub](https://github.com/) provides code hosting and automated builds for Hydro.
- [criyle](https://github.com/criyle) provides the judge sandbox implementation.
- [Vijos](https://github.com/vijos/vj4) provides the UI framework for Hydro.
