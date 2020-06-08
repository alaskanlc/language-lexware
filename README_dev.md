# Notes for developer

## Updating

 1. Commit any changes locally, but do not tag and do not push.
 2. Use `apm publish minor` which will:
    * Edit/bump the version number in `package.json`
    * Commit
    * `git push`
    * Create a release with the same version number
    * Notify atom.io about the version upgrade
    
When a User now goes to Prefs -> Updates, they should see the new
version available for updating.

## Characters

List of possible characters:

ł Ł Á À Â Ǎ Ą Ą́ Ą̀ á à â ǎ ą ą́ ą̀ É È Ê Ě Ę Ę́ Ę̀ é è ê ě ę ę́ ę̀ Í Ì Î Ǐ Į
Į́ Į̀ í ì î ǐ į į́ į̀ Ó Ò Ô Ǒ Ǫ Ǫ́ Ǫ̀ ó ò ô ǒ ǫ ǫ́ ǫ̀ Ú Ù Û Ǔ Ų Ų́ Ų̀ ú ù û ǔ ų
ų́ ų̀

