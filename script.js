const menus = {
    diet: [
        {
            nama: "Salad Ayam",
            deskripsi: "Rendah kalori, tinggi protein",
            kalori: "250 kkal"
        },
        {
            nama: "Sup Sayur",
            deskripsi: "Tinggi serat, cocok untuk diet",
            kalori: "180 kkal"
        }
    ],
    bulking: [
        {
            nama: "Nasi Ayam & Telur",
            deskripsi: "Tinggi protein dan karbohidrat",
            kalori: "650 kkal"
        },
        {
            nama: "Oatmeal Pisang",
            deskripsi: "Energi tinggi untuk massa otot",
            kalori: "500 kkal"
        }
    ],
    sehat: [
        {
            nama: "Ikan Panggang",
            deskripsi: "Protein sehat & omega-3",
            kalori: "400 kkal"
        },
        {
            nama: "Tumis Sayur",
            deskripsi: "Nutrisi seimbang",
            kalori: "300 kkal"
        }
    ]
};

function showMenu(kategori) {
    const container = document.getElementById("menu-container");
    container.innerHTML = "";

    menus[kategori].forEach(menu => {
        container.innerHTML += `
            <div class="menu-card">
                <h3>${menu.nama}</h3>
                <p>${menu.deskripsi}</p>
                <strong>${menu.kalori}</strong>
            </div>
        `;
    });
}