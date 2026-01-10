@zoot
# Accessibility Audit: Collaborate Page

**Page Path**: `src/pages/collaborate/index.jsx`

## 1. Headings
**Status**: Warning.
- **Issue**: The page title "Collaborate" should be `<h1>`.
- **Action**: Check if the layout provides this or add it hidden.

## 2. Forms
**Status**: Critical.
- **Issue**: Creating and managing collaborations involves complex forms.
- **Ref**: Use `audit_forms_and_input.md` instructions for `Input`, `Textarea`, and address fields.
- **Action**: Ensure "Add Collaborator" buttons etc. are accessible.

## Prompt for AI
> "Refactor `src/pages/collaborate/index.jsx`.
> 1. Ensure the 'Add Collaborator' functionality uses a `<button type='button'>` (not a div).
> 2. Focus management: When a new collaborator row is added, focus should ideally move to the new input."
