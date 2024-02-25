import { setupModal } from "../ui/modal.js";

//Rendering the specific blogpost

export function renderPost(post){

    const postContainer = document.querySelector(".post-container");
    postContainer.innerHTML = "";

    // post rendering

    const postContent = document.createElement("article");
    postContent.classList.add("post-content");
    postContainer.appendChild(postContent);

    
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    postContent.appendChild(imageContainer);
    
    const postImage = document.createElement("img");
    postImage.src = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    postImage.alt = post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text;
    imageContainer.appendChild(postImage);
    
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("date");
    postContent.appendChild(dateContainer);

    const postDate = document.createElement("p");
    postDate.textContent = new Date(post.date).toLocaleString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    dateContainer.appendChild(postDate);
    
    const postText = document.createElement("div");
    postText.classList.add("post-text");
    postContent.appendChild(postText);
    

    const postTitle = document.createElement("h1");
    postTitle.textContent = post.title.rendered;
    postText.appendChild(postTitle);

    const postTextContent = document.createElement("div");
    postTextContent.innerHTML = post.content.rendered;
    postTextContent.classList.add("html-content");
    postText.appendChild(postTextContent);

    //Update title

    document.title = post.title.rendered + " " + "| The Colouring Nest";


    //modal
    
    const img = postTextContent.querySelector("img");
    

    setupModal(img);

}