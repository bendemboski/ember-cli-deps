# ember-cli-deps

This app includes an addon, `ember-zz-bad-addon`, which has an exact-version runtime dependency of `ember-concurrency@0.8.12`. This app also includes `ember-concurrency@0.8.15` directly. It has one test that verifies that `waitForProperty` exists, which is present in `0.8.15`, but not it `0.8.12`. The test fails, demonstrating that `ember-zz-bad-addon`'s version of `ember-concurrency` is taking precedence of the app's version.

Interestingly, it appears to be tied to the lexographical ordering of the addon names. `ember-aa-bad-addon` is identical to `ember-zz-bad-addon` except it's name, and you can get the tests to pass by:

```
$ yarn remove ember-zz-bad-addon
$ ember install git+https://git@github.com/bendemboski/ember-aa-bad-addon.git
$ ember test
```
