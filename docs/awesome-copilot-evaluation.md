# Awesome-Copilot Resources — Evaluation

Resources installed from [github/awesome-copilot](https://github.com/github/awesome-copilot) into this project.

---

## Installed Files

| Type        | File                                            | Source                                           |
| ----------- | ----------------------------------------------- | ------------------------------------------------ |
| Agent       | `.github/agents/react-expert.agent.md`          | `agents/expert-react-frontend-engineer.agent.md` |
| Instruction | `.github/instructions/a11y.instructions.md`     | `instructions/a11y.instructions.md`              |
| Prompt      | `.github/prompts/conventional-commit.prompt.md` | `skills/conventional-commit/SKILL.md` (adapted)  |

---

## 1. React Expert Agent

**File**: `.github/agents/react-expert.agent.md`  
**Invoked via**: `@react-expert` in Copilot Chat

### What It Does

Provides React 19-specific expertise: `use()` hook, Actions API, `useOptimistic`, `useActionState`, `useFormStatus`, ref-as-prop (no `forwardRef`), Context-without-Provider, concurrent rendering with `startTransition`, and TypeScript-first component design.

### Test Task

> "Create a feedback form component with optimistic updates"

### Expected Behavior

The agent should produce code using `useActionState` + `useOptimistic` for form handling instead of legacy `useState` + `onSubmit` patterns. It should include TypeScript types, accessibility attributes, and error boundaries.

### Usefulness Rating: ⭐⭐⭐⭐⭐

**Why**: Directly relevant to this project (React 19 + TypeScript + shadcn/ui). The agent enforces modern patterns that Copilot's default mode doesn't always prefer. Particularly valuable for:

- Avoiding deprecated patterns (`forwardRef`, `Context.Provider`)
- Using new hooks (`useOptimistic`, `useActionState`) correctly
- Ensuring accessibility and performance by default

---

## 2. Accessibility Instructions

**File**: `.github/instructions/a11y.instructions.md`  
**Applied to**: All files (`applyTo: "**"`)

### What It Does

Enforces WCAG 2.2 Level AA conformance across all generated code. Covers:

- Page structure (landmarks, heading hierarchy, skip links)
- Keyboard operability and visible focus
- Color contrast (4.5:1 text, 3:1 boundaries)
- Form accessibility (labels, `aria-required`, `aria-invalid`, error handling)
- Image alternatives and decorative graphic hiding

### Test Task

> Review the login page in `src/App.tsx` for accessibility issues.

### Expected Behavior

Copilot should identify:

- Missing skip link to main content
- Missing `aria-required="true"` on required form fields
- No `aria-invalid` / `aria-describedby` for form error states
- Need for visible focus indicators on all interactive elements
- Potential contrast concerns with custom color tokens

### Usefulness Rating: ⭐⭐⭐⭐⭐

**Why**: Accessibility is consistently overlooked in AI-generated code. This instruction file acts as a passive safety net — it influences every code suggestion without requiring you to remember to ask about a11y. The WCAG 2.2 checklist at the end is particularly valuable for verification.

---

## 3. Conventional Commit Prompt

**File**: `.github/prompts/conventional-commit.prompt.md`  
**Invoked via**: `/conventional-commit` in Copilot Chat (agent mode)

### What It Does

Automates conventional commit message generation:

1. Runs `git status` and `git diff --cached`
2. Analyzes staged changes
3. Generates a properly formatted commit message (`type(scope): description`)
4. Executes `git commit -m "..."`

### Test Task

> Stage the three new files and run the prompt.

### Expected Output

```
feat(copilot): add react-expert agent, a11y instructions, and conventional-commit prompt
```

### Usefulness Rating: ⭐⭐⭐⭐

**Why**: Removes friction from writing good commit messages. Enforces consistency across the team. The only reason it's not 5 stars is that it covers a narrow (but frequent) use case — it does one thing well but doesn't influence code quality like the other two.

---

## Summary

| Resource                   | Rating     | Impact                                                 |
| -------------------------- | ---------- | ------------------------------------------------------ |
| React Expert Agent         | ⭐⭐⭐⭐⭐ | Ensures modern React 19 patterns in all generated code |
| A11y Instructions          | ⭐⭐⭐⭐⭐ | Passive a11y enforcement on every suggestion           |
| Conventional Commit Prompt | ⭐⭐⭐⭐   | Automates consistent commit messages                   |

### Most Useful

**A11y Instructions** — because it applies passively to all files without needing to be explicitly invoked. Every code suggestion benefits from accessibility awareness, making it the highest-impact resource for code quality.

**React Expert Agent** — close second. For a React 19 project specifically, having an agent that knows the latest APIs prevents outdated patterns from creeping in.

### Recommendation

Install all three. The agent and instructions complement each other (modern React + accessibility), while the prompt streamlines your git workflow. Together they cover code generation, code quality, and version control.
