# Disprz Copilot Journey - Practice and Assignment Project

A hands-on practice project for the **Disprz Copilot Journey** course.

This repository is designed to help you practice:

- Building UI with React + TypeScript + Tailwind + shadcn/ui
- Creating reusable components and documenting them
- Running a simple Express API
- Using GitHub Copilot effectively in day-to-day development

## Tech Stack

- Frontend: React 19, TypeScript, Vite
- UI: Tailwind CSS v4, shadcn/ui, Radix UI, Lucide icons
- Backend: Express 5 (Node.js)
- Quality tools: ESLint, Prettier, TypeScript type-checking

## Learning Goals

By the end of this project, you should be able to:

- Scaffold and run a modern frontend app with Vite
- Build and compose reusable UI components
- Manage theme switching (light/dark/system)
- Call and validate API endpoints
- Use Copilot to speed up coding, refactoring, and documentation tasks

## Project Structure

```text
.
|-- public/
|-- server/
|   `-- src/
|       `-- index.js          # Express API entry
|-- src/
|   |-- components/
|   |   |-- theme-provider.tsx
|   |   `-- ui/
|   |       |-- button.tsx
|   |       |-- card.tsx
|   |       |-- info-card.tsx
|   |       `-- index.ts
|   |-- lib/
|   |   `-- utils.ts
|   |-- App.tsx
|   |-- index.css
|   `-- main.tsx
|-- docs/
|   `-- ui-components.md      # UI component docs
`-- package.json
```

## Prerequisites

- Node.js 20+ (recommended)
- pnpm (recommended package manager)

If pnpm is not installed:

```bash
npm install -g pnpm
```

## Installation

```bash
pnpm install
```

## Available Scripts

| Command          | Description                                |
| ---------------- | ------------------------------------------ |
| `pnpm dev`       | Start frontend dev server                  |
| `pnpm api:dev`   | Start backend API in watch mode            |
| `pnpm api:start` | Start backend API (non-watch)              |
| `pnpm build`     | TypeScript build + Vite production build   |
| `pnpm preview`   | Preview production build locally           |
| `pnpm lint`      | Run ESLint                                 |
| `pnpm format`    | Format TypeScript/TSX files using Prettier |
| `pnpm typecheck` | Run TypeScript type checking               |

## Running the Project Locally

Run frontend and backend in separate terminals.

1. Start frontend:

```bash
pnpm dev
```

2. Start backend API:

```bash
pnpm api:dev
```

Frontend default URL: `http://localhost:5173`  
Backend default URL: `http://localhost:4000`

To change backend port:

```bash
API_PORT=5000 pnpm api:dev
```

## API Endpoint (Current)

### `POST /api/users`

Creates a user with basic validation.

Request body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

Success response: `201 Created`

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": "uuid",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "createdAt": "2026-04-06T12:34:56.000Z"
  }
}
```

Validation failure response: `400 Bad Request`

## UI Components

Core UI components are in `src/components/ui`.

- Button
- Card
- InfoCard
- Theme Provider

Detailed documentation is available in `docs/ui-components.md`.

## Course Practice Ideas

Use this project for assignment practice:

1. Build a user registration form and call `POST /api/users`.
2. Add form validation feedback using `Card` and `Button` components.
3. Create a dashboard page using multiple `InfoCard` blocks.
4. Add loading and error states for API calls.
5. Extend the backend with `GET /api/users` and `DELETE /api/users/:id`.
6. Improve UX with responsive layout and keyboard accessibility.

## Suggested Development Workflow

1. Pick a small feature.
2. Ask Copilot for implementation options.
3. Implement incrementally.
4. Run `pnpm lint` and `pnpm typecheck`.
5. Update docs for any new component/behavior.

## Notes

- Press `d` in the app to toggle dark mode quickly.
- Theme preference is persisted in local storage.
- This repository is intentionally small and learning-focused.

## License

This project is intended for learning and assignment use in the Disprz Copilot Journey course.
