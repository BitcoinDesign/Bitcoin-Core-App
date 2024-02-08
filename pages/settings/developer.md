---
layout: default
title: Developer
permalink: /settings/developer/
nav_order: 60
indent: true
---

# Developer settings

The application can be a helpful assistant for developers, whether they work on Bitcoin Core or software that integrates with it. There is a fine line between features specifically for developers, and ones for more experienced users who prefer precise control and insight. This will likely need to be adjusted over time via usage and feedback.

The mock-ups below include explorations around making bitcoin.conf, settings.json, and debug.log (more about the [Bitcoin Core file system](https://github.com/bitcoin/bitcoin/blob/master/doc/files.md#data-directory-layout)) available in the app with code highlighting and interactivity (e.g. peers are highlighted in logs and can be clicked to navigate to the peer details page).

{% include picture.html
	image = "/assets/images/settings/developer.png"
	retina = "/assets/images/settings/developer@2x.png"
	big = "/assets/images/settings/developer-big.png"
	alt-text = "Four screens with basic developer options and detailed views of configuration and debug files"
	width = 800
	height = 709
%}

These are ideas at the moment, to be adjusted as the project evolves.