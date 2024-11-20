const baseUrl = "https://jsonplaceholder.typicode.com/";
const resource = "photos";

// Oggetto params per limitare il numero di foto
const params = { "_limit": 6 };

// Chiamata Axios per ottenere 6 foto
axios.get(baseUrl + resource, { params })
    .then((res) => {
        // Ottengo le foto dalla risposta
        const photos = res.data;

        // Seleziono il contenitore delle cards
        let postcards = document.querySelector(".container");

        // Creo una card per ogni foto
        photos.forEach((photo) => {
            let card = document.createElement("div");
            card.classList.add("row");

            card.innerHTML = `
                <div class="col">
                    <div id="pin">
                        <img src="./img/pin.svg" alt="Pin Icon">
                    </div>
                    <figure id="photo-${photo.id}">
                        <img src="${photo.url}" alt="${photo.title}">
                        <figcaption class="capitalize">${photo.title}</figcaption>
                    </figure>
                </div>
            `;

            postcards.appendChild(card);
        });

        getImg();
    })
    .catch((error) => {
        console.log(error);
    });

// Imposto l'overlay
function getImg() {
    const images = document.querySelectorAll("figure"); //lo seleziono dinamicamente dal template.

    // Selezioni dal DOM 
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("img-overlay");
    const closeBtn = document.getElementById("close-overlay");

    // Aggiungo evento click a ogni figura
    images.forEach((img) => {
        img.addEventListener("click", () => {
            const imgSrc = img.querySelector("img").src;
            overlayImg.src = imgSrc; // Aggiorno l'immagine dell'overlay
            overlay.classList.remove("d-none"); // Mostro l'overlay
        });
    });

    // Listener per chiudere l'overlay
    closeBtn.addEventListener("click", () => {
        overlay.classList.add("d-none"); // Nascondo l'overlay
    });
}




