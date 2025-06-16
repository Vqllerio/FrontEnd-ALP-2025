// Variabel untuk menyimpan rating yang dipilih
let selectedRating = 0;
let currentDestinationId = 0;

document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const location = document.getElementById('searchLocation').value;
    const category = document.getElementById('searchCategory').value;
    let filteredDestinations = destinations;

    if (location) {
        filteredDestinations = filteredDestinations.filter(dest => dest.location === location);
    }

    if (category && category !== 'all') {
        filteredDestinations = filteredDestinations.filter(dest => dest.category === category);
    }
    displaySearchResults(filteredDestinations, location, category);
});

function displaySearchResults(results, location, category) {
    const resultsSection = document.getElementById('searchResults');
    const resultsGrid = document.getElementById('searchResultsGrid');
    const noResults = document.getElementById('noResults');
    const locationLabel = document.getElementById('searchLocationLabel');
    const categoryLabel = document.getElementById('searchCategoryLabel');
    const resultCount = document.getElementById('resultCount');

    locationLabel.textContent = location ? `di ${location}` : '';
    categoryLabel.textContent = category && category !== 'all' ? ` - ${getCategoryName(category)}` : '';
    resultCount.textContent = `${results.length} Hasil`;
    resultsGrid.innerHTML = '';

    if (results.length > 0) {
        noResults.classList.add('hidden');
        resultsSection.classList.remove('hidden');
        results.forEach(destination => {
            const card = createDestinationCard(destination);
            resultsGrid.appendChild(card);
        });

        document.querySelectorAll('.view-detail').forEach(button => {
            button.addEventListener('click', function () {
                const destinationId = parseInt(this.getAttribute('data-id'));
                showDestinationModal(destinationId);
            });
        });
    } else {
        resultsSection.classList.remove('hidden');
        noResults.classList.remove('hidden');
    }
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function getCategoryName(category) {
    const categories = {
        'pantai': 'Pantai',
        'pegunungan': 'Pegunungan',
        'budaya': 'Budaya',
        'air terjun': 'Air Terjun',
        'Danau': 'Danau',
        'Edukasi & Sejarah': 'Edukasi & Sejarah'
    };
    return categories[category] || category;
}

function createDestinationCard(destination) {
    const card = document.createElement('div');
    card.className = 'destination-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300';

    card.innerHTML = `
        <div class="relative h-48 overflow-hidden">
            <img src="${destination.image}" alt="${destination.title}" class="w-full h-full object-cover">
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 class="text-xl font-bold text-azure">${destination.title}</h3>
            </div>
            <div class="absolute top-3 right-3 bg-azure/90 text-liver px-2 py-1 rounded-full text-xs font-semibold">
                ${getCategoryName(destination.category)}
            </div>
        </div>
        <div class="p-5">
            <div class="flex items-center mb-3">
                <i class="fas fa-map-marker-alt text-teal mr-2"></i>
                <span class="text-liver">${destination.location}</span>
            </div>
            <div class="flex items-center mb-4">
                <div class="flex">
                    ${renderStars(destination.rating)}
                </div>
                <span class="text-liver text-sm ml-2">(${destination.reviews} ulasan)</span>
            </div>
            <p class="text-liver/80 text-sm mb-4 line-clamp-2">${destination.description}</p>
            <button class="w-full py-2 bg-teal text-azure rounded-lg font-medium hover:bg-midnight-green transition view-detail" 
                    data-id="${destination.id}">
                Lihat Detail
            </button>
        </div>
    `;

    return card;
}

function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star text-persian-orange"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt text-persian-orange"></i>';
        } else {
            stars += '<i class="far fa-star text-persian-orange"></i>';
        }
    }

    return stars;
}

