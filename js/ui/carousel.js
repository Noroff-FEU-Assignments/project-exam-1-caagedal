// Navigation functions and update logic
import * as constants from "../api/constants.js";
import {carouselContainer} from "../render/renderCarousel.js";
import { getApi } from "../api/fetchApi.js";

export let currentSlide = 0;
export let postLength = 0;

export function nextSlide() {
    currentSlide = (currentSlide + 1) % postLength; // Loop back to first slide if at the end
    updateCarousel();
}

export function prevSlide() {
    currentSlide = (currentSlide - 1 + postLength) % postLength; // Loop back to last slide if at the beginning
    updateCarousel();
}

export function updateCarousel() {
    const slides = document.querySelectorAll(".carousel-inner .blogcard-large");
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? "block" : "none"; // Only display the current slide
    });
}

export async function carouselSetup() {
    const posts = await getApi(constants.newPosts);
    postLength = carouselContainer(posts); // Create slides and update postLength

    const carouselImplement = document.querySelector(".carousel");
    const buttons = {
        prev: carouselImplement.querySelector("[data-action='prev']"),
        next: carouselImplement.querySelector("[data-action='next']")
    };

    buttons.prev.addEventListener("click", prevSlide);
    buttons.next.addEventListener("click", nextSlide);
}


