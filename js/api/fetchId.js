import { baseUrl } from "./constants.js";

//Fetching post-ID 

export async function fetchId(){
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    const newUrl = baseUrl + "/" + id + "?_embed";

    const response = await fetch(newUrl);
    const post = await response.json();
    return post; 
}