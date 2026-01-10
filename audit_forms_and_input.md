@zoot
# Accessibility Audit: Forms & Input

You are an expert accessibility engineer. Please refactor the following files to meet WCAG 2.2 Level AA standards.

## Audit Summary
- **Scope**: Form components and the Mint Page.
- **Priority**: Critical (User input/Minting).

---

## Task 1: Form Field Labels
**File**: `src/components/form/FormFields.jsx`

**Issues**:
- **1.3.1 Info and Relationships (A)**: Labels must be programmatically associated with inputs.

**Current Code Context**:
```jsx
<Input
  label={field.label}
  /* ... */
>
```

**Instructions**:
- Verify the `Input` (and `Textarea`, `Select`, `Upload`) component implementation.
- Ensure it renders a `<label htmlFor={id}>` matching the input's `id`.

**Prompt for AI**:
> "Check `src/components/form/FormFields.jsx` and the `Input` component definition.
> Ensure that the `label` prop renders a `<label>` element with a `htmlFor` attribute that matches the `id` of the input field.
> If the `Input` component wraps the input inside the label, that is also acceptable, but explicit `htmlFor` is preferred for clarity."

---

## Task 2: Error Identification
**File**: `src/components/form/FormFields.jsx`

**Issues**:
- **3.3.1 Error Identification (A)**: Errors must be programmatically linked to inputs.

**Current Code Context**:
```jsx
{error && <FieldError text error={error.message} />}
```

**Instructions**:
- Use `aria-describedby` on the input to point to the error message ID.
- Use `aria-invalid="true"` on the input when it has an error.

**Prompt for AI**:
> "Refactor `src/components/form/FormFields.jsx`.
> 1. When `error` is present, add `aria-invalid='true'` to the `Input` component.
> 2. Ensure the `<FieldError>` component has a unique ID (e.g., `${name}-error`).
> 3. Add `aria-describedby='${name}-error'` to the input field so screen readers announce the error immediately."

---

## Task 3: Mint Page Structure
**File**: `src/pages/mint/index.tsx`

**Issues**:
- **1.3.1 Info and Relationships (A)**: Use proper headings.
- **2.1.1 Keyboard (A)**: Ensure the custom "fund warning" is readable.

**Prompt for AI**:
> "Review `src/pages/mint/index.tsx`.
> 1. Ensure the main title is an `<h1>`.
> 2. The fund warning (`⚠️ You seem to be low on funds...`) should be an alert. Wrap it in `role='alert'` so it is announced automatically when it appears."

