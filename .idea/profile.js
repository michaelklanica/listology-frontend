const username = new URLSearchParams(window.location.search).get('username');
document.getElementById('username').textContent = `${username}'s Lists`;

fetch(`http://localhost:8080/api/lists/user/${username}`)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('listContainer');
        container.innerHTML = '';

        if (data.length === 0) {
            container.innerHTML = '<p>No lists found.</p>';
        } else {
            data.forEach(list => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${list.title}</h5>
                        <p class="card-text">${list.description}</p>
                    </div>`;
                container.appendChild(card);
            });
        }
    })
    .catch(error => console.error('Error fetching lists:', error));
