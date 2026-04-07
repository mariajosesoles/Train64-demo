# Proposal: Add Login (SignIn) Page

## Intent

Train64 has no authentication screens. Users need a SignIn page to access the chess training platform. This change introduces the first auth screen, establishing the shared auth layout system and reusable components that SignUp and CreateProfile will build on later.

## Scope

### In Scope
- Restructure app into `(auth)/` and `(marketing)/` route groups to separate layouts
- Create `app/(auth)/sign-in/page.tsx` — the SignIn screen
- Create shared auth components in `app/components/auth/`:
  - `AuthLayout` — split-screen wrapper (480px form panel + fluid visual panel)
  - `FormHeader` — heading + subtitle
  - `FormGroup` — label + input wrapper
  - `Input` — styled text input (text/password variants)
  - `Label` — floating label with border-notch mask
  - `SocialLoginButton` — Google SSO button with inline SVG icon
  - `Divider` — "OR" text separator
  - `FormFooter` — navigation link row ("New user? Sign up")
  - `AuthButton` — primary CTA (black `#1b1b1b`, rounded-8px, right arrow icon)
- Move existing landing page into `(marketing)/` route group
- Remove Footer from root layout, add it to `(marketing)/layout.tsx` only
- Responsive/mobile support:
  - Desktop: full split-screen layout per AuthSystem.md specs
  - Mobile: visual panel hidden, form goes full-width, "Train64" wordmark appears top-left as branding
- Use existing `app/assets/overlay_3.png` as the chess board visual (contains rotated board with pieces and wordmark)

### Out of Scope
- SignUp page (future change — will reuse shared auth components)
- CreateProfile page (future change — will reuse shared auth components)
- Dark mode for auth pages (explicitly excluded per user decision)
- Actual authentication logic / API integration (this is UI only)
- Password validation / form validation logic beyond basic HTML attributes
- Forgot password flow (link present but no destination page)
- AvatarUpload, SelectInput, DateInput components (CreateProfile-only)

## Approach

**Route group restructuring (Approach 1 from exploration):**

1. Create `app/(marketing)/layout.tsx` — wraps children with `<Footer />`
2. Move `app/page.tsx` → `app/(marketing)/page.tsx` (URL stays `/`)
3. Move `app/ui/page.tsx` → `app/(marketing)/ui/page.tsx` (URL stays `/ui`)
4. Simplify `app/layout.tsx` — remove Footer, keep only `<html>`, `<body>`, font config, globals
5. Create `app/(auth)/layout.tsx` — minimal wrapper, full-height, no footer/nav
6. Create `app/(auth)/sign-in/page.tsx` — composes shared auth components into SignIn screen

**Component architecture:**

All shared auth components live in `app/components/auth/`. Each component is a Server Component by default (no client state needed for initial render). The `AuthButton` is a separate component from the existing CVA-based `app/components/ui/button.tsx` since the auth and landing design systems are intentionally distinct.

**Design token source:** All styles follow `AuthSystem.md` sections 1–3 exactly. No new CSS custom properties needed — Tailwind arbitrary values (`bg-[#1b1b1b]`, `text-[#212b36]`, etc.) match the token table directly.

**Chess board asset:** Use `app/assets/overlay_3.png` via Next.js `<Image>` import. The image already contains the rotated chess board with pieces and the "Train64" wordmark. Position absolute-centered, rotated 30deg, ~1090px, clipped by `overflow-clip` on the visual panel container.

**Google icon:** Standard multi-color Google "G" SVG inlined in the `SocialLoginButton` component. No external dependency needed.

