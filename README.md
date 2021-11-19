# Bitcoin Core App design

This repo is for documenting the design process for the [Bitcoin Core GUI QML application](https://github.com/bitcoin-core/gui-qml). It's very early in the process, the goal for the first version is to easily run Bitcoin nodes on any device, especially smart phones. We want to be public about the design process and hope it results in a better application in the end.

## Design source files

- [Main file](https://www.figma.com/file/bUhRNyXqpOgHtLO8Tabj6a/Bitcoin-Core-App-Master?node-id=0%3A1)
- [Working file](https://www.figma.com/file/c1V7b23n0LqRbVJlUkE1mn/Bitcoin-Core-Bosch?node-id=1830%3A608) by [Bosch-0](https://github.com/Bosch-0)
- [Working file](https://www.figma.com/file/kgGu6z89s2A73xpnrtItlD/Bitcoin-Core-Christoph?node-id=2092%3A60274) by [GBKS](https://github.com/gbks)

Explorations will be made in the working files, and merged into the main file once consensus is reached.

## Prototypes

Web prototypes are great for quickly validating designs before investing effort into proper coding. They are especially useful for aspects that are hard to communicate verbally or with static prototypes, like animation and interactive states. Third, they are easy to share and get early feedback from a wider audience.

**Widgets**

[Prototype](https://stupefied-jones-dd209f.netlify.app), [Source](https://github.com/GBKS/bitcoin-core-tng-ui-tests)

Interactive version of the block clock component and secondary widgets. Goal:
- Validate if the block clock dial renders well with realistic data (or if segments get too small)
- Explore animations & interactions

## Super rough project plan proposal

It's helpful to build out an application step-by-step, optimizing each one. This is just a starting point and can be changed as we go along based on user needs.

![Bitcoin Core App major versions](/images/bitcoin-core-app-versions.png)

### Primary long-term goal

To create a user friendly Bitcoin Core GUI targeted at storing and securing a users Bitcoin savings that is backed by their own node. This would also include an optional companion mobile signing app that can be part of a multi-sig setup. 

### Version 1.0: Node runner

Initial goal is to get more people to run nodes on smartphones, by offering a simple, elegant experience. The UI is focused on a highly visual block clock. Functionality is limited, but users should be able to connect other applications to the node.

Notes
- Support Android, iOS, Windows, MacOS, Linux
- Smart recommendation for pruning based on device capabilities
- Smartphone auto-pause when not on wi-fi or plugged-in

### Version 2.0: Wallet

Add full wallet functionality.
