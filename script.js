const menus = {
  diet: [
    {
      nama: "Salad Ayam Panggang",
      deskripsi: "Rendah kalori, tinggi protein dengan sayuran segar.",
      kalori: "688 kalori",
      gambar: "https://img-global.cpcdn.com/recipes/0254e333c774e771/1280x1280sq80/photo.webp",
      resep: `1. 150 g Dada ayam fillet
2. 1 sdm cajun powder
3. 1 sdm Mentega
4. 4 lembar Selada
5. 1/2 buah Wortel
6. 1/2 buah Timun
7. secukupnya Kol ungu
8. 4 buah Tomat cherry
9. 1 butir Telur rebus
10. 1 sachet mayones wijen sangrai.`,
      cara: `1. Marinasi ayam dengan cajun powder selama 15 menit.
2. Panaskan mentega lalu panggang ayam hingga matang dan kecokelatan, lalu potong-potong.
3. Iris selada, wortel, timun, dan kol ungu sesuai selera.
4. Potong telur rebus menjadi 4 bagian.
5. Tata sayuran di wadah, tambahkan ayam panggang, telur, dan tomat cherry.
6. Siram saus mayonaise wijen sangrai, aduk-aduk lalu siap disantap.`
    },
    {
      nama: "Sup Sayur",
      deskripsi: "Tinggi serat, sangat mengenyangkan untuk diet.",
      kalori: "180 kalori",
      gambar: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
      resep: `1. 1 buah Wortel
2. 1 buah Kentang
3. 100 g Brokoli
4. 1 batang Seledri
5. 2 siung Bawang putih
6. Garam secukupnya`,
      cara: `1. Potong semua sayuran.
2. Rebus air hingga mendidih.
3. Masukkan bawang putih dan sayuran.
4. Tambahkan garam secukupnya.
5. Masak hingga sayur empuk dan sajikan.`
    },
    {
      nama: "Oatmeal Pisang & Madu",
      deskripsi: "Sarapan tinggi serat yang bikin kenyang lebih lama.",
      kalori: "300 kalori",
      gambar: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400",
      resep: `1. 40 g Oatmeal
2. 1 buah Pisang
3. 1 sdt Madu
4. 200 ml Air panas`,
      cara: `1. Seduh oatmeal dengan air panas.
2. Aduk hingga mengental.
3. Iris pisang lalu campurkan.
4. Tambahkan madu dan sajikan.`
    },
    {
      nama: "Ayam Kukus Lada Hitam",
      deskripsi: "Protein tinggi, minim minyak.",
      kalori: "320 kalori",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIbqXv6c34XK9hsA-2Gr7tyYsX7A9c2DLxMBTNEFLew&s=10",
      resep: `1. 150 g Dada ayam
2. 1 sdt Lada hitam
3. 2 siung Bawang putih
4. Garam secukupnya`,
      cara: `1. Lumuri ayam dengan bumbu.
2. Diamkan 10 menit.
3. Kukus ayam hingga matang.
4. Sajikan hangat.`
    },
    {
      nama: "Tumis Bayam Jagung",
      deskripsi: "Ringan dan kaya zat besi.",
      kalori: "180 kalori",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-lxDruGFE3yD1AajbL5rK760YOz-Ob5139nbiJ_wcA&s=10",
      resep: `1. 1 ikat Bayam
2. 50 g Jagung pipil
3. 2 siung Bawang putih`,
      cara: `1. Tumis bawang putih hingga harum.
2. Masukkan jagung pipil.
3. Masukkan bayam, aduk cepat.
4. Angkat dan sajikan.`
    },
    {
      nama: "Pepes Tahu",
      deskripsi: "Rendah lemak, tinggi protein nabati.",
      kalori: "210 kalori",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9Z_t6TMGJzxHYy_f1YdBmC1pFHYsZ8OmSAk9Dwm-ww&s=10",
      resep: `1. 2 buah Tahu
2. Daun Kemangi
3. 1 siung Bawang putih
4. Daun pisang secukupnya`,
      cara: `1. Hancurkan tahu dan campur bumbu.
2. Bungkus dengan daun pisang.
3. Kukus selama 20 menit.
4. Sajikan.`
    },
    {
      nama: "Salad Tuna",
      deskripsi: "Protein tinggi, segar.",
      kalori: "290 kalori",
      gambar: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400",
      resep: `1. 1 kaleng Tuna
2. Selada secukupnya
3. 2 buah Tomat
4. Mayones secukupnya`,
      cara: `1. Tiriskan tuna.
2. Campur semua bahan.
3. Aduk rata dan sajikan.`
    },
    {
      nama: "Sup Bening Sawi",
      deskripsi: "Detoks alami tubuh.",
      kalori: "140 kalori",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHwoBgRwua4YCt-bKqI61yVlgMUJOmXvrl0ZRb2u2yDg&s=10",
      resep: `1. 1 ikat Sawi
2. 2 siung Bawang putih
3. Garam secukupnya`,
      cara: `1. Rebus air hingga mendidih.
2. Masukkan bawang putih.
3. Masukkan sawi.
4. Masak sebentar dan sajikan.`
    },
    {
      nama: "Omelet Putih Telur",
      deskripsi: "Protein tanpa lemak.",
      kalori: "200 kalori",
      gambar: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400",
      resep: `1. 4 Putih telur
2. Daun bawang secukupnya
3. Garam secukupnya`,
      cara: `1. Kocok putih telur dan bumbu.
2. Masak di teflon anti lengket.
3. Sajikan hangat.`
    }


    ],
  bulking: [
    {
      nama: "Nasi Ayam & Telur",
      deskripsi: "Kombinasi sempurna protein dan karbo kompleks.",
      kalori: "650 kalori",
      gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
      resep: `1. 150 g Nasi putih
2. 200 g Dada ayam panggang
3. 2 butir Telur
4. 1 sdm Minyak zaitun
5. Garam dan merica secukupnya`,
      cara: `1. Masak nasi hingga matang.
2. Panggang dada ayam hingga matang dan beri garam-merica.
3. Rebus telur hingga matang.
4. Campur semua bahan di piring saji.
5. Tambahkan minyak zaitun jika suka dan sajikan.`
    },
    {
      nama: "Steak Daging Sapi",
      deskripsi: "Protein tinggi dan karbohidrat dari kentang.",
      kalori: "800 kalori",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3Fd9Qgm1irHStbMsA87r4aGs2XqKIGLJ8TUe_Uswa3AF6Mmuh91H908&s=10",
      resep: `1. 200 g Daging sapi
2. 1 buah Kentang ukuran sedang
3. 1 sdm Mentega
4. Garam dan lada secukupnya`,
      cara: `1. Lumuri daging dengan garam dan lada.
2. Panggang daging sesuai tingkat kematangan yang diinginkan.
3. Rebus kentang atau panggang dengan mentega.
4. Sajikan steak dengan kentang di piring.`
    },
    {
      nama: "Oatmeal Protein",
      deskripsi: "Sarapan tinggi protein untuk bulking.",
      kalori: "450 kalori",
      gambar: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400",
      resep: `1. 60 g Oatmeal
2. 1 scoop Bubuk protein rasa vanila
3. 250 ml Susu
4. 1 buah Pisang
5. 1 sdt Madu`,
      cara: `1. Seduh oatmeal dengan susu panas.
2. Tambahkan bubuk protein dan aduk rata.
3. Iris pisang dan masukkan ke oatmeal.
4. Tambahkan madu di atasnya dan sajikan.`
    },
    {
      nama: "Smoothie Pisang & Selai Kacang",
      deskripsi: "Minuman tinggi kalori untuk energi bulking.",
      kalori: "500 kalori",
      gambar: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400",
      resep: `1. 2 buah Pisang matang
2. 2 sdm Selai kacang
3. 250 ml Susu almond atau susu sapi
4. 1 sdt Madu`,
      cara: `1. Masukkan semua bahan ke blender.
2. Blender hingga halus dan creamy.
3. Tuang ke gelas dan sajikan segera.`
    },
    {
      nama: "Ayam Panggang Madu",
      deskripsi: "Protein tinggi dengan tambahan karbo dari nasi.",
      kalori: "700 kalori",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqRXOZwdLq5i3KPpIzFd5mnXVeAQe6cUStjp4VAWh2g&s=10",
      resep: `1. 200 g Dada ayam
2. 1 sdm Madu
3. 1 sdm Kecap manis
4. Garam dan lada secukupnya`,
      cara: `1. Lumuri ayam dengan madu, kecap, garam, dan lada.
2. Diamkan 15 menit.
3. Panggang ayam hingga matang dan berwarna kecokelatan.
4. Sajikan dengan nasi atau sayuran.`
    },
    {
      nama: "Tuna Sandwich",
      deskripsi: "Cemilan sehat tinggi protein dan karbohidrat.",
      kalori: "450 kalori",
      gambar: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400",
      resep: `1. 2 lembar Roti gandum
2. 1 kaleng Tuna
3. 1 sdm Mayones
4. Selada secukupnya
5. Tomat iris secukupnya`,
      cara: `1. Tiriskan tuna dan campur dengan mayones.
2. Oleskan campuran tuna di atas roti.
3. Tambahkan selada dan tomat.
4. Tutup dengan roti lainnya dan sajikan.`
    }
    ],
    sehat: [
        {
            nama: "Ikan Panggang",
            deskripsi: "Sumber omega-3 yang baik untuk otak.",
            kalori: "400 kalori",
            gambar: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
            resep: "Fillet ikan nila/tuna, perasan jeruk nipis, bawang putih."
        }
    ]
};

