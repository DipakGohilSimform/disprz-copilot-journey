---
description: "Generate a conventional commit message for staged changes"
agent: "agent"
tools:
  [
    "execute/getTerminalOutput",
    "execute/runInTerminal",
    "read/terminalLastCommand",
    "read/terminalSelection",
    "search/changes",
    "read/terminalLastCommand",
  ]
---

# Conventional Commit Message Generator

Generate a commit message following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## Workflow

1. Run `git status` to review changed files.
2. Run `git diff --cached` to inspect staged changes. If nothing is staged, run `git diff` instead.
3. Analyze the changes and determine:
   - The **type** of change
   - The **scope** (affected area)
   - A concise **description** in imperative mood

## Commit Message Structure

```
type(scope): description

[optional body]

[optional footer]
```

## Allowed Types

| Type       | When to use                                             |
| ---------- | ------------------------------------------------------- |
| `feat`     | A new feature                                           |
| `fix`      | A bug fix                                               |
| `docs`     | Documentation only changes                              |
| `style`    | Formatting, missing semicolons, etc (no code change)    |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf`     | Performance improvement                                 |
| `test`     | Adding or correcting tests                              |
| `build`    | Changes to build system or dependencies                 |
| `ci`       | CI configuration changes                                |
| `chore`    | Other changes that don't modify src or test files       |
| `revert`   | Reverts a previous commit                               |

## Rules

- **Description**: Use imperative mood ("add" not "added"), lowercase, no period at end
- **Scope**: Optional but recommended — use the module, component, or area name
- **Body**: Optional — explain _what_ and _why_, not _how_
- **Footer**: Use for breaking changes (`BREAKING CHANGE: ...`) or issue references (`Closes #123`)
- **Breaking changes**: Append `!` after type/scope (e.g., `feat!:`) and add footer

## Examples

- `feat(auth): add login form with email and password fields`
- `fix(ui): correct button alignment on mobile viewport`
- `docs: update README with setup instructions`
- `refactor(api): simplify user validation logic`
- `chore: update dependencies`
- `feat!: send email on registration (BREAKING CHANGE: email service required)`

## Output

After generating the commit message, run:

```bash
git commit -m "type(scope): description"
```
