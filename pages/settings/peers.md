---
layout: default
title: Peers
permalink: /peers/
nav_order: 57
indent: true
---

# Peers

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