**Responsive behavior:**
- `lg+` (≥1024px): Full split-screen layout per AuthSystem.md
- `<lg`: Visual panel hidden (`hidden lg:flex`), form panel becomes `w-full`, padding reduces to `p-6`, "Train64" wordmark shown top-left as mobile branding header

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `app/layout.tsx` | Modified | Remove Footer import and rendering; keep html/body/font/globals only |
| `app/page.tsx` | Moved | → `app/(marketing)/page.tsx` (URL unchanged: `/`) |
| `app/ui/page.tsx` | Moved | → `app/(marketing)/ui/page.tsx` (URL unchanged: `/ui`) |
| `app/(marketing)/layout.tsx` | New | Wraps children + renders `<Footer />` |
| `app/(auth)/layout.tsx` | New | Minimal full-height wrapper, no footer |
| `app/(auth)/sign-in/page.tsx` | New | SignIn page composing shared auth components |
| `app/components/auth/auth-layout.tsx` | New | Split-screen wrapper (form panel + visual panel) |
| `app/components/auth/form-header.tsx` | New | Heading + subtitle |
| `app/components/auth/form-group.tsx` | New | Label + Input wrapper |
| `app/components/auth/input.tsx` | New | Styled text input with text/password variants |
| `app/components/auth/label.tsx` | New | Label with border-notch mask |
| `app/components/auth/social-login-button.tsx` | New | Google SSO button |
| `app/components/auth/divider.tsx` | New | "OR" text separator |
| `app/components/auth/form-footer.tsx` | New | Navigation link row |
| `app/components/auth/auth-button.tsx` | New | Primary CTA button (black, right arrow) |
| `app/components/auth/index.ts` | New | Barrel export for all auth components |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Route group migration breaks existing pages | Low | URLs are unaffected by route groups; verify imports in moved files still resolve correctly |
| Footer disappears from landing page | Low | Add Footer explicitly in `(marketing)/layout.tsx`; verify visually after migration |
| Chess board image sizing/positioning differs from Figma | Medium | `overlay_3.png` already contains the composed visual; match rotation (30deg) and size (1090px) per AuthSystem.md; visual QA against design |
| Responsive mobile layout deviates from mobile design | Medium | Mobile design provided (login-mobile.png); implement breakpoint at `lg` (1024px); verify against reference |
| Auth components tightly coupled to SignIn — don't generalize for SignUp/CreateProfile | Low | Component props designed for reuse (heading, subtitle, CTA label are all props); SignUp/CreateProfile differences are additive, not structural |
| `prefers-color-scheme: dark` in globals.css forces dark colors on auth pages | Low | Auth layout sets explicit `bg-white` and light-mode colors; dark mode explicitly out of scope per user decision |

## Rollback Plan

All changes are additive file creation + file moves within route groups. To rollback:

1. Move `app/(marketing)/page.tsx` back to `app/page.tsx`
2. Move `app/(marketing)/ui/page.tsx` back to `app/ui/page.tsx`
3. Restore Footer rendering in `app/layout.tsx`
4. Delete `app/(auth)/`, `app/(marketing)/layout.tsx`, and `app/components/auth/`

No database migrations, no environment variable changes, no external service dependencies. Pure file-level revert.

## Dependencies

- `app/assets/overlay_3.png` — already exists in the project (chess board visual)
- Plus Jakarta Sans font — already configured in root layout
- No new npm packages required
- No API/backend dependencies (UI-only change)

## Success Criteria

- [ ] `/sign-in` route renders the SignIn page with correct split-screen layout
- [ ] Desktop layout matches AuthSystem.md specs: 480px fixed left panel, fluid right panel with beige bg, chess board image, "Train64" wordmark
- [ ] Form contains: heading ("Sign in") + subtitle, Google SSO button, OR divider, email input, password input, "Forgot password?" link, "Sign in" CTA button, "New user? Sign up" footer
- [ ] All design tokens (colors, typography, spacing, border-radius) match AuthSystem.md sections 2-3
- [ ] Mobile layout: visual panel hidden, form full-width, "Train64" wordmark top-left
- [ ] Landing page (`/`) still renders correctly with Footer after route group migration
- [ ] Component playground (`/ui`) still accessible after route group migration
- [ ] All shared auth components are reusable (props-driven, no SignIn-specific hardcoding)
- [ ] ESLint passes with zero errors
