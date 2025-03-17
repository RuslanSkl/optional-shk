(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Function to fetch and display user data
    async function fetchUserData() {
        const container = document.getElementById('user-container');
        container.innerHTML = ''; // Clear previous data
        try {
            const response = await fetch(apiUrl);
            const users = await response.json();

            users.forEach(user => {
                const card = document.createElement('div');
                card.classList.add('card');

                const userPhoto = `https://i.pravatar.cc/150?img=${user.id}`; // Use a random avatar generator
                card.innerHTML = `
                <img src="${userPhoto}" alt="${user.name}">
                <h3>${user.name}</h3>
                <p>${user.email}</p>
              `;
                container.appendChild(card);
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    // Initial fetch when the page loads
    document.addEventListener('DOMContentLoaded', () => {
        fetchUserData();

        // Create and append "Refresh List" button
        const refreshButton = document.createElement('button');
        refreshButton.textContent = 'Refresh List';
        refreshButton.addEventListener('click', fetchUserData);

        const btnWrapper = document.getElementById('btn-wrapper');
        btnWrapper.appendChild(refreshButton);
    });
})();
