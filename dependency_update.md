# Dependency Update Checklist

Ce qu'il reste à mettre à jour

## Notable failures requiring future attention

- tailwindcss 3 → 4: Major breaking changes
- vite 5 → 7: Major breaking changes
- vitest 1 → 4: Major breaking changes (needs to stay in sync with vite)
- @sveltejs/vite-plugin-svelte 4 → 6: Compatibility issues

---

## Dependencies

| Package | Current Version | Status | Notes |
|---------|-----------------|--------|-------|
| @cortex-js/compute-engine | ^0.29.1 | ❌ | Tests failed (4 failed), reverted |
| mathlive | ^0.104.2 | ❌ | Tests failed, reverted |

## DevDependencies

| Package | Current Version | Status | Notes |
|---------|-----------------|--------|-------|
| @sveltejs/vite-plugin-svelte | ^4.0.0 → ^4.0.4 | ❌ | Dev server failed, small upgrade for peer compatibility |
| svelte | ^5.0.0 → ^5.46.0 | ❌ | Tests failed, small upgrade for peer compatibility |
| tailwindcss | ^3.4.17 | ❌ | Tests failed, reverted (major v4 update) |
| vite | ^5.4.21 | ❌ | Tests failed, reverted (major v7 update) |
| vite-plugin-generate-file | 0.2.0 | ❌ | Tests failed, reverted |
| vitest | ^1.6.1 | ❌ | Tests failed, reverted (major v4 update) |
