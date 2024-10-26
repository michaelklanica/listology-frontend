document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('greeting').textContent = `Welcome, ${username}!`;
    } else {
        window.location.href = 'index.html'; // Redirect if not logged in
    }

    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('username');
        window.location.href = 'index.html';
    });

    const listContainer = document.getElementById('listContainer');
    const category = window.location.pathname.split('-')[0].replace('/', ''); // Extract category from filename

    fetch(`http://localhost:8080/api/lists/category/${category}`)
        .then(response => response.json())
        .then(data => {
            listContainer.innerHTML = ''; // Clear previous lists
            if (data.length === 0) {
                listContainer.innerHTML = '<p>No lists found.</p>';
            } else {
                data.forEach(list => {
                    const card = document.createElement('div');
                    card.className = 'card mt-3 shadow-sm';
                    card.innerHTML = `
                        <div class="card-body">
                            <h5 class="card-title">${list.title}</h5>
                            <p class="card-text">${list.description}</p>
                            <p><strong>Author:</strong> ${list.author}</p>
                            <p><small>${list.timestamp}</small></p>
                        </div>`;
                    listContainer.appendChild(card);
                });
            }
        })
        .catch(error => console.error('Error fetching lists:', error));
});
