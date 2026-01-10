@zoot
# Accessibility Audit: Global Structure & Navigation

You are an expert accessibility engineer. Please refactor the following files to meet WCAG 2.2 Level AA standards.

## Audit Summary
- **Scope**: Global layout, navigation, and document structure.
- **Priority**: High (affects all pages).

---

## Task 1: Document Language
**File**: `public/index.html` (if exists) or root HTML template.

**Issue**:
- **3.1.1 Language of Page (A)**: verify `<html>` tag has a `lang` attribute.

**Prompt for AI**:
> "Check `public/index.html`. Ensure the `<html>` tag has `lang="en"` (or appropriate language code). If missing, add it."

---

## Task 2: Landmarks and Skip Links
**File**: `src/App.jsx`

**Issues**:
- **2.4.1 Bypass Blocks (A)**: No mechanism to skip to main content.
- **1.3.1 Info and Relationships (A)**: Missing `<main>` landmark. The content is likely wrapped in a generic `div`.

**Current Code Context**:
```jsx
// src/App.jsx
return (
  <AnimatePresence>
    <Header />
    {/* Content often here or in Outlet */}
    <Outlet /> 
  </AnimatePresence>
)
```

**Instructions**:
1.  Add a "Skip to Content" link as the first focusable element. It should be hidden visually until focused.
2.  Wrap the main route content in a `<main id="main-content">` element.

**Prompt for AI**:
> "Refactor `src/App.jsx`:
> 1. Add a `<a href="#main-content" className="skip-link">Skip to content</a>` at the top.
> 2. Wrap the dynamic page content (e.g., `<Outlet />` or logic rendering the page) in `<main id="main-content" tabIndex="-1">`.
> 3. Add CSS to hide the skip link by default and show it on focus."

---

## Task 3: Navigation Accessibility
**File**: `src/components/header/Header.jsx`

**Issues**:
- **1.3.1 Info and Relationships (A)**: Verify `<nav>` landmark is used for the header menu.
- **4.1.2 Name, Role, Value (A)**: If the menu uses a custom hamburger button (e.g., `src/components/icons/index.jsx`), ensure it has `aria-label="Menu"`, `aria-expanded`, and `aria-controls`.

**Prompt for AI**:
> "Review `src/components/header/Header.jsx`.
> 1. Ensure the container for navigation links is a `<nav>` element.
> 2. If it uses a hamburger menu (likely imported from `src/components/icons`), ensure the toggle button has:
>    - `aria-label='Toggle menu'`
>    - `aria-expanded={isOpen}`
>    - `aria-controls='mobile-menu-id'`
> 3. Ensure the mobile menu container has `id='mobile-menu-id'`."

