import { baseUrl } from "../api/constants.js";


// Base url for wordpress
import { baseUrl } from "./constants.js";


// All blogs

export async function getPosts() {
    try {
        const response = await fetch(`${baseUrl}wp/v2/posts`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


// Single blog

export async function getPost(id) {
    try {
        const response = await fetch(`${baseUrl}wp/v2/posts/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}



