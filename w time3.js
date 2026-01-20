function tampilkanMenu(jenis) {
    let menu = document.getElementById("menu");

    if (jenis === "diet") {
        menu.innerHTML = `
        <h3>Menu Diet</h3>
        <ul>
            <li>Salad sayur + dada ayam</li>
            <li>Oatmeal tanpa gula</li>
            <li>Sup sayur rendah kalori</li>
        </ul>
        `;
    } 
    else if (jenis === "sehat") {
        menu.innerHTML = `
        <h3>Menu Makan Sehat</h3>
        <ul>
            <li>Nasi merah + ikan panggang</li>
            <li>Sayur bening bayam</li>
            <li>Buah potong segar</li>
        </ul>
        `;
    } 
    else if (jenis === "bulking") {
        menu.innerHTML = `
        <h3>Menu Bulking</h3>
        <ul>
            <li>Nasi putih + ayam panggang</li>
            <li>Telur rebus</li>
            <li>Susu tinggi protein</li>
        </ul>
        `;
    }
}
