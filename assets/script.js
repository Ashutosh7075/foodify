document.addEventListener('DOMContentLoaded', () => {
    // Page transitions
    const pages = document.querySelectorAll('.page');
    const proceedBtn = document.getElementById('proceed-btn');
    const loginForm = document.getElementById('login-form');

    // Welcome -> Login
    proceedBtn.addEventListener('click', () => {
        transitionPage('welcome-screen', 'login-screen');
    });

    // Login -> Main App
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        transitionPage('login-screen', 'main-app');
        loadRecipes(); // Load recipes after login
    });

    // Recipe fetching function
    async function loadRecipes() {
        const recipeContainer = document.getElementById('recipe-container');
        const response = await fetch('https://api.spoonacular.com/recipes/random?number=6&apiKey=YOUR_API_KEY');
        const data = await response.json();

        data.recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p>${recipe.summary.slice(0, 100)}...</p>
            `;
            recipeContainer.appendChild(recipeCard);
        });
    }

    // Transition function
    function transitionPage(fromId, toId) {
        document.getElementById(fromId).classList.remove('active');
        document.getElementById(toId).classList.add('active');
    }
});
