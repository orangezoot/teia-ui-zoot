@zoot
# Accessibility Audit: Admin Copyright Page

**Page Path**: `src/pages/admincopyright/index.tsx`

## 1. Headings
**Status**: Good.
- **Note**: Has `<h1 className="text-3xl font-bold">`.

## 2. Component Audits
**Status**: Unknown (delegated).
- **Action**: Audit `SubmitProposal` and `ProposalList`.
- **Check**: Ensure inputs in `SubmitProposal` have labels. Ensure `ProposalList` uses Semantic list/grid.

## Prompt for AI
> "Review `src/components/copyright/admin/SubmitProposal.tsx` and `ProposalList.tsx`.
> Ensure form fields have associated labels."
