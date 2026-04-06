---
name: figma-to-code
description: Convert Figma designs into production-ready React components with Tailwind and shadcn/ui. Enforces pixel-perfect implementation, token-based styling, no arbitrary Tailwind values, no inline CSS, and accessibility best practices.
---

# Skill: Figma to Code (React + Tailwind + shadcn)

## Description

Use this skill when a user asks to implement or adapt UI from Figma (or FigJam) into code.

Primary outcomes:

- Pixel-perfect visual implementation from design specs
- Production-ready React components using project conventions
- Strict Tailwind + shadcn approach without inline styles or arbitrary values
- Accessible, semantic UI suitable for real product usage

Keywords: figma, design-to-code, pixel perfect, react, tailwind, shadcn, accessibility, tokens, design system

## How To Use

Use this skill by explicitly asking for it in your prompt and providing complete design context.

1. Mention skill usage directly.
2. Provide Figma input (URL, node, or screenshot).
3. Define target output (single component, section, or full page).
4. Include breakpoints and interaction states.
5. Enforce required constraints from this skill.

Recommended instruction to include in prompts:

"Use the figma-to-code skill. Keep implementation pixel-perfect. Use variables/tokens only, no arbitrary Tailwind values, no inline CSS, and ensure accessibility."

## Required Input Checklist

Before implementation starts, gather:

- Figma URL and node/screen reference
- Scope (what exactly to build)
- Responsive behavior (desktop/tablet/mobile)
- States (default, hover, focus, active, disabled, error)
- Content behavior (fixed text vs dynamic props)
- Existing components to reuse from `@/components/ui`
- Token source (theme variables, semantic colors, spacing scale)

If any required input is missing, proceed with closest valid token mapping and document assumptions in output notes.

## When To Use

Use this skill for requests such as:

- "Build this screen from Figma"
- "Convert this Figma component to React"
- "Implement this UI pixel-perfect"
- "Use existing shadcn components to match this design"

Do not use this skill for:

- Backend-only tasks
- Non-UI refactoring with no design requirement
- Pure documentation tasks unrelated to design implementation

## Tech Stack Rules

- Use React functional components only.
- Use TypeScript with explicit and strict typings.
- Use Tailwind CSS classes only for styling.
- Use shadcn/ui components from `@/components/ui` whenever possible.
- If a required shadcn component is missing, install with the CLI and follow project export conventions.

## Non-Negotiable Design Rules

- Follow Figma exactly for spacing, alignment, visual hierarchy, color, typography, and states.
- Maintain pixel-perfect layout at all supported breakpoints.
- Use design tokens and CSS variables only (project tokens first).
- Do not use arbitrary Tailwind values (for example `p-[13px]`, `text-[15px]`, `rounded-[7px]`).
- Do not use inline CSS styles.
- Do not invent missing design details. If a value is not defined, use the nearest existing project token and note the assumption.

## Accessibility Rules

- Use semantic HTML elements (`button`, `nav`, `main`, `section`, `label`, etc.).
- Ensure keyboard accessibility for all interactive elements.
- Provide visible focus states.
- Include `aria-*` attributes only when semantic HTML is not sufficient.
- Ensure adequate color contrast and readable text sizes.
- Provide meaningful alt text for informative images, and empty alt text for decorative images.

## Implementation Workflow

1. Parse the Figma structure and identify reusable blocks.
2. Check existing components in `src/components/ui` and reuse before creating new ones.
3. Map Figma styles to existing tokens and Tailwind utility classes.
4. Build responsive structure with clear component boundaries.
5. Add interaction states (hover, active, focus, disabled) exactly as designed.
6. Validate accessibility and keyboard behavior.
7. Keep code clean, readable, and reusable.

## Prompt Templates

### Template: Component

"Use the figma-to-code skill. Convert this Figma [component name] into a reusable React + TypeScript component using Tailwind and shadcn. Match Figma pixel-perfect. Use tokens/variables only. Do not use arbitrary Tailwind values. Do not use inline CSS. Include semantic HTML, keyboard support, and proper aria where needed. Output component code and a short assumptions note."

### Template: Full Page

"Use the figma-to-code skill. Implement this Figma page in React + Tailwind + shadcn with pixel-perfect accuracy across desktop and mobile. Reuse existing components from `@/components/ui` first. Use only design tokens/variables, no arbitrary values, no inline CSS. Include all interaction states and accessibility requirements. Output file-by-file code with brief rationale for token mapping."

### Template: Refactor Existing UI

"Use the figma-to-code skill. Refactor the current UI to match the provided Figma design exactly. Preserve behavior, improve structure for reusability, and enforce: variables-only styling, no arbitrary Tailwind values, no inline CSS, and accessibility compliance."

## Output Requirements

The generated output should include:

- Clean React component(s)
- Tailwind-based styling only
- Reusable composition with shadcn components where applicable
- No inline CSS and no arbitrary values
- Accessible markup and interactions
- Short notes for assumptions or token mappings (only when needed)

## Definition Of Done

Implementation is complete only if all checks pass:

- Visual match is pixel-perfect against Figma
- No inline styles are present
- No arbitrary Tailwind values are used
- Styling uses project variables/tokens only
- Interactive elements are keyboard accessible
- Focus states are visible and consistent
- Semantic HTML is used appropriately
- Code is reusable, readable, and typed

## Example Prompt

"Convert this Figma card section into React using shadcn and Tailwind. Keep it pixel-perfect. Use design tokens only, no arbitrary values, no inline styles, and ensure keyboard + screen-reader accessibility."
