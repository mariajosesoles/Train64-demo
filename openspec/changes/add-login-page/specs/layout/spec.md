# Spec: Auth Layout

## Overview

Split-screen layout system for auth pages. Desktop shows a fixed-width form panel on the left and a fluid decorative visual panel on the right. Mobile hides the visual panel and displays the form full-width with a wordmark header.

## Requirements

### Requirement: Desktop Split-Screen Layout

On viewports `lg` (>=1024px) and above, the AuthLayout component MUST render a horizontal split-screen with a fixed-width left panel (480px) and a fluid right panel filling the remaining space.

#### Scenario: Desktop viewport shows both panels

- GIVEN the viewport width is 1440px
- WHEN the AuthLayout renders
- THEN a left panel is visible with a fixed width of 480px
- AND a right panel is visible filling the remaining width (~960px)
- AND both panels fill the full viewport height

#### Scenario: Desktop viewport at minimum lg breakpoint

- GIVEN the viewport width is 1024px
- WHEN the AuthLayout renders
- THEN the left panel is visible at 480px wide
- AND the right panel is visible filling the remaining ~544px

### Requirement: Form Panel Styling

The left form panel MUST have a white background, 64px padding on all sides, and center its children both vertically and horizontally.

#### Scenario: Form panel has correct padding and alignment

- GIVEN the AuthLayout renders on a desktop viewport
- WHEN the left panel is displayed
- THEN the panel has `bg-white` background
- AND the panel has 64px padding on all four sides
- AND its children are centered vertically and horizontally within the panel

### Requirement: Visual Panel with Chess Board

The right visual panel MUST display a warm beige background (#f5f0e8) with rounded corners (20px), a decorative chess board image (from `app/assets/overlay_3.png`) rotated 30 degrees and sized at ~1090px (clipped by overflow), and a "Train64" wordmark positioned near the top-right.

#### Scenario: Visual panel displays chess board

- GIVEN the AuthLayout renders on a desktop viewport
- WHEN the right panel is displayed
- THEN the panel has a beige background (#f5f0e8) with 20px border-radius
- AND the chess board image is rendered from `app/assets/overlay_3.png`
- AND the chess board is rotated 30 degrees
- AND the chess board overflows the panel and is clipped

#### Scenario: Visual panel displays Train64 wordmark

- GIVEN the AuthLayout renders on a desktop viewport
- WHEN the right panel is displayed
- THEN a "Train64" text element is visible near the top-right of the panel
- AND the text is 24px bold, color #1b1b1b

#### Scenario: Visual panel has box shadow

- GIVEN the AuthLayout renders on a desktop viewport
- WHEN the right visual container is displayed
- THEN it has the specified box shadow: `0px 0px 2px 0px rgba(145,158,171,0.2), 0px 12px 24px -4px rgba(145,158,171,0.12)`

#### Scenario: Visual panel has 16px inset padding

- GIVEN the AuthLayout renders on a desktop viewport
- WHEN the right panel is displayed
- THEN the outer panel container has 16px padding around the inner beige container

### Requirement: Mobile Layout (Below lg Breakpoint)

On viewports below `lg` (<1024px), the visual panel MUST be hidden. The form panel MUST expand to full width. A "Train64" wordmark MUST appear at the top-left of the form area as mobile branding. The subtitle below the wordmark MUST NOT be displayed on mobile.

#### Scenario: Mobile viewport hides visual panel

- GIVEN the viewport width is 375px (mobile)
- WHEN the AuthLayout renders
- THEN the visual panel (chess board, beige background) is NOT visible

#### Scenario: Mobile viewport shows full-width form

- GIVEN the viewport width is 375px (mobile)
- WHEN the AuthLayout renders
- THEN the form panel takes the full viewport width
- AND the form panel has reduced padding (approximately 24px)

#### Scenario: Mobile viewport shows Train64 wordmark

- GIVEN the viewport width is 375px (mobile)
- WHEN the AuthLayout renders
- THEN a "Train64" wordmark is visible at the top-left of the page
- AND there is no subtitle text below the wordmark

#### Scenario: Tablet viewport hides visual panel

- GIVEN the viewport width is 768px (tablet)
- WHEN the AuthLayout renders
- THEN the visual panel is NOT visible
- AND the form panel takes the full viewport width

### Requirement: Dark Mode Exclusion

Auth pages MUST always render with light-mode colors regardless of the user's system `prefers-color-scheme` setting. The auth layout MUST override or ignore the dark mode CSS variables defined in `app/globals.css`.

#### Scenario: Auth page stays light in dark mode

- GIVEN the user's operating system is set to dark mode
- WHEN the AuthLayout renders
- THEN the form panel background is white (#ffffff)
- AND all text colors match the light-mode design tokens
- AND the visual panel background is beige (#f5f0e8)
