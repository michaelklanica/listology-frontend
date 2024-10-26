const username = new URLSearchParams(window.location.search).get('username');
document.getElementById('username').textContent = `Welcome, ${username}!`;

// Fetch the user's lists from the backend
fetch(`http://localhost:8080/api/lists/user/${username}`)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('listContainer');
        container.innerHTML = '';

        if (data.length === 0) {
            container.innerHTML = '<p>No lists found. Create your first one!</p>';
        } else {
            data.forEach(list => {
                const card = document.createElement('div');
                card.className = 'card mt-3';
                card.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${list.title}</h5>
                        <p class="card-text">${list.description}</p>
                        <button class="btn btn-warning edit-btn">Edit</button>
                        <button class="btn btn-danger delete-btn">Delete</button>
                    </div>`;
                container.appendChild(card);
            });
        }
    })
    .catch(error => console.error('Error fetching lists:', error));

// Logout button functionality
document.getElementById('logoutBtn').addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Create List Button (Placeholder for now)
document.getElementById('createListBtn').addEventListener('click', () => {
    alert('Create List functionality coming soon!');
});
