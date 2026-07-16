---
layout: default
title: Download and test the Bitcoin Core App preview
permalink: /
classes: -home
---

# Test the Bitcoin Core App preview

Bitcoin Core App is an experimental new graphical interface for Bitcoin Core. Download the latest preview, try the current experience, and tell us what works well or gets in your way.

**Experimental signet preview. Do not use it with mainnet funds. These builds are for testing and are not official Bitcoin Core releases.**

<div class="preview-screenshots">
  <img src="{{ '/assets/images/preview-block-status.png' | relative_url }}" alt="Bitcoin Core App block status screen">
  <img src="{{ '/assets/images/preview-activity.png' | relative_url }}" alt="Bitcoin Core App activity screen">
  <img src="{{ '/assets/images/preview-send.png' | relative_url }}" alt="Bitcoin Core App send screen">
</div>

## Download the latest preview

### macOS

[Download for macOS](https://github.com/johnny9/gui-qml-preview-publish/releases/download/latest/Bitcoin-QML-signet-arm64.dmg){:target="_blank"}

### Linux

[Download for Linux](https://github.com/johnny9/gui-qml-preview-publish/releases/download/latest/bitcoin-core-app-signet-x86_64-linux-gnu){:target="_blank"}

[View release details and checksums](https://github.com/johnny9/gui-qml-preview-publish/releases/tag/latest){:target="_blank"}. These permanent links are updated when a newer preview is successfully published.

## Try it and give feedback

A focused test plan will be added later. For now, explore the app and let us know about setup problems, crashes, confusing interactions, or anything that would make the experience better.

- [Join the Bitcoin Core App channel on Discord](https://discord.gg/MQzeVTWgaX){:target="_blank"}
- [Follow the code or report a technical issue on GitHub](https://github.com/bitcoin-core/gui-qml){:target="_blank"}
- [Discuss the design or improve this website on GitHub](https://github.com/BitcoinDesign/Bitcoin-Core-App){:target="_blank"}

## About the project

Bitcoin Core App is a Qt Quick interface being developed openly with the Bitcoin Core and Bitcoin Design communities. The project aims to pair Bitcoin Core with intuitive user flows, accessible interaction, and a first-class visual design.

The preview builds are produced from the [`qt6` branch of bitcoin-core/gui-qml](https://github.com/bitcoin-core/gui-qml/tree/qt6){:target="_blank"}. Build and distribution tooling is available in the [preview publisher repository](https://github.com/johnny9/gui-qml-preview-publish){:target="_blank"}.
