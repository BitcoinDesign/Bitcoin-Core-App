---
layout: default
title: Block clock
permalink: /block-clock/
nav_order: 14
---

# Block clock

For the first version of the application, the block clock is the central part of the user experience. The application is focused on letting users easily run a node, and the block clock provides a simple visual to see the current status.

{% include picture.html
	image = "/assets/images/block-clock/block-clock.png"
	retina = "/assets/images/block-clock/block-clock@2x.png"
	big = "/assets/images/block-clock/block-clock-big.png"
	alt-text = "Application screen showing the block clock"
	width = 800
	height = 622
%}

{% include picture.html
	image = "/assets/images/block-clock/dial-details.png"
	retina = "/assets/images/block-clock/dial-details@2x.png"
	big = "/assets/images/block-clock/dial-details-big.png"
	alt-text = "Explanation of the block clock elements"
	width = 800
	height = 435
%}

{% include picture.html
	image = "/assets/images/block-clock/connection-states.png"
	retina = "/assets/images/block-clock/connection-states@2x.png"
	big = "/assets/images/block-clock/connection-states-big.png"
	alt-text = "Explanation of the peer indicator states"
	width = 800
	height = 467
%}

Every element in the block clock has a function. They can be combined to communicate different application states.

{% include picture.html
	image = "/assets/images/block-clock/states.png"
	retina = "/assets/images/block-clock/states@2x.png"
	big = "/assets/images/block-clock/states-big.png"
	alt-text = "Various states of the block clock"
	width = 800
	height = 419
%}

It takes some time until the application can show initial progress and a somewhat reliable time estimate until completion of the initial block download. To the user, this can look like the application is broken. So a few adjustments are made:
- The progress circle always shows at least a small bit (even at 0%)
- While the percentage value is typically rounded, we show tenths and hundredths below 1% so users can see some progress
- While the estimated time fluctuates drastically and provides not useful information, we only show "Estimating"
- A "~" indicates that this is an estimate
- We only show minutes when we're confident that they are somewhat accurate

{% include picture.html
	image = "/assets/images/block-clock/progress-details.png"
	retina = "/assets/images/block-clock/progress-details@2x.png"
	big = "/assets/images/block-clock/progress-details-big.png"
	alt-text = "Details of the initial block download state"
	width = 800
	height = 168
%}

A network indicator appears below the block click when the application does not run on mainnet. We need to decide whether this element should have a tool tip, and/or tapping it navigates to the settings for more information and options.

{% include picture.html
	image = "/assets/images/block-clock/network-indicator.png"
	retina = "/assets/images/block-clock/network-indicator@2x.png"
	big = "/assets/images/block-clock/network-indicator-big.png"
	alt-text = "Visual states of the network indicator below the block clock"
	width = 800
	height = 254
%}

And the block clock in light mode, which simply switches the [color variables]({{ '/colors/' | relative_url }}) from the dark set to the light set.

{% include picture.html
	image = "/assets/images/block-clock/light-mode.png"
	retina = "/assets/images/block-clock/light-mode@2x.png"
	big = "/assets/images/block-clock/light-mode-big.png"
	alt-text = "The block clock in light mode"
	width = 800
	height = 622
%}

## Prototype

This web prototype was done to validate if the block clock dial renders well with realistic data (or if segments get too small), to explore animations & interactions, and test widgets.

[Prototype](https://stupefied-jones-dd209f.netlify.app), [Source](https://github.com/GBKS/bitcoin-core-tng-ui-tests)
