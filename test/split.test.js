import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { split, formatDollars } from "../src/split.js";

test("splits an even amount equally", () => {
  assert.deepEqual(split(90, 3), [30, 30, 30]);
});

test("splits between two people", () => {
  assert.deepEqual(split(25.5, 2), [12.75, 12.75]);
});

test("one person pays the whole bill", () => {
  assert.deepEqual(split(42.42, 1), [42.42]);
});

test("assigns leftover cents to the first people in order", () => {
  assert.deepEqual(split(100, 3), [33.34, 33.33, 33.33]);
  assert.deepEqual(split(0.01, 3), [0.01, 0, 0]);
  assert.deepEqual(split(10, 6), [1.67, 1.67, 1.67, 1.67, 1.66, 1.66]);
});

test("splits a zero amount", () => {
  assert.deepEqual(split(0, 3), [0, 0, 0]);
});

test("preserves cents for every whole-cent amount up to 1000 dollars and 1 to 100 people", () => {
  for (let cents = 0; cents <= 100000; cents++) {
    for (let people = 1; people <= 100; people++) {
      const shares = split(cents / 100, people);
      assert.equal(shares.length, people);
      let total = 0;
      let min = Infinity;
      let max = -Infinity;
      for (const share of shares) {
        const shareCents = Math.round(share * 100);
        if (!Number.isFinite(share) || share < 0 || share !== shareCents / 100) {
          assert.fail(`invalid share for ${cents} cents and ${people} people`);
        }
        total += shareCents;
        min = Math.min(min, shareCents);
        max = Math.max(max, shareCents);
      }
      assert.equal(total, cents);
      assert.ok(max - min <= 1);
    }
  }
});

test("CLI prints all shares and the full total for 100 dollars and 3 people", () => {
  const result = spawnSync(process.execPath, [fileURLToPath(new URL("../bin/split.js", import.meta.url)), "100", "3"], {
    encoding: "utf8",
  });
  assert.equal(result.status, 0);
  assert.equal(result.stderr, "");
  assert.equal(result.stdout, "person 1: $33.34\nperson 2: $33.33\nperson 3: $33.33\ntotal:    $100.00\n");
});

test("rejects a negative amount", () => {
  assert.throws(() => split(-5, 2), RangeError);
});

test("rejects a non-integer number of people", () => {
  assert.throws(() => split(10, 2.5), RangeError);
  assert.throws(() => split(10, 0), RangeError);
});

test("formats dollars with two decimals", () => {
  assert.equal(formatDollars(12.5), "$12.50");
});
