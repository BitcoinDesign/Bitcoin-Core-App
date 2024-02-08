---
layout: default
title: 1.6 Receive
permalink: /milestones/1-6-receive/
nav_order: 160
header: true
---

# Milestone 1.6: Receive bitcoin

**Status: Early design exploration**

_[Design milestone](https://github.com/BitcoinDesign/Bitcoin-Core-App/milestone/6), [Figma](https://www.figma.com/file/ek8w3n3upbluw5UL2lGhRx/Bitcoin-Core-App-Design?type=design&node-id=7516%3A13172&mode=design&t=sZSBHpOLLJmoMf57-1)_

In this milestone we add features related to receiving. The main focus is on the receive tab, and we also need to display a history of past payment requests and payment request details.

{% include picture.html
	image = "/assets/images/milestones/1-6-receive.png"
	retina = "/assets/images/milestones/1-6-receive@2x.png"
	big = "/assets/images/milestones/1-6-receive-big.png"
	alt-text = "A visual map of which screens will be added in the 1.5 milestone"
	width = 800
	height = 384
%}

At the center is the form to create new payment requests, which generates a new address. One address per transaction is a best practice to improve privacy and for easier identification.

{% include picture.html
	image = "/assets/images/receive/form.png"
	retina = "/assets/images/receive/form@2x.png"
	big = "/assets/images/receive/form-big.png"
	alt-text = "A form to create a new payment request"
	width = 800
	height = 551
%}

Requests are meant to be shared with the payer, so the share options are in focus on the request details screen.

{% include picture.html
	image = "/assets/images/receive/request.png"
	retina = "/assets/images/receive/request@2x.png"
	big = "/assets/images/receive/request-big.png"
	alt-text = "Screen showing details of a single payment request"
	width = 800
	height = 565
%}

All requests the user has created are available in this list screen, along with the status of whether transactions were received on the respective addresses or not.

{% include picture.html
	image = "/assets/images/receive/requests.png"
	retina = "/assets/images/receive/requests@2x.png"
	big = "/assets/images/receive/requests-big.png"
	alt-text = "A list of payment requests the user has created"
	width = 800
	height = 366
%}
