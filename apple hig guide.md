# Human Interface Guidelines

The HIG contains guidance and best practices that can help you design a great experience for any Apple platform.

As you design interfaces for Apple platforms, keep these principles in mind:

#### [Hierarchy](https://developer.apple.com/design/human-interface-guidelines#Hierarchy)

Establish a clear visual hierarchy where controls and interface elements elevate and distinguish the content beneath them.

#### Harmony

(https://developer.apple.com/design/human-interface-guidelines#Harmony)



Align with the concentric design of the hardware and software to create harmony between interface elements, system experiences, and devices.



#### [Consistency](https://developer.apple.com/design/human-interface-guidelines#Consistency)

Adopt platform conventions to maintain a consistent design that continuously adapts across window sizes and displays.

For developer guidance, see [Adopting Liquid Glass](https://developer.apple.com/documentation/TechnologyOverviews/adopting-liquid-glass).

# Typography

Your typographic choices can help you display legible text, convey an information hierarchy, communicate important content, and express your brand or style.

## [Ensuring legibility](https://developer.apple.com/design/human-interface-guidelines/typography#Ensuring-legibility)

**Use font sizes that most people can read easily.** People need to be able to read your content at various viewing distances and under a variety of conditions. Follow the recommended default and minimum text sizes for each platform — for both custom and system fonts — to ensure your text is legible on all devices. Keep in mind that font weight can also impact how easy text is to read. If you use a custom font with a thin weight, aim for larger than the recommended sizes to increase legibility.

| Platform    | Default size | Minimum size |
| ----------- | ------------ | ------------ |
| iOS, iPadOS | 17 pt        | 11 pt        |
| macOS       | 13 pt        | 10 pt        |
| tvOS        | 29 pt        | 23 pt        |
| visionOS    | 17 pt        | 12 pt        |
| watchOS     | 16 pt        | 12 pt        |

**Test legibility in different contexts.** For example, you need to test game text for legibility on each platform on which your game runs. If testing shows that some of your text is difficult to read, consider using a larger type size, increasing contrast by modifying the text or background colors, or using typefaces designed for optimized legibility, like the system fonts.



Increasing text size and adding visible background shapes can help make text easier to read.



**In general, avoid light font weights.** For example, if you’re using system-provided fonts, prefer Regular, Medium, Semibold, or Bold font weights, and avoid Ultralight, Thin, and Light font weights, which can be difficult to see, especially when text is small.

## [Conveying hierarchy](https://developer.apple.com/design/human-interface-guidelines/typography#Conveying-hierarchy)

**Adjust font weight, size, and color as needed to emphasize important information and help people visualize hierarchy.** Be sure to maintain the relative hierarchy and visual distinction of text elements when people adjust text sizes.

**Minimize the number of typefaces you use, even in a highly customized interface.** Mixing too many different typefaces can obscure your information hierarchy and hinder readability, in addition to making an interface feel internally inconsistent or poorly designed.

**Prioritize important content when responding to text-size changes.**Not all content is equally important. When someone chooses a larger text size, they typically want to make the content they care about easier to read; they don’t always want to increase the size of every word on the screen. For example, when people increase text size to read the content in a tabbed window, they don’t expect the tab titles to increase in size. Similarly, in a game, people are often more interested in a character’s dialog than in transient hit-damage values.

Apple provides two typeface families that support an extensive range of weights, sizes, styles, and languages.

**San Francisco (SF)** is a sans serif typeface family that includes the SF Pro, SF Compact, SF Arabic, SF Armenian, SF Georgian, SF Hebrew, and SF Mono variants.

![The phrase 'The quick brown fox jumps over the lazy dog.' shown in the San Francisco Pro font.](https://docs-assets.developer.apple.com/published/e270b0f4e91f523bb7372a39447ad4e4/typography-sanfrancisco%402x.png)

The system also offers SF Pro, SF Compact, SF Arabic, SF Armenian, SF Georgian, and SF Hebrew in rounded variants you can use to coordinate text with the appearance of soft or rounded UI elements, or to provide an alternative typographic voice.

You can download the San Francisco and New York fonts [here](https://developer.apple.com/fonts/).

The system provides the SF and NY fonts in the *variable* font format, which combines different font styles together in one file, and supports interpolation between styles to create intermediate ones.

Note

Variable fonts support *optical sizing*, which refers to the adjustment of different typographic designs to fit different sizes. On all platforms, the system fonts support *dynamic optical sizes*, which merge discrete optical sizes (like Text and Display) and weights into a single, continuous design, letting the system interpolate each glyph or letterform to produce a structure that’s precisely adapted to the point size. With dynamic optical sizes, you don’t need to use discrete optical sizes unless you’re working with a design tool that doesn’t support all the features of the variable font format.

To help you define visual hierarchies and create clear and legible designs in many different sizes and contexts, the system fonts are available in a variety of weights, ranging from Ultralight to Black, and — in the case of SF — several widths, including Condensed and Expanded. Because SF Symbols use equivalent weights, you can achieve precise weight matching between symbols and adjacent text, regardless of the size or style you choose.

![The word 'text' shown in the SF Pro font, repeated in two rows of nine columns each. The rows show upright and italic styles, and the columns show font weights ranging from ultralight to black.](https://docs-assets.developer.apple.com/published/8b07ec795d9ad16c787edb0030018a09/font-weight-sf-pro%402x.png)

Note

[SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) provides a comprehensive library of symbols that integrate seamlessly with the San Francisco system font, automatically aligning with text in all weights and sizes. Consider using symbols when you need to convey a concept or depict an object, especially within text.

The system defines a set of typographic attributes — called text styles — that work with both typeface families. A *text style* specifies a combination of font weight, point size, and leading values for each text size. For example, the *body* text style uses values that support a comfortable reading experience over multiple lines of text, while the *headline* style assigns a font size and weight that help distinguish a heading from surrounding content. Taken together, the text styles form a typographic hierarchy you can use to express the different levels of importance in your content. Text styles also allow text to scale proportionately when people change the system’s text size or make accessibility adjustments, like turning on Larger Text in Accessibility settings.

**Consider using the built-in text styles.** The system-defined text styles give you a convenient and consistent way to convey your information hierarchy through font size and weight. Using text styles with the system fonts also ensures support for Dynamic Type and larger accessibility type sizes (where available), which let people choose the text size that works for them. For guidance, see [Supporting Dynamic Type](https://developer.apple.com/design/human-interface-guidelines/typography#Supporting-Dynamic-Type).

**Modify the built-in text styles if necessary.** System APIs define font adjustments — called *symbolic traits* — that let you modify some aspects of a text style. For example, the bold trait adds weight to text, letting you create another level of hierarchy. You can also use symbolic traits to adjust leading if you need to improve readability or conserve space. For example, when you display text in wide columns or long passages, more space between lines (*loose leading*) can make it easier for people to keep their place while moving from one line to the next. Conversely, if you need to display multiple lines of text in an area where height is constrained — for example, in a list row — decreasing the space between lines (*tight leading*) can help the text fit well. If you need to display three or more lines of text, avoid tight leading even in areas where height is limited. For developer guidance, see [`leading(_:)`](https://developer.apple.com/documentation/SwiftUI/Font/leading(_:)).

Developer note

You can use the constants defined in [`Font.Design`](https://developer.apple.com/documentation/SwiftUI/Font/Design) to access all system fonts — don’t embed system fonts in your app or game. For example, use [`Font.Design.default`](https://developer.apple.com/documentation/SwiftUI/Font/Design/default) to get the system font on all platforms; use [`Font.Design.serif`](https://developer.apple.com/documentation/SwiftUI/Font/Design/serif) to get the New York font.

**If necessary, adjust tracking in interface mockups.** In a running app, the system font dynamically adjusts tracking at every point size. To produce an accurate interface mockup of an interface that uses the variable system fonts, you don’t have to choose a discrete optical size at certain point sizes, but you might need to adjust the tracking. For guidance, see [Tracking values](https://developer.apple.com/design/human-interface-guidelines/typography#Tracking-values).

## [Using custom fonts](https://developer.apple.com/design/human-interface-guidelines/typography#Using-custom-fonts)

**Make sure custom fonts are legible.** People need to be able to read your custom font easily at various viewing distances and under a variety of conditions. While using a custom font, be guided by the recommended minimum font sizes for various styles and weights in [Specifications](https://developer.apple.com/design/human-interface-guidelines/typography#Specifications).

**Implement accessibility features for custom fonts.** System fonts automatically support Dynamic Type (where available) and respond when people turn on accessibility features, such as Bold Text. If you use a custom font, make sure it implements the same behaviors. For developer guidance, see [Applying custom fonts to text](https://developer.apple.com/documentation/SwiftUI/Applying-Custom-Fonts-to-Text). In a Unity-based game, you can use [Apple’s Unity plug-ins](https://github.com/apple/unityplugins) to support Dynamic Type. If the plug-in isn’t appropriate for your game, be sure to let players adjust text size in other ways.

## [Supporting Dynamic Type](https://developer.apple.com/design/human-interface-guidelines/typography#Supporting-Dynamic-Type)

Dynamic Type is a system-level feature in iOS, iPadOS, tvOS, visionOS, and watchOS that lets people adjust the size of visible text on their device to ensure readability and comfort. For related guidance, see [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility).



Mail content at the largest accessibility text size



For a list of available Dynamic Type sizes, see [Specifications](https://developer.apple.com/design/human-interface-guidelines/typography#Specifications). You can also download Dynamic Type size tables in the [Apple Design Resources](https://developer.apple.com/design/resources/) for each platform.

For developer guidance, see [Text input and output](https://developer.apple.com/documentation/SwiftUI/Text-input-and-output). To support Dynamic Type in Unity-based games, use [Apple’s Unity plug-ins](https://github.com/apple/unityplugins).

**Make sure your app’s layout adapts to all font sizes.** Verify that your design scales, and that text and glyphs are legible at all font sizes. On iPhone or iPad, turn on Larger Accessibility Text Sizes in Settings > Accessibility > Display & Text Size > Larger Text, and confirm that your app remains comfortably readable.

**Increase the size of meaningful interface icons as font size increases.** If you use interface icons to communicate important information, make sure they’re easy to view at larger font sizes too. When you use [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols), you get icons that scale automatically with Dynamic Type size changes.

**Keep text truncation to a minimum as font size increases.** In general, aim to display as much useful text at the largest accessibility font size as you do at the largest standard font size. Avoid truncating text in scrollable regions unless people can open a separate view to read the rest of the content. You can prevent text truncation in a label by configuring it to use as many lines as needed to display a useful amount of text. For developer guidance, see [`numberOfLines`](https://developer.apple.com/documentation/UIKit/UILabel/numberOfLines).

**Consider adjusting your layout at large font sizes.** When font size increases in a horizontally constrained context, inline items (like glyphs and timestamps) and container boundaries can crowd text and cause truncation or overlapping. To improve readability, consider using a stacked layout where text appears above secondary items. Multicolumn text can also be less readable at large sizes due to horizontal space constraints. Reduce the number of columns when the font size increases to avoid truncation and enhance readability. For developer guidance, see [`isAccessibilityCategory`](https://developer.apple.com/documentation/UIKit/UIContentSizeCategory/isAccessibilityCategory).

**Maintain a consistent information hierarchy regardless of the current font size.** For example, keep primary elements toward the top of a view even when the font size is very large, so that people don’t lose track of these elements.

## [Platform considerations](https://developer.apple.com/design/human-interface-guidelines/typography#Platform-considerations)

### [iOS, iPadOS](https://developer.apple.com/design/human-interface-guidelines/typography#iOS-iPadOS)

SF Pro is the system font in iOS and iPadOS. iOS and iPadOS apps can also use NY.

### [macOS](https://developer.apple.com/design/human-interface-guidelines/typography#macOS)

SF Pro is the system font in macOS. NY is available for Mac apps built with Mac Catalyst. macOS doesn’t support Dynamic Type.

**When necessary, use dynamic system font variants to match the text in standard controls.** Dynamic system font variants give your text the same look and feel of the text that appears in system-provided controls. Use the variants listed below to achieve a look that’s consistent with other apps on the platform.

| Dynamic font variant                        | API                                                          |
| ------------------------------------------- | ------------------------------------------------------------ |
| Control content                             | [`controlContentFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/controlContentFont(ofSize:)) |
| Label                                       | [`labelFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/labelFont(ofSize:)) |
| Menu                                        | [`menuFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/menuFont(ofSize:)) |
| Menu bar                                    | [`menuBarFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/menuBarFont(ofSize:)) |
| Message                                     | [`messageFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/messageFont(ofSize:)) |
| Palette                                     | [`paletteFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/paletteFont(ofSize:)) |
| Title                                       | [`titleBarFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/titleBarFont(ofSize:)) |
| Tool tips                                   | [`toolTipsFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/toolTipsFont(ofSize:)) |
| Document text (user)                        | [`userFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/userFont(ofSize:)) |
| Monospaced document text (user fixed pitch) | [`userFixedPitchFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/userFixedPitchFont(ofSize:)) |
| Bold system font                            | [`boldSystemFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/boldSystemFont(ofSize:)) |
| System font                                 | [`systemFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/systemFont(ofSize:)) |

### [tvOS](https://developer.apple.com/design/human-interface-guidelines/typography#tvOS)

SF Pro is the system font in tvOS, and apps can also use NY.

### [visionOS](https://developer.apple.com/design/human-interface-guidelines/typography#visionOS)

SF Pro is the system font in visionOS. If you use NY, you need to specify the type styles you want.

visionOS uses bolder versions of the Dynamic Type body and title styles and it introduces Extra Large Title 1 and Extra Large Title 2 for wide, editorial-style layouts. For guidance using vibrancy to indicate hierarchy in text and symbols, see [Materials > visionOS](https://developer.apple.com/design/human-interface-guidelines/materials#visionOS).

**In general, prefer 2D text.** The more visual depth text characters have, the more difficult they can be to read. Although a small amount of 3D text can provide a fun visual element that draws people’s attention, if you’re going to display content that people need to read and understand, prefer using text that has little or no visual depth.

![A screenshot that shows the correct placement of 2D text on a window in visionOS.](https://docs-assets.developer.apple.com/published/b7eca42cb50603b5ae1630781ce6d4c7/visionos-typography-2d-text-correct%402x.png)

![A checkmark in a circle to indicate correct usage.](https://docs-assets.developer.apple.com/published/88662da92338267bb64cd2275c84e484/checkmark%402x.png)

![A screenshot that shows the incorrect placement of 3D text on a window in visionOS.](https://docs-assets.developer.apple.com/published/8568cd71b363e427fb91a874b8c30aa8/visionos-typography-3d-text-incorrect%402x.png)

![An X in a circle to indicate incorrect usage.](https://docs-assets.developer.apple.com/published/209f6f0fc8ad99d9bf59e12d82d06584/crossout%402x.png)

**Make sure text looks good and remains legible when people scale it.** Use a text style that makes the text look good at full scale, then test it for legibility at different scales.

**Maximize the contrast between text and the background of its container.** By default, the system displays text in white, because this color tends to provide a strong contrast with the default system background material, making text easier to read. If you want to use a different text color, be sure to test it in a variety of contexts.

**If you need to display text that’s not on a background, consider making it bold to improve legibility.** In this situation, you generally want to avoid adding shadows to increase text contrast. The current space might not include a visual surface on which to cast an accurate shadow, and you can’t predict the size and density of shadow that would work well with a person’s current Environment.

**Keep text facing people as much as possible.** If you display text that’s associated with a point in space, such as a label for a 3D object, you generally want to use *billboarding* — that is, you want the text to face the wearer regardless of how they or the object move. If you don’t rotate text to remain facing the wearer, the text can become impossible to read because people may view it from the side or a highly oblique angle. For example, imagine a virtual lamp that appears to be on a physical desk with a label anchored directly above it. For the text to remain readable, the label needs to rotate around the y-axis as people move around the desk; in other words, the baseline of the text needs to remain perpendicular to the person’s line of sight.

### [watchOS](https://developer.apple.com/design/human-interface-guidelines/typography#watchOS)

SF Compact is the system font in watchOS, and apps can also use NY. In complications, watchOS uses SF Compact Rounded.

## [Specifications](https://developer.apple.com/design/human-interface-guidelines/typography#Specifications)

### [iOS, iPadOS Dynamic Type sizes](https://developer.apple.com/design/human-interface-guidelines/typography#iOS-iPadOS-Dynamic-Type-sizes)

[xSmall ](https://developer.apple.com/design/human-interface-guidelines/typography#)[Small ](https://developer.apple.com/design/human-interface-guidelines/typography#)[Medium ](https://developer.apple.com/design/human-interface-guidelines/typography#)[Large (default) ](https://developer.apple.com/design/human-interface-guidelines/typography#)[xLarge ](https://developer.apple.com/design/human-interface-guidelines/typography#)[xxLarge ](https://developer.apple.com/design/human-interface-guidelines/typography#)[xxxLarge ](https://developer.apple.com/design/human-interface-guidelines/typography#)

#### [xSmall](https://developer.apple.com/design/human-interface-guidelines/typography#xSmall)

| Style       | Weight   | Size (points) | Leading (points) |
| ----------- | -------- | ------------- | ---------------- |
| Large Title | Regular  | 31            | 38               |
| Title 1     | Regular  | 25            | 31               |
| Title 2     | Regular  | 19            | 24               |
| Title 3     | Regular  | 17            | 22               |
| Headline    | Semibold | 14            | 19               |
| Body        | Regular  | 14            | 19               |
| Callout     | Regular  | 13            | 18               |
| Subhead     | Regular  | 12            | 16               |
| Footnote    | Regular  | 12            | 16               |
| Caption 1   | Regular  | 11            | 13               |
| Caption 2   | Regular  | 11            | 13               |

Point size based on image resolution of 144 ppi for @2x and 216 ppi for @3x designs.

### [iOS, iPadOS larger accessibility type sizes](https://developer.apple.com/design/human-interface-guidelines/typography#iOS-iPadOS-larger-accessibility-type-sizes)

[AX1 ](https://developer.apple.com/design/human-interface-guidelines/typography#)[AX2 ](https://developer.apple.com/design/human-interface-guidelines/typography#)[AX3 ](https://developer.apple.com/design/human-interface-guidelines/typography#)[AX4 ](https://developer.apple.com/design/human-interface-guidelines/typography#)[AX5 ](https://developer.apple.com/design/human-interface-guidelines/typography#)

#### [AX1](https://developer.apple.com/design/human-interface-guidelines/typography#AX1)

| Style       | Weight   | Size (points) | Leading (points) |
| ----------- | -------- | ------------- | ---------------- |
| Large Title | Regular  | 44            | 52               |
| Title 1     | Regular  | 38            | 46               |
| Title 2     | Regular  | 34            | 41               |
| Title 3     | Regular  | 31            | 38               |
| Headline    | Semibold | 28            | 34               |
| Body        | Regular  | 28            | 34               |
| Callout     | Regular  | 26            | 32               |
| Subhead     | Regular  | 25            | 31               |
| Footnote    | Regular  | 23            | 29               |
| Caption 1   | Regular  | 22            | 28               |
| Caption 2   | Regular  | 20            | 25               |

Point size based on image resolution of 144 ppi for @2x and 216 ppi for @3x designs.

### [macOS built-in text styles](https://developer.apple.com/design/human-interface-guidelines/typography#macOS-built-in-text-styles)

| Text style  | Weight  | Size (points) | Line height (points) | Emphasized weight |
| ----------- | ------- | ------------- | -------------------- | ----------------- |
| Large Title | Regular | 26            | 32                   | Bold              |
| Title 1     | Regular | 22            | 26                   | Bold              |
| Title 2     | Regular | 17            | 22                   | Bold              |
| Title 3     | Regular | 15            | 20                   | Semibold          |
| Headline    | Bold    | 13            | 16                   | Heavy             |
| Body        | Regular | 13            | 16                   | Semibold          |
| Callout     | Regular | 12            | 15                   | Semibold          |
| Subheadline | Regular | 11            | 14                   | Semibold          |
| Footnote    | Regular | 10            | 13                   | Semibold          |
| Caption 1   | Regular | 10            | 13                   | Medium            |
| Caption 2   | Medium  | 10            | 13                   | Semibold          |

Point size based on image resolution of 144 ppi for @2x designs.

### [tvOS built-in text styles](https://developer.apple.com/design/human-interface-guidelines/typography#tvOS-built-in-text-styles)

| Text style | Weight  | Size (points) | Leading (points) | Emphasized weight |
| ---------- | ------- | ------------- | ---------------- | ----------------- |
| Title 1    | Medium  | 76            | 96               | Bold              |
| Title 2    | Medium  | 57            | 66               | Bold              |
| Title 3    | Medium  | 48            | 56               | Bold              |
| Headline   | Medium  | 38            | 46               | Bold              |
| Subtitle 1 | Regular | 38            | 46               | Medium            |
| Callout    | Medium  | 31            | 38               | Bold              |
| Body       | Medium  | 29            | 36               | Bold              |
| Caption 1  | Medium  | 25            | 32               | Bold              |
| Caption 2  | Medium  | 23            | 30               | Bold              |

Point size based on image resolution of 72 ppi for @1x and 144 ppi for @2x designs.

### [watchOS Dynamic Type sizes](https://developer.apple.com/design/human-interface-guidelines/typography#watchOS-Dynamic-Type-sizes)

[xSmall ](https://developer.apple.com/design/human-interface-guidelines/typography#)[Small ](https://developer.apple.com/design/human-interface-guidelines/typography#)[Large ](https://developer.apple.com/design/human-interface-guidelines/typography#)[xLarge ](https://developer.apple.com/design/human-interface-guidelines/typography#)[xxLarge ](https://developer.apple.com/design/human-interface-guidelines/typography#)[xxxLarge ](https://developer.apple.com/design/human-interface-guidelines/typography#)

#### [xSmall](https://developer.apple.com/design/human-interface-guidelines/typography#xSmall)

| Style       | Weight   | Size (points) | Leading (points) |
| ----------- | -------- | ------------- | ---------------- |
| Large Title | Regular  | 30            | 32.5             |
| Title 1     | Regular  | 28            | 30.5             |
| Title 2     | Regular  | 24            | 26.5             |
| Title 3     | Regular  | 17            | 19.5             |
| Headline    | Semibold | 14            | 16.5             |
| Body        | Regular  | 14            | 16.5             |
| Caption 1   | Regular  | 13            | 15.5             |
| Caption 2   | Regular  | 12            | 14.5             |
| Footnote 1  | Regular  | 11            | 13.5             |
| Footnote 2  | Regular  | 10            | 12.5             |

### [watchOS larger accessibility type sizes](https://developer.apple.com/design/human-interface-guidelines/typography#watchOS-larger-accessibility-type-sizes)

[AX1 ](https://developer.apple.com/design/human-interface-guidelines/typography#)[AX2 ](https://developer.apple.com/design/human-interface-guidelines/typography#)[AX3 ](https://developer.apple.com/design/human-interface-guidelines/typography#)

#### [AX1](https://developer.apple.com/design/human-interface-guidelines/typography#AX1)

| Style       | Weight   | Size (points) | Leading (points) |
| ----------- | -------- | ------------- | ---------------- |
| Large Title | Regular  | 44            | 46.5             |
| Title 1     | Regular  | 42            | 44.5             |
| Title 2     | Regular  | 34            | 41               |
| Title 3     | Regular  | 24            | 26.5             |
| Headline    | Semibold | 21            | 23.5             |
| Body        | Regular  | 21            | 23.5             |
| Caption 1   | Regular  | 18            | 20.5             |
| Caption 2   | Regular  | 17            | 19.5             |
| Footnote 1  | Regular  | 16            | 18.5             |
| Footnote 2  | Regular  | 15            | 17.5             |

### [Tracking values](https://developer.apple.com/design/human-interface-guidelines/typography#Tracking-values)

#### [iOS, iPadOS, visionOS tracking values](https://developer.apple.com/design/human-interface-guidelines/typography#iOS-iPadOS-visionOS-tracking-values)

[SF Pro ](https://developer.apple.com/design/human-interface-guidelines/typography#)[SF Pro Rounded ](https://developer.apple.com/design/human-interface-guidelines/typography#)[New York ](https://developer.apple.com/design/human-interface-guidelines/typography#)

#### [SF Pro](https://developer.apple.com/design/human-interface-guidelines/typography#SF-Pro)

| Size (points) | Tracking (1/1000 em) | Tracking (points) |
| ------------- | -------------------- | ----------------- |
| 6             | +41                  | +0.24             |
| 7             | +34                  | +0.23             |
| 8             | +26                  | +0.21             |
| 9             | +19                  | +0.17             |
| 10            | +12                  | +0.12             |
| 11            | +6                   | +0.06             |
| 12            | 0                    | 0.0               |
| 13            | -6                   | -0.08             |
| 14            | -11                  | -0.15             |
| 15            | -16                  | -0.23             |
| 16            | -20                  | -0.31             |
| 17            | -26                  | -0.43             |
| 18            | -25                  | -0.44             |
| 19            | -24                  | -0.45             |
| 20            | -23                  | -0.45             |
| 21            | -18                  | -0.36             |
| 22            | -12                  | -0.26             |
| 23            | -4                   | -0.10             |
| 24            | +3                   | +0.07             |
| 25            | +6                   | +0.15             |
| 26            | +8                   | +0.22             |
| 27            | +11                  | +0.29             |
| 28            | +14                  | +0.38             |
| 29            | +14                  | +0.40             |
| 30            | +14                  | +0.40             |
| 31            | +13                  | +0.39             |
| 32            | +13                  | +0.41             |
| 33            | +12                  | +0.40             |
| 34            | +12                  | +0.40             |
| 35            | +11                  | +0.38             |
| 36            | +10                  | +0.37             |
| 37            | +10                  | +0.36             |
| 38            | +10                  | +0.37             |
| 39            | +10                  | +0.38             |
| 40            | +10                  | +0.37             |
| 41            | +9                   | +0.36             |
| 42            | +9                   | +0.37             |
| 43            | +9                   | +0.38             |
| 44            | +8                   | +0.37             |
| 45            | +8                   | +0.35             |
| 46            | +8                   | +0.36             |
| 47            | +8                   | +0.37             |
| 48            | +8                   | +0.35             |
| 49            | +7                   | +0.33             |
| 50            | +7                   | +0.34             |
| 51            | +7                   | +0.35             |
| 52            | +6                   | +0.33             |
| 53            | +6                   | +0.31             |
| 54            | +6                   | +0.32             |
| 56            | +6                   | +0.30             |
| 58            | +5                   | +0.28             |
| 60            | +4                   | +0.26             |
| 62            | +4                   | +0.24             |
| 64            | +4                   | +0.22             |
| 66            | +3                   | +0.19             |
| 68            | +2                   | +0.17             |
| 70            | +2                   | +0.14             |
| 72            | +2                   | +0.14             |
| 76            | +1                   | +0.07             |
| 80            | 0                    | 0                 |
| 84            | 0                    | 0                 |
| 88            | 0                    | 0                 |
| 92            | 0                    | 0                 |
| 96            | 0                    | 0                 |

Not all apps express tracking values as 1/1000 em. Point size based on image resolution of 144 ppi for @2x and 216 ppi for @3x designs.

#### [macOS tracking values](https://developer.apple.com/design/human-interface-guidelines/typography#macOS-tracking-values)

| Size (points) | Tracking (1/1000 em) | Tracking (points) |
| ------------- | -------------------- | ----------------- |
| 6             | +41                  | +0.24             |
| 7             | +34                  | +0.23             |
| 8             | +26                  | +0.21             |
| 9             | +19                  | +0.17             |
| 10            | +12                  | +0.12             |
| 11            | +6                   | +0.06             |
| 12            | 0                    | 0.0               |
| 13            | -6                   | -0.08             |
| 14            | -11                  | -0.15             |
| 15            | -16                  | -0.23             |
| 16            | -20                  | -0.31             |
| 17            | -26                  | -0.43             |
| 18            | -25                  | -0.44             |
| 19            | -24                  | -0.45             |
| 20            | -23                  | -0.45             |
| 21            | -18                  | -0.36             |
| 22            | -12                  | -0.26             |
| 23            | -4                   | -0.10             |
| 24            | +3                   | +0.07             |
| 25            | +6                   | +0.15             |
| 26            | +8                   | +0.22             |
| 27            | +11                  | +0.29             |
| 28            | +14                  | +0.38             |
| 29            | +14                  | +0.40             |
| 30            | +14                  | +0.40             |
| 31            | +13                  | +0.39             |
| 32            | +13                  | +0.41             |
| 33            | +12                  | +0.40             |
| 34            | +12                  | +0.40             |
| 35            | +11                  | +0.38             |
| 36            | +10                  | +0.37             |
| 37            | +10                  | +0.36             |
| 38            | +10                  | +0.37             |
| 39            | +10                  | +0.38             |
| 40            | +10                  | +0.37             |
| 41            | +9                   | +0.36             |
| 42            | +9                   | +0.37             |
| 43            | +9                   | +0.38             |
| 44            | +8                   | +0.37             |
| 45            | +8                   | +0.35             |
| 46            | +8                   | +0.36             |
| 47            | +8                   | +0.37             |
| 48            | +8                   | +0.35             |
| 49            | +7                   | +0.33             |
| 50            | +7                   | +0.34             |
| 51            | +7                   | +0.35             |
| 52            | +6                   | +0.31             |
| 53            | +6                   | +0.33             |
| 54            | +6                   | +0.32             |
| 56            | +6                   | +0.30             |
| 58            | +5                   | +0.28             |
| 60            | +4                   | +0.26             |
| 62            | +4                   | +0.24             |
| 64            | +4                   | +0.22             |
| 66            | +3                   | +0.19             |
| 68            | +2                   | +0.17             |
| 70            | +2                   | +0.14             |
| 72            | +2                   | +0.14             |
| 76            | +1                   | +0.07             |
| 80            | 0                    | 0                 |
| 84            | 0                    | 0                 |
| 88            | 0                    | 0                 |
| 92            | 0                    | 0                 |
| 96            | 0                    | 0                 |

Not all apps express tracking values as 1/1000 em. Point size based on image resolution of 144 ppi for @2x and 216 ppi for @3x designs.

#### [tvOS tracking values](https://developer.apple.com/design/human-interface-guidelines/typography#tvOS-tracking-values)

| Size (points) | Tracking (1/1000 em) | Tracking (points) |
| ------------- | -------------------- | ----------------- |
| 6             | +41                  | +0.24             |
| 7             | +34                  | +0.23             |
| 8             | +26                  | +0.21             |
| 9             | +19                  | +0.17             |
| 10            | +12                  | +0.12             |
| 11            | +6                   | +0.06             |
| 12            | 0                    | 0.0               |
| 13            | -6                   | -0.08             |
| 14            | -11                  | -0.15             |
| 15            | -16                  | -0.23             |
| 16            | -20                  | -0.31             |
| 17            | -26                  | -0.43             |
| 18            | -25                  | -0.44             |
| 19            | -24                  | -0.45             |
| 20            | -23                  | -0.45             |
| 21            | -18                  | -0.36             |
| 22            | -12                  | -0.26             |
| 23            | -4                   | -0.10             |
| 24            | +3                   | +0.07             |
| 25            | +6                   | +0.15             |
| 26            | +8                   | +0.22             |
| 27            | +11                  | +0.29             |
| 28            | +14                  | +0.38             |
| 29            | +14                  | +0.40             |
| 30            | +14                  | +0.40             |
| 31            | +13                  | +0.39             |
| 32            | +13                  | +0.41             |
| 33            | +12                  | +0.40             |
| 34            | +12                  | +0.40             |
| 35            | +11                  | +0.38             |
| 36            | +10                  | +0.37             |
| 37            | +10                  | +0.36             |
| 38            | +10                  | +0.37             |
| 39            | +10                  | +0.38             |
| 40            | +10                  | +0.37             |
| 41            | +9                   | +0.36             |
| 42            | +9                   | +0.37             |
| 43            | +9                   | +0.38             |
| 44            | +8                   | +0.37             |
| 45            | +8                   | +0.35             |
| 46            | +8                   | +0.36             |
| 47            | +8                   | +0.37             |
| 48            | +8                   | +0.35             |
| 49            | +7                   | +0.33             |
| 50            | +7                   | +0.34             |
| 51            | +7                   | +0.35             |
| 52            | +6                   | +0.31             |
| 53            | +6                   | +0.33             |
| 54            | +6                   | +0.32             |
| 56            | +6                   | +0.30             |
| 58            | +5                   | +0.28             |
| 60            | +4                   | +0.26             |
| 62            | +4                   | +0.24             |
| 64            | +4                   | +0.22             |
| 66            | +3                   | +0.19             |
| 68            | +2                   | +0.17             |
| 70            | +2                   | +0.14             |
| 72            | +2                   | +0.14             |
| 76            | +1                   | +0.07             |
| 80            | 0                    | 0                 |
| 84            | 0                    | 0                 |
| 88            | 0                    | 0                 |
| 92            | 0                    | 0                 |
| 96            | 0                    | 0                 |

Not all apps express tracking values as 1/1000 em. Point size based on image resolution of 144 ppi for @2x and 216 ppi for @3x designs.

#### [watchOS tracking values](https://developer.apple.com/design/human-interface-guidelines/typography#watchOS-tracking-values)

[SF Compact ](https://developer.apple.com/design/human-interface-guidelines/typography#)[SF Compact Rounded ](https://developer.apple.com/design/human-interface-guidelines/typography#)

#### [SF Compact](https://developer.apple.com/design/human-interface-guidelines/typography#SF-Compact)

| Size (points) | Tracking (1/1000 em) | Tracking (points) |
| ------------- | -------------------- | ----------------- |
| 6             | +50                  | +0.29             |
| 7             | +30                  | +0.21             |
| 8             | +30                  | +0.23             |
| 9             | +30                  | +0.26             |
| 10            | +30                  | +0.29             |
| 11            | +24                  | +0.26             |
| 12            | +20                  | +0.23             |
| 13            | +16                  | +0.20             |
| 14            | +14                  | +0.19             |
| 15            | +4                   | +0.06             |
| 16            | 0                    | 0.00              |
| 17            | -4                   | -0.07             |
| 18            | -8                   | -0.14             |
| 19            | -12                  | -0.22             |
| 20            | 0                    | 0.00              |
| 21            | -2                   | -0.04             |
| 22            | -4                   | -0.09             |
| 23            | -6                   | -0.13             |
| 24            | -8                   | -0.19             |
| 25            | -10                  | -0.24             |
| 26            | -11                  | -0.28             |
| 27            | -12                  | -0.30             |
| 28            | -12                  | -0.34             |
| 29            | -14                  | -0.38             |
| 30            | -14                  | -0.42             |
| 31            | -15                  | -0.45             |
| 32            | -16                  | -0.50             |
| 33            | -17                  | -0.55             |
| 34            | -18                  | -0.60             |
| 35            | -18                  | -0.63             |
| 36            | -20                  | -0.69             |
| 37            | -20                  | -0.72             |
| 38            | -20                  | -0.74             |
| 39            | -20                  | -0.76             |
| 40            | -20                  | -0.78             |
| 41            | -20                  | -0.80             |
| 42            | -20                  | -0.82             |
| 43            | -20                  | -0.84             |
| 44            | -20                  | -0.86             |
| 45            | -20                  | -0.88             |
| 46            | -20                  | -0.92             |
| 47            | -20                  | -0.94             |
| 48            | -20                  | -0.96             |
| 49            | -21                  | -1.00             |
| 50            | -21                  | -1.03             |
| 51            | -21                  | -1.05             |
| 52            | -21                  | -1.07             |
| 53            | -22                  | -1.11             |
| 54            | -22                  | -1.13             |
| 56            | -22                  | -1.20             |
| 58            | -22                  | -1.25             |
| 60            | -22                  | -1.32             |
| 62            | -22                  | -1.36             |
| 64            | -23                  | -1.44             |
| 66            | -24                  | -1.51             |
| 68            | -24                  | -1.56             |
| 70            | -24                  | -1.64             |
| 72            | -24                  | -1.69             |
| 76            | -25                  | -1.86             |
| 80            | -26                  | -1.99             |
| 84            | -26                  | -2.13             |
| 88            | -26                  | -2.28             |
| 92            | -28                  | -2.47             |
| 96            | -28                  | -2.62             |

Not all apps express tracking values as 1/1000 em. Point size based on image resolution of 144 ppi for @2x designs.

# Boxes

A box creates a visually distinct group of logically related information and components.

![A stylized representation of a group of interface elements within a rounded rectangle. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/6e253271e9888e8d596d1d5b601d90f3/components-box-intro%402x.png)

By default, a box uses a visible border or background color to separate its contents from the rest of the interface. A box can also include a title.

## [Best practices](https://developer.apple.com/design/human-interface-guidelines/boxes#Best-practices)

**Prefer keeping a box relatively small in comparison with its containing view.** As a box’s size gets close to the size of the containing window or screen, it becomes less effective at communicating the separation of grouped content, and it can crowd other content.

**Consider using padding and alignment to communicate additional grouping within a box.** A box’s border is a distinct visual element — adding nested boxes to define subgroups can make your interface feel busy and constrained.

## [Content](https://developer.apple.com/design/human-interface-guidelines/boxes#Content)

**Provide a succinct introductory title if it helps clarify the box’s contents.** The appearance of a box helps people understand that its contents are related, but it might make sense to provide more detail about the relationship. Also, a title can help VoiceOver users predict the content they encounter within the box.

**If you need a title, write a brief phrase that describes the contents.**Use sentence-style capitalization. Avoid ending punctuation unless you use a box in a settings pane, where you append a colon to the title.

## [Platform considerations](https://developer.apple.com/design/human-interface-guidelines/boxes#Platform-considerations)

*No additional considerations for visionOS. Not supported in tvOS or watchOS.*

### [iOS, iPadOS](https://developer.apple.com/design/human-interface-guidelines/boxes#iOS-iPadOS)

By default, iOS and iPadOS use the secondary and tertiary background [colors](https://developer.apple.com/design/human-interface-guidelines/color) in boxes.

### [macOS](https://developer.apple.com/design/human-interface-guidelines/boxes#macOS)

By default, macOS displays a box’s title above it.



# Components

Learn how to use and customize system-defined components to give people a familiar and consistent experience.

![A stylized representation of a music note icon above a movie file suggesting content. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/1a75e676f1223ad613964548da66539f/components-content-thumbnail%402x.png)

Content 

![A stylized representation of a window that's divided into three areas: a toolbar above two side-by-side views, suggesting layout and organization. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/b8637846f4ce333fa4887a2f13b6745b/components-layout-and-organization-thumbnail%402x.png)

Layout and organization 

![A stylized representation of a selected menu item, suggesting menus and actions. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/ba6cd58da1da0b2c4912d84c6a2faad1/components-menus-and-actions-thumbnail%402x.png)

Menus and actions 

![A stylized representation of a window with a sidebar, suggesting navigation and search. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/18aa9aa839df79139b13a39991de4bc5/components-navigation-and-search-thumbnail%402x.png)

Navigation and search 

![A stylized representation of two overlapping windows, the front of which is modal, suggesting presentation. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/43e1b772d19259f1863e020a5b1dc230/components-presentation-thumbnail%402x.png)

Presentation 

![A stylized representation of a calendar in month view, suggesting selection and input. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/ceb7ff28e72c9cce057133752b1b5c90/components-selection-and-input-thumbnail%402x.png)

Selection and input 

![A stylized representation of a spinning indeterminate activity indicator suggesting status. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/aca1ffd3171e8d788a921aa0d0164882/components-status-thumbnail%402x.png)

Status 

![A stylized representation of an iPad frame overlapping a Mac, suggesting system experiences. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/d16cbd4d9229eb0024dc66c6a3629c27/components-system-experiences-thumbnail%402x.png)

System experiences







# Presentation

![A stylized representation of a set of action sheet buttons. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/6936e3b9cc02eb35ddef2d53a4578608/components-action-sheets-thumbnail%402x.png)

Action sheets 

![A stylized representation of an alert mockup that includes a title, description, primary button, and secondary button. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/f15ba6530c0fb7eecfddb378b8057c07/components-alerts-thumbnail%402x.png)

Alerts 

![A stylized representation of a page control with an indicator denoting the active page. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/765106722c45c58a5153e3684b347d0a/components-page-controls-thumbnail%402x.png)

Page controls 

![A stylized representation of a floating panel. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/60a56687d957bbe44ed2ba56050df76e/components-panels-thumbnail%402x.png)

Panels 

![A stylized representation of a popover view. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/709abd92f9c9c39c5fe7b046c350d898/components-popovers-thumbnail%402x.png)

Popovers 

![A stylized representation of a scrollable image view. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/403c502cbbe7b29131f92c30f8206f0b/components-scroll-views-thumbnail%402x.png)

Scroll views 

![A stylized representation of a sheet extending down from the top of a window. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/137c1829c9510aa58ccc8943ba070f70/components-sheets-thumbnail%402x.png)

Sheets 

![A stylized representation of a window with close, minimize, and full-screen buttons. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/1b0523cb9b311b21957da22e2514db70/components-windows-thumbnail%402x.png)

Windows



# Content

![A stylized representation of a bar chart. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/20593a16d5c4198ea88a1a5828dac0d3/components-charts-thumbnail%402x.png)

Charts 

![A stylized representation of a photo. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/69164fb5ae6be90c99c8472e3cb77781/components-image-views-thumbnail%402x.png)

Image views 

![A stylized representation of a field containing text. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/d6a62ee033737b778ecbb32660a7b842/components-text-views-thumbnail%402x.png)

Text views 

# Image views

An image view displays a single image — or in some cases, an animated sequence of images — on a transparent or opaque background.

![A stylized representation of a photo. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/75a4736b08754bbd37dad68ddd0048b9/components-image-view-intro%402x.png)

Within an image view, you can stretch, scale, size to fit, or pin the image to a specific location. Image views are typically not interactive.

## [Best practices](https://developer.apple.com/design/human-interface-guidelines/image-views#Best-practices)

**Use an image view when the primary purpose of the view is simply to display an image.** In rare cases where you might want an image to be interactive, configure a system-provided [button](https://developer.apple.com/design/human-interface-guidelines/buttons) to display the image instead of adding button behaviors to an image view.

**If you want to display an icon in your interface, consider using a symbol or interface icon instead of an image view.** [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols)provides a large library of streamlined, vector-based images that you can render with various colors and opacities. An [icon](https://developer.apple.com/design/human-interface-guidelines/icons) (also called a glyph or template image) is typically a bitmap image in which the nontransparent pixels can receive color. Both symbols and interface icons can use the accent colors people choose.

## [Content](https://developer.apple.com/design/human-interface-guidelines/image-views#Content)

An image view can contain rich image data in various formats, like PNG, JPEG, and PDF. For more guidance, see [Images](https://developer.apple.com/design/human-interface-guidelines/images).

**Take care when overlaying text on images.** Compositing text on top of images can decrease both the clarity of the image and the legibility of the text. To help improve the results, ensure the text contrasts well with the image, and consider ways to make the text object stand out, like adding a text shadow or background layer.

**Aim to use a consistent size for all images in an animated sequence.** When you prescale images to fit the view, the system doesn’t have to perform any scaling. In cases where the system must do the scaling, performance is generally better when all images are the same size and shape.

## [Platform considerations](https://developer.apple.com/design/human-interface-guidelines/image-views#Platform-considerations)

*No additional considerations for iOS or iPadOS.*

### [macOS](https://developer.apple.com/design/human-interface-guidelines/image-views#macOS)



**If your app needs an editable image view, use an image well.** An [image well](https://developer.apple.com/design/human-interface-guidelines/image-wells) is an image view that supports copying, pasting, dragging, and using the Delete key to clear its content.

**Use an image button instead of an image view to make a clickable image.** An [image button](https://developer.apple.com/design/human-interface-guidelines/buttons#Image-buttons) contains an image or icon, appears in a view, and initiates an instantaneous app-specific action.![A stylized representation of a compass icon. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/2a6743c71b9e9fd37d76627f3c792f00/components-web-views-thumbnail%402x.png)

# Text views

A text view displays multiline, styled text content, which can optionally be editable.

![A stylized representation of a field containing text. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/21cb3b13c0de850f2eef9a9c7ec14754/components-text-view-intro%402x.png)

Text views can be any height and allow scrolling when the content extends outside of the view. By default, content within a text view is aligned to the leading edge and uses the system label color. In iOS, iPadOS, and visionOS, if a text view is editable, a keyboard appears when people select the view.

## [Best practices](https://developer.apple.com/design/human-interface-guidelines/text-views#Best-practices)

**Use a text view when you need to display text that’s long, editable, or in a special format.** Text views differ from [text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields) and [labels](https://developer.apple.com/design/human-interface-guidelines/labels) in that they provide the most options for displaying specialized text and receiving text input. If you need to display a small amount of text, it’s simpler to use a label or — if the text is editable — a text field.

**Keep text legible.** Although you can use multiple fonts, colors, and alignments in creative ways, it’s essential to maintain the readability of your content. It’s a good idea to adopt Dynamic Type so your text still looks good if people change text size on their device. Be sure to test your content with accessibility options turned on, such as bold text. For guidance, see [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility) and [Typography](https://developer.apple.com/design/human-interface-guidelines/typography).

**Make useful text selectable.** If a text view contains useful information such as an error message, a serial number, or an IP address, consider letting people select and copy it for pasting elsewhere.

## [Platform considerations](https://developer.apple.com/design/human-interface-guidelines/text-views#Platform-considerations)

*No additional considerations for macOS, visionOS, or watchOS.*

### [iOS, iPadOS](https://developer.apple.com/design/human-interface-guidelines/text-views#iOS-iPadOS)

**Show the appropriate keyboard type.** Several different keyboard types are available, each designed to facilitate a different type of input. To streamline data entry, the keyboard you display when editing a text view needs to be appropriate for the type of content. For guidance, see [Virtual keyboards](https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards).

### [tvOS](https://developer.apple.com/design/human-interface-guidelines/text-views#tvOS)

You can display text in tvOS using a text view. Because text input in tvOS is minimal by design, tvOS uses [text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields) for editable text instead.



# Collections

A collection manages an ordered set of content and presents it in a customizable and highly visual layout.

![A stylized representation of eight image icons, separated into two rows of four. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/8769a85042888c4d649fd21c992b593f/components-collection-view-intro%402x.png)

Generally speaking, collections are ideal for showing image-based content.

## [Best practices](https://developer.apple.com/design/human-interface-guidelines/collections#Best-practices)

**Use the standard row or grid layout whenever possible.** Collections display content by default in a horizontal row or a grid, which are simple, effective appearances that people expect. Avoid creating a custom layout that might confuse people or draw undue attention to itself.

**Consider using a table instead of a collection for text.** It’s generally simpler and more efficient to view and digest textual information when it’s displayed in a scrollable list.

**Make it easy to choose an item.** If it’s too difficult to get to an item in your collection, people will get frustrated and lose interest before reaching the content they want. Use adequate padding around images to keep focus or hover effects easy to see and prevent content from overlapping.

**Add custom interactions when necessary.** By default, people can tap to select, touch and hold to edit, and swipe to scroll. If your app requires it, you can add more gestures for performing custom actions.

**Consider using animations to provide feedback when people insert, delete, or reorder items.** Collections support standard animations for these actions, and you can also use custom animations.

## [Platform considerations](https://developer.apple.com/design/human-interface-guidelines/collections#Platform-considerations)

*No additional considerations for macOS, tvOS, or visionOS. Not supported in watchOS.*

### [iOS, iPadOS](https://developer.apple.com/design/human-interface-guidelines/collections#iOS-iPadOS)

**Use caution when making dynamic layout changes.** The layout of a collection can change dynamically. Be sure any changes make sense and are easy to track. If possible, try to avoid changing the layout while people are viewing and interacting with it, unless it’s in response to an explicit action.



# Labels

A label is a static piece of text that people can read and often copy, but not edit.

![A stylized representation of a text label. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/b428963465f223dd1fdd01779043810c/components-label-intro%402x.png)

Labels display text throughout the interface, in buttons, menu items, and views, helping people understand the current context and what they can do next.

The term *label* refers to uneditable text that can appear in various places. For example:

- Within a button, a label generally conveys what the button does, such as Edit, Cancel, or Send.
- Within many lists, a label can describe each item, often accompanied by a symbol or an image.
- Within a view, a label might provide additional context by introducing a control or describing a common action or task that people can perform in the view.

Developer note

To display uneditable text, SwiftUI defines two components: [`Label`](https://developer.apple.com/documentation/SwiftUI/Label) and [`Text`](https://developer.apple.com/documentation/SwiftUI/Text).

The guidance below can help you use a label to display text. In some cases, guidance for specific components — such as [action buttons](https://developer.apple.com/design/human-interface-guidelines/buttons), [menus](https://developer.apple.com/design/human-interface-guidelines/menus), and [lists and tables](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables) — includes additional recommendations for using text.

## [Best practices](https://developer.apple.com/design/human-interface-guidelines/labels#Best-practices)

**Use a label to display a small amount of text that people don’t need to edit.** If you need to let people edit a small amount of text, use a [text field](https://developer.apple.com/design/human-interface-guidelines/text-fields). If you need to display a large amount of text, and optionally let people edit it, use a [text view](https://developer.apple.com/design/human-interface-guidelines/text-views).

**Prefer system fonts.** A label can display plain or styled text, and it supports Dynamic Type (where available) by default. If you adjust the style of a label or use custom fonts, make sure the text remains legible.

**Use system-provided label colors to communicate relative importance.** The system defines four label colors that vary in appearance to help you give text different levels of visual importance. For additional guidance, see [Color](https://developer.apple.com/design/human-interface-guidelines/color).

| System color     | Example usage                                       | iOS, iPadOS, tvOS, visionOS                                  | macOS                                                        |
| ---------------- | --------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Label            | Primary information                                 | [`label`](https://developer.apple.com/documentation/UIKit/UIColor/label) | [`labelColor`](https://developer.apple.com/documentation/AppKit/NSColor/labelColor) |
| Secondary label  | A subheading or supplemental text                   | [`secondaryLabel`](https://developer.apple.com/documentation/UIKit/UIColor/secondaryLabel) | [`secondaryLabelColor`](https://developer.apple.com/documentation/AppKit/NSColor/secondaryLabelColor) |
| Tertiary label   | Text that describes an unavailable item or behavior | [`tertiaryLabel`](https://developer.apple.com/documentation/UIKit/UIColor/tertiaryLabel) | [`tertiaryLabelColor`](https://developer.apple.com/documentation/AppKit/NSColor/tertiaryLabelColor) |
| Quaternary label | Watermark text                                      | [`quaternaryLabel`](https://developer.apple.com/documentation/UIKit/UIColor/quaternaryLabel) | [`quaternaryLabelColor`](https://developer.apple.com/documentation/AppKit/NSColor/quaternaryLabelColor) |

**Make useful label text selectable.** If a label contains useful information — like an error message, a location, or an IP address — consider letting people select and copy it for pasting elsewhere.

## [Platform considerations](https://developer.apple.com/design/human-interface-guidelines/labels#Platform-considerations)

*No additional considerations for iOS, iPadOS, tvOS, or visionOS.*

### [macOS](https://developer.apple.com/design/human-interface-guidelines/labels#macOS)

Developer note

To display uneditable text in a label, use the [`isEditable`](https://developer.apple.com/documentation/AppKit/NSTextField/isEditable)property of [`NSTextField`](https://developer.apple.com/documentation/AppKit/NSTextField).

### [watchOS](https://developer.apple.com/design/human-interface-guidelines/labels#watchOS)

Date and time text components (shown below on the left) display the current date, the current time, or a combination of both. You can configure a date text component to use a variety of formats, calendars, and time zones. A countdown timer text component (shown below on the right) displays a precise countdown or count-up timer. You can configure a timer text component to display its count value in a variety of formats.



![An illustration of date and time text components on Apple Watch, with the date aligned to the leading edge and the time aligned to the trailing edge.](https://docs-assets.developer.apple.com/published/3cedf27f398b6683c78d37a325f26c33/labels-date-time-text-component%402x.png)Date and time labels





![An illustration of a countdown timer text component on Apple Watch, with the time value at the center.](https://docs-assets.developer.apple.com/published/bc3014364c7bc508ff68d21d79c15441/labels-countdown-timer-text-component%402x.png)Timer label



When you use the system-provided date and timer text components, watchOS automatically adjusts the label’s presentation to fit the available space. The system also updates the content without further input from your app.

Consider using date and timer components in complications. For design guidance, see [Complications](https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/complications); for developer guidance, see [`Text`](https://developer.apple.com/documentation/SwiftUI/Text).



# Lists and tables

Lists and tables present data in one or more columns of rows.

![A stylized representation of a three-row table with header and footer text. The image is tinted red to subtly reflect the red in the original six-color Apple logo.](https://docs-assets.developer.apple.com/published/c3e26d2515ac05cae7aba2704f8640d6/components-lists-and-tables-intro%402x.png)

A table or list can represent data that’s organized in groups or hierarchies, and it can support user interactions like selecting, adding, deleting, and reordering. Apps and games in all platforms can use tables to present content and options; many apps use lists to express an overall information hierarchy and help people navigate it. For example, iOS Settings uses a hierarchy of lists to help people choose options, and several apps — such as Mail in iPadOS and macOS — use a table within a [split view](https://developer.apple.com/design/human-interface-guidelines/split-views).

Sometimes, people need to work with complex data in a multicolumn table or a spreadsheet. Apps that offer productivity tasks often use a table to represent various characteristics or attributes of the data in separate, sortable columns.

## [Best practices](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables#Best-practices)

**Prefer displaying text in a list or table.** A table can include any type of content, but the row-based format is especially well suited to making text easy to scan and read. If you have items that vary widely in size — or you need to display a large number of images — consider using a [collection](https://developer.apple.com/design/human-interface-guidelines/collections) instead.

**Let people edit a table when it makes sense.** People appreciate being able to reorder a list, even if they can’t add or remove items. In iOS and iPadOS, people must enter an edit mode before they can select table items.

**Provide appropriate feedback when people select a list item.** The feedback can vary depending on whether selecting the item reveals a new view or toggles the item’s state. In general, a table that helps people navigate through a hierarchy persistently highlights the selected row to clarify the path people are taking. In contrast, a table that lists options often highlights a row only briefly before adding an image — such as a checkmark — indicating that the item is selected.

## [Content](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables#Content)

**Keep item text succinct so row content is comfortable to read.**Short, succinct text can help minimize truncation and wrapping, making text easier to read and scan. If each item consists of a large amount of text, consider alternatives that help you avoid displaying over-large table rows. For example, you could list item titles only, letting people choose an item to reveal its content in a detail view.

**Consider ways to preserve readability of text that might otherwise get clipped or truncated.** When a table is narrow — for example, if people can vary its width — you want content to remain recognizable and easy to read. Sometimes, an ellipsis in the middle of text can make an item easier to distinguish because it preserves both the beginning and the end of the content.

**Use descriptive column headings in a multicolumn table.** Use nouns or short noun phrases with [title-style capitalization](https://support.apple.com/guide/applestyleguide/c-apsgb744e4a3/web#apdca93e113f1d64), and don’t add ending punctuation. If you don’t include a column heading in a single-column table view, use a label or a header to help people understand the context.

## [Style](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables#Style)

**Choose a table or list style that coordinates with your data and platform.** Some styles use visual details to help communicate grouping and hierarchy or to provide specific experiences. In iOS and iPadOS, for example, the grouped style uses headers, footers, and additional space to separate groups of data; the elliptical style available in watchOS makes items appear as if they’re rolling off a rounded surface as people scroll; and macOS defines a bordered style that uses alternating row backgrounds to help make large tables easier to use. For developer guidance, see [`ListStyle`](https://developer.apple.com/documentation/SwiftUI/ListStyle).

**Choose a row style that fits the information you need to display.** For example, you might need to display a small image in the leading end of a row, followed by a brief explanatory label. Some platforms provide built-in row styles you can use to arrange content in list rows, such as the [`UIListContentConfiguration`](https://developer.apple.com/documentation/UIKit/UIListContentConfiguration-swift.struct) API you can use to lay out content in a list’s rows, headers, and footers in iOS, iPadOS, and tvOS.

## [Platform considerations](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables#Platform-considerations)

### [iOS, iPadOS, visionOS](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables#iOS-iPadOS-visionOS)

**Use an info button only to reveal more information about a row’s content.** An info button — called a *detail disclosure button* when it appears in a list row — doesn’t support navigation through a hierarchical table or list. If you need to let people drill into a list or table row’s subviews, use a disclosure indicator accessory control. For developer guidance, see [`UITableViewCell.AccessoryType.disclosureIndicator`](https://developer.apple.com/documentation/UIKit/UITableViewCell/AccessoryType-swift.enum/disclosureIndicator).



![An illustration of a grouped list of rows. Each list item includes an info button at the trailing end of the row.](https://docs-assets.developer.apple.com/published/fd301d26835e0341b95eaa2027f200f2/info-button-in-list%402x.png)An info button shows details about a list item; it doesn’t support navigation.





![An illustration of a grouped list of rows. Each list item includes a right-pointing chevron at the trailing end of the row.](https://docs-assets.developer.apple.com/published/dcb3678fe458846713b03756ab5e1a28/disclosure-indicator-in-list%402x.png)A disclosure indicator reveals the next level in a hierarchy; it doesn’t show details about the item.



**Avoid adding an index to a table that displays controls — like disclosure indicators — in the trailing ends of its rows.** An *index*typically consists of the letters in an alphabet, displayed vertically at the trailing side of a list. People can jump to a specific section in the list by choosing the index letter that maps to it. Because both the index and elements like disclosure indicators appear on the trailing side of a list, it can be difficult for people to use one element without activating the other.

### [macOS](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables#macOS)

**When it provides value, let people click a column heading to sort a table view based on that column**. If people click the heading of a column that’s already sorted, re-sort the data in the opposite direction.

**Let people resize columns.** Data displayed in a table view often varies in width. People appreciate resizing columns to help them concentrate on different areas or reveal clipped data.

**Consider using alternating row colors in a multicolumn table.**Alternating colors can help people track row values across columns, especially in a wide table.

**Use an outline view instead of a table view to present hierarchical data.** An [outline view](https://developer.apple.com/design/human-interface-guidelines/outline-views) looks like a table view, but includes disclosure triangles for exposing nested levels of data. For example, an outline view might display folders and the items they contain.

### [tvOS](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables#tvOS)

**Confirm that images near a table still look good as each row highlights and slightly increases in size when it becomes focused.**A focused row’s corners can also become rounded, which may affect the appearance of images on either side of it. Account for this effect as you prepare images, and don’t add your own masks to round the corners.

### [watchOS](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables#watchOS)

**When possible, limit the number of rows.** Short lists are easier for people to scan, but sometimes people expect a long list of items. For example, if people subscribe to a large number of podcasts, they might think something’s wrong if they can’t view all their items. You can help make a long list more manageable by listing the most relevant items and providing a way for people to view more.

**Constrain the length of detail views if you want to support vertical page-based navigation.** People use vertical page-based navigation to swipe vertically among the detail items of different list rows. Navigating in this way saves time because people don’t need to return to the list to tap a new detail item, but it works only when detail views are short. If your detail views scroll, people won’t be able to use vertical page-based navigation to swipe among them.