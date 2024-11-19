


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
