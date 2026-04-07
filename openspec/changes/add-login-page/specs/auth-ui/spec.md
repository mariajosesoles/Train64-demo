# Spec: Auth UI Components & SignIn Page

## Overview

Shared auth UI components in `app/components/auth/` and the SignIn page at `app/(auth)/sign-in/page.tsx`. All components are reusable across future auth screens (SignUp, CreateProfile). This change implements UI only -- no authentication logic, no form validation beyond HTML attributes, and no API integration.

## Requirements

### Requirement: FormHeader Component

The FormHeader component MUST render a heading (h1) and a subtitle paragraph. Both text values MUST be configurable via props.

#### Scenario: SignIn page renders correct heading and subtitle

- GIVEN the SignIn page renders the FormHeader
- WHEN the component is displayed
- THEN the heading text reads "Sign in"
- AND the heading is styled at 24px bold (#212b36) with 36px line-height
- AND the subtitle text reads "Sign up to start your chess training journey"
- AND the subtitle is styled at 14px regular (#637381) with 22px line-height

#### Scenario: FormHeader accepts custom text

- GIVEN a FormHeader is rendered with heading "Create account" and subtitle "Join the platform"
- WHEN the component is displayed
- THEN the heading text reads "Create account"
- AND the subtitle text reads "Join the platform"

### Requirement: SocialLoginButton Component

The SocialLoginButton MUST render a full-width button with an inline Google "G" SVG icon and a configurable label. The button MUST be a no-op (no auth logic).

#### Scenario: Google SSO button renders on SignIn page

- GIVEN the SignIn page renders the SocialLoginButton
- WHEN the component is displayed
- THEN a button is visible with the text "Sign in with Google"
- AND a multi-color Google "G" SVG icon is visible to the left of the text
- AND the button has a white background with #f2f4f7 border and 6px border-radius
- AND the button has box-shadow `0px 0px 1px 0px rgba(0,0,0,0.18), 0px 2px 30px 0px rgba(0,0,0,0.08)`
- AND the label text is 13px regular (#344054) with 20px line-height

#### Scenario: Clicking Google SSO button does nothing

- GIVEN the SocialLoginButton is displayed
- WHEN a user clicks the button
- THEN no navigation, API call, or side effect occurs

### Requirement: Divider Component

The Divider MUST render the text "OR" centered horizontally, styled as uppercase 12px bold (#919eab) with 18px line-height.

#### Scenario: OR divider renders between social button and form fields

- GIVEN the SignIn page renders the Divider
- WHEN the component is displayed
- THEN the text "OR" is visible, centered, in uppercase
- AND the text is 12px bold (#919eab)

### Requirement: FormGroup Component

The FormGroup component MUST wrap a Label and an Input with a vertical gap of 6px. It MUST accept children or compose Label + Input internally.

#### Scenario: Email form group renders label and input

- GIVEN a FormGroup is rendered for the "Email address" field
- WHEN the component is displayed
- THEN a label reading "Email address" appears above the input
- AND there is a 6px gap between the label and the input

### Requirement: Label Component

The Label component MUST render label text at 12px semibold (#637381) with a white mask element that creates a border-notch visual effect over the input border.

#### Scenario: Label renders with correct styling

- GIVEN a Label component is rendered with text "Email address"
- WHEN the component is displayed
- THEN the text "Email address" is visible
- AND the text is 12px semibold (#637381)
- AND a white mask element (2px height) exists behind the label text

### Requirement: Input Component

The Input component MUST render a styled text input with 8px border-radius, 1px border at `rgba(145,158,171,0.2)`, white background, and internal padding of 16px vertical / 14px horizontal. It MUST support `text` and `password` input types. The input height MUST be 54px.

#### Scenario: Email input renders with placeholder

- GIVEN an Input is rendered with type "text" and placeholder "example@mail.com"
- WHEN the component is displayed
- THEN the input has placeholder text "example@mail.com" in #919eab at 14px
- AND the input has 8px border-radius
- AND the input has a 1px border at `rgba(145,158,171,0.2)`
- AND the input height is 54px

#### Scenario: Password input renders with obscured placeholder

- GIVEN an Input is rendered with type "password"
- WHEN the component is displayed
- THEN the input masks its content (type="password")
- AND the input has the same border, radius, and sizing as text inputs

#### Scenario: Input accepts user text

- GIVEN an Input is rendered and empty
- WHEN the user types "user@example.com"
- THEN the input displays the typed value in #212b36 at 14px

### Requirement: AuthButton Component (Primary CTA)

The AuthButton MUST render a full-width button with near-black background (#1b1b1b), white text at 15px bold, 8px border-radius, and a right-facing arrow/chevron icon. The label MUST be configurable via props.

#### Scenario: Sign in CTA button renders correctly

- GIVEN the SignIn page renders the AuthButton
- WHEN the component is displayed
- THEN the button text reads "Sign in"
- AND the button has a #1b1b1b background with white text
- AND the button has 8px border-radius
- AND a right-facing arrow icon is visible to the right of the text
- AND the button is full width

#### Scenario: CTA button form submission is a no-op

- GIVEN the AuthButton is displayed on the SignIn page
- WHEN the user clicks the button
- THEN no navigation, API call, or form submission side effect occurs

### Requirement: FormFooter Component

The FormFooter MUST render a row with a plain-text prompt and a bold link. Both texts MUST be configurable via props.

#### Scenario: SignIn page footer renders navigation prompt

- GIVEN the SignIn page renders the FormFooter
- WHEN the component is displayed
- THEN the text "New user?" is visible in 14px regular (#1b1b1b)
- AND the text "Sign up" is visible in 14px semibold (#1b1b1b)
- AND the two texts are separated by an 8px gap

#### Scenario: Footer link is present but non-functional

- GIVEN the FormFooter link "Sign up" is displayed
- WHEN the user clicks "Sign up"
- THEN no navigation occurs (the SignUp page does not exist yet)

### Requirement: Forgot Password Link (SignIn-specific)

The SignIn page MUST display a "Forgot password?" link right-aligned below the password input field. The link MUST be styled as 14px regular (#212b36) with underline decoration. The link MUST be non-functional (no destination page exists).

#### Scenario: Forgot password link renders on SignIn page

- GIVEN the SignIn page has rendered
- WHEN the user views the password field area
- THEN a "Forgot password?" link is visible, right-aligned
- AND the link text is 14px regular (#212b36) with underline

#### Scenario: Forgot password link is non-functional

- GIVEN the "Forgot password?" link is displayed
- WHEN the user clicks the link
- THEN no navigation occurs

### Requirement: SignIn Page Composition

The SignIn page at `app/(auth)/sign-in/page.tsx` MUST compose the shared auth components in the following vertical order within the AuthLayout form panel: FormHeader, SocialLoginButton, Divider, email FormGroup, password FormGroup, "Forgot password?" link, AuthButton, FormFooter. The form sections MUST be separated by 40px gaps. The fields stack (inputs, forgot password link, CTA button, footer) MUST use 20px internal gaps.

#### Scenario: SignIn page displays all form elements in correct order

- GIVEN the user navigates to `/sign-in`
- WHEN the page renders completely
- THEN the following elements appear top-to-bottom in order:
  1. FormHeader with "Sign in" heading
  2. SocialLoginButton with Google icon
  3. "OR" Divider
  4. Email address FormGroup (label + input)
  5. Password FormGroup (label + input)
  6. "Forgot password?" link (right-aligned)
  7. "Sign in" AuthButton with arrow icon
  8. FormFooter with "New user? Sign up"

#### Scenario: SignIn page has correct spacing between sections

- GIVEN the SignIn page renders on desktop
- WHEN the form content is displayed
- THEN there is approximately 40px gap between FormHeader, SocialLoginButton, Divider, and the fields block
- AND there is approximately 20px gap between items within the fields block

### Requirement: Barrel Export

All shared auth components MUST be exported from `app/components/auth/index.ts` as a barrel file.

#### Scenario: Components are importable from barrel file

- GIVEN the barrel file exists at `app/components/auth/index.ts`
- WHEN another module imports from `app/components/auth`
- THEN AuthLayout, FormHeader, FormGroup, Input, Label, SocialLoginButton, Divider, FormFooter, and AuthButton are all available as named exports

### Requirement: Component Reusability

All shared auth components MUST be props-driven with no SignIn-specific hardcoded values. Text content (headings, labels, button text, footer prompts) MUST be passed via props so the same components can be reused for SignUp and CreateProfile screens.

#### Scenario: Components accept different content for SignUp use case

- GIVEN the shared components are imported for a hypothetical SignUp page
- WHEN FormHeader receives heading="Create account" and AuthButton receives label="Create account"
- THEN each component renders the provided prop values, not hardcoded SignIn text

### Requirement: No Authentication Logic

All auth components and the SignIn page MUST be UI-only. No authentication API calls, no token storage, no session management, no form validation logic beyond basic HTML attributes (e.g., `type="email"`, `required`).

#### Scenario: SignIn page contains no API integration

- GIVEN the SignIn page source code
- WHEN reviewed for network calls
- THEN no `fetch`, `axios`, server actions, or API route calls exist
- AND no authentication libraries are imported

#### Scenario: Form submission does not trigger side effects

- GIVEN the SignIn page form is filled with email and password
- WHEN the user clicks the "Sign in" button
- THEN no HTTP request is made
- AND no redirect occurs
- AND no data is persisted to storage
