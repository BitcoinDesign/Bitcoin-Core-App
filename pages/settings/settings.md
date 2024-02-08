---
layout: default
title: Settings
permalink: /settings/
nav_order: 53
---

# Settings

The application should be well set up for the user after the onboarding experience. But there may be a need to change settings later, especially minor ones based on personal preference. Settings are also an access points for secondary screens like about, network traffic, and developer options.

{% include picture.html
	image = "/assets/images/settings/settings.png"
	retina = "/assets/images/settings/settings@2x.png"
	big = "/assets/images/settings/settings-big.png"
	alt-text = "Application screen showing various settings"
	width = 800
	height = 667
%}

Several of these screens can be accessed from the cover screen and during the onboarding experience. This requires slight changes to the top navigation bar, and sometimes hiding of specific features. For more, see the individual settings pages:

- [Display]({{ '/settings/display/' | relative_url }})
- [Storage]({{ '/settings/storage/' | relative_url }})
- [Connection]({{ '/settings/connection/' | relative_url }})
- [Peers]({{ '/settings/peers/' | relative_url }})
- [Network]({{ '/settings/network/' | relative_url }})
- [About]({{ '/settings/about/' | relative_url }})
- [Developer]({{ '/settings/developer/' | relative_url }})
