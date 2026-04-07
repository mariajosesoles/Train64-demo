# Design: Add Login Page (SignIn Screen)

## Technical Approach

Introduce a route-group-based layout split (`(auth)/` and `(marketing)/`) to isolate auth pages from the marketing shell, then build the SignIn page by composing a set of shared auth components. This is a UI-only change — no authentication logic, no API calls, no form actions. All components are React Server Components unless client interactivity is required.

The approach maps directly to the proposal: restructure into route groups, create shared auth components in `app/components/auth/`, compose them into the SignIn page, and use the existing `overlay_3.png` asset for the visual panel.

## Architecture Decisions

### Decision: Route Groups for Layout Isolation

**Choice**: Create `(auth)/` and `(marketing)/` route groups under `app/`. Root layout keeps only `<html>`, `<body>`, font config, and global CSS. Footer moves to `(marketing)/layout.tsx`. Auth layout has no footer.

**Alternatives considered**:
- Conditional rendering in root layout via `usePathname()` — rejected because it forces root layout to become a Client Component, losing Server Component benefits and growing complex with each new auth route.
- Parallel/intercepting routes — rejected as overkill for standalone full-page auth screens.

**Rationale**: Route groups are the canonical Next.js App Router pattern for this exact use case. The Next.js 16 docs confirm route groups are stable and recommended for partitioning layouts. No URL changes occur. The refactor is minimal and future-proof (SignUp, CreateProfile slot in under `(auth)/` with zero additional layout work).

### Decision: Separate Auth Component Library

**Choice**: All shared auth components live in `app/components/auth/`, separate from `app/components/ui/`.

**Alternatives considered**:
- Adding auth variants to existing `app/components/ui/button.tsx` (CVA-based) — rejected because the auth design system (black `#1b1b1b`, outlined inputs, floating labels) is intentionally distinct from the landing design system (brown/gold brand colors).
- Putting components inside `app/(auth)/components/` — rejected because Next.js route groups are for routing, not component co-location. The existing project convention places components in `app/components/{category}/`.

**Rationale**: Follows the existing project convention (`app/components/ui/`, `app/components/sections/`, `app/components/layout/`). Keeps auth components reusable across SignIn, SignUp, and CreateProfile without coupling to any specific route.

### Decision: Server Components by Default

**Choice**: All auth components are React Server Components. No `"use client"` directive unless a component needs browser APIs or event handlers.

**Alternatives considered**:
- Making everything Client Components — rejected because none of these components need client state for initial render. The password visibility toggle (if added later) would be the only exception.

**Rationale**: Follows Next.js 16 best practice. Server Components reduce bundle size and improve performance. The `Input` component with `type="password"` works without client JS. The `AuthButton` is a no-op `<button>` — no onClick handler needed for the UI-only version.

### Decision: Static Import for Chess Board Image

**Choice**: Import `app/assets/overlay_3.png` as a static module and render with `next/image`. The image already contains the "Train64" wordmark and rotated chess board.

**Alternatives considered**:
- Placing in `public/` and using a string src — rejected because static imports provide automatic width/height inference and blur placeholder support per Next.js 16 docs.
- CSS-generated chess board — rejected because the asset already exists and contains piece-specific positions that would be impossible to replicate procedurally.

**Rationale**: The `app/assets/` path with static import gives the best developer experience (type-safe, auto-sized) and the best user experience (blur-up placeholder, optimized formats). Next.js 16 explicitly supports this pattern.

### Decision: Tailwind Arbitrary Values Over CSS Custom Properties

**Choice**: Use Tailwind arbitrary values (`bg-[#1b1b1b]`, `text-[#212b36]`, `rounded-[8px]`) for auth-specific tokens. No new entries in `globals.css` `@theme inline` block.

**Alternatives considered**:
- Adding auth tokens to `@theme inline` — rejected because the auth palette (`#1b1b1b`, `#212b36`, `#919EAB`) is completely separate from the landing palette (brown/gold). Polluting the theme with auth tokens would blur the design system boundary.

