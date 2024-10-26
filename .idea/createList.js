// Get the form element
const form = document.getElementById('createListForm');

// Add an event listener to handle form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get the input values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const username = "someUsername"; // Replace this with the current logged-in user's username

    // Create the JSON data to send in the request body
    const listData = {
        title: title,
        description: description
    };

    try {
        // Send a POST request to the backend
        const response = await fetch(`http://localhost:8080/api/lists/create?username=${username}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(listData) // Convert the data to JSON
        });

        // Handle the response
        const result = await response.json();
        document.getElementById('message').textContent = `List created: ${result.title}`;

    } catch (error) {
        console.error('Error creating list:', error);
        document.getElementById('message').textContent = 'Failed to create list. Please try again.';
    }
});
