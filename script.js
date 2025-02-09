document.addEventListener('DOMContentLoaded', function() {
    const username = 'sspirial'; // Replace with your GitHub username

    // Fetch user profile information
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

    // Fetch user repositories
    async function fetchPublicRepositories() {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();
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
    }
    fetchPublicRepositories();

    // Fetch user events
    async function fetchPublicEvents() {
        const response = await fetch(`https://api.github.com/users/${username}/events?per_page=5`);
        const data = await response.json();
        const eventsList = document.getElementById('events-list');
        data.forEach(event => {
            const listItem = document.createElement('li');
            listItem.classList.add('event-item');
            listItem.innerHTML = `
                <div>
                    <p><strong>Event Type:</strong> ${event.type}</p>
                    <p><strong>Actor:</strong> <a href="${event.actor.url}" target="_blank">${event.actor.login}</a></p>
                    <p><strong>Date:</strong> ${new Date(event.created_at).toLocaleString()}</p>
                </div>
            `;
            eventsList.appendChild(listItem);
        });
    }
    fetchPublicEvents();

    // Accordion functionality
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const accordionContent = this.parentElement.nextElementSibling;
            if (!accordionContent) return; // Check if accordionContent exists
            const allContents = document.querySelectorAll('.accordion-content');
            allContents.forEach(content => {
                if (content !== accordionContent) {
                    content.classList.remove('active');
                }
            });
            accordionContent.classList.toggle('active');
        });
    });
});
