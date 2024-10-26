console.log("recent.js loaded");

// Mock data: Recent lists
const mockRecentLists = [
    {
        id: 1,
        title: "Top Movies of 2024",
        description: "A curated list of must-watch films.",
        category: "Movies & Television",
        author: "John Doe",
        timestamp: "2024-10-26 14:35"
    },
    {
        id: 2,
        title: "Best Albums of 2024",
        description: "A list of the best music albums this year.",
        category: "Music",
        author: "Jane Smith",
        timestamp: "2024-10-25 10:00"
    },
    {
        id: 3,
        title: "Top Movies of 2023",
        description: "A curated list of must-watch films.",
        category: "Movies & Television",
        author: "John Doe",
        timestamp: "2024-10-26 14:55"
    }
];


localStorage.setItem('username', user.username);
console.log(localStorage.getItem('username'));


// Display greeting and manage logout
const username = localStorage.getItem('username');
if (username) {
    document.getElementById('greeting').textContent = `Welcome, ${username}!`;
} else {
    window.location.href = 'index.html'; // Redirect if not logged in
}

// Handle logout
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('username'); // Clear the username
        window.location.href = 'index.html'; // Redirect to landing page
    });
});



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
} else {
    console.error("Container not found.");
}
