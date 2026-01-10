@zoot
# Accessibility Audit: Mint Page

**Page Path**: `src/pages/mint/index.tsx`

## 1. Headings
**Status**: Good.
- **Note**: The page has an `<h1>MINT</h1>`.
- **Action**: None needed for this specific item.

## 2. Form Accessibility
**Status**: Critical (Handled in Global Audit).
- **Issue**: The minting form is complex.
- **Reference**: See `audit_forms_and_input.md` for specific fixes to `MintForm` and `FormFields`.
- **Action**: Ensure `FormProvider` and `useForm` integration exposes errors accessibly (`aria-invalid`).

## 3. Tabs State
**Status**: Warning.
- **Issue**: The `Tabs` disable state (`disabled: true`).
- **Action**: Ensure disabled tabs have `aria-disabled="true"` and are not focusable if strictly disabled, or explain why they are disabled.

## Prompt for AI
> "Refactor `src/pages/mint/index.tsx`:
> 1. Ensure the `Tabs` component receives the disabled state correctly and renders `aria-disabled` on the tab buttons."
