document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');

    // Only redirect if the username is null (not just empty)
    if (username === null) {
        console.warn("No username found. Redirecting to index.html...");
        window.location.href = 'index.html';
    } else {
        document.getElementById('greeting').textContent = `Welcome, ${username}!`;
    }

    // Logout functionality
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('username');
        console.log('Logout triggered');
        window.location.href = 'index.html';
    });

    // Mock data for recent lists
    const mockRecentLists = [
        { id: 1, title: "Top Movies of 2024", description: "Must-watch films.", category: "Movies", author: "John Doe", timestamp: "2024-10-26 14:35" },
        { id: 2, title: "Best Albums of 2024", description: "The best albums this year.", category: "Music", author: "Jane Smith", timestamp: "2024-10-25 10:00" }
    ];

    // Populate recent lists
    const container = document.getElementById('recentListContainer');
    if (container) {
        mockRecentLists.forEach(list => {
            const card = document.createElement('div');
            card.className = 'card mt-3 shadow-sm';
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${list.title}</h5>
                    <p class="card-text">${list.description}</p>
                    <p><strong>Category:</strong> ${list.category}</p>
                    <p><strong>Author:</strong> ${list.author}</p>
                    <p><small>${list.timestamp}</small></p>
                </div>`;
            card.addEventListener('click', () => {
                window.location.href = `list-details.html?id=${list.id}`;
            });
            container.appendChild(card);
        });
    }
});
