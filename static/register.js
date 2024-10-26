document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };

    try {
        const response = await fetch('http://localhost:8080/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });

        const message = await response.text();
        document.getElementById('registerMessage').textContent = message;

        if (message === 'User registered successfully!') {
            window.location.href = 'login.html'; // Redirect to login page
        }

    } catch (error) {
        console.error('Error registering user:', error);
        document.getElementById('registerMessage').textContent = 'Failed to register. Please try again.';
    }
});
