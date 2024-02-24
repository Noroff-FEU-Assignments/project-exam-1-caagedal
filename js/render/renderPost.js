
//Rendering the specific blogpost

export function renderPost(post){

    const postContainer = document.querySelector(".post-container");
    postContainer.innerHTML = "";

    // post rendering

    const postContent = document.createElement("article");
    postContent.classList.add("post-content");
    postContainer.appendChild(postContent);

    const postImage = document.createElement("img");
    postImage.src = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    postImage.alt = post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text;
    postContent.appendChild(postImage);

    const postText = document.createElement("div");
    postText.classList.add("post-text");
    postContent.appendChild(postText);
    
    const postDate = document.createElement("p");
    postDate.textContent = new Date(post.date).toLocaleString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    postText.appendChild(postDate);

    const postTitle = document.createElement("h1");
    postTitle.textContent = post.title.rendered;
    postText.appendChild(postTitle);

    const postTextContent = document.createElement("div");
    postTextContent.innerHTML = post.content.rendered;
    postTextContent.classList.add("html-content");
    postText.appendChild(postTextContent);

    //modal



    //Update title

    document.title = post.title.rendered + " " + "| The Colouring Nest";

}