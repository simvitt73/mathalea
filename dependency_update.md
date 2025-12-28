# Dependency Update Checklist

This document tracks the status of updating each dependency to its latest version.

## Notable failures requiring future attention

- tailwindcss 3 → 4: Major breaking changes
- vite 5 → 7: Major breaking changes
- vitest 1 → 4: Major breaking changes (needs to stay in sync with vite)
- @sveltejs/vite-plugin-svelte 4 → 6: Compatibility issues

**Legend:**

- ✅ Updated successfully (tests passed)
- ❌ Update reverted (tests failed)
- ⏭️ Skipped (git dependency or special case)
- ➖ Already up to date
- 🔄 Pending

---

## Dependencies

| Package | Current Version | Status | Notes |
|---------|-----------------|--------|-------|
| @bugsnag/js | ^7.25.0 → ^8.6.0 | ✅ | Updated successfully |
| @cortex-js/compute-engine | ^0.29.1 | ❌ | Tests failed (4 failed), reverted |
| @mixer/postmessage-rpc | ^1.1.4 | ➖ | Already up to date |
| @svgdotjs/svg.js | ^3.2.5 | ➖ | Already up to date |
| @types/crypto-js | ^4.2.2 | ➖ | Already up to date |
| @types/jspreadsheet-ce | ^4.7.9 | ➖ | Already up to date |
| @types/three | ^0.178.1 → ^0.182.0 | ✅ | Updated successfully |
| apigeom | git | ⏭️ | Git dependency |
| blockly | 12.2.0 → 12.3.1 | ✅ | Updated successfully |
| boxicons | ^2.1.4 | ➖ | Already up to date |
| brace | ^0.11.1 | ➖ | Already up to date |
| copy-image-clipboard | ^2.1.2 | ➖ | Already up to date |
| crypto-js | ^4.2.0 | ➖ | Already up to date |
| daisyui | ^4.12.24 | ✅ | Updated successfully |
| decimal.js | ^10.6.0 | ➖ | Already up to date |
| earcut | ^3.0.2 | ➖ | Already up to date |
| file-saver | ^2.0.5 | ➖ | Already up to date |
| fraction-visualizer | git | ⏭️ | Git dependency |
| git-precommit-checks | ^3.1.0 | ➖ | Already up to date |
| glisse-nombre | git | ⏭️ | Git dependency |
| instrumenpoche | git | ⏭️ | Git dependency |
| jspreadsheet-ce | github | ⏭️ | GitHub fork dependency |
| jszip | ^3.10.1 | ➖ | Already up to date |
| jszip-utils | ^0.1.0 | ➖ | Already up to date |
| katex | ^0.16.27 | ➖ | Already up to date |
| labyrinthe | git | ⏭️ | Git dependency |
| loadjs | 4.3.0 | ➖ | Already up to date |
| lz-string | ^1.5.0 | ➖ | Already up to date |
| mathjs | ^14.9.1 | ➖ | Already up to date |
| mathlive | ^0.104.2 | ❌ | Tests failed, reverted |
| mathsteps | github | ⏭️ | GitHub fork dependency |
| node-fetch | ^3.3.2 | ➖ | Already up to date |
| qrcode | ^1.5.4 | ➖ | Already up to date |
| roughjs | ^4.6.6 | ➖ | Already up to date |
| scratchblocks | ^3.6.4 | ➖ | Already up to date |
| seedrandom | ^3.0.5 | ➖ | Already up to date |
| simple-svelte-autocomplete | ^2.5.2 | ➖ | Already up to date |
| sortablejs | ^1.15.6 | ➖ | Already up to date |
| svelte-gestures | ^5.0.0 | ➖ | Already up to date |
| three | ^0.179.1 → ^0.182.0 | ✅ | Updated successfully |
| troika-three-text | ^0.52.4 | ➖ | Already up to date |
| ts-import | 5.0.0-beta.0 → 5.0.0-beta.1 | ✅ | Updated successfully |
| tw-elements | ^1.1.0 | ❌ | Tests failed, reverted |
| ua-parser-js | ^2.0.7 | ➖ | Already up to date |
| xstate | ^4.38.3 → ^5.25.0 | ✅ | Updated successfully (major) |

## DevDependencies

