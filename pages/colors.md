---
layout: default
title: Colors
permalink: /colors/
classes: -colors
nav_order: 6
---

# Colors

The color scheme is intentionally kept simple. Generally, there are 10 neutral shades that are used for the majority of elements, and 5 colors used for highlights. Minor variations have been added for specific purposes like interactive states and unique components.

The scheme has two variations, for dark and light modes.

<div class="theme-toggle">
	<button class="-active" data-theme="light" aria-label="View light theme" aria-pressed="true">Light</button>
	<button data-theme="dark" aria-label="View dark theme" aria-pressed="false">Dark</button>
</div>

## Primary & accents

Orange is the primary color used to indicate interactive elements. Orange light 1 & 2 are used for interaction states (hover, press). The other colors are used more freely.

<ol class="swatches -primary">
	<li>
		<div class="-orange"></div>
		<div class="copy">
			<p>Orange</p>
			<p class="-light">#F7931A</p>
			<p class="-dark">#F7931A</p>
		</div>
	</li>
	<li>
		<div class="-orange-light-1"></div>
		<div class="copy">
			<p>Orange light 1</p>
			<p class="-light">#FFAD4A</p>
			<p class="-dark">#FFBF72</p>
		</div>
	</li>
	<li>
		<div class="-orange-light-2"></div>
		<div class="copy">
			<p>Orange light 2</p>
			<p class="-light">#FFAD4A</p>
			<p class="-dark">#FFBF72</p>
		</div>
	</li>
	<li>
		<div class="-red"></div>
		<div class="copy">
			<p>Red</p>
			<p class="-light">#F7931A</p>
			<p class="-dark">#F7931A</p>
		</div>
	</li>
	<li>
		<div class="-green"></div>
		<div class="copy">
			<p>Green</p>
			<p class="-light">#F7931A</p>
			<p class="-dark">#F7931A</p>
		</div>
	</li>
	<li>
		<div class="-blue"></div>
		<div class="copy">
			<p>Blue</p>
			<p class="-light">#F7931A</p>
			<p class="-dark">#F7931A</p>
		</div>
	</li>
	<li>
		<div class="-purple"></div>
		<div class="copy">
			<p>Purple</p>
			<p class="-light">#F7931A</p>
			<p class="-dark">#F7931A</p>
		</div>
	</li>
	<li class="-placeholder" />
	<li class="-placeholder" />
</ol>

## Neutrals

<ol class="swatches -neutrals">
	<li>
		<div class="-neutral-9"></div>
		<div class="copy">
			<p>Neutral 9</p>
			<p class="-light">#000000</p>
			<p class="-dark">#FFFFFF</p>
		</div>
	</li>
	<li>
		<div class="-neutral-8"></div>
		<div class="copy">
			<p>Neutral 8</p>
			<p class="-light">#404040</p>
			<p class="-dark">#B0B0B0</p>
		</div>
	</li>
	<li>
		<div class="-neutral-7"></div>
		<div class="copy">
			<p>Neutral 7</p>
			<p class="-light">#777777</p>
			<p class="-dark">#949494</p>
		</div>
	</li>
	<li>
		<div class="-neutral-6"></div>
		<div class="copy">
			<p>Neutral 6</p>
			<p class="-light">#999999</p>
			<p class="-dark">#787878</p>
		</div>
	</li>
	<li>
		<div class="-neutral-5"></div>
		<div class="copy">
			<p>Neutral 5</p>
			<p class="-light">#BBBBBB</p>
			<p class="-dark">#5C5C5C</p>
		</div>
	</li>
	<li>
		<div class="-neutral-4"></div>
		<div class="copy">
			<p>Neutral 4</p>
			<p class="-light">#DEDEDE</p>
			<p class="-dark">#444444</p>
		</div>
	</li>
	<li>
		<div class="-neutral-3"></div>
		<div class="copy">
			<p>Neutral 3</p>
			<p class="-light">#EDEDED</p>
			<p class="-dark">#2D2D2D</p>
		</div>
	</li>
	<li>
		<div class="-neutral-2"></div>
		<div class="copy">
			<p>Neutral 2</p>
			<p class="-light">#F4F4F4</p>
			<p class="-dark">#1A1A1A</p>
		</div>
	</li>
	<li>
		<div class="-neutral-1"></div>
		<div class="copy">
			<p>Neutral 1</p>
			<p class="-light">#F8F8F8</p>
			<p class="-dark">#A1A1A1</p>
		</div>
	</li>
	<li>
		<div class="-neutral-0"></div>
		<div class="copy">
			<p>Neutral 0</p>
			<p class="-light">#FFFFFF</p>
			<p class="-dark">#000000</p>
		</div>
	</li>
	<li class="-placeholder" />
	<li class="-placeholder" />
</ol>

## Confirmations

These are used in the [block clock]({{ '/block-clock/' | relative_url }}) and may potentially be used in future UI additions to represent the number of confirmations a block or transaction has.

<ol class="swatches -confirmations">
	<li>
		<div class="-confirmations-1"></div>
		<div class="copy">
			<p>Confirmations 1</p>
			<p class="-light">#FF1C1C</p>
			<p class="-dark">#FF1C1C</p>
		</div>
	</li>
	<li>
		<div class="-confirmations-2"></div>
		<div class="copy">
			<p>Confirmations 2</p>
			<p class="-light">#ED6E46</p>
			<p class="-dark">#ED6E46</p>
		</div>
	</li>
	<li>
		<div class="-confirmations-3"></div>
		<div class="copy">
			<p>Confirmations 3</p>
			<p class="-light">#EE8847</p>
			<p class="-dark">#EE8847</p>
		</div>
	</li>
	<li>
		<div class="-confirmations-4"></div>
		<div class="copy">
			<p>Confirmations 4</p>
			<p class="-light">#EFA148</p>
			<p class="-dark">#EFA148</p>
		</div>
	</li>
	<li>
		<div class="-confirmations-5"></div>
		<div class="copy">
			<p>Confirmations 5</p>
			<p class="-light">#F0BB49</p>
			<p class="-dark">#F0BB49</p>
		</div>
	</li>
	<li>
		<div class="-confirmations-6"></div>
		<div class="copy">
			<p>Confirmations 6</p>
			<p class="-light">#F1D54A</p>
			<p class="-dark">#F1D54A</p>
		</div>
	</li>
</ol>