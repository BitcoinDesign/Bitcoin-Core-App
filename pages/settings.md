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

Shows other nodes the application is connected to. Provides users a detailed understanding of what is happening under the hood of the block clock. The sorting buttons also define what detail is shown in each peer item, based on what is relevant for the selected filter.

{% include picture.html
	image = "/assets/images/settings/peers.png"
	retina = "/assets/images/settings/peers@2x.png"
	big = "/assets/images/settings/peers-big.png"
	alt-text = "Application screen showing network traffic graphs for incoming and outgoing data"
	width = 800
	height = 820
%}

Tapping a peer reveals all the details in a new screen. The information is split up into categories. In addition to showing the value of each field, an evaluation is shown whenever possible to help users understand and act on the data.

Below is a first draft. The details should be refined over time and with practical input from users who closely work with this data. Users should be able to easily understand whether this connection is helpful to them, the peer, and the network.

{% include picture.html
	image = "/assets/images/settings/peer-details.png"
	retina = "/assets/images/settings/peer-details@2x.png"
	big = "/assets/images/settings/peer-details-big.png"
	alt-text = "Application screen showing detailed information about a single connected peer"
	width = 800
	height = 904
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
