---
layout: default
title: 1.5 Activity
permalink: /milestones/1-5-activity/
nav_order: 150
header: true
---

# Milestone 1.5: Activity

**Status: Early design exploration**

_[Design milestone](https://github.com/BitcoinDesign/Bitcoin-Core-App/milestone/5), [Figma](https://www.figma.com/file/ek8w3n3upbluw5UL2lGhRx/Bitcoin-Core-App-Design?type=design&node-id=7529%3A16730&mode=design&t=sZSBHpOLLJmoMf57-1)_

In previous milestones, we added wallet creation and import. Now we add display of transactions and balances.

{% include picture.html
	image = "/assets/images/milestones/1-5-activity.png"
	retina = "/assets/images/milestones/1-5-activity@2x.png"
	big = "/assets/images/milestones/1-5-activity-big.png"
	alt-text = ""
	width = 800
	height = 384
%}

Below are explorations of various activity screen states. These will change as we get closer to the implementation of this milestone.

- During initial block download when no transaction data is available
- Blocks are downloaded and wallet has no transactions yet
- 3 transactions
- Lots of transactions with pagination and expanded search & filter options
- Active search with some results
- Active search with no results

{% include picture.html
	image = "/assets/images/activity/screens.png"
	retina = "/assets/images/activity/screens@2x.png"
	big = "/assets/images/activity/screens-big.png"
	alt-text = "Six mock-ups of the activity screen showing various content states"
	width = 800
	height = 1097
%}

On mobile, the layout slightly changes. Some horizontally stacked elements switch to a vertical layout.

{% include picture.html
	image = "/assets/images/activity/mobile-screens.png"
	retina = "/assets/images/activity/mobile-screens@2x.png"
	big = "/assets/images/activity/mobile-screens-big.png"
	alt-text = "Two mobile screens showing a short and a long transaction list"
	width = 800
	height = 1013
%}

Transaction types and states are visually respresented in shapes and colors.

{% include picture.html
	image = "/assets/images/activity/color-coding.png"
	retina = "/assets/images/activity/color-coding@2x.png"
	mobile = "/assets/images/activity/color-coding-mobile.png"
	mobileRetina = "/assets/images/activity/color-coding-mobile@2x.png"
	alt-text = "Color and shape coding legend for transactions"
	width = 800
	height = 268
%}

Filter options are taken from the QT GUI and may change from these designs.

{% include picture.html
	image = "/assets/images/activity/filter-dropdowns.png"
	retina = "/assets/images/activity/filter-dropdowns@2x.png"
	mobile = "/assets/images/activity/filter-dropdowns-mobile.png"
	mobileRetina = "/assets/images/activity/filter-dropdowns-mobile@2x.png"
	alt-text = "Two dropdown panels with filter options with date ranges and transaction types"
	width = 800
	height = 218
%}

Various transaction states on mobile.

{% include picture.html
	image = "/assets/images/activity/transaction-status-examples-mobile.png"
	retina = "/assets/images/activity/transaction-status-examples-mobile@2x.png"
	big = "/assets/images/activity/transaction-status-examples-mobile-big.png"
	alt-text = "Table showing mobile layouts of transactions states with matching labels"
	width = 800
	height = 1182
%}

Various transaction states on desktop.

{% include picture.html
	image = "/assets/images/activity/transaction-status-examples-desktop.png"
	retina = "/assets/images/activity/transaction-status-examples-desktop@2x.png"
	big = "/assets/images/activity/transaction-status-examples-desktop-big.png"
	alt-text = "Table showing desktop layouts of transactions states with matching labels"
	width = 800
	height = 652
%}

An early iteration of a transaction details screen.

{% include picture.html
	image = "/assets/images/activity/transaction-details.png"
	retina = "/assets/images/activity/transaction-details@2x.png"
	big = "/assets/images/activity/transaction-details-big.png"
	alt-text = "A transaction details screen"
	width = 800
	height = 861
%}

