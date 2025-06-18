// favoritesDB.js - Simulates a database table for favorites

// Initialize favorites if not exists
if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', JSON.stringify([]));
}

// Add favorite
function addFavorite(userID, destinationID) {
    const favorites = JSON.parse(localStorage.getItem('favorites'));

    // Check if already exists
    const exists = favorites.some(fav =>
        fav.userID === userID && fav.destinationID === destinationID
    );

    if (!exists) {
        favorites.push({
            userID,
            destinationID,
            favoritedAt: new Date().toISOString()
        });
        localStorage.setItem('favorites', JSON.stringify(favorites));
        return true;
    }
    return false;
}

// Remove favorite
function removeFavorite(userID, destinationID) {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const newFavorites = favorites.filter(fav =>
        !(fav.userID === userID && fav.destinationID === destinationID)
    );

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    return true;
}

// Check if favorited
function isFavorited(userID, destinationID) {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    return favorites.some(fav =>
        fav.userID === userID && fav.destinationID === destinationID
    );
}

// Get user's favorites
function getUserFavorites(userID) {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    return favorites
        .filter(fav => fav.userID === userID)
        .map(fav => fav.destinationID);
}

// Get all favorites (for debugging)
function getAllFavorites() {
    return JSON.parse(localStorage.getItem('favorites'));
}

// favoriteUI.js - Adds favorite functionality to pages

// Get current user ID
function getCurrentUserID() {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    return user ? user.userid : null;
}

// toggleFavorite function
function toggleFavorite(destinationID) {
    const userID = getCurrentUserID();
    if (!userID) {
        alert('Silakan login untuk menambahkan favorit');
        window.location.href = 'login.html';
        return;
    }

    const wasFavorited = isFavorited(userID, destinationID);

    if (wasFavorited) {
        removeFavorite(userID, destinationID);
    } else {
        addFavorite(userID, destinationID);
    }

    // Return status for immediate UI feedback
    return !wasFavorited;
}

// Add heart icons to all cards
function addFavoriteIcons() {
    // Find all destination cards
    const cards = document.querySelectorAll('.card, .destination-card');

    cards.forEach(card => {
        // Check if we've already added a heart icon
        if (card.querySelector('.favorite-heart')) return;

        // Get destination ID from data attribute or card content
        const destinationID = card.dataset.id ||
            card.querySelector('[data-id]')?.dataset.id;

        if (!destinationID) return;

        // Create heart icon
        const heartIcon = document.createElement('div');
        heartIcon.className = 'favorite-heart absolute top-3 right-3 z-30';

        const userID = getCurrentUserID();
        const isFav = userID ? isFavorited(userID, destinationID) : false;

        heartIcon.innerHTML = `
            <i class="fas fa-heart text-xl cursor-pointer 
                      ${isFav ? 'text-red-500' : 'text-gray-300'}"
               onclick="toggleFavorite(${destinationID})"></i>
        `;

        card.style.position = 'relative';
        card.appendChild(heartIcon);
    });
}

// Update all heart icons
function updateFavoriteIcons() {
    const userID = getCurrentUserID();
    const hearts = document.querySelectorAll('.favorite-heart i');

    hearts.forEach(heart => {
        const destinationID = heart.closest('.favorite-heart').previousElementSibling?.dataset.id ||
            heart.closest('.card, .destination-card').dataset.id;

        if (destinationID) {
            const isFav = userID ? isFavorited(userID, destinationID) : false;
            heart.className = `fas fa-heart text-xl cursor-pointer 
                              ${isFav ? 'text-red-500' : 'text-gray-300'}`;
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add icons after a small delay to ensure cards are rendered
    setTimeout(addFavoriteIcons, 500);

    // Also add when new cards are added dynamically
    const observer = new MutationObserver(addFavoriteIcons);
    observer.observe(document.body, { childList: true, subtree: true });
});