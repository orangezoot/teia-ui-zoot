@zoot
# Accessibility Audit: FAQ Page

**Page Path**: `src/pages/faq/index.jsx`

## 1. Accordion Accessibility
**Status**: Critical.
- **Issue**: The page uses a `Question` component which likely behaves as an accordion.
- **Action**: Ensure the toggle is a `<button>` with `aria-expanded` and `aria-controls`. The content must have a matching ID.
- **WCAG**: 4.1.2 Name, Role, Value (A).

## 2. Inner HTML
**Status**: Warning.
- **Issue**: The `answer` prop contains raw HTML strings.
- **Action**: Verify this HTML is valid and semantic (no broken tags, uses lists correctly).

## Prompt for AI
> "Refactor `src/pages/faq/index.jsx`.
> 1. Update the `Question` component (defined locally or imported) to:
>    - Use a `<button>` for the question text.
>    - set `aria-expanded={isOpen}`.
>    - set `aria-controls={uniqueBodyId}`.
>    - Ensure the answer container has `id={uniqueBodyId}`."