function showDestinationModal(id) {
    const destination = destinations.find(dest => dest.id === id);
    if (!destination) return;

    currentDestinationId = id;
    selectedRating = 0;

    document.getElementById('modalTitle').textContent = destination.title;
    document.getElementById('modalLocation').textContent = destination.location;
    document.getElementById('modalImage').src = destination.image;
    document.getElementById('modalRating').innerHTML = renderStars(destination.rating);
    document.getElementById('modalReviews').textContent = `${destination.rating} (${destination.reviews.toLocaleString()} ulasan)`;
    document.getElementById('modalDescription').textContent = destination.description;
    document.getElementById('historyButton').setAttribute('data-id', id);

    const stars = document.querySelectorAll('#ratingStars i');
    stars.forEach(star => {
        star.classList.remove('fas', 'text-persian-orange');
        star.classList.add('far', 'text-gray-400');
    });

    document.getElementById('submitRating').classList.add('hidden');
    document.getElementById('ratingMessage').textContent = '';

    document.getElementById('destinationModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

document.getElementById('ratingStars').addEventListener('click', function (e) {
    if (e.target.tagName === 'I') {
        const value = parseInt(e.target.getAttribute('data-value'));
        selectedRating = value;

        const stars = document.querySelectorAll('#ratingStars i');
        stars.forEach((star, index) => {
            if (index < value) {
                star.classList.remove('far', 'text-gray-400');
                star.classList.add('fas', 'text-persian-orange');
            } else {
                star.classList.remove('fas', 'text-persian-orange');
                star.classList.add('far', 'text-gray-400');
            }
        });

        document.getElementById('submitRating').classList.remove('hidden');
    }
});

document.getElementById('submitRating').addEventListener('click', function () {
    if (selectedRating > 0) {
        const destination = destinations.find(dest => dest.id === currentDestinationId);
        if (destination) {
            const newRating = ((destination.rating * destination.reviews) + selectedRating) / (destination.reviews + 1);
            destination.rating = parseFloat(newRating.toFixed(1));
            destination.reviews += 1;
            document.getElementById('modalRating').innerHTML = renderStars(destination.rating);
            document.getElementById('modalReviews').textContent = `${destination.rating} (${destination.reviews.toLocaleString()} ulasan)`;
            document.getElementById('ratingMessage').textContent = 'Terima kasih atas rating Anda!';
            document.getElementById('submitRating').classList.add('hidden');

            // Update rating di card
            const cards = document.querySelectorAll('.destination-card');
            cards.forEach(card => {
                const cardId = parseInt(card.querySelector('.view-detail').getAttribute('data-id'));
                if (cardId === currentDestinationId) {
                    const ratingElement = card.querySelector('.flex.items-center.mb-4 .flex');
                    ratingElement.innerHTML = renderStars(destination.rating);
                    const reviewsElement = card.querySelector('.flex.items-center.mb-4 span');
                    reviewsElement.textContent = `(${destination.reviews} ulasan)`;
                }
            });

            ratingMessage.textContent = `Terima kasih! Anda memberi rating ${value} bintang untuk ${destination.title}`;
            ratingMessage.className = 'text-teal mt-2 text-sm';
            saveUserRating(destination.id, value);
        }
    }
});

document.querySelector('.close-modal').addEventListener('click', function () {
    document.getElementById('destinationModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
});

document.getElementById('historyButton').addEventListener('click', function () {
    const destinationId = parseInt(this.getAttribute('data-id'));
    showHistoryPage(destinationId);
});

document.getElementById('mapsButton').addEventListener('click', function () {
    const destinationId = parseInt(this.getAttribute('data-id'));
    const destination = destinations.find(dest => dest.id === destinationId);
    if (destination) {
        // Ganti dengan link Google Maps yang sesuai
        window.open(`https://www.google.com/maps/search/${encodeURIComponent(destination.title + ' ' + destination.location)}`, '_blank');
    }
});

document.getElementById('backBtn').addEventListener('click', function () {
    document.getElementById('historyPage').classList.add('hidden');
    document.getElementById('destinationModal').classList.remove('hidden');
});

document.getElementById('destinationModal').addEventListener('click', function (e) {
    if (e.target === this) {
        this.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
    // Anda bisa menambahkan inisialisasi lain di sini jika diperlukan
});