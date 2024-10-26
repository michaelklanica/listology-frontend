document.getElementById('createListForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = localStorage.getItem('username');
    if (!username) {
        window.location.href = 'index.html'; // Redirect if not logged in
    }

    const list = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        category: document.getElementById('category').value,
    };

    try {
        const response = await fetch(`http://localhost:8080/api/lists/create?username=${username}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(list),
        });

        const result = await response.json();
        document.getElementById('message').textContent = `List created: ${result.title}`;
    } catch (error) {
        console.error('Error creating list:', error);
        document.getElementById('message').textContent = 'Failed to create list. Please try again.';
    }
});
