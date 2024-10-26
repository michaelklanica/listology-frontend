document.addEventListener('DOMContentLoaded', () => {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbarContainer').innerHTML = data;

            // Set up the logout button
            document.getElementById('logoutBtn').addEventListener('click', () => {
                localStorage.removeItem('username');
                window.location.href = 'index.html';
            });

            // Display greeting
            const username = localStorage.getItem('username');
            if (username) {
                document.getElementById('greeting').textContent = `Welcome, ${username}!`;
            } else {
                window.location.href = 'index.html'; // Redirect if not logged in
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
});
