# Bitcoin Core App design

This repo is for documenting the design process for the [Bitcoin Core App](https://github.com/bitcoin-core/gui-qml). It's very early in the process, the goal for the first version is to easily run Bitcoin nodes on any device. We want to be public about the design process and hope it results in a better application in the end.

## Design source files

- [Main file](https://www.figma.com/file/GaCoOSNHB2yMB9ThiDtred/Bitcoin-Core-App-Main?node-id=1035%3A1883)
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

![Cross-platform layouts](/images/cross-platform-layouts.png)

![Bitcoin Core App major versions](/images/bitcoin-core-app-versions.png)

### Version 1.0: Node runner

Initial goal is to set the foundation for a modern UI based on best practices, and to get more people to run nodes across operating systems and device types by offering a simple, elegant experience. The UI is focused on a highly visual block clock. Functionality is limited.

Notes
- Support Linux, macOS, Windows, Android, iOS
- Smart sync recommendations based on device capabilities
- Smartphone auto-pause when not on wi-fi or plugged-in

### Version 2.0: Wallet

Add full wallet functionality.

## Design decisions

As we progress with design and implementation, we make certain decisions to systematically shape the user experience. These are ideally valid long-term and and build on each other, so future work moves higher and higher up and we don't need to regularly question or revisit the foundation. This requires careful thinking and planning. Following are some discussions and decisions we have had.

### Multiple paths for different user types

Oftentimes, application design struggles with the balance of simplicity for regular users with complexity for users who want more control. We can address this by intelligently layering the experience.

1. The application should provide a "happy path" that is simple and convenient and allows all users to quickly get started. Clear explanations that focus on the primary benefits and things to know, reducing options via smart defaults and recommendations, and good support when users get stuck are helpful here.
2. The happy path should allow access to more in-depth settings and options, so users can go deeper IF they want to. These should be fairly easy to access, but also easy to ignore, and not crucial to usage of the primary functions.
3. To provide a great developer experience, certain settings and options should be accessible in a way that does not clutter up or distract the other paths, but allows developers to be effective. It is also helpful for designers to be able to launch an application in a certain state to evaluate the experience.

We can embed this pattern in the basic UI architecture. The specific decisions as to which detail goes where will likely change over time.

### One-size-mostly-fits-all

The initial approach will be to create an experience that works well across operating systems and devices with minimal customization for each. Accomodating certain fundamental differences, like touch input and screen size for mobile devices, will be baked into the design system. Feature detection allows for showing or hiding certain options based on availability, which needs to be considered when laying out user flows and screens. There will be no two different interfaces for desktop and mobile, the goal is to be consistent and smartly adapt to each environment in subtle ways.
