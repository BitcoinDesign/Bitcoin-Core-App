---
layout: default
title: 1.3 Import
permalink: /milestones/1-3-import/
nav_order: 22
header: true
---

# Milestone 1.3: Wallet import

**Status: Early design exploration**

_[Design milestone](https://github.com/BitcoinDesign/Bitcoin-Core-App/milestone/3), [Figma](https://www.figma.com/file/ek8w3n3upbluw5UL2lGhRx/Bitcoin-Core-App-Design?type=design&node-id=7516%3A13169&mode=design&t=sZSBHpOLLJmoMf57-1)_

After the global navigation is established in milestone 1.2, we now focus on importing and handling wallets. Using the wallet functionality is optional. 

## Entry points

For those users who would like to use Bitcoin Core with a wallet, the app offers two main entry points for adding wallets:

- Directly after the onboarding flow, if the user is doing a fresh install of the application.
- Trhough the wallet selector dropdown, if he already has a different wallet. 
- From the settings screen, if the application has been previously used in node only mode. 



{% include picture.html
	image = "/assets/images/milestones/1-3-import.png"
	retina = "/assets/images/milestones/1-3-import@2x.png"
	big = "/assets/images/milestones/1-3-import-big.png"
	alt-text = "A visual map of which screens will be added in the 1.2 milestone"
	width = 800
	height = 384
%}

Below is an iteration of the wallet import flow, including migration and error paths. Many details need to be refined. Click to see it larger.

{% include picture.html
	image = "/assets/images/import-wallet/flow.png"
	retina = "/assets/images/import-wallet/flow@2x.png"
	big = "/assets/images/import-wallet/flow-big.png"
	alt-text = "User flow mock-ups for importing an existing wallet."
	width = 800
	height = 368
%}