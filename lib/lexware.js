'use babel';

import { CompositeDisposable } from 'atom';

export default {
  subscriptions: null,
  activate(state) {
    this.subscriptions = new CompositeDisposable();

//    this.subscriptions.add(atom.commands.add('atom-workspace', {
//      'lexware:insert-Ł': () => atom.workspace.getActiveTextEditor().insertText('Ł'),
//      'lexware:insert-ł': () => atom.workspace.getActiveTextEditor().insertText('ł')
//    }));
    this.subscriptions.add(atom.commands.add('atom-text-editor', {
      // gawk '$0 != "" {print "\x27lexware:insert-" $1 "\x27: () => atom.workspace.getActiveTextEditor().insertText(\x27" $1 "\x27),"}' character_list
      'lexware:insert-ł': () => atom.workspace.getActiveTextEditor().insertText('ł'),
      'lexware:insert-Ł': () => atom.workspace.getActiveTextEditor().insertText('Ł'),
      'lexware:insert-Á': () => atom.workspace.getActiveTextEditor().insertText('Á'),
      'lexware:insert-À': () => atom.workspace.getActiveTextEditor().insertText('À'),
      'lexware:insert-Â': () => atom.workspace.getActiveTextEditor().insertText('Â'),
      'lexware:insert-Ǎ': () => atom.workspace.getActiveTextEditor().insertText('Ǎ'),
      'lexware:insert-Ą': () => atom.workspace.getActiveTextEditor().insertText('Ą'),
      'lexware:insert-Ą́': () => atom.workspace.getActiveTextEditor().insertText('Ą́'),
      'lexware:insert-Ą̀': () => atom.workspace.getActiveTextEditor().insertText('Ą̀'),
      'lexware:insert-á': () => atom.workspace.getActiveTextEditor().insertText('á'),
      'lexware:insert-à': () => atom.workspace.getActiveTextEditor().insertText('à'),
      'lexware:insert-â': () => atom.workspace.getActiveTextEditor().insertText('â'),
      'lexware:insert-ǎ': () => atom.workspace.getActiveTextEditor().insertText('ǎ'),
      'lexware:insert-ą': () => atom.workspace.getActiveTextEditor().insertText('ą'),
      'lexware:insert-ą́': () => atom.workspace.getActiveTextEditor().insertText('ą́'),
      'lexware:insert-ą̀': () => atom.workspace.getActiveTextEditor().insertText('ą̀'),
      'lexware:insert-É': () => atom.workspace.getActiveTextEditor().insertText('É'),
      'lexware:insert-È': () => atom.workspace.getActiveTextEditor().insertText('È'),
      'lexware:insert-Ê': () => atom.workspace.getActiveTextEditor().insertText('Ê'),
      'lexware:insert-Ě': () => atom.workspace.getActiveTextEditor().insertText('Ě'),
      'lexware:insert-Ę': () => atom.workspace.getActiveTextEditor().insertText('Ę'),
      'lexware:insert-Ę́': () => atom.workspace.getActiveTextEditor().insertText('Ę́'),
      'lexware:insert-Ę̀': () => atom.workspace.getActiveTextEditor().insertText('Ę̀'),
      'lexware:insert-é': () => atom.workspace.getActiveTextEditor().insertText('é'),
      'lexware:insert-è': () => atom.workspace.getActiveTextEditor().insertText('è'),
      'lexware:insert-ê': () => atom.workspace.getActiveTextEditor().insertText('ê'),
      'lexware:insert-ě': () => atom.workspace.getActiveTextEditor().insertText('ě'),
      'lexware:insert-ę': () => atom.workspace.getActiveTextEditor().insertText('ę'),
      'lexware:insert-ę́': () => atom.workspace.getActiveTextEditor().insertText('ę́'),
      'lexware:insert-ę̀': () => atom.workspace.getActiveTextEditor().insertText('ę̀'),
      'lexware:insert-Í': () => atom.workspace.getActiveTextEditor().insertText('Í'),
      'lexware:insert-Ì': () => atom.workspace.getActiveTextEditor().insertText('Ì'),
      'lexware:insert-Î': () => atom.workspace.getActiveTextEditor().insertText('Î'),
      'lexware:insert-Ǐ': () => atom.workspace.getActiveTextEditor().insertText('Ǐ'),
      'lexware:insert-Į': () => atom.workspace.getActiveTextEditor().insertText('Į'),
      'lexware:insert-Į́': () => atom.workspace.getActiveTextEditor().insertText('Į́'),
      'lexware:insert-Į̀': () => atom.workspace.getActiveTextEditor().insertText('Į̀'),
      'lexware:insert-í': () => atom.workspace.getActiveTextEditor().insertText('í'),
      'lexware:insert-ì': () => atom.workspace.getActiveTextEditor().insertText('ì'),
      'lexware:insert-î': () => atom.workspace.getActiveTextEditor().insertText('î'),
      'lexware:insert-ǐ': () => atom.workspace.getActiveTextEditor().insertText('ǐ'),
      'lexware:insert-į': () => atom.workspace.getActiveTextEditor().insertText('į'),
      'lexware:insert-į́': () => atom.workspace.getActiveTextEditor().insertText('į́'),
      'lexware:insert-į̀': () => atom.workspace.getActiveTextEditor().insertText('į̀'),
      'lexware:insert-Ó': () => atom.workspace.getActiveTextEditor().insertText('Ó'),
      'lexware:insert-Ò': () => atom.workspace.getActiveTextEditor().insertText('Ò'),
      'lexware:insert-Ô': () => atom.workspace.getActiveTextEditor().insertText('Ô'),
      'lexware:insert-Ǒ': () => atom.workspace.getActiveTextEditor().insertText('Ǒ'),
      'lexware:insert-Ǫ': () => atom.workspace.getActiveTextEditor().insertText('Ǫ'),
      'lexware:insert-Ǫ́': () => atom.workspace.getActiveTextEditor().insertText('Ǫ́'),
      'lexware:insert-Ǫ̀': () => atom.workspace.getActiveTextEditor().insertText('Ǫ̀'),
      'lexware:insert-ó': () => atom.workspace.getActiveTextEditor().insertText('ó'),
      'lexware:insert-ò': () => atom.workspace.getActiveTextEditor().insertText('ò'),
      'lexware:insert-ô': () => atom.workspace.getActiveTextEditor().insertText('ô'),
      'lexware:insert-ǒ': () => atom.workspace.getActiveTextEditor().insertText('ǒ'),
      'lexware:insert-ǫ': () => atom.workspace.getActiveTextEditor().insertText('ǫ'),
      'lexware:insert-ǫ́': () => atom.workspace.getActiveTextEditor().insertText('ǫ́'),
      'lexware:insert-ǫ̀': () => atom.workspace.getActiveTextEditor().insertText('ǫ̀'),
      'lexware:insert-Ú': () => atom.workspace.getActiveTextEditor().insertText('Ú'),
      'lexware:insert-Ù': () => atom.workspace.getActiveTextEditor().insertText('Ù'),
      'lexware:insert-Û': () => atom.workspace.getActiveTextEditor().insertText('Û'),
      'lexware:insert-Ǔ': () => atom.workspace.getActiveTextEditor().insertText('Ǔ'),
      'lexware:insert-Ų': () => atom.workspace.getActiveTextEditor().insertText('Ų'),
      'lexware:insert-Ų́': () => atom.workspace.getActiveTextEditor().insertText('Ų́'),
      'lexware:insert-Ų̀': () => atom.workspace.getActiveTextEditor().insertText('Ų̀'),
      'lexware:insert-ú': () => atom.workspace.getActiveTextEditor().insertText('ú'),
      'lexware:insert-ù': () => atom.workspace.getActiveTextEditor().insertText('ù'),
      'lexware:insert-û': () => atom.workspace.getActiveTextEditor().insertText('û'),
      'lexware:insert-ǔ': () => atom.workspace.getActiveTextEditor().insertText('ǔ'),
      'lexware:insert-ų': () => atom.workspace.getActiveTextEditor().insertText('ų'),
      'lexware:insert-ų́': () => atom.workspace.getActiveTextEditor().insertText('ų́'),
      'lexware:insert-;': () => atom.workspace.getActiveTextEditor().insertText(';'),
    }));
  }
}


