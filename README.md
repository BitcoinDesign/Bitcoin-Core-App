# Bitcoin Core App design

This repo is for documenting the design process for the [Bitcoin Core GUI QML application](https://github.com/bitcoin-core/gui-qml). It's very early in the process, the short-term goal is to create an app to easily run a Bitcoin node on any device, especially smart phones. Long-term, our goal is to create a user friendly Bitcoin Core app targeted at storing and securing a users Bitcoin savings that is backed by a users own node.

We want to be public about the design process and hope it results in a better application in the end.

## Design source file

- [Main file](https://www.figma.com/file/GaCoOSNHB2yMB9ThiDtred/Bitcoin-Core-App-Main?node-id=1035%3A1883)

Explorations will be made in the working pages within the main file. Finalized designs will be merged into the master pages once consensus is reached. [Bosch](https://github.com/Bosch-0) and [GBKS](https://github.com/gbks) are the current active designers, reach out to them if you would like to contribute.

The design system for this project can be found within the [design system page](https://www.figma.com/file/GaCoOSNHB2yMB9ThiDtred/?node-id=1%3A3) within the main file.

## Prototypes

Web prototypes are great for quickly validating designs before investing effort into proper coding. They are especially useful for aspects that are hard to communicate verbally or with static prototypes, like animation and interactive states. Third, they are easy to share and get early feedback from a wider audience.

**Widgets**

[Prototype](https://stupefied-jones-dd209f.netlify.app), [Source](https://github.com/GBKS/bitcoin-core-tng-ui-tests)

Interactive version of the block clock component and secondary widgets. Goal:
- Validate if the block clock dial renders well with realistic data (or if segments get too small)
- Explore animations & interactions

## Super rough project plan proposal

It's helpful to build out an application step-by-step, optimizing each one. This is just a starting point and can be changed as we go along based on user needs.

![Cross-platform layouts](/images/cross-platform-layouts.png)

![Bitcoin Core App major versions](/images/bitcoin-core-app-versions.png)

### Version 1.0: Node runner

Initial goal is to set the foundation for a modern UI based on best practices, and to get more people to run nodes across operating systems and device types by offering a simple, elegant experience. The UI is focused on a highly visual block clock. Functionality is limited.

Notes
- Support Linux, macOS, Windows, Android, iOS
- Smart sync recommendations based on device capabilities
- Smartphone auto-pause when not on wi-fi or plugged-in

### Version 2.0: Wallet (TBA)

Add full wallet functionality.
