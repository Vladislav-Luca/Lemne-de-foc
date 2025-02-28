// Redirecționează către pagina de detalii
function deschidePagina(produs) {
    window.location.href = "detalii.html?produs=" + produs;
}

// Preia parametrii din URL și încarcă detaliile produsului
document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const produs = params.get("produs");

    const produse = {
        stejar: {
            titlu: "Lemn de Stejar",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxFgXSQfJvnm-PcEHF3-BAI7o7Y_W5iIncw&s",
            descriere: "Lemnul de stejar este perfect pentru sobe și șeminee, având o ardere lentă și eficientă.",
            pret: "400 lei/mc"
        },
        fag: {
            titlu: "Lemn de Fag",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZfzAqP83gmCeOD7VsovZlF1fxAbjI45ZGA&s",
            descriere: "Lemnul de fag este recomandat pentru grătare, oferind o aromă deosebită preparatelor.",
            pret: "450 lei/mc"
        },
        brad: {
            titlu: "Lemn de Brad",
            img: "https://revistadinlemn.ro/wp-content/uploads/2017/01/sectiune-molid-fld.czu_.cz_.jpg?ezimgfmt=rs:335x337/rscb2/ng:webp/ngcb2",
            descriere: "Lemnul de brad este ideal pentru focuri de tabără, fiind ușor de aprins și economic.",
            pret: "300 lei/mc"
        }
    };

    if (produse[produs]) {
        document.getElementById("titlu-produs").innerText = produse[produs].titlu;
        document.getElementById("imagine-produs").src = produse[produs].img;
        document.getElementById("descriere-produs").innerText = produse[produs].descriere;
        document.getElementById("pret-produs").innerText = "Preț: " + produse[produs].pret;
    } else {
        document.getElementById("detalii-produs").innerHTML = "<p>Produsul nu a fost găsit.</p>";
    }
});
