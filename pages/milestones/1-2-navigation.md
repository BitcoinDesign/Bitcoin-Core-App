---
layout: default
title: 1.2 Navigation
permalink: /milestones/1-2-navigation/
nav_order: 21
header: true
---

# Milestone 1.2: Navigation

**Status: Planning**

_[Design milestone](https://github.com/BitcoinDesign/Bitcoin-Core-App/milestone/1), [Code milestone](https://github.com/bitcoin-core/gui-qml/milestone/2), [Figma](https://www.figma.com/file/ek8w3n3upbluw5UL2lGhRx/Bitcoin-Core-App-Design?type=design&node-id=7516%3A13168&mode=design&t=sZSBHpOLLJmoMf57-1)_

The application flow in Milestone 1 is very simple. After a mostly linear onboardin flow, the user lands on the block clock. They can navigate into settings, and back.

In the future, the application will be more complex. There will be new distinct areas for viewing activity, sending, and receiving, each with sub-pages, nested user flows, modals, and more.

Goal with this milestone is to restructure the application, focusing on navigation. We can add empty placedholders for all new screens, only containing essential navigation components.

A central part of this will be the new navigation bars, which will differ in look and behavior across desktop and mobile. Below is work-in-progress mock-up of what that might look like.

{% include picture.html
	image = "/assets/images/global-nav-direction.png"
	retina = "/assets/images/global-nav-direction@2x.png"
	big = "/assets/images/global-nav-direction-big.png"
	alt-text = ""
	width = 800
	height = 417
%}

Another aspect is to implement navigation and transition patterns that are intuitive and consistent (in that order). Below are some basic patterns, most of which are already implemented in the application.

{% include picture.html
	image = "/assets/images/transition-patterns.png"
	retina = "/assets/images/transition-patterns@2x.png"
	big = "/assets/images/transition-patterns-big.png"
	alt-text = ""
	width = 800
	height = 827
%}