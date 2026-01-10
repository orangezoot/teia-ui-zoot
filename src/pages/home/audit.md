@zoot
# Accessibility Audit: Home Page

**Page Path**: `src/pages/home/index.tsx`
**Context**: This is the landing page displaying feeds of NFTs.

## 1. Page Structure & Headings
**Status**: Needs Improvement.
- **Issue**: The home page often lacks a clear `<h1>` if it immediately jumps to a feed or uses a logo as a title.
- **Action**: Ensure there is a visually hidden or visible `<h1>Home</h1>` or `<h1>Recent Feeds</h1>` at the top of the main content area.
- **WCAG**: 1.3.1 Info and Relationships (A).

## 2. Feed Navigation
**Status**: Critical.
- **Issue**: Infinite scrolling feeds can be keyboard traps or difficult to navigate.
- **Action**: Ensure the "Load More" mechanism (if manual) is a button with a clear label. If infinite scroll, provide a mechanism to turn it off or easily skip past the feed.
- **WCAG**: 2.1.2 No Keyboard Trap (A).

## 3. Component Dependencies
This page relies heavily on the `Feed` and `FeedItem` components.
- **Refer to**: `audit_components.md` (created previously) for:
  - `FeedItem`: Image alt text, interactive elements in cards.
- **Action**: Verify `FeedItem` headings start at `<h2>` (assuming page title is `<h1>`).

## Prompt for AI
> "Refactor `src/pages/home/index.tsx`:
> 1. Add a screen-reader-only heading `<h1>Teia Feed</h1>` at the start of the content if one doesn't exist.
> 2. Ensure the `<Feed>` component is wrapped in a `<section aria-label='Main Feed'>`."
