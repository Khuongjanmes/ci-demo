const test = require("node:test");
const assert = require("node:assert");
const sum = require("./sum");

test("1 + 2 = 3", () => {
  assert.strictEqual(sum(1, 2), 3);
});
test("2 + 2 = 4", () => {
  assert.strictEqual(sum(2, 2), 4);
});