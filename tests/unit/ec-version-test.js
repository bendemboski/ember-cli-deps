import { module, test } from 'qunit';
import { waitForProperty } from 'ember-concurrency';

module('ember-concurrency version test', function() {
  test('ember-concurrency is version specified in package.json', function(assert) {
    assert.ok(waitForProperty);
  });
});
