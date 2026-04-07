## Exploration: Add Login Page (SignIn Screen)

### Current State

The project is a Next.js 16.2.1 App Router application (React 19, Tailwind CSS 4) for a chess training platform called Train64. The current structure has:

- **Root layout** (`app/layout.tsx`): Loads Plus Jakarta Sans font, applies `--font-plus-jakarta` CSS variable, renders `<Footer />` globally after `{children}`.
- **Landing page** (`app/page.tsx`): Composes 7 section components (Hero, HowItWorks, Features, Learn, Classroom, Testimonials, CTA).
- **Component playground** (`app/ui/page.tsx`): Client-side preview page for Button and CoachCard components.
- **UI components**: `app/components/ui/button.tsx` (CVA-based, landing-page variants), `app/components/ui/card.tsx` (simple wrapper).
- **Section components**: All under `app/components/sections/`, follow a pattern of named exports, Server Components by default, co-located sub-components.
- **No auth pages exist**: No `(auth)` route group, no sign-in/sign-up routes, no auth-related components.
- **No chess board asset**: The `public/` folder only has default Next.js SVGs. The decorative chess board for the right panel needs to be sourced or built (CSS/SVG).
- **Global CSS** (`app/globals.css`): Tailwind 4 with `@theme inline` block defining brand colors (brown/gold palette). Uses `var(--font-plus-jakarta)` as body font-family.
- **No test framework** currently configured.

**Key observation**: The root layout renders `<Footer />` on every page. Auth pages should NOT show the landing footer. This requires either a route group with its own layout, or conditional rendering.

### Affected Areas

- `app/(auth)/layout.tsx` -- New auth layout (split-screen wrapper, no footer)
- `app/(auth)/sign-in/page.tsx` -- New SignIn page
- `app/(marketing)/layout.tsx` -- Existing landing page needs its own layout group (to keep footer)
- `app/(marketing)/page.tsx` -- Move current `app/page.tsx` here
- `app/layout.tsx` -- Root layout must be refactored: remove Footer from global scope
- `app/components/auth/` -- New directory for shared auth components (AuthLayout, AuthForm, FormHeader, FormGroup, Input, Label, SocialLoginButton, Divider, FormFooter, AuthButton)
- `app/globals.css` -- May need auth-specific design tokens added to `@theme inline`
- `public/` -- Chess board image/SVG for right panel, Google icon SVG

### Approaches

1. **Route groups with separate layouts** -- Create `(auth)` and `(marketing)` route groups, each with its own layout. Auth layout provides the split-screen shell; marketing layout provides the footer.
   - Pros: Clean separation of concerns; auth pages get no footer/nav; follows Next.js 16 route group convention; each layout only renders what its pages need; future auth screens (sign-up, create-profile) slot in naturally.
   - Cons: Requires moving `app/page.tsx` into `(marketing)/page.tsx` and `app/ui/page.tsx` into `(marketing)/ui/page.tsx`; the root layout loses its Footer import and becomes a thin shell; slightly more directories.
   - Effort: Low

2. **Conditional rendering in root layout** -- Keep single layout, conditionally hide Footer on `/sign-in` using `usePathname()`.
   - Pros: No file moves needed; simpler directory structure.
   - Cons: Root layout becomes a Client Component (needs `usePathname()`), losing Server Component benefits; grows complex as auth routes multiply; violates separation of concerns; anti-pattern for App Router.
   - Effort: Low initially, grows with each new route

3. **Parallel routes / intercepting routes** -- Use Next.js parallel routes to overlay auth as a modal-like layer.
   - Pros: Interesting for future "auth modal" flows.
   - Cons: Overkill for standalone auth pages; adds complexity with no current benefit; the design is clearly full-page, not modal.
   - Effort: High

### Recommendation

**Approach 1: Route groups with separate layouts.** This is the canonical Next.js App Router pattern for exactly this use case. The Next.js 16 docs confirm route groups are stable and recommended for partitioning layouts. The refactor is minimal:

1. Create `app/(auth)/layout.tsx` -- thin wrapper (no footer, no nav), just `{children}` with full-height styling.
2. Create `app/(marketing)/layout.tsx` -- wraps children + `<Footer />`.
3. Move `app/page.tsx` to `app/(marketing)/page.tsx` (URL stays `/`).
4. Move `app/ui/page.tsx` to `app/(marketing)/ui/page.tsx` (URL stays `/ui`).
5. Simplify `app/layout.tsx` to only contain `<html>`, `<body>`, font config, and global CSS -- no Footer.

**Shared auth components** should live in `app/components/auth/` alongside the existing `app/components/ui/` and `app/components/sections/` patterns. These components (AuthLayout, FormHeader, FormGroup, Input, Label, SocialLoginButton, Divider, FormFooter, AuthButton) are specified in `AuthSystem.md` and designed for reuse across SignIn, SignUp, and CreateProfile.

**Auth CTA button**: The existing `app/components/ui/button.tsx` is CVA-based with landing-page-specific variants (brown/gold brand colors). The auth CTA button uses a completely different style (`bg-[#1b1b1b]`, `rounded-[8px]`, right arrow icon, full-width). It should be a separate component (`AuthButton`) in `app/components/auth/`, not a new variant in the landing button. The design systems are intentionally distinct.

**Chess board visual**: The right panel needs a decorative chess board image (rotated 30 degrees, ~1090px, clipped). Options: (a) export from Figma as a single PNG/SVG and place in `public/images/auth/`, or (b) build procedurally with CSS grid. Option (a) is strongly preferred for visual fidelity -- the board has pieces in specific positions matching the prototype.

### Risks

- **Chess board asset missing**: No chess board image exists in `public/`. This must be sourced (Figma export, stock image, or CSS-generated) before implementation can produce a pixel-accurate result. The screenshot shows a realistic board with pieces in specific positions.
- **Google icon SVG**: The SocialLoginButton needs a multi-color Google "G" icon. This needs to be added to `public/` or inlined as SVG.
- **Route group migration**: Moving `page.tsx` and `ui/page.tsx` into `(marketing)/` is low-risk but must be done carefully. URLs don't change, but import paths in those files must be verified.
- **Root layout Footer removal**: The Footer is currently rendered globally. Removing it from root layout and adding it only in `(marketing)/layout.tsx` changes the component hierarchy. Must verify no other pages depend on it.
- **No responsive spec**: `AuthSystem.md` only specifies desktop (1440px). Mobile/tablet breakpoints are inferred but not defined. The 480px fixed panel will overflow on mobile -- responsive behavior needs a design decision.
- **Dark mode conflict**: `globals.css` has a `prefers-color-scheme: dark` media query that changes `--background` to `#0a0a0a`. Auth screens are explicitly white-only. The auth layout should force light mode or override these variables.

### Ready for Proposal

Yes -- the exploration reveals a clear, low-risk path forward. The orchestrator should proceed to the proposal phase with Approach 1 (route groups). Key decisions to confirm with the user before design:

1. Approval to restructure into `(auth)` and `(marketing)` route groups
2. How to source the chess board asset (Figma export vs placeholder)
3. Whether to address responsive/mobile behavior in this change or defer
4. Whether dark mode override is needed for auth pages
