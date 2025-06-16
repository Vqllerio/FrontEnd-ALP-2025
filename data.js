
const destinations = [
  {
    id: 1,
    title: "Pantai Losari",
    location: "Makassar",
    description: "Sunset terindah di Makassar dengan deretan kuliner khas yang menggoda",
    image: "https://images.unsplash.com/photo-1589394815804-9648adb3d470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.7,
    reviews: 1200,
    userRating: 0,
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
    category: "taman"
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
  },
  {
    id: 8,
    title: "Danau Tempe",
    location: "Wajo, Sulawesi Selatan",
    description: "Danau tektonik purba dengan budaya Bugis dan rumah apung yang unik",
    image: "https://images.unsplash.com/photo-1594786116857-0ad8b0176e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.8,
    reviews: 980,
    userRating: 0,
    category: "Danau"
  },
  {
    id: 10,
    title: "Kuburan Londa",
    location: "Toraja Utara",
    description: "Makam gua purba dengan peti mati dan tengkorak ratusan tahun",
    image: "https://images.unsplash.com/photo-1549887534-c4c3b94c52f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.6,
    reviews: 2044,
    userRating: 0,
    category: "Edukasi & Sejarah"
  },
  {
    id: 11,
    title: "Museum Ne’ Gandeng",
    location: "Toraja Utara",
    description: "Museum adat dan penghormatan budaya leluhur Toraja",
    image: "https://images.unsplash.com/photo-1533514114760-4389f0c1c95e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.4,
    reviews: 576,
    userRating: 0,
    category: "Edukasi & Sejarah"
  },
  {
    id: 12,
    title: "Kolam Limbong",
    location: "Toraja Utara",
    description: "Telaga kecil tenang dengan pemandangan tebing dan suasana alam yang damai",
    image: "https://images.unsplash.com/photo-1533599023901-bcdf5a9b3618?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.3,
    reviews: 302,
    userRating: 0,
    category: "Danau"
  },
  {
    id: 13,
    title: "Kalimbuang Bori",
    location: "Toraja Utara",
    description: "Situs batu menhir megalitikum sakral dan upacara pemakaman adat",
    image: "https://images.unsplash.com/photo-1525850260704-6c7729c15d7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.6,
    reviews: 1080,
    userRating: 0,
    category: "Edukasi & Sejarah"
  },
  {
    id: 14,
    title: "Lolai To' Tombi",
    location: "Toraja Utara",
    description: "Negeri di atas awan dengan pemandangan matahari terbit dan kabut lembah",
    image: "https://images.unsplash.com/photo-1590419856634-ff6ef45b4b7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.6,
    reviews: 3651,
    userRating: 0,
    category: "pegunungan"
  },
  {
    id: 1,
    title: "Pantai Losari",
    location: "Makassar",
    description: "Sunset terindah di Makassar dengan deretan kuliner khas yang menggoda",
    image: "https://images.unsplash.com/photo-1589394815804-9648adb3d470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.7,
    reviews: 1200,
    userRating: 0,
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
    category: "taman"
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
  },
  {
    id: 8,
    title: "Danau Tempe",
    location: "Wajo, Sulawesi Selatan",
    description: "Danau tektonik purba dengan budaya Bugis dan rumah apung yang unik",
    image: "https://images.unsplash.com/photo-1594786116857-0ad8b0176e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.8,
    reviews: 980,
    userRating: 0,
    category: "Danau"
  },
  {
    id: 10,
    title: "Kuburan Londa",
    location: "Toraja Utara",
    description: "Makam gua purba dengan peti mati dan tengkorak ratusan tahun",
    image: "https://images.unsplash.com/photo-1549887534-c4c3b94c52f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.6,
    reviews: 2044,
    userRating: 0,
    category: "Edukasi & Sejarah"
  },
  {
    id: 11,
    title: "Museum Ne’ Gandeng",
    location: "Toraja Utara",
    description: "Museum adat dan penghormatan budaya leluhur Toraja",
    image: "https://images.unsplash.com/photo-1533514114760-4389f0c1c95e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.4,
    reviews: 576,
    userRating: 0,
    category: "Edukasi & Sejarah"
  },
  {
    id: 12,
    title: "Kolam Limbong",
    location: "Toraja Utara",
    description: "Telaga kecil tenang dengan pemandangan tebing dan suasana alam yang damai",
    image: "https://images.unsplash.com/photo-1533599023901-bcdf5a9b3618?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.3,
    reviews: 302,
    userRating: 0,
    category: "Danau"
  },
  {
    id: 13,
    title: "Kalimbuang Bori",
    location: "Toraja Utara",
    description: "Situs batu menhir megalitikum sakral dan upacara pemakaman adat",
    image: "https://images.unsplash.com/photo-1525850260704-6c7729c15d7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.6,
    reviews: 1080,
    userRating: 0,
    category: "Edukasi & Sejarah"
  },
  {
    id: 14,
    title: "Lolai To' Tombi",
    location: "Toraja Utara",
    description: "Negeri di atas awan dengan pemandangan matahari terbit dan kabut lembah",
    image: "https://images.unsplash.com/photo-1590419856634-ff6ef45b4b7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.6,
    reviews: 3651,
    userRating: 0,
    category: "pegunungan"
  },

  {
    id: 15,
    title: "Buttu Macca",
    location: "Enrekang",
    description: "Destinasi alam pegunungan dengan spot foto kreatif dan wahana ekstrem",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.8,
    reviews: 1500,
    userRating: 0,
    category: "pegunungan"
  },
  {
    id: 16,
    title: "Air Terjun Lewaja",
    location: "Enrekang",
    description: "Air terjun alami dengan kolam segar dan nuansa pegunungan tenang",
    image: "https://images.unsplash.com/photo-1601279528942-c9e1c3b2ad8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.0,
    reviews: 680,
    userRating: 0,
    category: "air terjun"
  },
  {
    id: 17,
    title: "Mendatte Park",
    location: "Enrekang",
    description: "Taman wisata alam keluarga dengan panorama karst dan aktivitas camping",
    image: "https://images.unsplash.com/photo-1594621100646-b3c8e9eb9438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.7,
    reviews: 745,
    userRating: 0,
    category: "Pegunungan"
  },
  {
    id: 18,
    title: "Dante Pine",
    location: "Enrekang",
    description: "Wisata alam pinus dengan wahana ekstrem dan kuliner khas Enrekang",
    image: "https://images.unsplash.com/photo-1587497119359-b78d89fcf34f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.4,
    reviews: 1132,
    userRating: 0,
    category: "Pegunungan"
  },
  {
    id: 19,
    title: "Lembah Kotu",
    location: "Enrekang",
    description: "Lembah karst dengan nilai sejarah dan panorama trekking menawan",
    image: "https://images.unsplash.com/photo-1604063058114-4d9842c7383f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.5,
    reviews: 430,
    userRating: 0,
    category: "Budaya/Edukasi/Sejarah"
  }.category,
  {
    id: 15,
    title: "Buttu Macca",
    location: "Enrekang",
    description: "Destinasi alam pegunungan dengan spot foto kreatif dan wahana ekstrem",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.8,
    reviews: 1500,
    userRating: 0,
    category: "pegunungan"
  },
  {
    id: 16,
    title: "Air Terjun Lewaja",
    location: "Enrekang",
    description: "Air terjun alami dengan kolam segar dan nuansa pegunungan tenang",
    image: "https://images.unsplash.com/photo-1601279528942-c9e1c3b2ad8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.0,
    reviews: 680,
    userRating: 0,
    category: "air terjun"
  },
  {
    id: 17,
    title: "Mendatte Park",
    location: "Enrekang",
    description: "Taman wisata alam keluarga dengan panorama karst dan aktivitas camping",
    image: "https://images.unsplash.com/photo-1594621100646-b3c8e9eb9438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.7,
    reviews: 745,
    userRating: 0,
    category: "Pegunungan"
  },
  {
    id: 18,
    title: "Dante Pine",
    location: "Enrekang",
    description: "Wisata alam pinus dengan wahana ekstrem dan kuliner khas Enrekang",
    image: "https://images.unsplash.com/photo-1587497119359-b78d89fcf34f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.4,
    reviews: 1132,
    userRating: 0,
    category: "Pegunungan"
  },
  {
    id: 19,
    title: "Lembah Kotu",
    location: "Enrekang",
    description: "Lembah karst dengan nilai sejarah dan panorama trekking menawan",
    image: "https://images.unsplash.com/photo-1604063058114-4d9842c7383f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.5,
    reviews: 430,
    userRating: 0,
    category: "Budaya/Edukasi/Sejarah"
  }
];

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
  },
  8: {
    title: "Danau Tempe",
    location: "Wajo, Soppeng, Sidenreng Rappang – Sulawesi Selatan",
    image: "https://images.unsplash.com/photo-1594786116857-0ad8b0176e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
          <h3 class="text-2xl font-bold text-midnight-green mb-4">Asal-usul dan Geologi</h3>
          <p class="text-liver mb-6">
            Danau Tempe adalah danau tektonik purba yang terbentuk sejak akhir zaman es, antara 20.000–10.000 SM akibat pergeseran Lempeng Australia dan Eurasia. Awalnya merupakan cekungan laut yang kemudian terisi air tawar. Luasnya mencapai 350 km² dan termasuk salah satu danau terluas di Sulawesi.
          </p>

          <h3 class="text-2xl font-bold text-midnight-green mb-4">Kehidupan dan Budaya Lokal</h3>
          <p class="text-liver mb-6">
            Masyarakat Bugis tinggal di rumah apung dan memegang tradisi kuat, seperti larangan melaut saat malam Jumat dan menyucikan danau secara berkala. Tradisi ini menjaga harmoni antara manusia dan alam.
          </p>

          <h3 class="text-2xl font-bold text-midnight-green mb-4">Festival Maccera Tappareng</h3>
          <p class="text-liver mb-6">
            Diadakan setiap 23 Agustus, festival ini adalah ritual penyucian danau. Disertai penyembelihan kerbau, parade perahu, tarian Bissu, dan pertunjukan budaya. Ini adalah simbol kearifan lokal dan pelestarian lingkungan.
          </p>

          <h3 class="text-2xl font-bold text-midnight-green mb-4">Ancaman dan Revitalisasi</h3>
          <p class="text-liver mb-6">
            Danau ini menghadapi pendangkalan hingga 30 cm per tahun dan serangan eceng gondok. Pemerintah menetapkannya sebagai danau prioritas nasional dengan program revitalisasi sejak 2015.
          </p>

          <h3 class="text-2xl font-bold text-midnight-green mb-4">Harga Tiket dan Akses</h3>
          <p class="text-liver mb-6">
            Tidak dikenakan tiket masuk. Sewa perahu motor sekitar Rp 100.000–150.000, atau mulai Rp 75.000 untuk perahu dayung, tergantung rute dan durasi.
        </p>      
     `
  },
  9: {
    title: "Kuburan Londa",
    location: "Toraja Utara",
    image: "https://images.unsplash.com/photo-1549887534-c4c3b94c52f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
          <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah dan Budaya Londa</h3>
          <p class="text-liver mb-6">
            Londa adalah situs pemakaman gua alami yang sudah digunakan sejak abad ke-11. Terletak di bukit curam, gua ini hanya diperuntukkan bagi keluarga keturunan To’Lengke dan To’Pangrapa. Tradisi pemakaman di sini menggunakan prosesi adat bernama Rambu’ Solo yang menunjukkan status sosial melalui jumlah kerbau yang dikurbankan.
          </p>
          <p class="text-liver mb-6">
            Selain sejarah spiritual, Londa juga menyimpan kisah tragis seperti kisah Romeo dan Juliet versi Toraja—sepasang kekasih yang bunuh diri karena cinta tak direstui. Gua ini juga pernah menjadi benteng pertahanan dari serangan kerajaan Bone dan VOC.
          </p>
        `
  },
  10: {
    title: "Museum Ne’ Gandeng",
    location: "Toraja Utara",
    image: "https://images.unsplash.com/photo-1533514114760-4389f0c1c95e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
          <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Museum Ne’ Gandeng</h3>
          <p class="text-liver mb-6">
            Museum ini awalnya adalah lokasi pemakaman Ne’ Gandeng, tetua adat Toraja yang sangat dihormati. Setelah meninggal tahun 1994, lokasi prosesi pemakamannya diubah menjadi museum untuk mengenang jasa beliau.
          </p>
          <h3 class="text-2xl font-bold text-midnight-green mb-4">Budaya Toraja di Museum</h3>
          <p class="text-liver mb-6">
            Museum ini menyimpan rumah adat Tongkonan, benda-benda sejarah, serta mencerminkan struktur sosial masyarakat Toraja yang bersifat komunal dan gotong royong.
          </p>
        `
  },
  11: {
    title: "Kolam Limbong",
    location: "Toraja Utara",
    image: "https://images.unsplash.com/photo-1533599023901-bcdf5a9b3618?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
          <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah Kolam Limbong</h3>
          <p class="text-liver mb-6">
            Kolam Limbong adalah danau kecil yang dikenal sejak lima generasi oleh penduduk lokal. Menurut cerita, air danau ini dipercaya menyembuhkan penyakit tertentu. Nama "Limbong" juga berakar dari kisah tokoh Limbong Mulana, yang memiliki hubungan historis dengan suku Batak dan Toraja.
          </p>
        `
  },
  12: {
    title: "Kalimbuang Bori",
    location: "Toraja Utara",
    image: "https://images.unsplash.com/photo-1525850260704-6c7729c15d7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
          <h3 class="text-2xl font-bold text-midnight-green mb-4">Kompleks Megalitikum Kalimbuang Bori</h3>
          <p class="text-liver mb-6">
            Situs ini telah digunakan sejak 1718 sebagai tempat pemakaman bagi bangsawan Toraja. Terdapat lebih dari 100 menhir batu berdiri tegak sebagai simbol penghormatan kepada leluhur. Prosesnya melibatkan upacara adat dan gotong royong masyarakat.
          </p>
        `
  },
  13: {
    title: "Lolai To' Tombi",
    location: "Toraja Utara",
    image: "https://images.unsplash.com/photo-1590419856634-ff6ef45b4b7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
          <h3 class="text-2xl font-bold text-midnight-green mb-4">Negeri di Atas Awan Lolai To' Tombi</h3>
          <p class="text-liver mb-6">
            Terletak di ketinggian 1300 mdpl, Lolai dikenal sebagai negeri di atas awan karena gumpalan kabut yang menyelimuti perbukitan. Tempat ini mulai terkenal karena keindahan matahari terbit dan lanskap alamnya yang luar biasa.
          </p>
          <p class="text-liver mb-6">
            Selain itu, tersedia spot foto ikonik, kedai kopi Toraja, dan penginapan bagi wisatawan yang ingin bermalam.
          </p>
        `
  },
  14: {
    title: "Buttu Macca",
    location: "Enrekang",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
          <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah dan Budaya Buttu Macca</h3>
          <p class="text-liver mb-6">
            Dahulu, Buttu Macca adalah tempat nazar warga Desa Bambapuang. Pengunjung mengikat ilalang sebagai simbol permohonan kepada Dewata. Kini, lokasi ini dikembangkan secara swadaya oleh Laskar Bambapuang menjadi destinasi wisata kreatif sejak 2016–2018.
          </p>
          <p class="text-liver mb-6">
            Nama "Buttu Macca" berarti "Bukit Pintar", mencerminkan semangat gotong royong dan budaya Bugis dalam membangun pariwisata berbasis komunitas.
          </p>
        `
  },
  15: {
    title: "Air Terjun Lewaja",
    location: "Enrekang",
    image: "https://images.unsplash.com/photo-1601279528942-c9e1c3b2ad8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
          <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah dan Budaya Air Terjun Lewaja</h3>
          <p class="text-liver mb-6">
            Terletak di Desa Wisata Lewaja, air terjun ini dikembangkan sebagai destinasi desa oleh pemerintah dan warga setempat. Kawasan ini menggambarkan perpaduan keasrian alam dan kearifan budaya.
          </p>
          <p class="text-liver mb-6">
            Warga lokal aktif menjaga kebersihan dan kealamiannya melalui gotong royong, menjadikannya simbol konservasi lingkungan desa.
          </p>
        `
  },
  16: {
    title: "Mendatte Park",
    location: "Enrekang",
    image: "https://images.unsplash.com/photo-1594621100646-b3c8e9eb9438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
          <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah dan Budaya Mendatte Park</h3>
          <p class="text-liver mb-6">
            Dikelola oleh BUMDesa sejak 2020, Mendatte Park dibangun di atas lanskap karst dan lembah Suruganna Bambapuang. Tempat ini berkembang sebagai pusat wisata berbasis komunitas dan pertanian lokal.
          </p>
          <p class="text-liver mb-6">
            Budaya gotong royong dan penyajian kuliner khas seperti kopi dan hasil kebun menjadi bagian dari pengalaman wisata yang autentik di sini.
          </p>
        `
  },
  17: {
    title: "Dante Pine",
    location: "Enrekang",
    image: "https://images.unsplash.com/photo-1587497119359-b78d89fcf34f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
          <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah dan Budaya Dante Pine</h3>
          <p class="text-liver mb-6">
            Diresmikan tahun 2017 oleh Hardiono dan pemuda lokal, Dante Pine menghadirkan wisata pinus rindang dengan wahana ekstrem. Dulunya hanya hutan liar, kini jadi tempat favorit keluarga dan pecinta alam.
          </p>
          <p class="text-liver mb-6">
            Tempat ini juga menyajikan kopi Kalosi dan kuliner khas seperti Dangke dan Deppa Tetekan. Inovasi ekonomi desa seperti transaksi koin lokal Benggolo' memperkuat semangat pemberdayaan.
          </p>
        `
  },
  18: {
    title: "Lembah Kotu",
    location: "Enrekang",
    image: "https://images.unsplash.com/photo-1604063058114-4d9842c7383f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: `
          <h3 class="text-2xl font-bold text-midnight-green mb-4">Sejarah dan Budaya Lembah Kotu</h3>
          <p class="text-liver mb-6">
            Lembah Kotu adalah situs arkeologis dengan bukti pemukiman praislam, termasuk temuan lesung batu dan tembikar. Lokasi ini terletak di kaki Gunung Bambapuang dan dikelilingi tebing karst.
          </p>
          <p class="text-liver mb-6">
            Komunitas adat Tapong menjaga kelestarian lembah dengan nilai-nilai seperti peppasang (nasihat leluhur) dan mappemali (larangan adat), menciptakan hubungan sakral antara manusia dan alam.
          </p>
        `
  }
  };
if (!localStorage.getItem('userRatings')) {
  localStorage.setItem('userRatings', JSON.stringify({}));
  localStorage.setItem('userRatings', JSON.stringify({}));
}