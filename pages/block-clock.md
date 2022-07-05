---
layout: default
title: Block clock
permalink: /block-clock/
nav_order: 11
---

# Block clock

For the first version of the application, the block clock is the central part of the user experience. The application is focused on letting users easily run a node, and the block clock provides a simple visual to see the current status.

{% include picture.html
	image = "/assets/images/block-clock.png"
	retina = "/assets/images/block-clock@2x.png"
	big = "/assets/images/block-clock-big.png"
	alt-text = ""
	width = 800
	height = 622
%}

{% include picture.html
	image = "/assets/images/block-clock-dial-details.png"
	retina = "/assets/images/block-clock-dial-details@2x.png"
	big = "/assets/images/block-clock-dial-details-big.png"
	alt-text = ""
	width = 800
	height = 435
%}

{% include picture.html
	image = "/assets/images/block-clock-connection-states.png"
	retina = "/assets/images/block-clock-connection-states@2x.png"
	big = "/assets/images/block-clock-connection-states-big.png"
	alt-text = ""
	width = 800
	height = 467
%}

Every element in the block clock has a function. They can be combined to communicate different application states.

{% include picture.html
	image = "/assets/images/block-clock-states.png"
	retina = "/assets/images/block-clock-states@2x.png"
	big = "/assets/images/block-clock-states-big.png"
	alt-text = ""
	width = 800
	height = 419
%}

## Prototype

This web prototype was done to validate if the block clock dial renders well with realistic data (or if segments get too small), to explore animations & interactions, and test widgets.

[Prototype](https://stupefied-jones-dd209f.netlify.app), [Source](https://github.com/GBKS/bitcoin-core-tng-ui-tests)
