---
layout: default
title: Contribute
permalink: /contribute/
nav_order: 9
---

# Contribute

This effort is part of the larger [Bitcoin Core](https://bitcoincore.org) project and community, which is about creating and maintaining reference implementations of bitcoin.

You can find the application code in the [bitcoin-core/gui-qml](https://github.com/bitcoin-core/gui-qml) Github repo.

For hosting this website and managing design requests and discussions, we use the [BitcoinDesign/Bitcoin-Core-App](https://github.com/BitcoinDesign/Bitcoin-Core-App) Github repo.

The main design source is this [Figma file](https://www.figma.com/file/GaCoOSNHB2yMB9ThiDtred/Bitcoin-Core-App).

## Design collaboration

Necessarily, we use several distinct tools to collaborate.

- For real-time chat, we use the [#bitcoin-core-app](https://bitcoindesign.slack.com/archives/C03PFUA4CG0) channel in the [Bitcoin Design](https://bitcoin.design/) Slack.
- Design collaboration happens in Figma in [this file](https://www.figma.com/file/GaCoOSNHB2yMB9ThiDtred/Bitcoin-Core-App).
- Current design tasks are tracked via a Github project [here](https://github.com/orgs/BitcoinDesign/projects/5/views/1).
- Development happens in the [bitcoin-core/gui-qml](https://github.com/bitcoin-core/gui-qml) Github repo. You can test and review ongoing development there.
- Every Wednesday, we have a general project call to discuss progress.
- Every Thursday, we have a design collaboration call for hands-on design work.
- Calls are recorded and uploaded to [BitcoinTV](https://bitcointv.com/a/bitcoin_design/video-channels) and [YouTube](https://www.youtube.com/c/BitcoinDesign/featured) via the Bitcoin Design channels.
- Keep up with the call schedule via the [Bitcoin Design Calendar](https://bitcoin.design/calendar/) and/or [Github call issues](https://github.com/BitcoinDesign/Meta/issues).
- Some designers record their own updates and upload them to BitcoinTV or YouTube. These often provide more in-depth background on design rationale.

## Collaborating in Figma

Figma does not offer tools to systematically propose, review and merge changes in a structured way (unless you're part of their enterprise plan, that is). Here's the current workflow we use:

- We have one main [Figma file](https://www.figma.com/file/GaCoOSNHB2yMB9ThiDtred/Bitcoin-Core-App). Everyone can view this, but only regular design contributors have edit access.
- There are two main pages (one for each version of the application) that include the latest agreed-upon designs.
- There is a design system page includes all the common colors, icons, text styles, components, etc.
- Every contributor has their own "Workspace" page to put together proposals to improve the design. This should only be used for proposals that build on the design system to avoid breaking it (by accidentally changing components and styles). Broader explorations should happen in separate files (or other tools, whatever you prefer).
- Agreed-upon changes should be merged into the main and/or design system pages.
- Changes should be exported to these design docs here. The "Design docs page" includes all the visuals that are exported to this site, so they can easily be updated later if needed.

There is a lot of manual work and communication involved in this. Agreeing on changes is pretty fluent right now and can happen in various places. This is partially due to the project being in a very early stage.

## Testing & reviewing development work

You are welcome to test and review ongoing development work. Every [pull request](https://github.com/bitcoin-core/gui-qml/pulls) (a code update focused on a specific change), includes links in the top comment to download the application for testing. You can also compile the application from source if you'd like.

If you test on a Mac, you need to run ´codesign -s - ./filename´ on the downloaded executable for it to work.

Please provide feedback in the pull request directly.