import { customExcerpt } from "../utility/excerpt.js";

export function carouselContainer(posts) {
    const carouselInner = document.querySelector(".carousel-inner");
    
    // Clear existing content (loader etc)
    carouselInner.innerHTML = ""; 


    //Create slides

    posts.forEach((post, index) => {
        const carouselCard = document.createElement("div");
        carouselCard.classList.add("blogcard-large", "flex", "column");
        if (index > 0) {
            carouselCard.style.display = "none"; // Hide all slides except the first one initially
        }
        carouselInner.appendChild(carouselCard);

        const linkWrapper = document.createElement("a");
        linkWrapper.href = `/blog/blogspecific/index.html?id=${post.id}`;
        carouselCard.appendChild(linkWrapper);

        const image = document.createElement("img");
        image.src = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
        image.alt = post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text;
        linkWrapper.appendChild(image);

        const textContainer = document.createElement("div");
        textContainer.classList.add("blogcard-large-text");
        linkWrapper.appendChild(textContainer);

        const date = document.createElement("div");
        date.classList.add("date");
        textContainer.appendChild(date);

        const blogDate = document.createElement("p");
        blogDate.textContent = new Date(post.date).toLocaleString("en-GB", { day: "numeric", month: "long", year: "numeric" });
        date.appendChild(blogDate);

        const textContent = document.createElement("div");
        textContent.classList.add("large-post-title");
        textContainer.appendChild(textContent);

        const title = document.createElement("h1");
        title.textContent = post.title.rendered;
        textContent.appendChild(title);

        const excerpt = document.createElement("p");
        excerpt.innerHTML = customExcerpt(post.excerpt.rendered);
        textContent.appendChild(excerpt);

    });

    return posts.length;
}



