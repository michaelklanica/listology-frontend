document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    };

    try {
        const response = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });
        const message = await response.text();
        document.getElementById('loginMessage').textContent = message;

        if (message === 'Login successful!') {
            window.location.href = `profile.html?username=${user.username}`;
        }

    } catch (error) {
        console.error('Error logging in:', error);
        document.getElementById('loginMessage').textContent = 'Error logging in. Please try again.';
    }
});