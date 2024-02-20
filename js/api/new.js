
const url = "https://thecolouringnest.cecilieaagedal.no/wp-json/wp/v2/posts?_embed&per_page=6";

export async function getPosts(){

    try{
        const response = await fetch(url);
        const posts = await response.json();
        
        console.log(posts);

        return posts;
    }catch(error){
        console.log(error);
    }finally{}
}

export let posts = await getPosts();
console.log(posts);


export function carouselContainer(api) {

    const carousel = document.querySelector(".carousel");

    carousel.innerHTML = "";

    for (let i = 0; i < 4; i++) {

        const carouselCard = document.createElement("div");
        carouselCard.classList.add("blogcard-large", "flex" ,"column");
        carousel.appendChild(carouselCard);

        const linkWrapper = document.createElement("a");
        linkWrapper.href = `/blog/blogspecific/index.html?id=${api[i].id}`;
        carouselCard.appendChild(linkWrapper);
        
        const image = document.createElement("img");
        image.src = api[i]._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
        image.alt = api[i]._embedded?.["wp:featuredmedia"]?.[0]?.alt_text;
        linkWrapper.appendChild(image);

        const textContainer = document.createElement("div");
        textContainer.classList.add("blogcard-large-text");
        carouselCard.appendChild(textContainer);

        const date = document.createElement("div");
        date.classList.add("date");
        textContainer.appendChild(date);

        const blogDate = document.createElement("p");
        blogDate.textContent = new Date(api[i].date).toLocaleString("en-GB", {day: "numeric", month: "long", year: "numeric"});
        date.appendChild(blogDate);

        const textContent = document.createElement("div");
        textContent.classList.add("large-post-title");
        textContainer.appendChild(textContent);

        const title = document.createElement("h1");
        title.textContent = api[i].title.rendered;
        textContent.appendChild(title);

        const excerpt = document.createElement("p");
        excerpt.innerHTML = api[i].excerpt.rendered;
        textContent.appendChild(excerpt);


    }
}

carouselContainer(posts);