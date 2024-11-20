const baseUrl = "https://jsonplaceholder.typicode.com/";
const resource = "photos";
const closeBtn = document.querySelector("button");
closeBtn.addEventListener("click", () => {
    overlay.classList.add("d-none");
})

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
                        <img src="./img/pin.svg" alt="">
                    </div>
                    <figure id="${photo.id}">
                        <img src="${photo.url}" alt="${photo.title}">
                        <figcaption>${photo.title.charAt(0).toUpperCase() + photo.title.slice(1).toLowerCase()}</figcaption>
                    </figure>
                </div>
            `;

            postcards.appendChild(card);

        });
    }).catch((error) => {
        console.log(error);
    });
