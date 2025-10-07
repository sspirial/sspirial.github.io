# Simple Comment Setup - GitHub Pages + Auto PR

## What Happens:
1. User fills form on your site → stays on page ✅
2. Form creates a GitHub Issue automatically (no auth needed!)
3. GitHub Action detects the issue and creates a Pull Request
4. You review PR and either:
   - **Merge** = Comment approved ✅
   - **Close** = Comment rejected ❌
5. Comment appears on site after merge

## Setup (2 minutes):

### Step 1: Enable GitHub Actions Permissions

1. Go to repo **Settings** → **Actions** → **General**
2. Under "Workflow permissions":
   - Select ✅ **Read and write permissions**
   - Check ✅ **Allow GitHub Actions to create and approve pull requests**
3. Click **Save**

### Step 2: Make sure Issues are enabled

1. Go to repo **Settings** → **General**
2. Under "Features":
   - Make sure ✅ **Issues** is checked

### Step 3: Deploy

```bash
git add .
git commit -m "Add auto-PR comment system via Issues"
git push
```

### Done! 🎉

No tokens needed in your code! The system works like this:
- User submits → Creates public GitHub Issue
- GitHub Action (using built-in `GITHUB_TOKEN`) creates PR from that issue
- You approve via PR merge

## How to Use:

**When someone comments:**
1. They fill the form and click submit
2. They stay on the page and see: "✓ Comment submitted!"
3. A GitHub Issue is created automatically
4. GitHub Action creates a PR from that issue
5. You get notifications for both
6. Review the PR at: https://github.com/sspirial/sspirial.github.io/pulls
7. **Merge** to approve or **Close** to reject
8. GitHub Pages rebuilds automatically
9. Comment appears!

**To reject a comment:**
- Close both the Issue and the PR (or just the PR)

## Why This Works Better:

✅ No tokens exposed in browser code  
✅ Uses GitHub's built-in `GITHUB_TOKEN` (automatic)  
✅ Creating issues on public repos doesn't require auth  
✅ Simpler and more secure  
✅ Stay on GitHub Pages  

## Testing:

Try submitting a test comment on any post. You should see:
1. A new Issue created
2. A PR created automatically by the GitHub Action
3. Merge the PR to see the comment appear!
