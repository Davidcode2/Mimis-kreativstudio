# AGENTS.md - Mimis Kreativstudio

Guidelines for AI agents working in this Astro-based florist website codebase.

## Build Commands

```bash
# Development
npm run dev              # Start dev server at localhost:4321
npm run build            # Build production site to ./dist/
npm run preview          # Preview production build locally

# Astro CLI
npm run astro check      # Type-check the project
npm run astro -- --help  # Get Astro CLI help
```

**Note:** No test framework is currently configured.

## Tech Stack

- **Framework**: Astro 6.0+ with TypeScript (strict mode)
- **Styling**: Tailwind CSS 4.x with custom theme
- **Node**: >= 22.12.0 (ES modules)
- **Fonts**: WindSong (headings), Source Serif 4 (body) via Google Fonts
- **Deployment**: Docker → GitHub Container Registry → ArgoCD

## Code Style Guidelines

### TypeScript
- Use strict TypeScript (`astro/tsconfigs/strict`)
- Define explicit interfaces for component props
- Export types from data files (see `src/data/services.ts`)
- Use ES module imports (`import` not `require`)

### Astro Components
```astro
---
// Component comment explaining purpose
type ImagePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface Props {
  src: string;
  alt: string;
  imagePosition?: ImagePosition;  // default documented
  className?: string;
}

const { src, alt, imagePosition = 'top-right', className = '' } = Astro.props;
---
```

### Tailwind CSS Patterns
- Custom colors defined in `src/styles/global.css` using `@theme` (Tailwind v4):
  - `gold-50` through `gold-900` (warm elegant gold)
  - `champagne-50` through `champagne-900` (soft cream)
- Font utilities: `font-heading` (WindSong), `font-body` (Source Serif 4)
- Use `class:list` directive for conditional classes
- Breakpoints: `sm:`, `md:`, `lg:` (mobile-first)

### Naming Conventions
- Components: PascalCase (e.g., `Hero.astro`, `ServicesGrid.astro`)
- Utilities/data: camelCase (e.g., `services.ts`)
- Directories: lowercase with hyphens (e.g., `navigation/`, `sections/`)
- Props destructuring with defaults in `const` declaration

### File Organization
```
src/
├── components/
│   ├── navigation/     # Nav components (MainNav, FooterNav)
│   └── sections/       # Page sections (Hero, ServicesGrid, etc.)
├── layouts/            # Page layouts (BaseLayout, PageLayout)
├── pages/              # Routes (Astro file = route)
│   ├── leistungen/     # Service subpages
│   │   └── [service].astro  # Dynamic service routes
│   ├── datenschutz.astro
│   ├── galerie.astro
│   ├── impressum.astro
│   ├── index.astro
│   ├── kontakt.astro
│   ├── leistungen.astro
│   └── ueber-mich.astro
├── data/               # Data & types
│   ├── gallery.ts      # Gallery image data
│   ├── page-content.ts # Page text content
│   ├── services-display.ts # Service display data
│   ├── services.ts     # Service definitions
│   └── site-config.ts  # Site configuration
├── styles/
│   └── global.css      # Tailwind + custom theme
└── scripts/            # Build/utility scripts
    ├── convert-images.js
    └── organize-images.js
```

### Error Handling
- Use TypeScript strict mode for compile-time safety
- Validate data in data files, assume valid in components
- Optional chaining for potentially undefined data

### Accessibility
- Always include `alt` attributes on images
- Use semantic HTML (`<main>`, `<section>`, `<nav>`)
- ARIA labels for interactive elements
- German language content (`lang="de"`)

### Images
- Place in `/public/images/`
- Use `.webp` format for photos
- Organize in subdirectories by service type:
  ```
  public/images/
  ├── services/
  │   ├── blumenkraenze/
  │   ├── blumenstrausse/
  │   ├── loops/
  │   ├── frisuren/
  │   ├── adventskraenze/
  │   └── workshops/
  ├── hero/
  └── about/
  ```
- Include `loading="lazy"` for below-fold images
- Use sharp (dev dependency) for image optimization

