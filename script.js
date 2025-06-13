
function renderDestinations(destinationsToRender) {
    const grid = document.getElementById('destinationsGrid');
    grid.innerHTML = '';

    destinationsToRender.forEach(destination => {
        const card = document.createElement('div');
        card.className = 'card group relative rounded-2xl overflow-hidden shadow-xl h-96 shine-effect';
        card.innerHTML = `
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
      <img src="${destination.image}" 
           alt="${destination.title}" 
           class="card-image absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
      
      <div class="absolute bottom-0 left-0 right-0 z-20 p-6">
        <div class="tag inline-block px-3 py-1 rounded-full text-sm text-azure mb-2">
          <i class="fas fa-map-marker-alt mr-1"></i> ${destination.location}
        </div>
        <h3 class="text-2xl font-bold text-azure mb-2">${destination.title}</h3>
        <div class="flex items-center text-persian-orange mb-3">
          ${renderStars(destination.rating)}
          <span class="text-azure text-sm ml-2">${destination.rating} (${destination.reviews.toLocaleString()} ulasan)</span>
        </div>
        <p class="text-azure/90 mb-4">${destination.description}</p>
        <button class="detail-btn px-4 py-2 bg-azure text-teal rounded-full font-semibold text-sm hover:bg-gray-100 transition flex items-center"
                data-id="${destination.id}">
          <i class="fas fa-info-circle mr-2"></i> Detail Wisata
        </button>
      </div>
    `;
        grid.appendChild(card);
    });
    document.querySelectorAll('.detail-btn').forEach(button => {
        button.addEventListener('click', function () {
            const id = parseInt(this.getAttribute('data-id'));
            const destination = destinations.find(dest => dest.id === id);
            showDestinationModal(destination);
        });
    });
}
function renderStars(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }

    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }

    return starsHTML;
}
function showDestinationModal(destination) {
    document.getElementById('modalTitle').textContent = destination.title;
    document.getElementById('modalLocation').textContent = destination.location;
    document.getElementById('modalDescription').textContent = destination.description;
    document.getElementById('modalImage').src = destination.image;
    const ratingContainer = document.getElementById('modalRating');
    ratingContainer.innerHTML = renderStars(destination.rating);
    document.getElementById('modalReviews').textContent = `${destination.rating} (${destination.reviews.toLocaleString()} ulasan)`;
    const historyButton = document.getElementById('historyButton');
    historyButton.onclick = function () {
        showHistoryPage(destination.id);
    };
    setupRatingWidget(destination);
    document.getElementById('destinationModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function setupRatingWidget(destination) {
    const stars = document.querySelectorAll('.rating-widget .fa-star');
    const ratingMessage = document.getElementById('ratingMessage');
    stars.forEach(star => {
        star.className = 'far fa-star text-2xl text-gray-400 cursor-pointer hover:text-persian-orange';
        star.onclick = null;
    });
    ratingMessage.textContent = '';
    stars.forEach(star => {
        star.addEventListener('click', function () {
            const value = parseInt(this.getAttribute('data-value'));
            updateDestinationRating(destination.id, value);
            stars.forEach((s, index) => {
                if (index < value) {
                    s.className = 'fas fa-star text-2xl text-persian-orange cursor-pointer';
                } else {
                    s.className = 'far fa-star text-2xl text-gray-400 cursor-pointer hover:text-persian-orange';
                }
            });

            ratingMessage.textContent = `Terima kasih! Anda memberi rating ${value} bintang untuk ${destination.title}`;
            ratingMessage.className = 'text-teal mt-2 text-sm';
            saveUserRating(destination.id, value);
        });
    });
}
function updateDestinationRating(destinationId, userRating) {
    const destination = destinations.find(dest => dest.id === destinationId);
    if (destination) {
        const newRating = (destination.rating * destination.reviews + userRating) / (destination.reviews + 1);
        destination.rating = parseFloat(newRating.toFixed(1));
        destination.reviews += 1;
        destination.userRating = userRating;
        document.getElementById('modalRating').innerHTML = renderStars(destination.rating);
        document.getElementById('modalReviews').textContent = `${destination.rating} (${destination.reviews.toLocaleString()} ulasan)`;
        renderDestinations(destinations);
    }
}
function saveUserRating(destinationId, rating) {
    const userRatings = JSON.parse(localStorage.getItem('userRatings')) || {};
    userRatings[destinationId] = rating;
    localStorage.setItem('userRatings', JSON.stringify(userRatings));
}
function showHistoryPage(destinationId) {
    const history = historyData[destinationId];

    if (history) {
        document.getElementById('historyTitle').textContent = "Sejarah & Budaya " + history.title;
        document.getElementById('historyLocation').textContent = history.location;
        document.getElementById('historyImage').src = history.image;
        document.getElementById('historyContent').innerHTML = history.content;
        document.getElementById('destinationModal').style.display = 'none';
        document.getElementById('historyPage').style.display = 'block';
    }
}
function backFromHistory() {
    document.getElementById('historyPage').style.display = 'none';
    document.getElementById('destinationModal').style.display = 'block';
}
function closeDestinationModal() {
    document.getElementById('destinationModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}
function addDestination(newDestination) {
    const newId = Math.max(...destinations.map(d => d.id)) + 1;
    newDestination.id = newId;
    destinations.push(newDestination);
    historyData[newId] = {
        title: newDestination.title,
        location: newDestination.location,
        image: newDestination.image,
        content: `<p class="text-liver mb-6">Sejarah dan budaya untuk ${newDestination.title} akan segera ditambahkan.</p>`
    };
    renderDestinations(destinations);
}
document.querySelector('.close-modal').addEventListener('click', closeDestinationModal);
document.getElementById('backBtn').addEventListener('click', backFromHistory);
document.getElementById('loadMoreBtn').addEventListener('click', () => {
    alert('Fitur "Lihat Lebih Banyak" akan memuat lebih banyak destinasi. Dalam implementasi nyata, ini akan mengambil data dari database.');
});
window.addEventListener('click', function (event) {
    const modal = document.getElementById('destinationModal');
    if (event.target === modal) {
        closeDestinationModal();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeDestinationModal();
    }
});
document.addEventListener('DOMContentLoaded', () => {
    renderDestinations(destinations);
});