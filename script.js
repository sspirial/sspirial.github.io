document.addEventListener('DOMContentLoaded', function() {
    const username = 'sspirial'; // Replace with your GitHub username

    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            const profileInfo = document.getElementById('profile-info');
            profileInfo.innerHTML = `
                <img src="${data.avatar_url}" alt="${data.name}" width="100">
                <div>
                    <h3>${data.name}</h3>
                    <p>${data.bio}</p>
                    <p><a href="${data.html_url}" target="_blank">View GitHub Profile</a></p>
                </div>
            `;
        });

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            const repoList = document.getElementById('repo-list');
            const liveList = document.getElementById('live-list');
            data.forEach(repo => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                    <p>${repo.description}</p>
                `;
                repoList.appendChild(listItem);

                if (repo.has_pages) {
                    const liveItem = document.createElement('li');
                    liveItem.innerHTML = `
                        <h3><a href="https://${username}.github.io/${repo.name}" target="_blank">${repo.name}</a></h3>
                    `;
                    liveList.appendChild(liveItem);
                }
            });
        });
});
