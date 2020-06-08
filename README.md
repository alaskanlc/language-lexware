# language-lexware

_Atom text editor package for Lexware files, providing syntax coloring
and key-bindings for Dene Athabascan languages_

## Installation

In the Atom text editor, Open Preferences, click “Install” and search
for `lexware`.  Click the Install button on `language-lexware`.

This language package should be automatically activated when you open
(or save) a file with an extension of `.lw` (preferred for Lexware),
`.lexware` or `.lex` (not preferred: clashes with the `.lex` extension
of `lex`/`flex` parsers). You can also select language in Atom via the
chooser launched with `Cntl-Shft-L`.

## Features

Basic **syntax coloring** is provided. Please add an issue at
<https://github.com/alaskanlc/language-lexware/issues> if you would
like new coloration for bands.

**Comments**: A chunk of text can be ‘commented out’ using the `#`
character at the beginning of a line: highlight the block and type
`Ctrl-/`. Comments can used either for the author’s notes, or for
temporarily excluding a block of text from the validator and
dictionary processor.

**Key bindings**: Press the `alt` modifier key, plus one to two
“character class” keys, plus the Latin character you want altered:

```
  alt b l      ->  ł 

  alt / a      ->  á   ... also for: A, E, e, I, i, O, o, U, u
  alt \ a      ->  à   ... also for: A, E, e, I, i, O, o, U, u
  alt ^ a      ->  â   ... also for: A, E, e, I, i, O, o, U, u
  alt v a      ->  ǎ   ... also for: A, E, e, I, i, O, o, U, u
  alt o a      ->  ą   ... also for: A, E, e, I, i, O, o, U, u
  alt o / a    ->  ą́   ... also for: A, E, e, I, i, O, o, U, u
  alt o \ a    ->  ą̀   ... also for: A, E, e, I, i, O, o, U, u
```
