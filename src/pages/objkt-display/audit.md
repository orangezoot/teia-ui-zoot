@zoot
# Accessibility Audit: Object Display Code

**Page Path**: `src/pages/objkt-display/index.tsx`

## 1. Title & Metadata
**Status**: Unknown (Snippet didn't show full render).
- **Issue**: Ensure the object title is a `<h1>`.
- **Action**: Wrap the object title in `<h1>`.

## 2. Image/Media Display
**Status**: High Priority.
- **Issue**: Visual media is the core content.
- **Action**: Ensure `alt` text is descriptive (using the object title).
- **WCAG**: 1.1.1 Non-text Content (A).

## 3. Keyboard Navigation
**Status**: Warning.
- **Issue**: "Info", "Owners", "History" tabs.
- **Action**: Ensure these are keyboard accessible.

## Prompt for AI
> "Refactor `src/pages/objkt-display/index.tsx`:
> 1. Identify the main title of the artwork and ensure it is an `<h1>`.
> 2. Ensure tabs for 'Info', 'Owners', 'History' are accessible with keyboard."
