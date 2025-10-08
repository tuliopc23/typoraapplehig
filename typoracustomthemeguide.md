::::: {#header .pure-menu .pure-menu-horizontal .nav .post-title}
::: gallery
- [All Theme Docs](/doc){#title-bar-feature-btn .pure-menu-link}
:::

# Write Custom Theme for Typora

::: {.section .post-meta}
July 16, 2016 by typora.io
:::
:::::

:::::::::::::::::::: {#pagecontainer .container}
::::::::::::::::::: {#post-content .inner-page}
## Translations

[简体中文](/doc/zh/Write-Custom-Theme/),
[繁體中文](https://pjchender.dev/app/note-typora-custom-theme/),
[日本語](/doc/ja/Write-Custom-Theme/)

## Update -- CSS Variables {#update--css-variables}

Overwriting existing [CSS
Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
is more recommended if you want to define fonts, colors, backgrounds.
Earlier versions of macOS/Safari does not support this, but it is still
much easier to use. Common used ones are:

:::: {.language-css .highlighter-rouge}
::: highlight
``` highlight
:root {
   --bg-color:  #ffffff; /*change background*/
   --text-color: #333333; /*change text color*/
   --md-char-color: #C7C5C5; /*change color of meta characetrs like `*` in markdown */
   --meta-content-color: #5b808d; /*change color of meta contents like image text or link address in markdown */

   --primary-color: #428bca; /* color of primary buttons */
   --primary-btn-border-color: #285e8e;
   --primary-btn-text-color: #fff;

   --window-border: 1px solid #eee; /*border for sidebar, etc*/

   --active-file-bg-color: #eee; /*background color if list item in file tree or file list*/
   --active-file-text-color: inherit;
   --active-file-border-color: #777;

   --side-bar-bg-color: var(--bg-color); /*change background of sidebar*/
   --item-hover-bg-color: rgba(229, 229, 229, 0.59); /*background of control items when hover, like menu in sidebar*/
   --item-hover-text-color: inherit;
   --monospace: monospace; /*monospace font for codes, fences*/
}
```
:::
::::

The variables may change in future, so you [could use DevTools in Typora
to confirm it](#test-in-typora).

## Summary

If you want to write a custom CSS theme for Typora, all you need to do
is:

1.  Create a new css file. The file name **should not include
    capitalised characters or whitespace**, for example:
    `my-typora-theme`{.language-plaintext .highlighter-rouge} is a valid
    file name.

2.  Write the css file.

    We prepared a
    [toolkit](https://github.com/typora/typora-theme-toolkit) for you to
    get started or to do simple testing.

    If you want to write one from scratch, pick the template.less, and
    fill it.

    If you want to convert existing css files (from Wordpress or Jekyll
    theme), just copy the content, and then add styles those css files
    did not cover, like styles for "toc" or for UI components.

3.  Tweak/Debug css classes and styles.

    You could also follow [how to install custom
    theme](/doc/Install-Theme/) to install and use the theme and test it
    with Typora.

    To debug CSS in Typora like in Safari or Chrome, you could enable
    debug mode from help menu (macOS) or from preferences panel
    (macOS/Linux/Windows) and find & click "Inspect Elements" from
    context menu, which will pop up the
    [DevTools](https://developer.chrome.com/devtools) like Safari or
    Chrome browser. On Linux/Windows version, you could toggle it from
    `View`{.language-plaintext .highlighter-rouge} menu or just press
    `F12`{.language-plaintext .highlighter-rouge}.

    You could also put the css file you created into
    toolkit/theme/test.css along with resources like image or font it
    uses. And open html files under toolkit/core and toolkit/electron to
    preview your css. Please preview the html files using Safari on Mac
    or Chrome on Linux/Windows.

4.  If you want to share your theme, just make a fork and make a pull
    request to [Typora Theme
    Gallery](https://github.com/typora/typora-theme-gallery).

## Basic Rules

1.  File naming rule for theme css: Do not use capitalized letters, and
    please replace whitespace with `-`{.language-plaintext
    .highlighter-rouge}, and Typora will convert them to readable label
    in menu item. For example, for
    `my-first-typora-theme.css`{.language-plaintext .highlighter-rouge},
    Typora will put an menu item "My First Typora Theme" under "Themes"
    menu.
2.  Put default font size into `html`{.language-plaintext
    .highlighter-rouge}, then for elements like `h1`{.language-plaintext
    .highlighter-rouge} or `p`{.language-plaintext .highlighter-rouge},
    use `rem`{.language-plaintext .highlighter-rouge} for their
    `font-size`{.language-plaintext .highlighter-rouge} property, or
    else custom font size in preference panel will not work.
3.  Use tag as selectors if possible. For example, for
    `### heading 3`{.language-plaintext .highlighter-rouge}, use
    `h3`{.language-plaintext .highlighter-rouge} instead of
    `h3.md-header`{.language-plaintext .highlighter-rouge}, because for
    any markdown render, "### heading 3" will be converted to
    `h3`{.language-plaintext .highlighter-rouge} tag. And for typora, we
    will keep as less html attributes (including class) as possible just
    like other markdown convertors. You could limit
    `h3`{.language-plaintext .highlighter-rouge} in writing area by
    `#write h3`{.language-plaintext .highlighter-rouge} selector.
4.  Typora is created upon Webkit (on macOS) or Chromium (on
    Windows/Linux), so please use css properties supported by Chrome or
    Safari (aka Webkit).
5.  Some modifications of CSS may cause Typora not to work as expected,
    for example, adding `white-space: pre-wrap;`{.language-plaintext
    .highlighter-rouge} to selector `#write`{.language-plaintext
    .highlighter-rouge} will make `\t`{.language-plaintext
    .highlighter-rouge} cannot be inserted by pressing Tab key, so
    please overwrite default css styles as less as possible, test it
    out.

------------------------------------------------------------------------

Table of Contents:

- [Translations](#translations){#markdown-toc-translations}
- [Update -- CSS
  Variables](#update--css-variables){#markdown-toc-update--css-variables}
- [Summary](#summary){#markdown-toc-summary}
- [Basic Rules](#basic-rules){#markdown-toc-basic-rules}
- [Changes and
  Updates](#changes-and-updates){#markdown-toc-changes-and-updates}
- [Which CSS selector should I
  use?](#which-css-selector-should-i-use){#markdown-toc-which-css-selector-should-i-use}
  - [General](#general){#markdown-toc-general}
  - [Block Elements](#block-elements){#markdown-toc-block-elements}
    - [Lines](#lines){#markdown-toc-lines}
    - [Code Fences](#code-fences){#markdown-toc-code-fences}
    - [Mermaid](#mermaid){#markdown-toc-mermaid}
  - [Inline Elements](#inline-elements){#markdown-toc-inline-elements}
  - [Source Code
    Mode](#source-code-mode){#markdown-toc-source-code-mode}
  - [Focus Mode](#focus-mode){#markdown-toc-focus-mode}
    - [Custom Font](#custom-font){#markdown-toc-custom-font}
  - [Background](#background){#markdown-toc-background}
  - [Controller UI](#controller-ui){#markdown-toc-controller-ui}
  - [Additional UI for
    Windows/Linux](#additional-ui-for-windowslinux){#markdown-toc-additional-ui-for-windowslinux}
  - [Print](#print){#markdown-toc-print}
- [Debug and Test](#debug-and-test){#markdown-toc-debug-and-test}
  - [Test in Browser](#test-in-browser){#markdown-toc-test-in-browser}
  - [Test in Typora](#test-in-typora){#markdown-toc-test-in-typora}
- [Tips and References on custom
  style](#tips-and-references-on-custom-style){#markdown-toc-tips-and-references-on-custom-style}

## Changes and Updates

None

## Which CSS selector should I use?

### General

The window content of Typora is a webpage, so please put
`background`{.language-plaintext .highlighter-rouge},
`font-family`{.language-plaintext .highlighter-rouge} or other general
properties into the `html`{.language-plaintext .highlighter-rouge} tag.
*On mac, if seamless window style is used, then the background color of
the toolbar is defined by the `background-color`{.language-plaintext
.highlighter-rouge} style of the `html`{.language-plaintext
.highlighter-rouge}*.

The writing area is a div with id `#write`{.language-plaintext
.highlighter-rouge}, change the `width`{.language-plaintext
.highlighter-rouge}, `height`{.language-plaintext .highlighter-rouge},
`padding`{.language-plaintext .highlighter-rouge} will adjust the size
of the writing area. The properties you set, for example,
`color`{.language-plaintext .highlighter-rouge} for
`html`{.language-plaintext .highlighter-rouge}, will apply to whole
window content, including UI parts, like the font-color in insert table
dialog, so if you just want to change the style of the writing content
not the UI controller part, you could put them under
`#write`{.language-plaintext .highlighter-rouge} selector.

:::: {.language-css .highlighter-rouge}
::: highlight
``` highlight
/** example **/
html, body {
  background-color: #fefefe; /*background color of the window and titlebar*/
  font-family: helvetica, sans-serif; /*custom font*/
  ...
}

html {
  font-size: 14px; /*default font size*/
}

#write {
  max-width: 90%; /*adjust size of the wriring area*/
  font-size: 1rem; /*basic font size*/
  color: #555; /*basic font color*/
  ...
}
```
:::
::::

Typora will try to render all elements as other output, so, paragraphs
are wrapped by `<p>`{.language-plaintext .highlighter-rouge} tag, lists
are wrapped by `<ul>`{.language-plaintext .highlighter-rouge} or
`<ol>`{.language-plaintext .highlighter-rouge} just like they are parsed
by other Markdown processors, so you could change their styles by
applying css styles to those HTML tags. Also, because of these, css
files created for Wordpress or other static sites would also affect most
styles in typora, therefore you would direct "borrow" css rules from
them, and add missing part or do some adjustment.

### Block Elements

As I wrote, Typora will try to render all elements as other output, for
instance, `<p>`{.language-plaintext .highlighter-rouge} for paragraph,
`<table>`{.language-plaintext .highlighter-rouge} for tables,
`<h1>`{.language-plaintext .highlighter-rouge} for 1st level headings,
etc, so you could change most typesetting by writing styles like:

:::: {.language-css .highlighter-rouge}
::: highlight
``` highlight
p {...}
h1 {...}
table {...}
table th td {...}
table tr:nth-child(2n) td {...}
...
```
:::
::::

You could add `#write`{.language-plaintext .highlighter-rouge} as
ancestor selector to make the style only apply to the writing area,
without affecting control component (For instance, title in some dialogs
may also be wrapped by `h4`{.language-plaintext .highlighter-rouge}
tag).

:::: {.language-css .highlighter-rouge}
::: highlight
``` highlight
/*this will only aplly to h4 in dialogs popped up by typora (just an example)*/
.dialog h4 {...} 

/*this will only apply to h4 inside writing area, which is generated after user input "#### " */
#write h4 {...} 
```
:::
::::

Aslo, all block elements has a `mdtype`{.language-plaintext
.highlighter-rouge} attribute. For example, you could also select
headings by selector `[mdtype="heading"]`{.language-plaintext
.highlighter-rouge}. Possible type includes
`paragraph`{.language-plaintext .highlighter-rouge},
`heading`{.language-plaintext .highlighter-rouge},
`blockquote`{.language-plaintext .highlighter-rouge},
`fences`{.language-plaintext .highlighter-rouge},
`hr`{.language-plaintext .highlighter-rouge},
`def_link`{.language-plaintext .highlighter-rouge},
`def_footnote`{.language-plaintext .highlighter-rouge},
`table`{.language-plaintext .highlighter-rouge},
`meta_block`{.language-plaintext .highlighter-rouge},
`math_block`{.language-plaintext .highlighter-rouge},
`list`{.language-plaintext .highlighter-rouge},
`toc`{.language-plaintext .highlighter-rouge},
`list_item`{.language-plaintext .highlighter-rouge},
`table_row`{.language-plaintext .highlighter-rouge},
`table_cell`{.language-plaintext .highlighter-rouge},
`line`{.language-plaintext .highlighter-rouge}. But in most cases, tag
selector is enough.

  mdtype                                      Output Css Selector                                                 Explanation
  ------------------------------------------- ------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  paragraph                                   p                                                                    
  line                                        .md-line                                                            A paragraph can contain one or more `.md-line`{.language-plaintext .highlighter-rouge}
  heading                                     h1\~h6                                                               
  blockquote                                  blockquote                                                           
  list (unordered list)                       ul li                                                                
  list (ordered list)                         ol li                                                                
  list (task)                                 ul.task-list li. task-list-item                                      
  toc                                         .md-toc                                                             Also refer to \[this doc\]\[toc\]
  fences (before codemirror is initialized)   pre.md-fences.mock-cm                                                
  fences                                      pre.md-fences                                                       please refer to "Code Fences" section
  diagrams                                    pre\[lang='sequence'\], pre\[lang='flow'\], pre\[lang='mermaid'\]   They are special code fences with certain code language.
  hr                                          hr                                                                   
  def_link                                    .md-def-link                                                        with children `.md-def-name`{.language-plaintext .highlighter-rouge}, `.md-def-content`{.language-plaintext .highlighter-rouge}, `.md-def-title`{.language-plaintext .highlighter-rouge}
  def_footnote                                .md-def-footnote                                                    with children `.md-def-name`{.language-plaintext .highlighter-rouge}, `.md-def-content`{.language-plaintext .highlighter-rouge}
  meta_block                                  pre.md-meta-block                                                   content for YAML front matters
  math_block                                  \[mdtype="math_block"\]                                             preview part is `.mathjax-block`{.language-plaintext .highlighter-rouge}, html content is generated via [MathJax](http://www.mathjax.org). TeX editor is powered by [CodeMirror](http://codemirror.net), please refer to "Code Fences" section
  table                                       table thead tbody th tr td                                           

#### Lines

Typora will render hard line break as-is. Therefore, a paragraph may
contain multiple lines split by `\n`{.language-plaintext
.highlighter-rouge}, and `.md-line`{.language-plaintext
.highlighter-rouge} selector is used for each "line" inside a
`<p>`{.language-plaintext .highlighter-rouge}.

#### Code Fences

Syntax highlight is enabled by [CodeMirror](http://codemirror.net)'s
feature. Please refer to [this
doc](https://support.typora.io/Code-Block-Styles) for detail.

#### Mermaid

Examples:
[mermaid.css](https://github.com/knsv/mermaid/blob/master/dist/mermaid.css),
[mermaid.dark.css](https://github.com/knsv/mermaid/blob/master/dist/mermaid.dark.css),
[mermaid.forest.css](https://github.com/knsv/mermaid/blob/master/dist/mermaid.forest.css).

### Inline Elements

Inline elements are also rendered as it is rendered by most markdown
parsers. So following could work:

:::: {.language-css .highlighter-rouge}
::: highlight
``` highlight
strong {
  font-weight: bold;
}
em {..}
code {..}
a {..}
img {..}
mark {..} /*highlight*/
```
:::
::::

An inline elements usually includes a wrapper span, meta syntax, and
output inline element, for example `**strong**`{.language-plaintext
.highlighter-rouge} will be rendered as

:::: {.language-html .highlighter-rouge}
::: highlight
``` highlight
<!--wrapper for strong element-->
<span md-inline="strong" class=""> 
  
  <!--meta syntax for strong element-->
  <span class="md-meta md-before">**</span> 
  
    <!--output for strong element-->
    <strong>
      <!--inner output-->
      <span md-inline="plain">strong</span> 
    </strong>
  
   <!--meta syntax for strong element-->
  <span class="md-meta md-after">**</span>
</span>
```
:::
::::

As you can see, the full part of an inline element is wrapped by a
`span`{.language-plaintext .highlighter-rouge} with an
`md-inline`{.language-plaintext .highlighter-rouge} attribute indicates
the type info of the parse result. Possible attribute includes (some
inline syntax need to be enabled from preference panel):

  `md-inline`{.language-plaintext .highlighter-rouge}   syntax                                                         Output Tag
  ----------------------------------------------------- -------------------------------------------------------------- --------------------------------------------------
  plain                                                 `plain`{.language-plaintext .highlighter-rouge}                `span`{.language-plaintext .highlighter-rouge}
  strong                                                `**strong**`{.language-plaintext .highlighter-rouge}           `strong`{.language-plaintext .highlighter-rouge}
  em                                                    `*em*`{.language-plaintext .highlighter-rouge}                 `em`{.language-plaintext .highlighter-rouge}
  code                                                  `` `code` ``                                                   `code`{.language-plaintext .highlighter-rouge}
  underline                                             `<u>underline</u>`{.language-plaintext .highlighter-rouge}     `u`{.language-plaintext .highlighter-rouge}
  escape                                                `\(`{.language-plaintext .highlighter-rouge}                   `span`{.language-plaintext .highlighter-rouge}
  tag                                                   `<button>`{.language-plaintext .highlighter-rouge}              
  del                                                   `~~del~~`{.language-plaintext .highlighter-rouge}              `del`{.language-plaintext .highlighter-rouge}
  footnote                                              `^1`{.language-plaintext .highlighter-rouge}                   `sup`{.language-plaintext .highlighter-rouge}
  emoji                                                 `:smile:`{.language-plaintext .highlighter-rouge}              `span`{.language-plaintext .highlighter-rouge}
  inline_math                                           `$x^2$`{.language-plaintext .highlighter-rouge}                `span`{.language-plaintext .highlighter-rouge}
  subscript                                             `~sub~`{.language-plaintext .highlighter-rouge}                `sub`{.language-plaintext .highlighter-rouge}
  superscript                                           `^sup^`{.language-plaintext .highlighter-rouge}                `sup`{.language-plaintext .highlighter-rouge}
  linebreak                                             (two whitespace at end of a line)                               
  highlight                                             `==highlight==`{.language-plaintext .highlighter-rouge}        `mark`{.language-plaintext .highlighter-rouge}
  url                                                   `http://typora.io`{.language-plaintext .highlighter-rouge}     `a`{.language-plaintext .highlighter-rouge}
  autolink                                              `<http://typora.io>`{.language-plaintext .highlighter-rouge}   `a`{.language-plaintext .highlighter-rouge}
  link                                                  `[link](href)`{.language-plaintext .highlighter-rouge}         `a`{.language-plaintext .highlighter-rouge}
  reflink                                               `[link][ref]`{.language-plaintext .highlighter-rouge}          `a`{.language-plaintext .highlighter-rouge}
  image                                                 `![img](src)`{.language-plaintext .highlighter-rouge}          `img`{.language-plaintext .highlighter-rouge}
  refimg                                                `![img][ref]`{.language-plaintext .highlighter-rouge}          `img`{.language-plaintext .highlighter-rouge}

Following are explanations about how Typora style inline markdown syntax
such as `*`{.language-plaintext .highlighter-rouge} or
`_`{.language-plaintext .highlighter-rouge}, which is hidden in most
cases in Typora. Usually you do not need to set CSS rules for them
specifically.

Meta syntax like `**`{.language-plaintext .highlighter-rouge} or
`==`{.language-plaintext .highlighter-rouge} of those inline elements
will disappear when you convert a markdown file to HTML. So they are
wrapped by class `md-meta`{.language-plaintext .highlighter-rouge} and
has style `display:none`{.language-plaintext .highlighter-rouge} by
default. Some syntax like the markdown syntax for image will also be
hidden by default, and they are wrapped by
`md-content`{.language-plaintext .highlighter-rouge} class. When the
cursor is inside those inline elements, the focused one will be wrapped
by `md-expand`{.language-plaintext .highlighter-rouge} class, then
`.md-meta`{.language-plaintext .highlighter-rouge} and
`.md-content`{.language-plaintext .highlighter-rouge} will become
visible. So, apply styles to `.md-meta`{.language-plaintext
.highlighter-rouge} and `.md-content`{.language-plaintext
.highlighter-rouge} if you want to modify the style of those meta
syntax.

### Source Code Mode

SourceCode Mode is also powered by [CodeMirror](http://codemirror.net),
so the class it uses for syntax highlight is same as code fences
([detail here](https://support.typora.io/Code-Block-Styles)). Please
note that code fences use codemirror theme
`.cm-s-inner`{.language-plaintext .highlighter-rouge}, while in source
code mode, codemirror theme is
`.cm-s-typora-default`{.language-plaintext .highlighter-rouge}. So the
CSS is like:

:::: {.language-css .highlighter-rouge}
::: highlight
``` highlight
.cm-s-typora-default .cm-header {
  /*styles for h1~h6 in source code mode*/
}
```
:::
::::

### Focus Mode

For this topic, please refer to [this
doc](https://support.typora.io/Change-Styles-in-Focus-Mode/)

#### Custom Font

For this topic, please refer to [this
doc](https://support.typora.io/Custom-Font/).

### Background

For this topic, please refer to [this
doc](https://support.typora.io/Backgound/).

### Controller UI

Most UI components including tooltip, dialog and buttons are painted by
HTML. And you only need to change those part when you find the UI
components are incompatible with your editor theme after finishing steps
above. HTML files from the
[toolkit](https://github.com/typora/typora-theme-toolkit) includes most
common UI components for you to easily debug.

### Additional UI for Windows/Linux

The Windows/Linux version of typora use much more HTML-powered
components than macOS version, including context menu, preference panel,
and even window frame itself if you use "unibody" window style on
Windows.

HTML files from the
[toolkit](https://github.com/typora/typora-theme-toolkit) could include
most common UI components for you to easily debug.

### Print

Write css inside following block will make them only change the style of
printed one or exported PDF.

:::: {.language-css .highlighter-rouge}
::: highlight
``` highlight
@media print {
    /* for example: */
    .typora-export * {
        -webkit-print-color-adjust: exact;
    }
    /* add styles here */
}
```
:::
::::

## Debug and Test

### Test in Browser

We provide some html files under `html-preview`{.language-plaintext
.highlighter-rouge} folder from the
[toolkit](https://github.com/typora/typora-theme-toolkit) to preview
your theme from Safari or Chrome. To use them, please rename and put
your css file into `html-preview/theme/test.css`{.language-plaintext
.highlighter-rouge}.

### Test in Typora

Follow [this doc](/doc/Install-Theme/) to learn about how to install a
theme into Typora.

Then for mac users, check `enable debug mode`{.language-plaintext
.highlighter-rouge} from help menu, then click "Inspect Element" from
context menu to pop up DevTools.

For Windows/Linux users, you could pop up the DevTools from
`Toggle DevTools`{.language-plaintext .highlighter-rouge} from view
menu.

## Tips and References on custom style

Related documents are [here](http://support.typora.io/style).

Please make a pull request to
[typora-wiki-site](https://github.com/typora/wiki-website) if you have
some tips to share.
:::::::::::::::::::
::::::::::::::::::::

hosted on [GitHub](https://github.com/typora/typora-theme-gallery).
