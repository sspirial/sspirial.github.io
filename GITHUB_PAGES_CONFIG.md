# GitHub Pages Configuration

This repository uses a custom Hugo workflow for GitHub Pages deployment. 

## Required Configuration

To prevent the automatic "pages-build-deployment" action from conflicting with the Hugo deployment:

1. Go to **Settings** > **Pages** in the GitHub repository
2. Under **Source**, select **"GitHub Actions"** instead of **"Deploy from a branch"**
3. Save the changes

This ensures only the custom Hugo workflow handles the site deployment, preventing Jekyll processing conflicts.

## Files Added

- `.nojekyll` - Prevents GitHub from processing the site with Jekyll