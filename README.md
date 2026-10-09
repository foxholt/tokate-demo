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

## Tokate participation

Each contribution requires an approved issue and a grant for that donor on that issue. The policy permits Codex with `gpt-6.1-sol` at `high` or `xhigh` effort, caps coding plus verification at 30 minutes, and keeps project commands offline. Donors use their own model accounts; this repository contains no model credentials.

Verification runs `node --test`, both locally and in the read-only `verify` GitHub Actions job. The coordinator is pinned to Tokate 0.3.5 by source commit and release archive checksum. It can close pull requests that do not have current Tokate authorization; request access before submitting a contribution. Maintainers review and merge changes after CI passes.

See the [Tokate donor guide](https://github.com/obselate/tokate/blob/06092f3428114677961435db7a12a04de2aff748/docs/donors.md) for the contribution flow.

## Source and license

Derived from AI Outfitter’s playground at commit [`698281c977f00771c6b5d46ef3db1d0b303dc379`](https://github.com/ai-outfitter/outfitter-playground/tree/698281c977f00771c6b5d46ef3db1d0b303dc379). The source module, command-line example and baseline tests are preserved from that version; this README and the package name are adapted for this repository.

See [AI Outfitter](https://github.com/ai-outfitter) for the project and [LICENSE.md](LICENSE.md) for the original MIT license and attribution. The upstream playground intentionally preserves its bug; improvements belong in this copy.
