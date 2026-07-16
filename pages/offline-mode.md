---
layout: default
title: Offline mode
permalink: /offline-mode/
nav_order: 207
indent: true
---

# Offline mode 

**Status: Early design exploration**

When the user is disconnected from the internet, many features throughout the application will have limited or impaired functionality. To ensure a smooth and intuitive user experience during offline periods, the app follows two key principles:

1. Clearly communicate the offline status to avoid confusion about which features are available or limited.
1. Instead of disabling features outright, provide alternative options that the user can access while offline.

For instance, on the transaction review screen, the typical send button is replaced by an option to save a partially signed Bitcoin transaction (PSBT) file. This allows users to prepare transactions offline and broadcast them later when connectivity is restored. 

{% include picture.html
	image = "/assets/images/offline-mode/offline-review.png"
	retina = "/assets/images/offline-mode/offline-review@2x.png"
	big = "/assets/images/offline-mode/offline-review-big.png"
	alt-text = "Transaction review screen showing a notification"
	width = 800
	height = 551
%}

This design approach is similarly applied to other key app areas, such as the activity and transaction details pages, where users are notified of the offline status and guided toward available actions they can take without an internet connection.

{% include picture.html
	image = "/assets/images/offline-mode/offline-sample.png"
	retina = "/assets/images/offline-mode/offline-sample@2x.png"
	big = "/assets/images/offline-mode/offline-sample-big.png"
	alt-text = "Various screens with offline notifications"
	width = 800
	height = 366
%}

Note that this concept is still in an early exploratory phase. The implementation details and user flows are being refined and have yet to be finalized.