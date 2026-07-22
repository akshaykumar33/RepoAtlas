# RepoAtlas — Publishing & Release Guide

> Complete step-by-step procedures for building, releasing, and publishing **RepoAtlas** packages to **npm** and the **Visual Studio Code Marketplace**.

---

## 📦 Package Ecosystem

RepoAtlas is a pnpm monorepo. All reusable engine packages are published under the **`@repoatlasdev`** npm scope.

| Package                       | Description                                                      | Registry                     |
| :---------------------------- | :--------------------------------------------------------------- | :--------------------------- |
| `@repoatlasdev/core`          | Scanner, parser, `TreeNode` model                                | npm                          |
| `@repoatlasdev/renderers`     | Theme renderers (VSCode, Material, Unicode, ASCII, Nerd Font)    | npm                          |
| `@repoatlasdev/exporters`     | Format exporters (Markdown, Mermaid, JSON, YAML, HTML, XML, CSV) | npm                          |
| `@repoatlasdev/icons`         | Icon pack mapping & symbol lookup                                | npm                          |
| `@repoatlasdev/config`        | Config file loader (`.json`, `.yaml`, `.ts`, `.js`)              | npm                          |
| `@repoatlasdev/detector`      | Framework, language, monorepo detection                          | npm                          |
| `@repoatlasdev/utils`         | Pure functional helper utilities                                 | npm                          |
| `@repoatlasdev/cli`           | CLI executable (`repo-atlas generate`)                           | npm                          |
| `@repoatlasdev/github-action` | GitHub Action for automated docs                                 | npm                          |
| `repo-atlas` (VS Code)        | VS Code Extension                                                | VS Code Marketplace (manual) |

---

## 🚀 npm Publishing (`@repoatlasdev/*`)

### Automated (GitHub Actions) — Recommended

The `.github/workflows/publish.yml` workflow runs on every push to `main`:

1. Installs dependencies, builds, typechecks, and runs tests.
2. Uses [Changesets](https://github.com/changesets/changesets) to detect version bumps.
3. Publishes changed packages to npm automatically.

**Required GitHub Secret:**

| Secret Name | Where to Get It                                                                                      |
| :---------- | :--------------------------------------------------------------------------------------------------- |
| `NPM_TOKEN` | [npmjs.com → Access Tokens → Generate New Token → Automation](https://www.npmjs.com/settings/tokens) |

Add it at: **GitHub Repo → Settings → Secrets and variables → Actions → New repository secret**

### Manual (Terminal)

```bash
# Build all packages
pnpm build

# Publish all public packages
pnpm publish -r --access public --no-git-checks
```

### Version Bumping with Changesets

```bash
# Create a changeset (interactive prompt)
pnpm changeset

# Apply version bumps from pending changesets
pnpm changeset version

# Commit and push — GitHub Actions handles the rest
git add . && git commit -m "chore: version packages" && git push
```

---

## 🔌 VS Code Extension Publishing (`repo-atlas`)

> **Important:** The VS Code extension is published **manually** via the Marketplace web portal.
> It is intentionally **NOT** included in the automated GitHub Actions CI/CD pipeline.
> The extension builds and tests run in CI, but publishing is manual.

### Publisher Details

| Field             | Value                                                                                                                                          |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| Publisher ID      | `repo-atlas`                                                                                                                                   |
| Publisher Name    | `codeBeyond`                                                                                                                                   |
| Extension Name    | `repo-atlas`                                                                                                                                   |
| Marketplace URL   | [marketplace.visualstudio.com/items?itemName=repo-atlas.repo-atlas](https://marketplace.visualstudio.com/items?itemName=repo-atlas.repo-atlas) |
| Management Portal | [marketplace.visualstudio.com/manage/publishers/repo-atlas](https://marketplace.visualstudio.com/manage/publishers/repo-atlas)                 |

### Step 1: Build & Package the `.vsix` Bundle

```bash
# Build the extension source
pnpm --filter repo-atlas build

# Package into a .vsix installer
cd apps/vscode
npx -y @vscode/vsce package --no-dependencies --out repo-atlas-<version>.vsix
```

### Step 2: Upload to Marketplace (Web Portal)

1. Open [VS Code Marketplace Management Portal](https://marketplace.visualstudio.com/manage/publishers/repo-atlas).
2. Sign in with your Microsoft account (`akshaykumarpatil33@gmail.com`).
3. Click the **⋮ menu** next to the existing `RepoAtlas` extension → **Update**.
4. Drag and drop your `.vsix` file or click Browse to select it.
5. Click **Upload**. The extension updates live within minutes!

### Testing Locally Before Publishing

```bash
# Option 1: Debug in VS Code Extension Host
# Open apps/vscode in VS Code → Press F5 → test commands in the new window

# Option 2: Install .vsix locally
# VS Code → Extensions panel → ⋯ menu → Install from VSIX → select .vsix file
```

---

## ⚙️ CI/CD Pipeline Summary

| Trigger             | Workflow                        | What It Does                                                 |
| :------------------ | :------------------------------ | :----------------------------------------------------------- |
| Push to `main` / PR | `.github/workflows/ci.yml`      | Typecheck, Build, Test, Lint (all packages including vscode) |
| Push to `main`      | `.github/workflows/publish.yml` | Build + Publish npm packages via Changesets                  |
| Push to `main`      | Vercel Auto-Deploy              | Builds & deploys `apps/docs` Next.js site                    |
| Manual              | VS Code Marketplace Web Upload  | Upload `.vsix` to update the VS Code extension               |

---

## 🧹 Maintenance Commands

```bash
# Clean all build artifacts & node_modules
pnpm clean:all

# Reinstall everything from scratch
pnpm reinstall

# Run full CI checks locally
pnpm build && pnpm typecheck && pnpm test && pnpm lint
```
