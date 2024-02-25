import { baseUrl } from "./constants.js";

//Fetching post-ID 

export async function fetchId(){
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    const newUrl = baseUrl + "/" + id + "?_embed";

    try{
        const response = await fetch(newUrl);
        if (!response.ok){
            throw new Error("Error, failed to fetch new url");
        }        
        const post = await response.json();
        return post;
    } catch(error){
        console.error("Error, failed to fetch posts", error);
    }
}

