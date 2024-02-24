
const url = "https://thecolouringnest.cecilieaagedal.no/wp-json/wp/v2/posts?_embed&per_page=100";

export async function getPosts(){

    try{
        const response = await fetch (url);
        const posts = await response.json();

        console.log(posts);

        return posts;
    }catch(error){
        console.error(error);
    }
}

export let posts = await getPosts();

export function customExcerpt(excerpt) {
    const words = excerpt.split(" ");
    if (words.length > 15) {
        return words.slice(0, 15).join(" ") + "...";
    }
    return excerpt;
}

export function blogCard(api){

    const blog = document.querySelector(".blog-container");

    blog.innerHTML = "";

    for (let i = 0; i < api.length; i++){
        

        const blogCard = document.createElement("article");
        blogCard.classList.add("card-container")
        blog.appendChild(blogCard);

        const image = document.createElement("img");
        image.src = api[i]._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
        image.alt = api[i]._embedded?.["wp:featuredmedia"]?.[0]?.alt_text;
        blogCard.appendChild(image);

        const textContainer = document.createElement("div");
        textContainer.classList.add("text-container");
        blogCard.appendChild(textContainer);

        const date = document.createElement("div");
        date.classList.add("date");
        textContainer.appendChild(date);

        const blogDate = document.createElement("p");
        blogDate.textContent = new Date(api[i].date).toLocaleString("en-GB", {day: "numeric", month: "long", year: "numeric"});
        date.appendChild(blogDate);

        const textContent = document.createElement("div");
        textContent.classList.add("text-elements");
        textContainer.appendChild(textContent);

        const title = document.createElement("h2");
        title.textContent = api[i].title.rendered;
        textContent.appendChild(title);

        const excerpt = document.createElement("p");
        excerpt.innerHTML = customExcerpt (api[i].excerpt.rendered);
        textContent.appendChild(excerpt);

        const readMore = document.createElement("a");
        readMore.href = `/blog/blogspecific/index.html?id=${api[i].id}`;
        readMore.textContent = "Read more";
        textContent.appendChild(readMore);

    }

}

blogCard(posts);

