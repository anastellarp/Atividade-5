import axios from "axios";
// Importa a biblioteca Axios, usada para fazer requisições HTTP de forma mais simples e organizada.

const apiFilmes = axios.create({

    baseURL: "https://api.themoviedb.org/3",

    headers: {
        
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_TMDB_API_KEY

    }
});

export default apiFilmes;