let currentCategory = null; 

function showMenu(kategori) {
    const container = document.getElementById("menu-container");

    if (currentCategory === kategori) {
        container.innerHTML = ""; 
        currentCategory = null; 
        return; 
    }

    container.innerHTML = ""; 
    currentCategory = kategori; 

    let menuDitampilkan = [];

    // Logika untuk menampilkan SEMUA menu
    if (kategori === 'all') {
        Object.keys(menus).forEach(key => {
            menuDitampilkan = menuDitampilkan.concat(menus[key]);
        });
    } else {
        menuDitampilkan = menus[kategori];
    }

    menuDitampilkan.forEach(menu => {
        const card = document.createElement("div");
        card.className = "menu-card";
        card.onclick = () => showRecipe(menu.nama, menu.resep, menu.cara || "Cara tidak tersedia.");
        
        card.innerHTML = `
            <div class="menu-info">
                <h3>${menu.nama}</h3>
                <p>${menu.deskripsi}</p>
                <strong>🔥 ${menu.kalori}</strong>
                <p style="font-size: 11px; color: #999; margin-top: 10px;">Klik untuk resep</p>
            </div>
            <img src="${menu.gambar}" alt="${menu.nama}" class="menu-img">
        `;
        container.appendChild(card);
    });
}


function showRecipe(nama, resep,cara) {
    document.getElementById("modal-title").innerText = nama;
    document.getElementById("modal-body").innerText = resep;
    document.getElementById("modal").style.display = "flex";
    document.getElementById("cara").innerText = cara;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) closeModal();
}