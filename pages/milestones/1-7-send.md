---
layout: default
title: 1.7 Send
permalink: /milestones/1-7-send/
nav_order: 26
header: true
---

# Milestone 1.7: Sending bitcoin

**Status: Early design exploration**

_[Design milestone](https://github.com/BitcoinDesign/Bitcoin-Core-App/milestone/7), [Figma](https://www.figma.com/file/ek8w3n3upbluw5UL2lGhRx/Bitcoin-Core-App-Design?type=design&node-id=7516%3A13173&mode=design&t=sZSBHpOLLJmoMf57-1)_

The big goal is to provide full-fledged wallet features for view-only, single-key, and multi-key wallets, as well as hardware wallet support and more. The specifics are yet to be determined and will be tackled via smaller milestone releases.

A major step in development is the moment when the application reaches parity with the existing QT GUI and can take its place. This requires a lot of foundational work in the codebase, and a lot of front-end development work.

Below is a visual map of how we can reach this parity point based on Milestone 1, split up into distinct milestones. Each milestone adds a mostly self-contained set of features, with milestones building on each other. These are explained in more detail in the following pages. 

{% include picture.html
	image = "/assets/images/milestones/1-7-send.png"
	retina = "/assets/images/milestones/1-7-send@2x.png"
	big = "/assets/images/milestones/1-7-send-big.png"
	alt-text = "A visual map of which screens will be added in the 1.7 milestone"
	width = 800
	height = 384
%}

The complexity of the send flow can range dramatically. Some of the features to support:

- Address book
- Fee estimation, recommendations and customization
- Coin selection
- External signers
- Multiple signers
- Multiple signing paths
- Silent payments
- Transaction batching
- Transaction (PSBT) import and export
- Bitcoin URI scheme support
- Clipboard support

Screens and flows have not been fully designed yet. This page covers the current state. Below is an early version of the tree of user flows we may end up with.

{% include picture.html
	image = "/assets/images/send/flow.png"
	retina = "/assets/images/send/flow@2x.png"
	big = "/assets/images/send/flow-big.png"
	alt-text = "Zoomed-out view of a tree structure of screens involved in the send flow"
	width = 800
	height = 807
%}

This is an initial send screen where the user has a payment request on their clipboard, and the wallet has multiple active spending paths to choose from.

{% include picture.html
	image = "/assets/images/send/send.png"
	retina = "/assets/images/send/send@2x.png"
	big = "/assets/images/send/send-big.png"
	alt-text = "Send screen with a notice at the top about an invoice being on the clipboard"
	width = 800
	height = 711
%}

The goal is to keep the primary screen simple and focused for regular transactions, and hide less frequently used options in the menu, accessed easily via the ellipsis button.

{% include picture.html
	image = "/assets/images/send/send-menu.png"
	retina = "/assets/images/send/send-menu@2x.png"
	big = "/assets/images/send/send-menu-big.png"
	alt-text = "Overlay menu with send screen options"
	width = 800
	height = 318
%}

Before the transaction is broadcast, the user has another chance to review it.

{% include picture.html
	image = "/assets/images/send/approve.png"
	retina = "/assets/images/send/approve@2x.png"
	big = "/assets/images/send/approve-big.png"
	alt-text = "Transaction summary modal for the user to approve or cancel"
	width = 800
	height = 526
%}

Wallet can be set up to be view only. We need to decide whether to offer some type of upgrade path to enable signing.

{% include picture.html
	image = "/assets/images/send/view-only.png"
	retina = "/assets/images/send/view-only@2x.png"
	big = "/assets/images/send/view-only-big.png"
	alt-text = "A send screen with a notice about the view-only state and options to upgrade to a signing wallet"
	width = 800
	height = 711
%}

Batch transactions can be enabled via the menu. The user can add more recipients and specify amounts for each.

{% include picture.html
	image = "/assets/images/send/batching.png"
	retina = "/assets/images/send/batching@2x.png"
	big = "/assets/images/send/batching-big.png"
	alt-text = "Send screen with a pagination for batch transactions"
	width = 800
	height = 711
%}

In coin selection, users can choose which inputs to include in a transaction.

{% include picture.html
	image = "/assets/images/send/coin-selection.png"
	retina = "/assets/images/send/coin-selection@2x.png"
	big = "/assets/images/send/coin-selection-big.png"
	alt-text = "Coin selection screen with multiple inputs to choose from"
	width = 800
	height = 711
%}

There is a lot missing from these designs, but they should provide a good foundation to build on.