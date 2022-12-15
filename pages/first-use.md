---
layout: default
title: First use
permalink: /first-use/
nav_order: 13
---

# First use

The first time a user tries an application is an essential experience that can make them appreciate the features and happily return for repeat use, or it can turn them away forever. The reality is usually somewhere in between and depends on the user and their context. But, with a well-considered first-use experience, we can help them get a good start.

The cover screen also offers access to the about screen and developer options.

{% include picture.html
	image = "/assets/images/first-use/cover.png"
	retina = "/assets/images/first-use/cover@2x.png"
	big = "/assets/images/first-use/cover-big.png"
	alt-text = "Cover, about and developer option screens"
	width = 800
	height = 417
%}

Ideally, users already clearly understand the application benefits and unique features. The website from which it is downloaded should already have communicated these. However, it can still be beneficial to repeat them. This clears up false expectations and prepares users for what they are about to do next. 

{% include picture.html
	image = "/assets/images/first-use/info.png"
	retina = "/assets/images/first-use/info@2x.png"
	big = "/assets/images/first-use/info-big.png"
	alt-text = "Info screens to explain the app purpose and essential features"
	width = 800
	height = 417
%}

Since the application requires a lot of storage, we may want to offer users some simple options, particularly on smart phones. Ideally, the application detects available drives and space, and makes an appropriate recommendation that the user only needs to confirm.

{% include picture.html
	image = "/assets/images/first-use/storage-location.png"
	retina = "/assets/images/first-use/storage-location@2x.png"
	big = "/assets/images/first-use/storage-location-big.png"
	alt-text = "Screen for choosing default or custom storage location"
	width = 800
	height = 417
%}

This where the user chooses between pruning and storing all downloaded blocks. They also have the option to customize the maximum amount of storage to use.

{% include picture.html
	image = "/assets/images/first-use/storage-amount.png"
	retina = "/assets/images/first-use/storage-amount@2x.png"
	big = "/assets/images/first-use/storage-amount-big.png"
	alt-text = "Screens for choosing between pruned or full block data storage"
	width = 800
	height = 417
%}

The first use ends with the initial block download. It's a time-consuming activity that users are typically not familiar with from other applications. The following screen ensures that they understand what will happen next, when they will navigate the application independently.

Bandwidth may also be limited or expensive for the user, particularly on mobile. The initial block download is particularly problematic, so we may want to ensure that users are guided towards the best option.

{% include picture.html
	image = "/assets/images/first-use/ibd-and-connection.png"
	retina = "/assets/images/first-use/ibd-and-connection@2x.png"
	big = "/assets/images/first-use/ibd-and-connection-big.png"
	alt-text = "Screen that prepares the user for the initial block download, as well as connection settings"
	width = 800
	height = 417
%}

After these onboarding steps, users are navigated to the [block clock]({{ '/block-clock/' | relative_url }}), which then connects to the network and starts the initial block download.