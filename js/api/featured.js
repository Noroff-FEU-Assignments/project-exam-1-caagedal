// import { url, featuredPosts } from "./constants.js";

// const featuredUrl = url + featuredPosts;

const featuredUrl = "http://thecolouringnest.cecilieaagedal.no/wp-json/wp/v2/posts?_embed&tags=4";

export async function getPosts(){

    try{
        const response = await fetch(featuredUrl);
        const posts = await response.json();
        
        console.log(posts);

        return posts;
    }catch(error){
        console.log(error);
    }finally{}
}

export let featureData = await getPosts();

export function featurePosts(api){

    const featureContainer = document.querySelector(".featured");

    featureContainer.innerHTML = "";

    for (let i = 0; i < 3; i++) {
        
        

        const featureCard = document.createElement("div");
        featureCard.classList.add("blogcard-small", "flex" ,"column");
        featureContainer.appendChild(featureCard);

        const image = document.createElement("img");
        image.src = api[i]._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
        image.alt = api[i]._embedded?.["wp:featuredmedia"]?.[0]?.alt_text;
        featureCard.appendChild(image);

        const textContainer = document.createElement("div");
        textContainer.classList.add("blogcard-small-text");
        featureCard.appendChild(textContainer);

        const date = document.createElement("div");
        date.classList.add("date");
        textContainer.appendChild(date);

        const blogDate = document.createElement("p");
        blogDate.textContent = new Date(api[i].date).toLocaleString("en-GB", {day: "numeric", month: "long", year: "numeric"});
        date.appendChild(blogDate);

        const textContent = document.createElement("div");
        textContent.classList.add("small-post-title");
        textContainer.appendChild(textContent);

        const title = document.createElement("h1");
        title.textContent = api[i].title.rendered;
        textContent.appendChild(title);

        const excerpt = document.createElement("p");
        excerpt.innerHTML = api[i].excerpt.rendered;
        textContent.appendChild(excerpt);

        const button = document.createElement("div");
        button.classList.add("readmore");
        featureCard.appendChild(button);

        const readMore = document.createElement("a");
        readMore.textContent = "Read more";
        readMore.href = `/blog/blogspecific/index.html?id=${api[i].id}`;
        button.appendChild(readMore);

    }

}

featurePosts(featureData);