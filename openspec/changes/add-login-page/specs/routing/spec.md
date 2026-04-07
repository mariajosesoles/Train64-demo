# Spec: Routing

## Overview

Route group structure that separates auth pages (no footer) from marketing pages (with footer), using Next.js App Router route groups. URLs remain unchanged; only the layout hierarchy changes.

## Requirements

### Requirement: Route Group Structure

The application MUST organize pages into `(auth)` and `(marketing)` route groups to provide distinct layout wrappers without affecting URL paths.

#### Scenario: Marketing pages retain their URLs after migration

- GIVEN the landing page exists at `app/(marketing)/page.tsx`
- WHEN a user navigates to `/`
- THEN the landing page renders with all 7 section components (Hero, HowItWorks, Features, Learn, Classroom, Testimonials, CTA)

#### Scenario: Component playground retains its URL after migration

- GIVEN the playground page exists at `app/(marketing)/ui/page.tsx`
- WHEN a user navigates to `/ui`
- THEN the component playground page renders correctly

#### Scenario: Sign-in route is accessible

- GIVEN the sign-in page exists at `app/(auth)/sign-in/page.tsx`
- WHEN a user navigates to `/sign-in`
- THEN the SignIn page renders with the auth layout (no footer)

### Requirement: Root Layout Simplification

The root layout (`app/layout.tsx`) MUST only contain the `<html>`, `<body>` wrapper, font configuration (Plus Jakarta Sans), and global CSS import. It MUST NOT render the `<Footer />` component.

#### Scenario: Root layout provides base HTML structure only

- GIVEN the root layout at `app/layout.tsx`
- WHEN any page in the application renders
- THEN the page is wrapped in `<html>` and `<body>` tags with the Plus Jakarta Sans font CSS variable applied
- AND the Footer component is NOT rendered by the root layout

### Requirement: Marketing Layout with Footer

The marketing layout (`app/(marketing)/layout.tsx`) MUST render the `<Footer />` component after its children.

#### Scenario: Landing page displays footer

- GIVEN a user is on the landing page (`/`)
- WHEN the page finishes rendering
- THEN the `<Footer />` component is visible at the bottom of the page

#### Scenario: Playground page displays footer

- GIVEN a user is on the playground page (`/ui`)
- WHEN the page finishes rendering
- THEN the `<Footer />` component is visible at the bottom of the page

### Requirement: Auth Layout without Footer

The auth layout (`app/(auth)/layout.tsx`) MUST NOT render any footer or navigation elements. It MUST provide a minimal full-height wrapper for auth pages.

#### Scenario: Sign-in page has no footer

- GIVEN a user is on the sign-in page (`/sign-in`)
- WHEN the page finishes rendering
- THEN no `<Footer />` component is present in the rendered output

#### Scenario: Auth layout fills viewport height

- GIVEN a user is on any auth page
- WHEN the page renders
- THEN the auth layout wrapper fills the full viewport height
