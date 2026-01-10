@zoot
# Accessibility Audit: UI Components

You are an expert accessibility engineer. Please refactor the following files to meet WCAG 2.2 Level AA standards.

## Audit Summary
- **Scope**: Reusable UI components (Images, Icons, Buttons).
- **Priority**: High (reused everywhere).

---

## Task 1: Image Component Alt Text
**File**: `src/components/media-types/image/index.tsx`

**Issues**:
- **1.1.1 Non-text Content (A)**: Current alt text is generic (`object {id} image`).

**Current Code Context**:
```tsx
<LazyLoadImage
  /* ... */
  alt={`object ${nft.token_id} image`}
/>
```

**Instructions**:
- Enhance the `alt` prop to prioritize the NFT title if available. Fallback to the current ID-based string.

**Prompt for AI**:
> "Refactor `src/components/media-types/image/index.tsx`.
> Update the `alt` prop logic:
> `const altText = nft.title ? nft.title : \`object \${nft.token_id} image\`;`
> Ensure `alt={altText}` is passed to `LazyLoadImage`."

---

## Task 2: Icons Accessibility
**File**: `src/components/icons/index.jsx` (and usage of SVGs)

**Issues**:
- **1.1.1 Non-text Content (A)**: SVGs used as buttons must have accessible names.
- **4.1.2 Name, Role, Value (A)**: Interactive icons need roles.

**Guidelines**:
- Decorative icons (visual polish): Add `aria-hidden="true"`.
- Interactive icons (buttons): Ensure the wrapping button has `aria-label`.

**Prompt for AI**:
> "Review `src/components/icons/index.jsx`.
> If these components return raw `<svg>`, ensure they accept `aria-hidden` or `title` props.
> Ideally, wrap them in a functional component that defaults to `aria-hidden='true'` unless a `title` or `aria-label` is provided."

