@zoot
# Accessibility Audit: Copyright Display Page

**Page Path**: `src/pages/copyrightdisplay/index.tsx`

## 1. Headings
**Status**: Missing.
- **Issue**: Page renders `CopyrightDisplay` inside a div without a page-level heading.
- **Action**: Add a visually hidden `<h1>Copyright Details</h1>` or ensure `CopyrightDisplay` provides the h1.

## Prompt for AI
> "Refactor `src/pages/copyrightdisplay/index.tsx`:
> Ensure there is an `<h1>` heading for the page context, potentially hidden if the design doesn't call for it."