**Rationale**: Keeps the two design systems cleanly separated. Auth tokens are used only within `app/components/auth/` and the auth route group. If the auth design system grows, extracting tokens can be done later.

### Decision: Responsive Breakpoint at `lg` (1024px)

**Choice**: Desktop split-screen layout at `lg:` and above. Below `lg`, the visual panel is hidden (`hidden lg:flex`), the form panel becomes full-width, and a "Train64" text branding appears top-left as a mobile header.

**Alternatives considered**:
- Custom breakpoint at 768px — rejected because the 480px fixed form panel + visual panel requires enough horizontal space that `lg` (1024px) is the natural threshold.
- No responsive behavior — rejected per user requirement for mobile support.

**Rationale**: At 1024px, the 480px form panel plus padding leaves ~544px for the visual panel, which is the minimum viable width for the chess board visual to look intentional. Below that, hiding it is the correct UX choice.

## Data Flow

This is a UI-only change with no data flow. All components receive props and render static UI. No state management, no API calls, no form submissions.

```
app/layout.tsx (root — html/body/font)
├── app/(marketing)/layout.tsx (+ Footer)
│   ├── app/(marketing)/page.tsx (landing page — unchanged)
│   └── app/(marketing)/ui/page.tsx (playground — unchanged)
└── app/(auth)/layout.tsx (minimal wrapper, no footer)
    └── app/(auth)/sign-in/page.tsx
        └── AuthLayout
            ├── Form Panel (left, 480px fixed / full-width on mobile)
            │   ├── FormHeader (heading + subtitle)
            │   ├── SocialLoginButton (Google SSO — UI only)
            │   ├── Divider ("OR")
            │   ├── FormGroup > Label + Input (email)
            │   ├── FormGroup > Label + Input (password)
            │   ├── "Forgot password?" link
            │   ├── AuthButton ("Sign in" CTA)
            │   └── FormFooter ("New user? Sign up")
            └── Visual Panel (right, fluid — hidden on mobile)
                └── Next.js Image (overlay_3.png — chess board + wordmark)
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `app/layout.tsx` | Modify | Remove `Footer` import and rendering. Keep `<html>`, `<body>`, font config (`plusJakarta.variable`), and globals import. Remove unused `geistSans`/`geistMono` font declarations and the commented-out alternative layout. |
| `app/page.tsx` | Move | Move to `app/(marketing)/page.tsx`. No content changes. URL stays `/`. |
| `app/ui/page.tsx` | Move | Move to `app/(marketing)/ui/page.tsx`. No content changes. URL stays `/ui`. |
| `app/(marketing)/layout.tsx` | Create | Wraps `{children}` and renders `<Footer />`. Server Component. |
| `app/(auth)/layout.tsx` | Create | Minimal wrapper: `<div className="flex min-h-screen">{children}</div>`. No footer, no nav. Server Component. |
| `app/(auth)/sign-in/page.tsx` | Create | SignIn page composing all shared auth components. Server Component. |
| `app/components/auth/auth-layout.tsx` | Create | Split-screen wrapper: fixed 480px left panel + fluid right panel with beige bg and chess board image. Responsive: hides visual panel on `<lg`, shows "Train64" mobile branding. |
| `app/components/auth/form-header.tsx` | Create | Renders heading (`h1`) + subtitle (`p`). Props: `heading`, `subtitle`. |
| `app/components/auth/form-group.tsx` | Create | Wrapper `div` that composes `Label` + `Input` with proper spacing. Props: `children`. |
| `app/components/auth/input.tsx` | Create | Styled `<input>` element. Outlined style with `border-[#919EAB52]`, `rounded-[8px]`. Props: standard `InputHTMLAttributes` + `type` (text/password). Placeholder text via HTML `placeholder` attribute. |
| `app/components/auth/label.tsx` | Create | `<label>` element with floating positioning and border-notch mask effect. Props: `htmlFor`, `children`. Absolute-positioned over the input's top border with a white background mask to create the "notch" effect. |
| `app/components/auth/social-login-button.tsx` | Create | Google SSO button with inline multi-color "G" SVG icon. Full-width, outlined style. UI only — no onClick handler. |
| `app/components/auth/divider.tsx` | Create | Horizontal rule with centered "OR" text. Uses Tailwind `flex` + `before:/after:` pseudo-elements or explicit `<hr>` elements. |
| `app/components/auth/form-footer.tsx` | Create | Row with plain text + `<Link>` (e.g., "New user? Sign up"). Props: `text`, `linkText`, `linkHref`. |
| `app/components/auth/auth-button.tsx` | Create | Primary CTA: `bg-[#1b1b1b]`, `text-white`, `rounded-[8px]`, full-width, right arrow SVG icon. Props: `children` + standard button attributes. |
| `app/components/auth/index.ts` | Create | Barrel export for all auth components. |

## Interfaces / Contracts

```typescript
// app/components/auth/form-header.tsx
interface FormHeaderProps {
  heading: string;
  subtitle: string;
}

// app/components/auth/form-group.tsx
interface FormGroupProps {
  children: React.ReactNode;
}

// app/components/auth/input.tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Inherits type, placeholder, name, id, etc.
  // No custom props — standard HTML input interface
}

// app/components/auth/label.tsx
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

// app/components/auth/social-login-button.tsx
interface SocialLoginButtonProps {
  provider: "google";  // Extensible for future providers
  label: string;       // e.g. "Sign in with Google"
}

// app/components/auth/divider.tsx
interface DividerProps {
  label?: string;  // Defaults to "OR"
}

// app/components/auth/form-footer.tsx
interface FormFooterProps {
  text: string;      // e.g. "New user?"
  linkText: string;  // e.g. "Sign up"
  linkHref: string;  // e.g. "/sign-up"
}

// app/components/auth/auth-button.tsx
interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

// app/components/auth/auth-layout.tsx
interface AuthLayoutProps {
  children: React.ReactNode;  // Form panel content
}
```

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Visual QA | Layout matches design at desktop (1440px) and mobile (<1024px) | Manual browser inspection — compare against AuthSystem.md specs and reference screenshots |
| Routing | `/sign-in` resolves correctly; `/` and `/ui` still work after route group migration | Manual navigation + `next dev` verification |
| Lint | All new files pass ESLint | `pnpm eslint .` (or project's lint command) |
| Build | Project builds without errors | `pnpm build` |

No automated unit/integration/E2E tests are planned for this change because:
1. No test framework is currently configured in the project (`test_frameworks: unknown` in config.yaml)
2. TDD is set to `false` for this change
3. All components are stateless UI — no business logic to unit test
4. Testing visual fidelity requires a visual regression tool (not in scope)

## Migration / Rollout

No migration required. All changes are file-level:

1. **Route group restructuring** is transparent to URLs — `(auth)` and `(marketing)` are organizational folders only, not URL segments (confirmed by Next.js 16 route-groups docs).
2. **No database changes**, no environment variables, no external service dependencies.
3. **Import paths in moved files**: Both `app/page.tsx` and `app/ui/page.tsx` use `@/app/components/...` absolute imports, which remain valid regardless of the file's position within route groups.
4. **Rollback**: Delete `app/(auth)/`, `app/(marketing)/layout.tsx`, and `app/components/auth/`. Move pages back to `app/page.tsx` and `app/ui/page.tsx`. Restore Footer in root layout.

## Open Questions

None. All decisions have been confirmed through the exploration and proposal phases:
- Route group structure: confirmed
- Chess board asset: `app/assets/overlay_3.png` exists and contains the composed visual
- Responsive breakpoint: `lg` (1024px) confirmed
- Dark mode: explicitly excluded
- Auth logic: explicitly deferred (UI only)
