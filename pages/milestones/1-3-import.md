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

After the global navigation is established in milestone 1.1, we now focus on importing and handling wallets.

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

## Entry points

For those users who would like to use Bitcoin Core with a wallet, the app offers two main entry points for adding wallets:

- Directly after the onboarding flow, if the user is doing a fresh install of the application.
- Through the wallet selector dropdown, if he already has a different wallet. 
- From the settings screen, if the application has been previously used in node only mode. 

## Import options

Users have two main options to import a wallet: by loading a wallet file into the application or by copy-pasting an extended public key, bitcoin address or descriptor.

#### File upload

Users can import a wallet by choosing a wallet file from their file system. On desktop they can also just drag and drop the file into the application window. 

#### Paste XPUB or bitcoin address


## Wallet review

After a wallet has been imported, the application displays the most important information and metadata about the wallet, so that the user can quickly assess whether everything worked as expected. This includes: 

- Wallet name (if available)
- Key scheme
- What else?

The full details are available in the settings section for full review.

## Exception and error handling

So far we discussed the happy path. However, there are various alternative scenarios to consider. These include

- The user tries to import a wallet that has an outdated format.
- The provided information (wallet file or pasted string) could not be processed.
- Etc.

#### General approach

In all of these cases, we want to make sure that the application provides clear, concise and actionable feedback about:
1. What went wrong (reason).
2. What this means (impact).
3. What does the user need to do (remedy).
