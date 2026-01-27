const menus = {
    diet: [
        {
            nama: "Salad Ayam",
            deskripsi: "Rendah kalori, tinggi protein dengan sayuran segar.",
            kalori: "250 kkal",
            resep: "Potongan ayam rebus, selada romaine, tomat cherry, timun, dan dressing olive oil lemon."
        },
        {
            nama: "Sup Sayur",
            deskripsi: "Tinggi serat, sangat mengenyangkan untuk diet.",
            kalori: "180 kkal",
            resep: "Wortel, kentang, brokoli, seledri, dan bawang putih geprek."
        }
    ],
    bulking: [
        {
            nama: "Nasi Ayam & Telur",
            deskripsi: "Kombinasi sempurna protein dan karbo kompleks.",
            kalori: "650 kkal",
            resep: "150g Nasi putih, 200g dada ayam panggang, 2 telur rebus, dan sedikit kecap manis."
        },
        {
            nama: "Oatmeal Pisang",
            deskripsi: "Energi tinggi untuk performa otot maksimal.",
            kalori: "500 kkal",
            resep: "Oatmeal instan, 1 buah pisang matang, susu full cream, dan 1 sendok makan madu."
        }
    ],
    sehat: [
        {
            nama: "Ikan Panggang",
            deskripsi: "Sumber omega-3 yang baik untuk otak.",
            kalori: "400 kkal",
            resep: "Fillet ikan nila/tuna, perasan jeruk nipis, bawang putih, dan lada hitam."
        },
        {
            nama: "Tumis Sayur Pelangi",
            deskripsi: "Kaya akan vitamin dan mineral esensial.",
            kalori: "300 kkal",
            resep: "Buncis, wortel, jagung muda, bawang merah, dan sedikit minyak zaitun."
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
        card.onclick = () => showRecipe(menu.nama, menu.resep);
        
        card.innerHTML = `
            <h3>${menu.nama}</h3>
            <p>${menu.deskripsi}</p>
            <strong>🔥 ${menu.kalori}</strong>
            <p style="font-size: 11px; color: #999; margin-top: 10px;">Klik untuk resep</p>
        `;
        container.appendChild(card);
    });
}

function showRecipe(nama, resep) {
    document.getElementById("modal-title").innerText = nama;
    document.getElementById("modal-body").innerText = resep;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        closeModal();
    }
}