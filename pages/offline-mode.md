---
layout: default
title: Offline mode
permalink: /offline-mode/
nav_order: 207
indent: true
---

# Offline mode 

**Status: Early design exploration**

If the user is offline, the funcationality of various features is impaired across the application. In such cases, the application follows two guiding principle:

1. Clearly indicate the status off the application
1. Offer available options rather than disabling unavailable ones

Here is an example of the send transaction review screen. The send button is replaced with the option of saving a PSBT file. 

{% include picture.html
	image = "/assets/images/offline-mode/offline-review.png"
	retina = "/assets/images/offline-mode/offline-review@2x.png"
	big = "/assets/images/offline-mode/offline-review-big.png"
	alt-text = "Transaction review screen showing a "you're offline" notification"
	width = 800
	height = 551
%}

The same principle is used in different parts of the application, such as the activity and transaction details pages.

{% include picture.html
	image = "/assets/images/offline-mode/offline-sample.png"
	retina = "/assets/images/offline-mode/offline-sample@2x.png"
	big = "/assets/images/offline-mode/offline-sample-big.png"
	alt-text = "Various screens with offline notifications"
	width = 800
	height = 366
%}

Note that this is only a concept so far. None of the ideas have been fully thought through.