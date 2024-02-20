---
layout: default
title: Display
permalink: /settings/display/
nav_order: 54
indent: true
---

# Display settings

These settings are related to appearance and general interface behavior.

{% include picture.html
	image = "/assets/images/settings/display.png"
	retina = "/assets/images/settings/display@2x.png"
	big = "/assets/images/settings/display-big.png"
	alt-text = "Screen with basic display options"
	width = 800
	height = 712
%}

## Language

The application should match localization to what the operating system provides. It may still be useful to let users choose a different language from the cover screen and settings.

{% include picture.html
	image = "/assets/images/settings/language.png"
	retina = "/assets/images/settings/language@2x.png"
	big = "/assets/images/settings/language-big.png"
	alt-text = "Three screens showing the language picker on the cover screen, on mobile, and in settings"
	width = 800
	height = 336
%}

Languages are shown in the language itself, and in the currently chosen language. Countries/regions are added to language names to differentiate dialects.

A search feature may be helpful if there is a long list of supported languages.

In the dropdown, pressing a keyboard character (when no input elements is selected) can also automatically scroll to the first language that begins with that character, a common behavior in lists.