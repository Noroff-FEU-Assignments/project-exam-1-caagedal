import {renderPost} from "../render/renderPost.js";
// import {getPost} from "../api/getPost.js";
// import { url } from "./constants.js";
// import { fetchApi } from "../api/fetchApi.js";

const baseurl = "http://thecolouringnest.cecilieaagedal.no/wp-json/wp/v2/posts";

export async function fetchApi(url){
    const response = await fetch(url);
    const data = await response.json();
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    return data;
}


export async function getPost(){

    const queryString = document.location.search;

    const params = new URLSearchParams(queryString);

    const id = params.get("id");

    return id;

}


//get ID

export async function singlePost(){

    try {
        const id = getPost();
        const newUrl = baseurl + "/" + id;
        const post  = await fetchApi(newUrl);

        renderPost(post);

        document.title = post.title.rendered + " " + "| The Colouring Nest";

    } catch (error) {
        console.error("error");
    }
}

singlePost();