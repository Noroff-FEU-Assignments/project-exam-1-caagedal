import { url } from "./constants.js";
import { allPosts } from "./constants.js";

//Get all posts

export async function getPosts(){
    try{
        const response = await fetch(url+allPosts);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const posts = await response.json();
        return posts;
    } catch(error){
        console.log("Error, failed to fetch posts", error);
    }
}

//Get single post

export async function getPost(id){
    try{
        const response = await fetch(`${url}/${id}?_embed`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const post = await response.json();
        return post;
    }catch(error){
        console.log("Error, failed to fetch ID", error);
    }
}

//url + "/" + id + "?_embed"