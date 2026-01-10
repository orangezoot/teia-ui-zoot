@zoot
# Accessibility Audit: Copyright Page

**Page Path**: `src/pages/copyright/index.tsx`

## 1. Headings
**Status**: Good.
- **Note**: Has `<h1>Copyright</h1>`.

## 2. Dynamic Tab Status
**Status**: Warning.
- **Issue**: Tabs enable/disable dynamically based on validity.
- **Action**: Ensure status changes are communicated. If a tab becomes enabled, users might not know.
- **WCAG**: 4.1.3 Status Messages (AA).

## 3. Form Validation
**Status**: Critical.
- **Ref**: Similar to Mint page. Ensure errors are exposed via `aria-invalid`.

## Prompt for AI
> "Refactor `src/pages/copyright/index.tsx`:
> 1. Ensure disabled tabs have `aria-disabled='true'`.
> 2. If valid state allows navigation, ensure the 'Create' button/tab is clearly interactive."
