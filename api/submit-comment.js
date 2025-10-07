import { Octokit } from '@octokit/rest';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { slug, name, email, message } = req.body;

    if (!slug || !name || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const timestamp = Date.now();
    const date = new Date().toISOString();
    
    // Create comment file content
    const yamlContent = `name: "${name}"
email: "${email || ''}"
date: "${date}"
message: |
${message.split('\n').map(line => '  ' + line).join('\n')}`;

    // Initialize Octokit with GitHub token
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    const owner = 'sspirial';
    const repo = 'sspirial.github.io';
    
    // Get the default branch SHA
    const { data: refData } = await octokit.git.getRef({
      owner,
      repo,
      ref: 'heads/main'
    });
    
    const mainSha = refData.object.sha;
    const branchName = `comment-${slug}-${timestamp}`;

    // Create new branch
    await octokit.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${branchName}`,
      sha: mainSha
    });

    // Create the comment file
    const filePath = `data/comments/${slug}/comment-${timestamp}.yml`;
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: filePath,
      message: `Add comment from ${name}`,
      content: Buffer.from(yamlContent).toString('base64'),
      branch: branchName
    });

    // Create Pull Request
    const { data: prData } = await octokit.pulls.create({
      owner,
      repo,
      title: `💬 New comment on: ${slug}`,
      body: `**New comment from ${name}**

Post: ${slug}
Date: ${date}

---

${message}

---

**To approve:** Merge this PR
**To reject:** Close this PR`,
      head: branchName,
      base: 'main'
    });

    return res.status(200).json({ 
      success: true,
      message: 'Comment submitted successfully! It will appear after moderation.',
      pr_url: prData.html_url
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Failed to submit comment',
      message: error.message 
    });
  }
}
