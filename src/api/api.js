import axios from "axios";

export const apiResources = axios.create({

    baseURL: 'https://rickandmortyapi.com/api'

})