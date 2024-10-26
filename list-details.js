// Mock data: Lists with details
const mockLists = {
    1: {
        title: "Top Movies of 2024",
        description: "A curated list of must-watch films.",
        category: "Movies & Television",
        author: "John Doe",
        timestamp: "2024-10-26 14:35"
    },
    2: {
        title: "Best Albums of 2024",
        description: "A list of the best music albums this year.",
        category: "Music",
        author: "Jane Smith",
        timestamp: "2024-10-25 10:00"
    },
    3: {
        title: "Books to Read",
        description: "Recommended novels and non-fiction.",
        category: "Books",
        author: "Alice Johnson",
        timestamp: "2024-10-24 09:00"
    }
};

// Get list ID from URL parameters
const listId = new URLSearchParams(window.location.search).get('id');
const list = mockLists[listId];

// Display list details or show error if not found
if (list) {
    document.getElementById('listTitle').textContent = list.title;
    document.getElementById('listDescription').innerHTML = `
        <p>${list.description}</p>
        <p><strong>Category:</strong> ${list.category}</p>
        <p><strong>Author:</strong> ${list.author}</p>
        <p><small>${list.timestamp}</small></p>
    `;
} else {
    document.getElementById('listTitle').textContent = 'List not found';
}
