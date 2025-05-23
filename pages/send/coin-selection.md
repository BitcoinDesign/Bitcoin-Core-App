---
layout: default
title: Coin selection
permalink: /send/coin-selection/
nav_order: 175
indent: true
---

# Coin selection

**Status: Early design exploration**

Coin selection enables users to specify which inputs (UTXOs) to include when creating a transaction. 

## Enabling coin selection

Coin selection is enabled through the ellipsis menu. 

{% include picture.html
	image = "/assets/images/send/coin-selection-enabling.png"
	retina = "/assets/images/send/coin-selection-enabling@2x.png"
	big = "/assets/images/send/coin-selection-enabling-big.png"
	alt-text = "Multiple screens showing the process of enabling coin selection"
	width = 800
	height = 366
%}

## Selecting coins (UTXOs)

The coin selection screen displays all UTXOs (Unspent Transaction Outputs) in the wallet. Change UTXOs are identified with a distinct arrow icon. 

{% include picture.html
	image = "/assets/images/send/coin-control-default.png"
	retina = "/assets/images/send/coin-control-default@2x.png"
	big = "/assets/images/send/coin-control-default-big.png"
	alt-text = "Coin selection screen with multiple UTXOs to choose from"
	width = 800
	height = 551
%}

The expanded selection summary displays:
- **Amount to send:** The transaction amount excluding fees
- **Fee**: The fee shows the total transaction fee, based on the currently selected fee rate. The fee is updated each time the user selects or unselects a UTXO. 
- **Amount to select:** The sum of the transaction amount plus fee
- **Amount selected:** The total value of all selected UTXOs

{% include picture.html
	image = "/assets/images/send/coin-control-summary.png"
	retina = "/assets/images/send/coin-control-summary@2x.png"
	big = "/assets/images/send/coin-control-summary-big.png"
	alt-text = "Coin selection screen showing the expanded summary"
	width = 800
	height = 551
%}

### View options
The UTXO list offers several display options: 

- Sorting: UTXOs are sorted chronologically by receipt date by default, with additional sorting options by amount or label
- Grouping by address: UTXOs can be grouped by address, facilitating selection of UTXOs received through address reuse

{% include picture.html
	image = "/assets/images/send/coin-control-address-grouping.png"
	retina = "/assets/images/send/coin-control-address-grouping@2x.png"
	big = "/assets/images/send/coin-control-address-grouping-big.png"
	alt-text = "Coin selection screen showing a list of UTXOs grouped by address"
	width = 800
	height = 501
%}

#### UTXO details

From the UTXO list the user can navigate to the details of each UTXO, using the chevron icon button on the right. Initially, this will lead to the transaction details of the incoming transaction for that specific UTXO.  

{% include picture.html
	image = "/assets/images/send/coin-control-coin-details.png"
	retina = "/assets/images/send/coin-control-coin-details@2x.png"
	big = "/assets/images/send/coin-control-coin-details-big.png"
	alt-text = "Screen showing the details of an incoming transaction"
	width = 800
	height = 685
%}

## Potential future scope

#### Locked coins

The application will support locking specific UTXOs to prevent them from being automatically selected for outgoing transactions. Locked UTXOs are not shown in the coin selection screen by default, but their visibility can be toggled through the ellipsis menu. Users will also be able to lock and unlock UTXOs.

{% include picture.html
	image = "/assets/images/send/coin-control-locked-coins.png"
	retina = "/assets/images/send/coin-control-locked-coins@2x.png"
	big = "/assets/images/send/coin-control-locked-coins-big.png"
	alt-text = "Coin selection screen showing locked UTXOs in the UTXO list"
	width = 800
	height = 501
%}

This functionality will also apply to UTXOs included in outgoing transactions with applied locktime. 

#### Dedicated UTXO details page

We are considering a dedicated page for each UTXO as part of the future project roadmap. This specialized view will provide comprehensive information and management options for individual UTXOs.

{% include picture.html
	image = "/assets/images/send/coin-control-utxo-details.png"
	retina = "/assets/images/send/coin-control-utxo-details@2x.png"
	big = "/assets/images/send/coin-control-utxo-details-big.png"
	alt-text = "Screen showing the details of a specific UTXO"
	width = 800
	height = 352
%}

#### Coin flow diagram

A new coin flow diagram feature is under consideration, which would offer users two viewing options:

- A standard list view of transactions
- A visual coin flow representation to graphically illustrate transaction relationships
