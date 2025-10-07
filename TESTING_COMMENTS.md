# Comment System Testing Guide

## What You Can Test Locally:

### ✅ Test 1: Comment Display (Works on localhost)

1. **Go to any post with a test comment:**
   - http://localhost:1313/posts/ai-for-sustainable-tourism/
   - http://localhost:1313/posts/kaya-kauma/

2. **Check if you see:**
   - "Comments" heading
   - Test comments displayed with name, date, and message
   - Proper formatting (Markdown rendered)
   - Good styling

### ✅ Test 2: Comment Form Display (Works on localhost)

**Check the form has:**
- "Leave a Comment" heading
- Name field (required)
- Email field (optional)
- Comment/Message textarea (required)
- Blue "Submit Comment" button
- Note about moderation at bottom

### ⚠️ Test 3: Form Submission (WON'T work on localhost)

**Why it won't work locally:**
- GitHub API blocks requests from `localhost` due to CORS
- Creating issues requires connection to GitHub's servers
- This will ONLY work once deployed to your live site

**What happens if you try:**
- Click Submit → You'll see "✗ Error submitting comment"
- This is expected on localhost
- It WILL work on the live site (sspirial.github.io)

## What to Look For in Testing:

### Visual Check:
- [ ] Comment form appears below posts
- [ ] Existing comments display correctly
- [ ] Button is blue and visible (not gray/disabled)
- [ ] Form fields are clearly labeled
- [ ] Styling matches your site theme

### Functionality (once deployed):
- [ ] Form submits without errors
- [ ] Success message appears
- [ ] GitHub Issue is created
- [ ] GitHub Action runs
- [ ] Pull Request is created automatically
- [ ] Merging PR publishes comment

## Quick Visual Test Now:

1. Open: http://localhost:1313/posts/ai-for-sustainable-tourism/
2. Scroll to bottom
3. Verify you see:
   - Test comment displayed
   - Comment form below it
   - Blue submit button

## After You Push:

1. Go to live site post
2. Fill out the form with test data
3. Click Submit
4. Check GitHub Issues: https://github.com/sspirial/sspirial.github.io/issues
5. Should see new issue with "comment" label
6. Check PRs: https://github.com/sspirial/sspirial.github.io/pulls
7. Should see auto-created PR
8. Merge PR
9. Check post - comment should appear!

## Expected Result:

**On localhost:** Form displays, existing comments show, submission fails (expected)
**On live site:** Everything works, creates Issue → PR → Comment

Ready to deploy? The visual parts should look good on localhost!
