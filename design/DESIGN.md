---
name: Luminous Clarity
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#464554'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#6b38d4'
  on-secondary: '#ffffff'
  secondary-container: '#8455ef'
  on-secondary-container: '#fffbff'
  tertiary: '#8127cf'
  on-tertiary: '#ffffff'
  tertiary-container: '#9c48ea'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style
The brand personality centers on the "Flow State"—the frictionless transition from thought to written word. This design system utilizes a **Minimalist Modern** aesthetic with **Glassmorphic** accents to evoke feelings of intelligence, speed, and weightless creativity. 

The target audience consists of professionals, developers, and content creators who value efficiency and precision. The visual language uses expansive whitespace to reduce cognitive load, while vibrant indigo-to-purple gradients serve as "energy markers," highlighting where the AI is actively assisting the user. The emotional response is one of calm empowerment and high-tech reliability.

## Colors
The palette is anchored by a sophisticated "Hyper-Gradient" flowing from Indigo (#6366F1) through Violet (#8B5CF6) to Purple (#A855F7). This gradient is reserved for primary actions, data visualization, and subtle decorative accents. 

Backgrounds utilize a tiered grayscale:
- **Surface Primary:** #FFFFFF (Main content areas)
- **Surface Secondary:** #F8FAFC (Section backgrounds)
- **Surface Tertiary:** #F1F5F9 (Input fields and inactive states)

Functional colors follow standard conventions: Success (Emerald), Warning (Amber), and Error (Rose), but are desaturated to maintain the minimalist professional tone.

## Typography
This design system pairs **Plus Jakarta Sans** for headlines with **Inter** for body copy. Plus Jakarta Sans provides a friendly, modern geometric touch that softens the technical nature of AI. Inter is used for all functional and long-form text to ensure maximum readability and a systematic feel.

- **Headlines:** Use tight letter-spacing and heavy weights (Bold/ExtraBold) to create impact.
- **Body:** Use a generous line height (1.5x - 1.6x) to facilitate scanning.
- **Labels:** Use Medium or SemiBold weights with slight tracking (letter-spacing) for UI labels, buttons, and overlines.

## Layout & Spacing
The layout follows a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile devices. 

- **Sectioning:** Vertical rhythm is maintained with 120px padding between major landing page sections to ensure "breathing room."
- **Grids:** The 3x2 feature grid uses a 24px gap. On tablet (under 1024px), this reflows to 2x3, and on mobile (under 640px) to a 1x6 stack.
- **Alignment:** Consistent left-alignment is preferred for copy-heavy sections, while hero headers and CTA sections are center-aligned for visual gravity.

## Elevation & Depth
Hierarchy is established through **Tonal Layering** and **Ambient Shadows**. 

1.  **Level 0 (Base):** #F8FAFC (Neutral background).
2.  **Level 1 (Cards):** White background with a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.04)) and a 1px border (#F1F5F9).
3.  **Level 2 (Active/Hover):** Increased shadow depth and a subtle 1px border using the primary gradient at 20% opacity.
4.  **Floating Elements (Modals/Popovers):** Higher elevation with a backdrop blur (blur: 8px) to create a glassmorphic effect over the content.

## Shapes
The shape language is consistently **Rounded**, reflecting the approachability of the AI assistant. 
- **Standard Cards/Buttons:** 0.5rem (8px) radius.
- **Pro Plan Emphasis/Hero CTAs:** 1rem (16px) radius to differentiate from standard elements.
- **Feature Icons:** Encapsulated in "squircle" containers or circles with 1.5rem (24px) radius.

## Components

### Buttons
- **Primary:** Full Indigo-to-Purple gradient background, white text, 0.5rem radius. On hover, apply a slight scale (1.02x) and increase shadow intensity.
- **Secondary:** White background with a 1px border (#E2E8F0), slate text.
- **CTA High-Contrast:** Large padding (16px 32px), bold weight, with a subtle "glow" effect (drop shadow matching the primary color at 30% opacity).

### 3x2 Feature Grid
Cards should have a white background, 1px light gray border, and 24px internal padding. On hover, the border transitions to a primary gradient and the icon container gently floats upwards.

### Pricing Tables
- **Standard/Free:** Minimalist, no shadow, outlined border.
- **Pro (Recommended):** Elevated with a subtle gradient border and a "Most Popular" badge. The pricing toggle (Monthly/Yearly) uses a pill-shaped "switch" with the primary gradient for the active state.

### Accordion FAQs
Clean, borderless style. Use a simple plus/minus or chevron icon that rotates 180 degrees on expansion. Active items should have a light Indigo (#EEF2FF) background.

### Input Fields
Soft gray background (#F1F5F9) that transitions to white with a primary-colored border on focus. Label text is always outside the field for accessibility.