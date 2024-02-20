
/* <div class="blogcard-large flex column">
    <a href="/blog/blogspecific/">
        <img src="/media/drawing-bird.webp" alt="Colouring a colouring page">
        <div class="blogcard-large-text">
            <div class="date">
                <p>February 15, 2024</p>
            </div>
            <div class="large-post-title">
                <h1>Finished Pages: Mixing Them Medias!</h1>
                <p>Hello, creative friends! Today, I'm sharing an experiment that combined watercolor pencils with traditional colored pencils, blending two medium[...]</p>
            </div>
        </div>
    </a>
</div> */

// create the big card


// export function createBigCard(posts) {
    
//     const bigContainer = document.querySelector(".blogcard-large");

//     //create the card

//     const cardContainer = document.createElement("a");
//     cardContainer.href = `/blog/blogspecific/${post.id}`;

//     //create the image

//     const image = document.createElement("img");
//     image.src = post._embedded["wp:featuredmedia"][0].source_url;
//     image.alt = post._embedded["wp:featuredmedia"][0].alt_text;
//     cardContainer.appendChild(image);

//     //create textcontainer

//     const textContainer = document.createElement("div");
//     textContainer.classList.add("blogcard-large-text");
//     cardContainer.appendChild(textContainer);

//     //create date

//     const date = document.createElement("div");
//     date.classList.add("date");
//     textContainer.appendChild(date);

//     const blogDate = document.createElement("p");
//     blogDate.textContent = new Date(post.date).toLocaleString("en-GB", {day: "numeric", month: "long", year: "numeric"});
//     date.appendChild(blogDate);

//     //create title

//     const textContent = document.createElement("div");
//     textContent.classList.add("large-post-title");
//     textContainer.appendChild(textContent);

//     //create title

//     const title = document.createElement("h1");
//     title.textContent = post.title.rendered;
//     textContent.appendChild(title);

//     //create excerpt

//     const excerpt = document.createElement("p");
//     excerpt.textContent = post.excerpt.rendered;
//     textContent.appendChild(excerpt);

//     bigContainer.appendChild(cardContainer);

//     return bigContainer;   
// }

import { getPosts } from "../api/getPosts";

export async function data(){
    // loader();
    try{
        const posts = await getPosts();
        renderPosts(posts);               
    } catch(error){
        console.log("Error, failed to fetch posts", error);
    }finally{
        // removeLoader();
    }
}

function renderPosts(posts){
    try{
        for (let i = 0; i < posts.length; i++){
            const post = posts[i];
            renderPost(post);
        }
    }catch(error){
        console.log("Error, failed to render posts", error);
    }finally{

    }
}

function renderPost 

const url = "http://thecolouringnest.cecilieaagedal.no/wp-json/wp/v2/posts?_embed";