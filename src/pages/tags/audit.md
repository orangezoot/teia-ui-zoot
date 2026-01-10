@zoot
# Accessibility Audit: Tags Page

**Page Path**: `src/pages/tags/index.jsx`

## 1. Headings
**Status**: Needs Improvement.
- **Issue**: Feed page often lacks visible heading.
- **Action**: Add `<h1>Tag: {tag}</h1>`.

## 2. Feed Accessibility
**Status**: Critical.
- **Issue**: Infinite scroll feed.
- **Action**: See Global Audit for Feed accessibility.

## Prompt for AI
> "Refactor `src/pages/tags/index.jsx`:
> Add `<h1>Tag: {tag}</h1>` at the top of the content area."
