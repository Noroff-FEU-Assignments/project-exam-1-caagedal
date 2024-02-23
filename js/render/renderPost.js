
//FÅKK ALT

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const newUrl = "http://thecolouringnest.cecilieaagedal.no/wp-json/wp/v2/posts"+ "/" + id + "?_embed";

export async function fetchApi(){

    try{
        const response = await fetch(newUrl);
        const post = await response.json();

        renderPost(post);
    }catch(error){
        console.error("error");
    }
}

fetchApi()







export function renderPost(post){

    const postContainer = document.querySelector(".post-container");
    postContainer.innerHTML = "";

    //modal

   

    // const modalContent = document.createElement("img");
    // modalContent.classList.add("modal-content");
    

    // const modalClose = document.createElement("span");
    // moadalClose.classList.add("close");
    // moadalClose.textContent = "x";
    // modal.append(modalClose);

    // document.body.appendChild(modal);

    // //close modal

    // modalClose.addEventListener("click", () => {
    //     modal.style.display = "none";
    // });

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

    const postTextContent = document.createElement("p");
    postTextContent.innerHTML = post.content.rendered;
    postText.appendChild(postTextContent);

    document.title = post.title.rendered + " " + "| The Colouring Nest";

    // close modal outside of image

    // modal.addEventListener("click", () => {
    //     modal.style.display = "none";
    // });
}

