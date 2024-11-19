


const baseUrl = "https://jsonplaceholder.typicode.com/";
const resource = "photos";

// const endPoint = baseUrl + resource;

// mi servono però 6 photo, come faccio????? USO _LIMIT= NEI BACKTICKS (limit riguarda i database.)

// oggetto params
const params = { "_limit": 6 };

// chiamata
axios.get(baseUrl + resource, { params }).then((res) => {
    console.log(res.data);
})

// creo le cards da js
let postcards = document.querySelector(".container");
let numberOfCards = 5;

for (let i = 0; i < numberOfCards; i++) {
    // devo creare il template delle cards e inserire 6 figures dentro card
    let card = document.createElement("div");
    card.classList.add("row")
    card.innerHTML += `
     <div class="col">
            <div id="pin">
                <img src="./img/pin.svg" alt="">
            </div>
            <figure>
                <img src="./img/wall.png" alt="Trulli" style="width:100%">
        <figcaption>Fig.1 - Trulli, Puglia, Italy</figcaption>
            </figure>
            </div>
        `;
    postcards.appendChild(card);

    console.log(card);
}
