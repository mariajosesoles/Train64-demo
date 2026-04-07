# Tasks: Add Login Page

## Phase 1: Route Group Migration (Foundation)

- [ ] 1.1 Modify `app/layout.tsx` — Remove `Footer` import and `<Footer />` rendering. Remove unused `geistSans`/`geistMono` font declarations and the commented-out alternative layout. Keep only `<html>`, `<body>`, Plus Jakarta Sans font config (`plusJakarta.variable`), and `globals.css` import.
- [ ] 1.2 Create `app/(marketing)/layout.tsx` — Server Component that wraps `{children}` and renders `<Footer />` after them. Import Footer from its current location.
- [ ] 1.3 Move `app/page.tsx` to `app/(marketing)/page.tsx` — No content changes. Verify `@/app/components/...` imports still resolve. URL stays `/`.
- [ ] 1.4 Move `app/ui/page.tsx` to `app/(marketing)/ui/page.tsx` — No content changes. Verify imports still resolve. URL stays `/ui`.
- [ ] 1.5 Create `app/(auth)/layout.tsx` — Minimal Server Component wrapper: `<div className="flex min-h-screen">{children}</div>`. No footer, no nav.
- [ ] 1.6 Verify route group migration — Run `pnpm dev`, confirm `/` renders landing page with Footer, `/ui` renders playground with Footer, and both pages function correctly.

## Phase 2: Shared Auth Components — Primitives

- [ ] 2.1 Create `app/components/auth/form-header.tsx` — `FormHeaderProps { heading: string; subtitle: string }`. Render `<h1>` at 24px bold #212b36 / 36px line-height + `<p>` subtitle at 14px regular #637381 / 22px line-height.
- [ ] 2.2 Create `app/components/auth/label.tsx` — `LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>`. Render 12px semibold #637381 text with a white 2px-height mask element behind the text to create the border-notch visual effect over input borders.
- [ ] 2.3 Create `app/components/auth/input.tsx` — `InputProps extends React.InputHTMLAttributes<HTMLInputElement>`. Styled `<input>` with `rounded-[8px]`, 1px border `rgba(145,158,171,0.2)`, white bg, 16px vertical / 14px horizontal padding, 54px height. Supports `text` and `password` types. Placeholder at 14px #919eab.
- [ ] 2.4 Create `app/components/auth/form-group.tsx` — `FormGroupProps { children: React.ReactNode }`. Wrapper `<div>` composing Label + Input with `flex flex-col gap-[6px]`.
- [ ] 2.5 Create `app/components/auth/divider.tsx` — `DividerProps { label?: string }` (defaults to "OR"). Centered uppercase 12px bold #919eab / 18px line-height with horizontal lines on either side.
- [ ] 2.6 Create `app/components/auth/social-login-button.tsx` — `SocialLoginButtonProps { provider: "google"; label: string }`. Full-width button with inline multi-color Google "G" SVG, white bg, #f2f4f7 border, 6px border-radius, box-shadow `0px 0px 1px 0px rgba(0,0,0,0.18), 0px 2px 30px 0px rgba(0,0,0,0.08)`. Label at 13px regular #344054 / 20px line-height. No onClick handler (UI only).
- [ ] 2.7 Create `app/components/auth/auth-button.tsx` — `AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>`. Full-width, `bg-[#1b1b1b]`, white text 15px bold, `rounded-[8px]`, right-facing arrow SVG icon. No-op button (type="button").
- [ ] 2.8 Create `app/components/auth/form-footer.tsx` — `FormFooterProps { text: string; linkText: string; linkHref: string }`. Row with plain text at 14px regular #1b1b1b + bold link at 14px semibold #1b1b1b, 8px gap between them. Use `next/link` for the Link element.

## Phase 3: Shared Auth Components — Layout

- [ ] 3.1 Create `app/components/auth/auth-layout.tsx` — `AuthLayoutProps { children: React.ReactNode }`. Desktop (lg+): horizontal flex, fixed 480px left form panel (white bg, 64px padding, vertically and horizontally centered children) + fluid right visual panel. Mobile (<lg): hide visual panel (`hidden lg:flex`), form panel full-width with ~24px padding, "Train64" wordmark top-left (no subtitle on mobile).
- [ ] 3.2 Implement visual panel in `auth-layout.tsx` — Right panel: 16px outer padding, inner container with beige bg (#f5f0e8), 20px border-radius, box-shadow `0px 0px 2px 0px rgba(145,158,171,0.2), 0px 12px 24px -4px rgba(145,158,171,0.12)`, overflow-clip. Import `app/assets/overlay_3.png` via `next/image` static import, rotated 30deg, ~1090px size, absolute-centered. "Train64" wordmark at 24px bold #1b1b1b near top-right.
- [ ] 3.3 Apply dark mode exclusion in `auth-layout.tsx` — Ensure explicit `bg-white` and light-mode text colors on form panel. Auth layout forces light-mode appearance regardless of `prefers-color-scheme: dark`.

## Phase 4: Barrel Export and SignIn Page Composition

- [ ] 4.1 Create `app/components/auth/index.ts` — Barrel file re-exporting all auth components: AuthLayout, FormHeader, FormGroup, Input, Label, SocialLoginButton, Divider, FormFooter, AuthButton.
- [ ] 4.2 Create `app/(auth)/sign-in/page.tsx` — Server Component composing all shared auth components inside AuthLayout. Vertical order in form panel: FormHeader ("Sign in" heading, "Sign up to start your chess training journey" subtitle), SocialLoginButton (Google, "Sign in with Google"), Divider ("OR"), email FormGroup (Label "Email address" + Input type="text" placeholder="example@mail.com"), password FormGroup (Label "Password" + Input type="password"), "Forgot password?" link (right-aligned, 14px #212b36, underlined, non-functional `href="#"`), AuthButton ("Sign in"), FormFooter ("New user?", "Sign up", "/sign-up"). Section gaps at 40px, fields block internal gaps at 20px.

## Phase 5: Verification

- [ ] 5.1 Run ESLint — Execute project lint command, fix any errors or warnings in all new/modified files.
- [ ] 5.2 Run build — Execute `pnpm build` to verify the project compiles without errors.
- [ ] 5.3 Visual QA at desktop — Run `pnpm dev`, navigate to `/sign-in` at 1440px viewport. Verify split-screen layout: 480px left panel with form, fluid right panel with beige bg, chess board image rotated 30deg, "Train64" wordmark. Verify all design tokens (colors, typography, spacing, border-radius) match specs.
- [ ] 5.4 Visual QA at mobile — Verify at 375px viewport: visual panel hidden, form full-width, "Train64" wordmark top-left, no subtitle. Verify at 768px (tablet): same mobile behavior. Verify at 1024px: both panels visible.
- [ ] 5.5 Route regression — Confirm `/` renders landing page with Footer, `/ui` renders playground with Footer, and `/sign-in` renders with no Footer.