| Package | Current Version | Status | Notes |
|---------|-----------------|--------|-------|
| @eslint/eslintrc | ^3.3.1 | ➖ | Already up to date |
| @eslint/js | ^9.35.0 | ➖ | Already up to date |
| @playwright/test | ^1.56.1 | ➖ | Already up to date |
| @sveltejs/vite-plugin-svelte | ^4.0.0 → ^4.0.4 | ❌ | Dev server failed, small upgrade for peer compatibility |
| @tailwindcss/forms | ^0.5.10 | ➖ | Already up to date |
| @testing-library/svelte | ^4.2.3 → ^5.3.1 | ✅ | Updated successfully (major) |
| @tsconfig/svelte | ^5.0.6 | ➖ | Already up to date |
| @types/earcut | ^2.1.4 → ^3.0.0 | ✅ | Updated successfully (major) |
| @types/file-saver | ^2.0.7 | ➖ | Already up to date |
| @types/katex | ^0.16.7 | ➖ | Already up to date |
| @types/loadjs | ^4.0.4 | ➖ | Already up to date |
| @types/node | ^22.19.3 → ^25.0.3 | ✅ | Updated successfully (major) |
| @types/seedrandom | ^3.0.8 | ➖ | Already up to date |
| @vitest/coverage-v8 | ^1.6.1 → ^4.0.16 | ✅ | Updated successfully (major) |
| @vitest/ui | ^1.6.1 → ^4.0.16 | ✅ | Updated successfully (major) |
| autoprefixer | ^10.4.23 | ➖ | Already up to date |
| big-integer | ^1.6.52 | ➖ | Already up to date |
| eslint | ^8.57.1 → ^9.39.2 | ✅ | Updated successfully (major) |
| eslint-config-prettier | ^10.1.8 | ➖ | Already up to date |
| eslint-plugin-prettier | ^5.5.4 | ➖ | Already up to date |
| eslint-plugin-svelte3 | ^4.0.0 | ➖ | Already up to date |
| globals | ^15.15.0 → ^16.5.0 | ✅ | Updated successfully (major) |
| husky | ^9.1.7 | ➖ | Already up to date |
| jsdom | ^25.0.1 → ^27.4.0 | ✅ | Updated successfully (major) |
| neostandard | ^0.12.2 | ➖ | Already up to date |
| patch-package | ^8.0.1 | ➖ | Already up to date |
| playwright | 1.51.0 → 1.57.0 | ✅ | Updated successfully |
| pnpm | ^10.26.1 → ^10.26.2 | ✅ | Updated successfully |
| postcss | ^8.5.6 | ➖ | Already up to date |
| postcss-load-config | ^5.1.0 → ^6.0.1 | ✅ | Updated successfully (major) |
| prettier | ^3.7.4 | ➖ | Already up to date |
| prettier-plugin-svelte | ^3.4.1 | ➖ | Already up to date |
| rollup-plugin-visualizer | ^5.14.0 → ^6.0.5 | ✅ | Updated successfully (major) |
| sass | ^1.93.3 → ^1.97.1 | ✅ | Updated successfully |
| svelte | ^5.0.0 → ^5.46.0 | ❌ | Tests failed, small upgrade for peer compatibility |
| svelte-check | ^4.0.0 → ^4.3.0 | ❌ | Tests failed, small upgrade for peer compatibility |
| svelte-modals | ^1.3.0 | ❌ | Tests failed, reverted |
| tailwindcss | ^3.4.17 | ❌ | Tests failed, reverted (major v4 update) |
| ts-node | ^10.9.2 | ➖ | Already up to date |
| tslib | ^2.8.1 | ➖ | Already up to date |
| typed-function | ^4.2.2 | ➖ | Already up to date |
| typedoc | ^0.28.15 | ➖ | Already up to date |
| typescript | ^5.9.3 | ➖ | Already up to date |
| util | ^0.12.5 | ➖ | Already up to date |
| vite | ^5.4.21 | ❌ | Tests failed, reverted (major v7 update) |
| vite-plugin-dynamic-import | ^1.6.0 | ➖ | Already up to date |
| vite-plugin-generate-file | 0.2.0 | ❌ | Tests failed, reverted |
| vitest | ^1.6.1 | ❌ | Tests failed, reverted (major v4 update) |
