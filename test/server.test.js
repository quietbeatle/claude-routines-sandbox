const { test } = require('node:test');
const assert = require('node:assert');
const { add, subtract } = require('../src/server');

test('add: 1 + 2 = 3', () => {
  assert.strictEqual(add(1, 2), 3);
});

test('subtract: 5 - 3 = 2', () => {
  assert.strictEqual(subtract(5, 3), 2);
});

test('add: handles negative numbers', () => {
  assert.strictEqual(add(-1, -2), -3);
});
