import { customExcerpt } from "../utility/excerpt.js";

//rendering all posts to blogsite, could not find out how to create the "view more" button

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

        const link = document.createElement("a");
        link.classList.add("read-more-button");
        link.href = `/blog/blogspecific/index.html?id=${api[i].id}`;
        link.textContent = "Read more";
        textContent.appendChild(link);        

    }

}

