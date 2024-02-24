// Define the URL to fetch posts from
import { customExcerpt } from "../js/utility/excerpt.js";



const url = "https://thecolouringnest.cecilieaagedal.no/wp-json/wp/v2/posts?_embed&per_page=4";

// Function to fetch posts
async function getPosts() {
    try {
        const response = await fetch(url);
        const posts = await response.json();
        console.log(posts);
        return posts;
    } catch (error) {
        console.error(error);
        return []; // Return an empty array in case of error.
    }
}

//code suggested by chatGPT and from live session class with Oliver Dipple, made personal changes to fit my content

// Function to create carousel slides
function carouselContainer(posts) {
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

// Navigation functions and update logic
let currentSlide = 0;
let postLength = 0;

function nextSlide() {
    currentSlide = (currentSlide + 1) % postLength; // Loop back to first slide if at the end
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + imageLength) % postLength; // Loop back to last slide if at the beginning
    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll(".carousel-inner .blogcard-large");
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? "block" : "none"; // Only display the current slide
    });
}

// Carousel setup function
async function carouselSetup() {
    const posts = await getPosts();
    postLength = carouselContainer(posts); // Create slides and update postLength

    const carousel = document.querySelector(".carousel");
    const buttons = {
        prev: carousel.querySelector("[data-action='prev']"),
        next: carousel.querySelector("[data-action='next']")
    };

    buttons.prev.addEventListener("click", prevSlide);
    buttons.next.addEventListener("click", nextSlide);
}

// Initialize the carousel after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', carouselSetup);

