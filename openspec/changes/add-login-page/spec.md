# Spec: Add Login Page

## Overview

Introduces the first authentication screen (SignIn) for Train64, establishing route group architecture, a reusable auth layout system, and shared auth UI components. This is a UI-only change with no authentication logic.

## Domain Specs

| Domain | Location | Type | Description |
|--------|----------|------|-------------|
| Routing | `openspec/changes/add-login-page/specs/routing/spec.md` | Full | Route group structure separating auth and marketing layouts |
| Auth Layout | `openspec/changes/add-login-page/specs/layout/spec.md` | Full | Split-screen layout with responsive breakpoints and visual panel |
| Auth UI | `openspec/changes/add-login-page/specs/auth-ui/spec.md` | Full | Shared auth components and SignIn page composition |

## Summary of Requirements

### Routing (4 requirements, 7 scenarios)

- **Route Group Structure** -- `(auth)` and `(marketing)` groups with unchanged URLs
- **Root Layout Simplification** -- Remove Footer from root, keep only html/body/font/globals
- **Marketing Layout with Footer** -- Footer renders for landing and playground pages
- **Auth Layout without Footer** -- No footer or nav on auth pages

### Auth Layout (5 requirements, 11 scenarios)

- **Desktop Split-Screen Layout** -- 480px fixed left + fluid right at lg+ breakpoint
- **Form Panel Styling** -- White bg, 64px padding, centered content
- **Visual Panel with Chess Board** -- Beige bg, overlay_3.png rotated 30deg, Train64 wordmark, box shadow
- **Mobile Layout** -- Visual panel hidden below lg, full-width form, wordmark top-left, no subtitle
- **Dark Mode Exclusion** -- Auth pages always render light-mode colors

### Auth UI Components & SignIn Page (12 requirements, 23 scenarios)

- **FormHeader** -- Configurable h1 + subtitle
- **SocialLoginButton** -- Google SSO button (no-op)
- **Divider** -- "OR" separator
- **FormGroup** -- Label + Input wrapper with 6px gap
- **Label** -- 12px semibold with border-notch mask
- **Input** -- Text/password variants, 54px height, 8px radius
- **AuthButton** -- Full-width CTA (#1b1b1b) with arrow icon
- **FormFooter** -- Navigation prompt with bold link
- **Forgot Password Link** -- Right-aligned, underlined, non-functional
- **SignIn Page Composition** -- Correct element order and spacing (40px sections, 20px fields)
- **Barrel Export** -- All components exported from index.ts
- **Component Reusability** -- Props-driven, no hardcoded SignIn text
- **No Authentication Logic** -- UI only, no API calls, no form submission side effects

## Totals

| Metric | Count |
|--------|-------|
| Domains | 3 |
| Requirements | 21 |
| Scenarios | 41 |
