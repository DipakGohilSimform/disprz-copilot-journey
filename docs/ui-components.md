# UI Components

Reference documentation for the shared UI components used across the application.

---

## Table of Contents

- [Button](#button)
- [Card](#card)
- [InfoCard](#infocard)
- [ThemeProvider](#themeprovider)

---

## Button

A versatile button component built on top of `class-variance-authority` with support for multiple variants and sizes.

**Import**

```tsx
import { Button } from "@/components/ui/button"
```

### Props

| Prop        | Type                                                                                               | Default     | Description                                              |
| ----------- | -------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------- |
| `variant`   | `"default"` \| `"outline"` \| `"secondary"` \| `"ghost"` \| `"destructive"` \| `"link"`            | `"default"` | Visual style of the button                               |
| `size`      | `"default"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"icon"` \| `"icon-xs"` \| `"icon-sm"` \| `"icon-lg"` | `"default"` | Size of the button                                       |
| `asChild`   | `boolean`                                                                                          | `false`     | Renders the child element as the button via Radix `Slot` |
| `className` | `string`                                                                                           | —           | Additional CSS classes                                   |

All standard `<button>` HTML attributes are also supported.

### Variants

- **default** — Primary background with primary foreground text.
- **outline** — Bordered button with a transparent background.
- **secondary** — Secondary background color.
- **ghost** — No background until hovered.
- **destructive** — Red-tinted background to indicate a dangerous action.
- **link** — Renders as an underlined text link.

### Usage

```tsx
// Basic
<Button>Click me</Button>

// With variant and size
<Button variant="outline" size="sm">
  Cancel
</Button>

// Destructive action
<Button variant="destructive">Delete</Button>

// Icon-only button
<Button variant="ghost" size="icon">
  <TrashIcon />
</Button>

// Render as a child element (e.g. anchor tag)
<Button asChild>
  <a href="/dashboard">Go to Dashboard</a>
</Button>
```

### Accessibility

- Sets `type="button"` by default to prevent accidental form submissions.
- Supports `aria-invalid`, `aria-expanded`, and `aria-haspopup` states with proper styling.
- Focus-visible ring is applied automatically on keyboard navigation.

---

## Card

A composable card component with multiple sub-components for building structured content areas.

**Import**

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
```

### Sub-Components

| Component         | Purpose                                               |
| ----------------- | ----------------------------------------------------- |
| `Card`            | Outer container                                       |
| `CardHeader`      | Top section with title, description, and actions      |
| `CardTitle`       | Main heading inside the header                        |
| `CardDescription` | Secondary text below the title                        |
| `CardAction`      | Slot for action buttons aligned to the header end     |
| `CardContent`     | Main body content                                     |
| `CardFooter`      | Bottom section with a top border and muted background |

### Card Props

| Prop        | Type                  | Default     | Description                   |
| ----------- | --------------------- | ----------- | ----------------------------- |
| `size`      | `"default"` \| `"sm"` | `"default"` | Controls padding and gap size |
| `className` | `string`              | —           | Additional CSS classes        |

All sub-components accept standard `<div>` HTML attributes and a `className` prop.

### Usage

```tsx
<Card>
  <CardHeader>
    <CardTitle>Project Settings</CardTitle>
    <CardDescription>Manage your project configuration.</CardDescription>
    <CardAction>
      <Button variant="ghost" size="icon-sm">
        <SettingsIcon />
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>Your project is currently on the free plan.</p>
  </CardContent>
  <CardFooter>
    <Button>Upgrade</Button>
  </CardFooter>
</Card>

// Compact card
<Card size="sm">
  <CardHeader>
    <CardTitle>Quick Note</CardTitle>
  </CardHeader>
  <CardContent>
    <p>A smaller card with reduced padding.</p>
  </CardContent>
</Card>
```

---

## InfoCard

A higher-level card component that composes `Card`, `CardHeader`, `CardContent`, and `CardFooter` into a single, declarative API with support for images and action buttons.

**Import**

```tsx
import { InfoCard } from "@/components/ui/info-card"
```

### Props

| Prop          | Type                           | Default     | Description                           |
| ------------- | ------------------------------ | ----------- | ------------------------------------- |
| `title`       | `string`                       | _required_  | Card heading text                     |
| `description` | `string`                       | —           | Secondary text below the title        |
| `image`       | `{ src: string; alt: string }` | —           | Hero image displayed at the top       |
| `actions`     | `CardActionItem[]`             | —           | Action buttons rendered in the footer |
| `size`        | `"default"` \| `"sm"`          | `"default"` | Card size variant                     |
| `className`   | `string`                       | —           | Additional CSS classes                |
| `children`    | `ReactNode`                    | —           | Custom body content                   |

### CardActionItem

```ts
interface CardActionItem {
  id: string
  label: string
  onClick: () => void
  variant?: ButtonVariant  // defaults to "default"
  disabled?: boolean
  ariaLabel?: string       // defaults to label
}
```

### Usage

```tsx
// Simple info card
<InfoCard
  title="Getting Started"
  description="Learn the basics of the platform."
/>

// With an image and actions
<InfoCard
  title="React Workshop"
  description="A hands-on workshop for building modern UIs."
  image={{ src: "/images/workshop.jpg", alt: "Workshop banner" }}
  actions={[
    { id: "enroll", label: "Enroll Now", onClick: handleEnroll },
    {
      id: "details",
      label: "View Details",
      onClick: handleDetails,
      variant: "outline",
    },
  ]}
/>

// With custom body content
<InfoCard title="Statistics">
  <ul>
    <li>Users: 1,204</li>
    <li>Sessions: 5,830</li>
  </ul>
</InfoCard>
```

### Accessibility

- The card container has `role="article"`.
- Images with an empty `alt` string are marked as `role="presentation"`.
- Each action button receives an `aria-label` (falls back to the button label).

---

## ThemeProvider

A context provider that manages light/dark/system theme switching with `localStorage` persistence and OS preference detection.

**Import**

```tsx
import { ThemeProvider, useTheme } from "@/components/theme-provider"
```

### ThemeProvider Props

| Prop                        | Type                                | Default    | Description                                              |
| --------------------------- | ----------------------------------- | ---------- | -------------------------------------------------------- |
| `defaultTheme`              | `"dark"` \| `"light"` \| `"system"` | `"system"` | Theme used when no value is stored in `localStorage`     |
| `storageKey`                | `string`                            | `"theme"`  | Key used for `localStorage` persistence                  |
| `disableTransitionOnChange` | `boolean`                           | `true`     | Temporarily disables CSS transitions during theme switch |

### useTheme Hook

Returns the current theme context:

```ts
const { theme, setTheme } = useTheme()
```

| Property   | Type                                | Description                       |
| ---------- | ----------------------------------- | --------------------------------- |
| `theme`    | `"dark"` \| `"light"` \| `"system"` | Current theme value               |
| `setTheme` | `(theme: Theme) => void`            | Updates the theme and persists it |

### Setup

Wrap your application root with `ThemeProvider`:

```tsx
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <MainLayout />
    </ThemeProvider>
  )
}
```

### Usage

```tsx
import { useTheme } from "@/components/theme-provider"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle theme
    </button>
  )
}
```

### Features

- **System preference detection** — Automatically follows `prefers-color-scheme` when set to `"system"`.
- **Keyboard shortcut** — Press **D** to cycle through themes (disabled in editable fields).
- **Cross-tab sync** — Theme changes propagate across browser tabs via the `storage` event.
- **Transition suppression** — Optionally disables CSS transitions during theme changes to prevent flickering.

---

## Summary

| Component       | File                                                                      | Purpose                               |
| --------------- | ------------------------------------------------------------------------- | ------------------------------------- |
| `Button`        | [src/components/ui/button.tsx](../src/components/ui/button.tsx)           | Configurable button with variants     |
| `Card`          | [src/components/ui/card.tsx](../src/components/ui/card.tsx)               | Composable card layout                |
| `InfoCard`      | [src/components/ui/info-card.tsx](../src/components/ui/info-card.tsx)     | Declarative card with image & actions |
| `ThemeProvider` | [src/components/theme-provider.tsx](../src/components/theme-provider.tsx) | Theme context with persistence        |
