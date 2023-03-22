---
layout: default
title: Settings
permalink: /settings/
nav_order: 15
---

# Settings

For the first version of the application, the block clock is the central part of the user experience. The application is focused on letting users easily run a node, and the block clock provides a simple visual to see the current status.

{% include picture.html
	image = "/assets/images/settings/settings.png"
	retina = "/assets/images/settings/settings@2x.png"
	big = "/assets/images/settings/settings-big.png"
	alt-text = "Application screen showing various settings"
	width = 800
	height = 667
%}

About, Storage, and Connection screens are covered in [first use]({{ '/first-use/' | relative_url }}).

## Peers

Shows other nodes the application is connected to. Provides users a detailed understanding of what is happening under the hood of the block clock. At a later stage it should be possible to view peer details, and add and remove peers. The sorting buttons also define what detail is shown in each peer item, based on what is relevant for the selected filter.

{% include picture.html
	image = "/assets/images/settings/peers.png"
	retina = "/assets/images/settings/peers@2x.png"
	big = "/assets/images/settings/peers-big.png"
	alt-text = "Application screen showing network traffic graphs for incoming and outgoing data"
	width = 800
	height = 820
%}

## Network traffic

Provides insight into how much data has been sent and received. Received data can often by 100x the amount of sent data.

{% include picture.html
	image = "/assets/images/settings/network-traffic.png"
	retina = "/assets/images/settings/network-traffic@2x.png"
	big = "/assets/images/settings/network-traffic-big.png"
	alt-text = "Application screen showing network traffic graphs for incoming and outgoing data"
	width = 800
	height = 820
%}
