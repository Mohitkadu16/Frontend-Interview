# Git Push Guide - CA Monk Blog Application

## 📋 Prerequisites

Before pushing to your forked repository, make sure you have:

- ✅ Forked the original repository on GitHub
- ✅ Completed all the implementation
- ✅ Tested the application locally
- ✅ Both servers running without errors

## 🚀 Step-by-Step Guide to Push to Forked Repository

### Step 1: Check Git Status

First, let's see what files have been changed:

```bash
git status
```

This will show you all the modified, new, and deleted files.

### Step 2: Add All Changes

Add all your changes to the staging area:

```bash
git add .
```

Or if you want to add specific files:

```bash
git add src/
git add README.md
git add package.json
git add tailwind.config.js
# ... etc
```

### Step 3: Commit Your Changes

Create a meaningful commit message:

```bash
git commit -m "feat: Complete blog application with TanStack Query, Tailwind CSS, and shadcn/ui

- Implemented blog list view with loading and error states
- Added blog detail view with cover images and categories
- Created blog creation form with validation
- Integrated TanStack Query for state management
- Styled with Tailwind CSS and shadcn/ui components
- Added navigation system (Home, About, Profile)
- Implemented responsive design for mobile/tablet/desktop
- Fixed Tailwind CSS v4 compatibility issue"
```

### Step 4: Check Your Remote Repository

Verify your remote repository URL:

```bash
git remote -v
```

You should see something like:

```
origin  https://github.com/YOUR-USERNAME/Frontend-Interview.git (fetch)
origin  https://github.com/YOUR-USERNAME/Frontend-Interview.git (push)
```

If you don't see your forked repository, add it:

```bash
git remote add origin https://github.com/YOUR-USERNAME/Frontend-Interview.git
```

### Step 5: Push to Your Forked Repository

Push your changes to the main branch:

```bash
git push origin main
```

Or if your default branch is named differently:

```bash
git push origin master
```

If this is your first push, you might need to set the upstream:

```bash
git push -u origin main
```

### Step 6: Verify on GitHub

1. Go to your forked repository on GitHub: `https://github.com/YOUR-USERNAME/Frontend-Interview`
2. Check that all your files are there
3. Verify the commit message appears correctly
4. Make sure the README.md displays properly

## 🔧 Alternative: Detailed Commands

If you want to be more careful, here's a detailed approach:

```bash
# 1. Check current status
git status

# 2. See what changes were made
git diff

# 3. Add files in stages
git add src/
git add README.md
git add package.json
git add package-lock.json
git add tailwind.config.js
git add postcss.config.js
git add components.json
git add vite.config.ts
git add tsconfig.app.json

# 4. Check what's staged
git status

# 5. Commit with detailed message
git commit -m "Complete CA Monk Blog Application implementation"

# 6. Push to your fork
git push origin main
```

## 📝 Commit Message Best Practices

Here are some good commit message examples:

**Option 1: Simple**

```bash
git commit -m "Complete blog application assignment"
```

**Option 2: Detailed**

```bash
git commit -m "feat: Implement complete blog application

Features:
- Blog list with TanStack Query
- Blog detail view
- Create blog functionality
- Navigation system (Home, About, Profile)
- Responsive design
- Premium UI with Tailwind CSS and shadcn/ui

Technologies:
- React 19 + TypeScript
- TanStack Query v5
- Tailwind CSS v3
- shadcn/ui
- JSON Server"
```

**Option 3: Professional**

```bash
git commit -m "feat: Complete CA Monk Frontend Interview Assignment

Implemented all required features:
✅ GET /blogs - Blog list with loading/error states
✅ GET /blogs/:id - Blog detail view
✅ POST /blogs - Create blog with validation

Additional features:
- Enhanced navigation system
- About and Profile pages
- Mobile-responsive design
- Glassmorphism UI effects

Tech stack: React, TypeScript, TanStack Query, Tailwind CSS, shadcn/ui"
```

## ⚠️ Common Issues & Solutions

### Issue 1: "Permission denied"

**Solution:** Make sure you're pushing to your forked repository, not the original.

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/Frontend-Interview.git
```

### Issue 2: "Updates were rejected"

**Solution:** Pull the latest changes first, then push.

```bash
git pull origin main --rebase
git push origin main
```

### Issue 3: "Authentication failed"

**Solution:** Use a Personal Access Token (PAT) instead of password.

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate a new token with `repo` permissions
3. Use the token as your password when pushing

Or use SSH:

```bash
git remote set-url origin git@github.com:YOUR-USERNAME/Frontend-Interview.git
```

### Issue 4: Large files warning

**Solution:** Make sure `node_modules` is in `.gitignore`

```bash
# Check .gitignore contains:
node_modules/
dist/
.env
```

## ✅ Final Checklist

Before submitting:

- [ ] All code is committed and pushed
- [ ] README.md is updated
- [ ] Application runs without errors locally
- [ ] Both `npm run dev` and `npm run server` work
- [ ] All features tested (blog list, detail, create)
- [ ] Repository is public (check GitHub settings)
- [ ] No sensitive information in code (API keys, passwords)
- [ ] `node_modules` is not pushed (check `.gitignore`)

## 📤 Submitting Your Assignment

After pushing to GitHub:

1. Copy your repository URL: `https://github.com/YOUR-USERNAME/Frontend-Interview`
2. Go to the Google Form provided by CA Monk
3. Paste your repository URL
4. Submit the form

## 🎉 You're Done!

Your code is now on GitHub and ready for review. Good luck with your interview! 🚀

---

**Need Help?**
If you encounter any issues, contact: `developer@camonk.com`
