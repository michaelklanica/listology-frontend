// Check if the user is logged in by retrieving the username from localStorage
const username = localStorage.getItem('username');
if (!username) {
    // Redirect to the login page if the user is not logged in
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    // Fetch the lists associated with the logged-in user from the backend
    fetch(`http://localhost:8080/api/lists/user/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch lists');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the data to verify it's correctly fetched
            const container = document.getElementById('listContainer');
            container.innerHTML = ''; // Clear any previous content

            if (data.length === 0) {
                container.innerHTML = '<p>No lists found.</p>';
            } else {
                // Loop through the list items and create cards for each one
                data.forEach(list => {
                    const card = document.createElement('div');
                    card.className = 'card mb-3';
                    card.innerHTML = `
                        <div class="card-body">
                            <h5 class="card-title">${list.title}</h5>
                            <p class="card-text">${list.description}</p>
                            <p class="card-text"><small>Category: ${list.category}</small></p>
                            <p class="card-text">
                                <small class="text-muted">Created: ${new Date(list.createdAt).toLocaleString()}</small>
                            </p>
                        </div>
                    `;
                    container.appendChild(card);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching lists:', error);
            const container = document.getElementById('listContainer');
            container.innerHTML = '<p>Failed to load lists. Please try again later.</p>';
        });
});
