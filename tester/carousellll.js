export const carousel = document.querySelector(".carousel"); 
export const carouselInner = document.querySelector(".carousel-inner");
export const buttons = {
    prev: carousel.querySelector("[data-action=prev]"),
    next: carousel.querySelector("[data-action=next]")
}

let currentSlide = 0;
let imageLength = 0;



export async function getImages(){
    const response = await fetch("/tester/data.json");
    const images = await response.json();
    imageLength = images.length;
    return images;
}



export function createImage(src){
    const img = document.createElement("img");
    img.src = src;
    img.alt = "random image";
    return img;
}

export function render(element, parent){
    if(Array.isArray(element)){
        parent.append(...element);
    }else {
        parent.append(element);
    }
}



export async function carouselSetup(){

    const images = await getImages();
    images.forEach (image => {
        const img = createImage(image);
        render(img, carouselInner);
    })
    
    buttons.prev.addEventListener("click", prevSlide);
    buttons.next.addEventListener("click", nextSlide);
    //set event listeners to button



}

export function nextSlide(){
    let nextSlide = currentSlide + 1;
    if(nextSlide >= imageLength){
        nextSlide = 0;
    }
    currentSlide = nextSlide;
    update()
}

export function prevSlide(){
    let prevSlide = currentSlide-1;
    if (prevSlide < 0){
        prevSlide = imageLength-1;
    }
    currentSlide = prevSlide;    
    update()
}

export function gotToSlide(slideNumber){

    const remainder = slideNumber % imageLength;
    console.log("Going to slide", remainder);
    currentSlide = remainder;
    update()
}

export function update(){
    const value = currentSlide * -100;
    carouselInner.style.transform = `translateX(-${value}%)`;
}

