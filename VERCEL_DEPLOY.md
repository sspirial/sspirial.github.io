# Deploy to Vercel - 5 Minute Setup

## Step 1: Push Your Code

```bash
git add .
git commit -m "Add Vercel serverless function for comments"
git push
```

## Step 2: Deploy to Vercel

1. Go to https://vercel.com/
2. Click **"Add New"** → **"Project"**
3. **Import your GitHub repo:** `sspirial/sspirial.github.io`
4. Configure:
   - **Framework Preset:** Other
   - **Build Command:** `hugo --gc --minify`
   - **Output Directory:** `public`
5. Click **"Deploy"**

## Step 3: Add GitHub Token to Vercel

1. Create GitHub Personal Access Token:
   - Go to: https://github.com/settings/tokens
   - Click **"Generate new token (classic)"**
   - Name: `Vercel Comments`
   - Check scopes: `repo` (all)
   - Generate and copy the token

2. Add to Vercel:
   - In your Vercel project → **Settings** → **Environment Variables**
   - Add new variable:
     - Name: `GITHUB_TOKEN`
     - Value: `your_token_here`
   - Click **"Save"**

3. **Redeploy:**
   - Go to **Deployments** tab
   - Click ⋯ on latest deployment → **"Redeploy"**

## Step 4: Done! 🎉

Your site is now live on Vercel with:
- ✅ Auto PR creation for comments
- ✅ Faster builds than GitHub Pages
- ✅ Better performance
- ✅ Serverless functions

## How Comments Work Now:

1. User submits comment → Stays on page
2. Vercel function creates Pull Request automatically
3. You get notification
4. Review PR at: https://github.com/sspirial/sspirial.github.io/pulls
5. Merge to approve → Comment appears!
6. Site rebuilds automatically on Vercel

## Your New URL:

- Vercel will give you: `your-project.vercel.app`
- You can add custom domain later: `sspirial.com` or keep `sspirial.github.io`

## Optional: Keep GitHub Pages URL

If you want to keep using `sspirial.github.io`:
1. In Vercel project **Settings** → **Domains**
2. Add: `sspirial.github.io`
3. Follow Vercel's DNS instructions

## Testing:

1. Visit your Vercel URL
2. Go to any post
3. Submit a test comment
4. Check GitHub for auto-created PR
5. Merge it
6. Comment appears!

That's it! You're on Vercel now with fully automated comment moderation via PRs.
