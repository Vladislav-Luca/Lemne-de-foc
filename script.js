// Obține parametrii din URL (ex: detalii.html?produs=stejar)
const params = new URLSearchParams(window.location.search);
const produs = params.get("produs");

// Definim detaliile produselor într-un obiect
const produse = {
    stejar: {
        titlu: "Lemn de Stejar",
        imagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxFgXSQfJvnm-PcEHF3-BAI7o7Y_W5iIncw&s",
        pret: "Preț: 400 lei/mc",
        descriere: "Lemnul de stejar este ideal pentru încălzire, deoarece arde lent și produce o căldură intensă."
    },
    fag: {
        titlu: "Lemn de Fag",
        imagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZfzAqP83gmCeOD7VsovZlF1fxAbjI45ZGA&s",
        pret: "Preț: 450 lei/mc",
        descriere: "Arde bine și este perfect pentru gătit la grătar. Aroma sa face minuni pentru orice preparat."
    },
    brad: {
        titlu: "Lemn de Brad",
        imagine: "https://revistadinlemn.ro/wp-content/uploads/2017/01/sectiune-molid-fld.czu_.cz_.jpg?ezimgfmt=rs:335x337/rscb2/ng:webp/ngcb2",
        pret: "Preț: 300 lei/mc",
        descriere: "Lemnul de brad este ușor și ieftin, ideal pentru focuri de tabără și șeminee."
    }
};

// Verificăm dacă produsul există în obiectul nostru și actualizăm pagina
if (produse[produs]) {
    document.getElementById("titlu-produs").textContent = produse[produs].titlu;
    document.getElementById("produs-imagine").src = produse[produs].imagine;
    document.getElementById("produs-imagine").alt = produse[produs].titlu;
    document.getElementById("produs-pret").textContent = produse[produs].pret;
    document.getElementById("produs-descriere").textContent = produse[produs].descriere;
} else {
    // Dacă nu există produsul, afișăm un mesaj
    document.getElementById("detalii-container").innerHTML = "<h2>Produsul nu a fost găsit.</h2>";
}
