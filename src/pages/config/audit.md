@zoot
# Accessibility Audit: Sync Page

**Page Path**: `src/pages/sync.jsx` / `src/pages/config/`

## 1. Loading State
**Status**: Warning.
- **Issue**: `<Loading message="Requesting Permissions" />`
- **Action**: Ensure `Loading` component or wrapper uses `role="status"` or `aria-live`.

## 2. Redirect Notice
**Status**: Info.
- **Issue**: Page redirects automatically.
- **Action**: Ensure the content (while visible) is accessible.

## Prompt for AI
> "Refactor `src/pages/sync.jsx`:
> Wrap the `Loading` component in `<div role='status' aria-live='polite'>`."
