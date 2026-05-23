# Push to GitHub + deploy on Netlify

## Part 1 — Push to GitHub

### Step 1: Create an empty repo on GitHub

1. Open [https://github.com/new](https://github.com/new)
2. **Repository name:** e.g. `glam-by-gela` (or `salon-landing`)
3. Leave it **Public** (required for free Netlify from GitHub, unless you use Netlify paid)
4. **Do not** add README, .gitignore, or license (you already have files locally)
5. Click **Create repository**

### Step 2: Connect your local project and push

GitHub will show commands. Use these in your terminal (replace `YOUR_USERNAME` and `REPO_NAME`):

```bash
cd ~/Projects/salon-landing

git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

**Authentication:** GitHub no longer accepts account passwords for `git push`. Use one of:

- **HTTPS + Personal Access Token:** When prompted for password, paste a [fine-grained or classic PAT](https://github.com/settings/tokens) with `repo` scope.
- **SSH:** Add an SSH key to GitHub, then use:
  ```bash
  git remote set-url origin git@github.com:YOUR_USERNAME/REPO_NAME.git
  git push -u origin main
  ```

### Step 3: Confirm on GitHub

Refresh the repo page — you should see `index.html`, `css/`, `js/`, `images/`.

---

## Part 2 — Deploy on Netlify

### Option A — From GitHub (recommended)

1. Go to [https://app.netlify.com](https://app.netlify.com) and sign up / log in (use **GitHub** to sign in).
2. Click **Add new site** → **Import an existing project**.
3. Choose **GitHub** and authorize Netlify if asked.
4. Select your repo (`glam-by-gela` or whatever you named it).
5. Build settings (important for this static site):

   | Setting | Value |
   |---------|--------|
   | Branch to deploy | `main` |
   | Build command | *(leave empty)* |
   | Publish directory | `.` |

6. Click **Deploy site**.
7. Wait ~30 seconds. Netlify gives you a URL like `https://random-name-123.netlify.app`.

### Option B — Drag and drop (no GitHub)

1. [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `salon-landing` folder (must contain `index.html` at the top level).
3. Site goes live immediately; updates require dragging again.

---

## Part 3 — After deploy

### Custom site name

Netlify → **Site configuration** → **Domain management** → **Options** next to the `.netlify.app` domain → **Edit site name** → e.g. `glam-by-gela` → URL becomes `https://glam-by-gela.netlify.app`.

### Your own domain (optional)

**Domain management** → **Add custom domain** → enter e.g. `glambygela.com` → follow DNS instructions at your domain registrar.

### Auto-deploy on every push

With Option A, every `git push` to `main` redeploys automatically.

```bash
# edit site locally, then:
git add .
git commit -m "Update copy"
git push
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Push asks for password forever | Use a PAT, not your GitHub password |
| Netlify shows 404 | Publish directory must be `.` not `public` or `dist` |
| Images missing | Ensure `images/` was committed and pushed |
| Dark theme wrong on first load | Hard refresh: Ctrl+Shift+R |
