# Tokate contribution demo

A small bill-splitting exercise for demonstrating code contributions with [Tokate](https://tokate.dev), based on [AI Outfitter’s playground](https://github.com/ai-outfitter/outfitter-playground).

The starting implementation deliberately loses cents when an amount cannot be divided evenly. For example, splitting $100 among three people produces three $33.33 shares, totaling $99.99. The exercise is to preserve the missing cent and add regression tests. This is educational code, not a payment system.

## Run it

Requires Node.js 20 or newer. There are no package dependencies or installation steps.

```sh
node bin/split.js 100 3
node --test
```

The initial six tests pass because they do not cover uneven splits. A passing baseline therefore does not mean the bug is fixed.

## Contribution task

Preserve every cent when splitting an amount between people. Keep the existing API and input-validation behavior, add tests for uneven splits, and demonstrate that the example totals $100.00 after the change. Keep the work limited to the exercise; do not add dependencies or change automation.

The starter contains no GitHub workflows or Tokate integration. Repository automation is a separate setup step.

## Source and license

Derived from AI Outfitter’s playground at commit [`698281c977f00771c6b5d46ef3db1d0b303dc379`](https://github.com/ai-outfitter/outfitter-playground/tree/698281c977f00771c6b5d46ef3db1d0b303dc379). The source module, command-line example and baseline tests are preserved from that version; this README and the package name are adapted for this repository.

See [AI Outfitter](https://github.com/ai-outfitter) for the project and [LICENSE.md](LICENSE.md) for the original MIT license and attribution. The upstream playground intentionally preserves its bug; improvements belong in this copy.
