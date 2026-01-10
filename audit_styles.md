@zoot
# Accessibility Audit: Visual Styles

You are an expert accessibility engineer. Please refactor the following files to meet WCAG 2.2 Level AA standards.

## Audit Summary
- **Scope**: CSS Variables and Themes.
- **Priority**: Major (Visual impairments).

---

## Task 1: Color Contrast (Themes)
**File**: `src/styles/variables.scss`

**Issues**:
- **1.4.3 Contrast Minimum (AA)**: Some themes may not meet the 4.5:1 ratio for normal text.

**Specific Check**:
- **Midnight Theme**: Check background `#002633` vs text `#7399a6`. If contrast < 4.5:1, lighten the text color.
- **No UI Theme**: This theme sets text color to match background (`#111` on `#111`).
  - *Context*: If this is an intentional "blind" mode or "hidden" mode, explicitly warn the user. Ideally, "No UI" should still be navigable.
  - *Fix*: Consider ensuring outlines/focus states are still visible even if text is hidden, or exempt this theme if it's strictly for art/screenshots.

**Prompt for AI**:
> "Analyze `src/styles/variables.scss`.
> 1. Calculate the contrast ratio for the 'Midnight' theme (`--gray-90` vs `--gray-0`). If it is below 4.5:1, adjust `--gray-90` to be lighter (e.g., `#90c0d0`).
> 2. Ensure the 'noui' theme has a visible focus state for keyboard users, even if the text is hidden."

---

## Task 2: Focus Indicators
**File**: `src/styles/main.scss` / `src/styles/reset.scss`

**Issues**:
- **2.4.7 Focus Visible (AA)**: Ensure custom focus styles are present if defaults are reset.

**Prompt for AI**:
> "Review `src/styles/main.scss`.
> Add a global focus rule to ensure all interactive elements have a visible ring when focused via keyboard:
> ```css
> :focus-visible {
>   outline: 2px solid var(--text-color);
>   outline-offset: 2px;
> }
> ```
> Verify that no rules exist that set `outline: none` without providing an alternative."

