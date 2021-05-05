import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bought-products', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bought-products');
    assert.ok(route);
  });
});
