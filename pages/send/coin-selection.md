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

## Future scope

### Locked coins

The application will support locking specific UTXOs to prevent them from being spent. Locked UTXOs will not appear in the coin selection screen by default, but their visibility can be toggled through the ellipsis menu.

{% include picture.html
	image = "/assets/images/send/coin-control-locked-coins.png"
	retina = "/assets/images/send/coin-control-locked-coins@2x.png"
	big = "/assets/images/send/coin-control-locked-coins-big.png"
	alt-text = "Coin selection screen showing locked UTXOs in the UTXO list"
	width = 800
	height = 501
%}

This functionality will also apply to UTXOs included in outgoing transactions with applied locktime. 

### Coin flow diagram

- Tabbed views for "list view" and "visual coin flow" view