/* # LLL
# Ł
atom.commands.add 'atom-text-editor',
  'custom:insert-Ł': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ł')
# ł
atom.commands.add 'atom-text-editor',
  'custom:insert-ł': ->
    atom.workspace.getActiveTextEditor()?.insertText('ł')

# AAA
# Á
atom.commands.add 'atom-text-editor',
  'custom:insert-Á': ->
    atom.workspace.getActiveTextEditor()?.insertText('Á')
# À
atom.commands.add 'atom-text-editor',
  'custom:insert-À': ->
    atom.workspace.getActiveTextEditor()?.insertText('À')
# Â
atom.commands.add 'atom-text-editor',
  'custom:insert-Â': ->
    atom.workspace.getActiveTextEditor()?.insertText('Â')
# Ǎ
atom.commands.add 'atom-text-editor',
  'custom:insert-Ǎ': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ǎ')
# Ą́
atom.commands.add 'atom-text-editor',
  'custom:insert-Ą́': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ą́')
# Ą̀
atom.commands.add 'atom-text-editor',
  'custom:insert-Ą̀': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ą̀')
# á
atom.commands.add 'atom-text-editor',
  'custom:insert-á': ->
    atom.workspace.getActiveTextEditor()?.insertText('á')
# à
atom.commands.add 'atom-text-editor',
  'custom:insert-à': ->
    atom.workspace.getActiveTextEditor()?.insertText('à')
# â
atom.commands.add 'atom-text-editor',
  'custom:insert-â': ->
    atom.workspace.getActiveTextEditor()?.insertText('â')
# ǎ
atom.commands.add 'atom-text-editor',
  'custom:insert-ǎ': ->
    atom.workspace.getActiveTextEditor()?.insertText('ǎ')
# ą
atom.commands.add 'atom-text-editor',
  'custom:insert-ą': ->
    atom.workspace.getActiveTextEditor()?.insertText('ą')
# ą́
atom.commands.add 'atom-text-editor',
  'custom:insert-ą́': ->
    atom.workspace.getActiveTextEditor()?.insertText('ą́')
# ą̀
atom.commands.add 'atom-text-editor',
  'custom:insert-ą̀': ->
    atom.workspace.getActiveTextEditor()?.insertText('ą̀')

# EEE
# É
atom.commands.add 'atom-text-editor',
  'custom:insert-É': ->
    atom.workspace.getActiveTextEditor()?.insertText('É')
# È
atom.commands.add 'atom-text-editor',
  'custom:insert-È': ->
    atom.workspace.getActiveTextEditor()?.insertText('È')
# Ę
atom.commands.add 'atom-text-editor',
  'custom:insert-Ę': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ę')
# Ę́
atom.commands.add 'atom-text-editor',
  'custom:insert-Ę́': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ę́')
# Ę̀
atom.commands.add 'atom-text-editor',
  'custom:insert-Ę̀': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ę̀')
# é
atom.commands.add 'atom-text-editor',
  'custom:insert-é': ->
    atom.workspace.getActiveTextEditor()?.insertText('é')
# è
atom.commands.add 'atom-text-editor',
  'custom:insert-è': ->
    atom.workspace.getActiveTextEditor()?.insertText('è')
# ę
atom.commands.add 'atom-text-editor',
  'custom:insert-ę': ->
    atom.workspace.getActiveTextEditor()?.insertText('ę')
# ę́
atom.commands.add 'atom-text-editor',
  'custom:insert-ę́': ->
    atom.workspace.getActiveTextEditor()?.insertText('ę́')
# ę̀
atom.commands.add 'atom-text-editor',
  'custom:insert-ę̀': ->
    atom.workspace.getActiveTextEditor()?.insertText('ę̀')

# III
# Í
atom.commands.add 'atom-text-editor',
  'custom:insert-Í': ->
    atom.workspace.getActiveTextEditor()?.insertText('Í')
# Ì
atom.commands.add 'atom-text-editor',
  'custom:insert-Ì': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ì')
# Į
atom.commands.add 'atom-text-editor',
  'custom:insert-Į': ->
    atom.workspace.getActiveTextEditor()?.insertText('Į')
# Į́
atom.commands.add 'atom-text-editor',
  'custom:insert-Į́': ->
    atom.workspace.getActiveTextEditor()?.insertText('Į́')
# Į̀
atom.commands.add 'atom-text-editor',
  'custom:insert-Į̀': ->
    atom.workspace.getActiveTextEditor()?.insertText('Į̀')
# í
atom.commands.add 'atom-text-editor',
  'custom:insert-í': ->
    atom.workspace.getActiveTextEditor()?.insertText('í')
# ì
atom.commands.add 'atom-text-editor',
  'custom:insert-ì': ->
    atom.workspace.getActiveTextEditor()?.insertText('ì')
# į
atom.commands.add 'atom-text-editor',
  'custom:insert-į': ->
    atom.workspace.getActiveTextEditor()?.insertText('į')
# į́
atom.commands.add 'atom-text-editor',
  'custom:insert-į́': ->
    atom.workspace.getActiveTextEditor()?.insertText('į́')
# į̀
atom.commands.add 'atom-text-editor',
  'custom:insert-į̀': ->
    atom.workspace.getActiveTextEditor()?.insertText('į̀')

# OOO
# Ó
atom.commands.add 'atom-text-editor',
  'custom:insert-Ó': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ó')
# Ò
atom.commands.add 'atom-text-editor',
  'custom:insert-Ò': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ò')
# Ǫ
atom.commands.add 'atom-text-editor',
  'custom:insert-Ǫ': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ǫ')
# Ǫ́
atom.commands.add 'atom-text-editor',
  'custom:insert-Ǫ́': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ǫ́')
# Ǫ̀
atom.commands.add 'atom-text-editor',
  'custom:insert-Ǫ̀': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ǫ̀')
# ó
atom.commands.add 'atom-text-editor',
  'custom:insert-ó': ->
    atom.workspace.getActiveTextEditor()?.insertText('ó')
# ò
atom.commands.add 'atom-text-editor',
  'custom:insert-': ->
    atom.workspace.getActiveTextEditor()?.insertText('')
# ǫ
atom.commands.add 'atom-text-editor',
  'custom:insert-ǫ': ->
    atom.workspace.getActiveTextEditor()?.insertText('ǫ')
# ǫ́
atom.commands.add 'atom-text-editor',
  'custom:insert-ǫ́': ->
    atom.workspace.getActiveTextEditor()?.insertText('ǫ́')
# ǫ̀
atom.commands.add 'atom-text-editor',
  'custom:insert-ǫ̀': ->
    atom.workspace.getActiveTextEditor()?.insertText('ǫ̀')

# UUU
# Ú
atom.commands.add 'atom-text-editor',
  'custom:insert-Ú': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ú')
# Ù
atom.commands.add 'atom-text-editor',
  'custom:insert-Ù': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ù')
# Ų
atom.commands.add 'atom-text-editor',
  'custom:insert-Ų': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ų')
# Ų́
atom.commands.add 'atom-text-editor',
  'custom:insert-Ų́': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ų́')
# Ų̀
atom.commands.add 'atom-text-editor',
  'custom:insert-Ų̀': ->
    atom.workspace.getActiveTextEditor()?.insertText('Ų̀')
# ú
atom.commands.add 'atom-text-editor',
  'custom:insert-ú': ->
    atom.workspace.getActiveTextEditor()?.insertText('ú')
# ù
atom.commands.add 'atom-text-editor',
  'custom:insert-ù': ->
    atom.workspace.getActiveTextEditor()?.insertText('ù')
# ų
atom.commands.add 'atom-text-editor',
  'custom:insert-ų': ->
    atom.workspace.getActiveTextEditor()?.insertText('ų')
# ų́
atom.commands.add 'atom-text-editor',
  'custom:insert-ų́': ->
    atom.workspace.getActiveTextEditor()?.insertText('ų́')
# ų̀
atom.commands.add 'atom-text-editor',
  'custom:insert-ų̀': ->
    atom.workspace.getActiveTextEditor()?.insertText('ų̀')

*/
