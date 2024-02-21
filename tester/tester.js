export async function getImages(){
    const response = await fetch("/tester/data.json");
    const images = await response.json();
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
    const carousel = document.querySelector(".carousel"); 
    const carouselInner = document.querySelector(".carousel-inner");
    const images = await getImages();
    images.forEach (image => {
        const img = createImage(image);
        render(img, carouselInner);
    })
    //load images
    //render images
    //set event listeners to button



}

export function nextSlide(){

}

export function prevSlide(){

}

export function gotToSlide(slideNumber){

}

carouselSetup();