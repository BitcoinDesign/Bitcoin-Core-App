---
published: false
layout: default
title: Send form inputs
permalink: /send/send-form-input-fields/
nav_order: 172
indent: true
---

# Send form inputs

**Status: Early design exploration**

Our application uses inline validation checks in many form fields to minimize errors. These checks fall into two categories: warnings and errors.

**Warnings** inform users of potential issues but still allow them to proceed. They encourage informed decisions, such as when a user pastes a legacy address type or sets an unusually low or high transaction fee.

**Errors** block users from proceeding due to invalid or unprocessable inputs, like entering a transaction ID into the address field.

## Address

To improve readability and address verification, the address input field formats bitcoin addresses into chunks of four characters each. 

{% include picture.html
	image = "/assets/images/send/send-inputs-address.png"
	retina = "/assets/images/send/send-inputs-address@2x.png"
	big = "/assets/images/send/send-inputs-address-big.png"
	alt-text = "List of the address input field in different states."
	width = 800
	height = 815
%}

Inline validation checks include:

- Sending to Own/Loaded Wallet: Info - Sending to [Wallet name]
- Legacy Address: Warning - Support for legacy addresses may be deprecated in certain wallets.
- Taproot Address: Warning - Taproot addresses may not be widely supported across wallets or exchanges.
- Lightning address: Error – Cannot pay Lightning invoices.
- Wrong Format: Error – This is not a valid Bitcoin address.
- Potentially more

{% include picture.html
	image = "/assets/images/send/layout-blocks-address.png"
	retina = "/assets/images/send/layout-blocks-address@2x.png"
	big = "/assets/images/send/layout-blocks-address-big.png"
	alt-text = "Layout blocks of the address input component."
	width = 800
	height = 703
%}

## Amount

The transaction amount can be entered in two denominations: bitcoins or Satoshis. Users also have the option to send the full wallet balance. 

{% include picture.html
	image = "/assets/images/send/send-inputs-amount.png"
	retina = "/assets/images/send/send-inputs-amount@2x.png"
	big = "/assets/images/send/send-inputs-amount-big.png"
	alt-text = "List of the address input field in different states."
	width = 800
	height = 627
%}

Inline validation checks include:

- Insufficient Balance: Error – Not enough funds to complete the transaction.
- Full Send: Warning – You are sending your entire balance.
- Potentially more

{% include picture.html
	image = "/assets/images/send/layout-blocks-amount.png"
	retina = "/assets/images/send/layout-blocks-amount@2x.png"
	big = "/assets/images/send/layout-blocks-amount-big.png"
	alt-text = "Layout blocks of the amount input component."
	width = 800
	height = 1034
%}


## Note to self

The note to self is recommended for each transaction. It can have up to 255 characters, as recommended in [BIP-329](https://github.com/bitcoin/bips/blob/master/bip-0329.mediawiki). 

{% include picture.html
	image = "/assets/images/send/send-inputs-note.png"
	retina = "/assets/images/send/send-inputs-note@2x.png"
	big = "/assets/images/send/send-inputs-note-big.png"
	alt-text = "List of the note to self input field in different states."
	width = 800
	height = 418
%}

{% include picture.html
	image = "/assets/images/send/layout-blocks-note.png"
	retina = "/assets/images/send/layout-blocks-note@2x.png"
	big = "/assets/images/send/layout-blocks-note-big.png"
	alt-text = "Layout blocks of the note to self input component."
	width = 800
	height = 808
%}


## Fee selection

The application offers three standard fee options, each corresponding to a different confirmation speed. In rare cases where all three options have the same fee, the fastest option is selected by default.

### Standard fee
{% include picture.html
	image = "/assets/images/send/send-inputs-fee-standard.png"
	retina = "/assets/images/send/send-inputs-fee-standard@2x.png"
	big = "/assets/images/send/send-inputs-fee-standard-big.png"
	alt-text = "List of the fee selection input field in different states."
	width = 800
	height = 507
%}

{% include picture.html
	image = "/assets/images/send/layout-blocks-fees.png"
	retina = "/assets/images/send/layout-blocks-fees@2x.png"
	big = "/assets/images/send/layout-blocks-fees-big.png"
	alt-text = "Layout blocks of the fee selection component."
	width = 800
	height = 561
%}

### Custom fees

Users can enable the custom fee option from the send options dropdown. By default, the custom fee field is pre-filled with the value of the default option in the standard fee selection.

{% include picture.html
	image = "/assets/images/send/send-form-custom-fee.png"
	retina = "/assets/images/send/send-form-custom-fee@2x.png"
	big = "/assets/images/send/send-form-custom-fee-big.png"
	alt-text = "List of the custom fee input field in different states."
	width = 800
	height = 366
%}

Special scenarios may arise when setting custom fees. For example, entering a very low or extremely high fee triggers a warning message, guiding users to make informed choices.

{% include picture.html
	image = "/assets/images/send/send-inputs-fee-custom.png"
	retina = "/assets/images/send/send-inputs-fee-custom@2x.png"
	big = "/assets/images/send/send-inputs-fee-custom-big.png"
	alt-text = "List of the custom fee input field in different states."
	width = 800
	height = 718
%}

Inline validation checks include:

- Low fee: Warning - This is a very low fee. It might result in the transaction never confirming.
- High fee: Warning - You are overpaying by [x] sat/vbyte
- Below confirmation limit: Error - The fee is below confirmation limit
