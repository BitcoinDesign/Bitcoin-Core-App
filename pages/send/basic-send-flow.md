---
layout: default
title: Basic send flow
permalink: /send/basic-flow/
nav_order: 171
indent: true
---

# Basic send flow

**Status: Early design exploration**

## Overview

From a user's perspective, the send flow consists of three basic steps:

1. Enter the transaction information
1. Review & sign the transaction
1. Broadcast the transaction to the bitcoin network

## Send form

On the send form users specify the details of the transaction. They can do this in a few different ways:

- Fill out the form manually
- Click on an invoice URI link
- Paste an invoice from the clipboard
- Scan a QR code
- Import the invoice from a file. Either via drag and drop or by selecting a file.

{% include picture.html
	image = "/assets/images/send/send-form-empty.png"
	retina = "/assets/images/send/send-form-empty@2x.png"
	big = "/assets/images/send/send-form-empty-big.png"
	alt-text = "Send screen with everything filled out"
	width = 800
	height = 551
%}

The goal is to keep the primary screen simple and focused for regular transactions, and hide less frequently used options in the menu, accessed easily via the ellipsis button.


{% include picture.html
	image = "/assets/images/send/send-form-menu.png"
	retina = "/assets/images/send/send-form-menu@2x.png"
	big = "/assets/images/send/send-form-menu-big.png"
	alt-text = "Overlay menu with send screen options"
	width = 800
	height = 551
%}

After all the information has been provided, the screen looks like this.

{% include picture.html
	image = "/assets/images/send/send-form-filled.png"
	retina = "/assets/images/send/send-form-filled@2x.png"
	big = "/assets/images/send/send-form-filled-big.png"
	alt-text = "Send screen with everything filled out"
	width = 800
	height = 551
%}

#### Clipboard detection

To make it easier for users to fill out the form, the application automatically detects if payment information is saved on user's clipboard. Specifically, the following types of information are detected: 

1. A full invoice (URI format)
1. A bitcoin address

{% include picture.html
	image = "/assets/images/send/clipboard-detection.png"
	retina = "/assets/images/send/clipboard-detection@2x.png"
	big = "/assets/images/send/clipboard-detection-big.png"
	alt-text = "Send screen with an info message that the user has a bitcoin invoice on their clipboard."
	width = 800
	height = 551
%}

#### Additional information

Payment requests can contain additional information that the recipient wants the sender to know, such as a personal message or their name. Check out the [receive]({{ '/milestones/1-6-receive/' | relative_url }}) page for how this works.

If such information is present in the payment request, it is displayed at the top of the form. Note that the additional information will not be included in the transaction data.

{% include picture.html
	image = "/assets/images/send/additional-information.png"
	retina = "/assets/images/send/additional-information@2x.png"
	big = "/assets/images/send/additional-information-big.png"
	alt-text = "Filled out send screen with a message from the recipient."
	width = 800
	height = 551
%}

Note that when importing a payment request, the address cannot be changed manually.

#### Inline validation & error handling

The application uses inline validation checks in many input fields to reduce errors and alert users to potential unintended consequences. Learn more on the [send form inputs page]({{ '/send/send-form-input-fields/' | relative_url }})


{% include picture.html
	image = "/assets/images/send/validation-errors.png"
	retina = "/assets/images/send/validation-errors@2x.png"
	big = "/assets/images/send/validation-errors-big.png"
	alt-text = "Filled out send screen with a message from the recipient."
	width = 800
	height = 551
%}


## Review transaction

Before the transaction is broadcast, the user has another chance to review it.

{% include picture.html
	image = "/assets/images/send/review-screen.png"
	retina = "/assets/images/send/review-screen@2x.png"
	big = "/assets/images/send/review-screen-big.png"
	alt-text = "Screen showing the transaction details."
	width = 800
	height = 551
%}

{% include picture.html
	image = "/assets/images/send/review-screen-warning.png"
	retina = "/assets/images/send/review-screen-warning@2x.png"
	big = "/assets/images/send/review-screen-warning-big.png"
	alt-text = "Transaction review screen with a warning message."
	width = 800
	height = 551
%}

## Confirmation screen

The confirmation screen informs the user that the transction has been broadcast.

{% include picture.html
	image = "/assets/images/send/send-confirmation.png"
	retina = "/assets/images/send/send-confirmation@2x.png"
	big = "/assets/images/send/send-confirmation-big.png"
	alt-text = "Screen showing a success message."
	width = 800
	height = 551
%}