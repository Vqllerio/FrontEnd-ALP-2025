// Data destinasi wisata
const destinations = [
    {
        id: 1,
        title: "Pantai Losari",
        location: "Makassar",
        description: "Sunset terindah di Makassar dengan deretan kuliner khas yang menggoda",
        image: "https://images.unsplash.com/photo-1589394815804-9648adb3d470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 4.7,
        reviews: 1200,
        userRating: 0, // Untuk menyimpan rating pengguna
        category: "pantai"
    },
    {
        id: 2,
        title: "Rammang-Rammang",
        location: "Maros",
        description: "Kawasan karst megah dengan pemandangan alam yang memesona",
        image: "https://images.unsplash.com/photo-1586861203732-3625dcf8d763?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 5.0,
        reviews: 892,
        userRating: 0,
        category: "alam"
    },
    {
        id: 3,
        title: "Fort Rotterdam",
        location: "Makassar",
        description: "Benteng bersejarah peninggalan Kerajaan Gowa yang megah",
        image: "https://images.unsplash.com/photo-1499591934245-40b55745b0dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 4.9,
        reviews: 1500,
        userRating: 0,
        category: "budaya"
    },
    {
        id: 4,
        title: "Malino",
        location: "Gowa",
        description: "Destinasi pegunungan sejuk dengan perkebunan teh dan air terjun",
        image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 4.8,
        reviews: 1100,
        userRating: 0,
        category: "pegunungan"
    },
    {
        id: 5,
        title: "Tana Toraja",
        location: "Toraja Utara",
        description: "Budaya unik, rumah adat tongkonan, dan pemandangan alam memukau",
        image: "https://images.unsplash.com/photo-1518544866330-95b5af6d2367?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 4.6,
        reviews: 2300,
        userRating: 0,
        category: "budaya"
    },
    {
        id: 6,
        title: "Pulau Samalona",
        location: "Makassar",
        description: "Pulau kecil dengan pantai pasir putih dan terumbu karang indah",
        image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 4.9,
        reviews: 876,
        userRating: 0,
        category: "pantai"
    },
        {
        id: 7,
        title: "Pulau Gladys",
        location: "Makassar",
        description: "Pulau kecil dengan pantai pasir pink dan terumbu karang yang jelek",
        image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        rating: 3,
        reviews: 1000,
        userRating: 0,
        category: "pantai"
    }
];

// Data sejarah dan budaya untuk setiap destinasi
const historyData = {
    1: {
        title: "Pantai Losari",
        location: "Makassar, Sulawesi Selatan",
        image: "https://images.unsplash.com/photo-1589394815804-9648adb3d470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Pantai Losari</h3>
      <p class="text-liver mb-6">
        Pantai Losari memiliki sejarah panjang sebagai pusat kehidupan masyarakat Makassar sejak abad ke-16. 
        Nama "Losari" berasal dari kata "Losari" yang berarti tempat berkumpulnya para nelayan. 
        Pada masa Kerajaan Gowa-Tallo, pantai ini menjadi pusat perdagangan rempah-rempah dan titik penting 
        dalam jalur pelayaran Nusantara.
      </p>
      
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya dan Tradisi</h3>
      <p class="text-liver mb-6">
        Pantai Losari bukan hanya tempat wisata, tapi juga pusat budaya masyarakat Makassar. 
        Setiap sore, pantai ini menjadi tempat berkumpul keluarga, muda-mudi, dan komunitas lokal. 
        Tradisi "Mappadendang" (menonton matahari terbenam) menjadi ritual harian yang diwariskan turun-temurun.
      </p>
    `
    },
    2: {
        title: "Rammang-Rammang",
        location: "Maros, Sulawesi Selatan",
        image: "https://images.unsplash.com/photo-1586861203732-3625dcf8d763?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Geologis</h3>
      <p class="text-liver mb-6">
        Rammang-Rammang adalah kawasan karst terbesar kedua di dunia setelah Cina. 
        Formasi batuan kapurnya terbentuk selama jutaan tahun melalui proses sedimentasi 
        dan pengangkatan geologis. Kawasan ini menyimpan sejarah bumi yang panjang dengan 
        usia batuan mencapai 30 juta tahun.
      </p>
      <h3>Budaya</h3>
    `
    },
    3: {
        title: "Fort Rotterdam",
        location: "Makassar, Sulawesi Selatan",
        image: "https://images.unsplash.com/photo-1499591934245-40b55745b0dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Benteng</h3>
      <p class="text-liver mb-6">
        Fort Rotterdam dibangun pada tahun 1545 oleh Raja Gowa ke-9, I Manrigau Daeng Bonto Karaeng Lakiung Tumapa'risi' Kallonna. 
        Awalnya bernama Benteng Ujung Pandang, benteng ini menjadi pusat pertahanan Kerajaan Gowa. 
        Setelah Perjanjian Bongaya tahun 1667, benteng beralih ke tangan Belanda dan berganti nama menjadi Fort Rotterdam.
      </p>
    `
    },
    4: {
        title: "Malino",
        location: "Gowa, Sulawesi Selatan",
        image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Malino</h3>
      <p class="text-liver mb-6">
        Malino telah menjadi tempat peristirahatan sejak zaman kolonial Belanda. 
        Nama "Malino" berasal dari kata "Mali'no" yang dalam bahasa Makassar berarti 
        "dingin" atau "sejuk". Pada masa pendudukan Jepang, daerah ini menjadi basis 
        perlawanan gerilya.
      </p>
    `
    },
    5: {
        title: "Tana Toraja",
        location: "Toraja Utara, Sulawesi Selatan",
        image: "https://images.unsplash.com/photo-1518544866330-95b5af6d2367?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Tana Toraja</h3>
      <p class="text-liver mb-6">
        Masyarakat Toraja dipercaya berasal dari migran yang datang dari Kamboja 
        melalui perahu. Mereka kemudian menetap di pegunungan Sulawesi Selatan 
        dan mengembangkan budaya yang unik. Kata "Toraja" berasal dari bahasa Bugis 
        "To Riaja" yang berarti "orang yang berdiam di negeri atas".
      </p>
    `
    },
    6: {
        title: "Pulau Samalona",
        location: "Makassar, Sulawesi Selatan",
        image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Pulau Samalona</h3>
      <p class="text-liver mb-6">
        Pulau Samalona telah menjadi bagian penting dalam sejarah maritim Makassar. 
        Pada abad ke-17, pulau ini menjadi tempat persinggahan kapal-kapal Belanda 
        sebelum memasuki pelabuhan Makassar. Mercusuar di pulau ini dibangun pada 
        tahun 1903 dan masih berfungsi hingga kini.
      </p>
    `
    },
    7: {
        title: "Pulau Gladys",
        location: "Makassar, Sulawesi Selatan",
        image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        content: `
      <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Pulau Gladys</h3>
      <p class="text-liver mb-6">
        Pulau Gladys HOOEEEKk telah menjadi bagian penting dalam sejarah maritim Makassar. 
        Pada abad ke-17, pulau ini menjadi tempat persinggahan kapal-kapal Belanda 
        sebelum memasuki pelabuhan Makassar. Mercusuar di pulau ini dibangun pada 
        tahun 1903 dan masih berfungsi hingga kini.
      </p>
    `
    }
};

// Simpan data di localStorage untuk rating pengguna
if (!localStorage.getItem('userRatings')) {
    localStorage.setItem('userRatings', JSON.stringify({}));
}