### Git Workflow
- CI/CD auto-bumps version in `package.json` on push to main
- Builds Docker image and deploys via ArgoCD
- No manual deployment needed

## Task Tracking with bd (beads)

This project uses `bd` for task/issue tracking. Tasks are stored in a Dolt database and synced to GitHub.

### Setup (One-time per repo)

```bash
cd <repo>
bd init
bd dolt remote add origin git+ssh://git@github.com/Davidcode2/$(basename $PWD).git
bd dolt push
```

### Daily Workflow

```bash
# Check ready work
bd ready

# Create new task
bd create "Task title" -p 1 -t task --description="Details here"

# Claim and work
bd update <id> --claim

# Complete
bd close <id> --reason "Done"

# Sync to GitHub
bd dolt push
```

### Multi-Machine Sync

```bash
# On new machine after git clone
cd <repo>
bd init
bd dolt pull
bd ready
```

### Key Commands

| Command | Purpose |
|---------|---------|
| `bd ready` | Show tasks with no blockers |
| `bd create "Title" -p 1` | Create P1 task |
| `bd update <id> --claim` | Claim task atomically |
| `bd close <id> --reason "X"` | Complete task |
| `bd dolt push` | Sync to GitHub |
| `bd dolt pull` | Get updates from GitHub |
| `bd show <id>` | View task details |
| `bd dep add <child> <parent>` | Link dependencies |

**Note:** Always run `bd dolt push` after creating/closing/updating tasks to sync with GitHub.

<!-- BEGIN BEADS INTEGRATION -->
## Issue Tracking with bd (beads)

**IMPORTANT**: This project uses **bd (beads)** for ALL issue tracking. Do NOT use markdown TODOs, task lists, or other tracking methods.

### Why bd?

- Dependency-aware: Track blockers and relationships between issues
- Git-friendly: Dolt-powered version control with native sync
- Agent-optimized: JSON output, ready work detection, discovered-from links
- Prevents duplicate tracking systems and confusion

### Quick Start

**Check for ready work:**

```bash
bd ready --json
```

**Create new issues:**

```bash
bd create "Issue title" --description="Detailed context" -t bug|feature|task -p 0-4 --json
bd create "Issue title" --description="What this issue is about" -p 1 --deps discovered-from:bd-123 --json
```

**Claim and update:**

```bash
bd update <id> --claim --json
bd update bd-42 --priority 1 --json
```

**Complete work:**

```bash
bd close bd-42 --reason "Completed" --json
```

### Issue Types

- `bug` - Something broken
- `feature` - New functionality
- `task` - Work item (tests, docs, refactoring)
- `epic` - Large feature with subtasks
- `chore` - Maintenance (dependencies, tooling)

### Priorities

- `0` - Critical (security, data loss, broken builds)
- `1` - High (major features, important bugs)
- `2` - Medium (default, nice-to-have)
- `3` - Low (polish, optimization)
- `4` - Backlog (future ideas)

### Workflow for AI Agents

1. **Check ready work**: `bd ready` shows unblocked issues
2. **Claim your task atomically**: `bd update <id> --claim`
3. **Work on it**: Implement, test, document
4. **Discover new work?** Create linked issue:
   - `bd create "Found bug" --description="Details about what was found" -p 1 --deps discovered-from:<parent-id>`
5. **Complete**: `bd close <id> --reason "Done"`

### Auto-Sync

bd automatically syncs via Dolt:

- Each write auto-commits to Dolt history
- Use `bd dolt push`/`bd dolt pull` for remote sync
- No manual export/import needed!

### Important Rules

- ✅ Use bd for ALL task tracking
- ✅ Always use `--json` flag for programmatic use
- ✅ Link discovered work with `discovered-from` dependencies
- ✅ Check `bd ready` before asking "what should I work on?"
- ❌ Do NOT create markdown TODO lists
- ❌ Do NOT use external issue trackers
- ❌ Do NOT duplicate tracking systems

For more details, see README.md and docs/QUICKSTART.md.

## Landing the Plane (Session Completion)

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd dolt push
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds

<!-- END BEADS INTEGRATION -->
