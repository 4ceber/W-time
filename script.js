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
cara:`1. Marinasi ayam dengan cajun powder selama 15 menit.

2. Pa Asian mentega lalu panggang ayam di atas pan hingga matang dan kecokelatan, lalu potong-potong.

3. Iris selada, wortel, timun, dan kol ungu sesuai selera.

4. Potong telur rebus menjadi 4 bagian

5. Tata sayuran di wadah, tambahkan ayam panggang, telur, dan tomat cherry di atasnya.

6. Siram saus mayonaise wijen sangrai, aduk-aduk lalu siap disantap`,
        },
        {
            nama: "Sup Sayur",
            deskripsi: "Tinggi serat, sangat mengenyangkan untuk diet.",
            kalori: "180 kalori",
            gambar: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
            resep: "Wortel, kentang, brokoli, seledri, dan bawang putih geprek."
        },
        {
            nama: "Oatmeal Pisang & Madu",
            deskripsi: "Sarapan tinggi serat yang bikin kenyang lebih lama.",
            kalori: "300 kalori",
            gambar: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400",
            resep: "1. 40 g oatmeal\n2. 1 buah pisang\n3. 1 sdt madu"
        }
    ],
    bulking: [
        {
            nama: "Nasi Ayam & Telur",
            deskripsi: "Kombinasi sempurna protein dan karbo kompleks.",
            kalori: "650 kalori",
            gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
            resep: "150g Nasi putih, 200g dada ayam panggang, 2 telur rebus."
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

    menus[kategori].forEach(menu => {
        const card = document.createElement("div");
        card.className = "menu-card";
        card.onclick = () => showRecipe(menu.nama, menu.resep, menu.cara);
        
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