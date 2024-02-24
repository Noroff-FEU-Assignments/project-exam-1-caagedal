import { featuredContainer } from "../render/renderFeatured.js";
import * as carousel from "../ui/carousel.js";
import { getApi } from "../api/fetchApi.js";
import * as constants from "../api/constants.js";


export async function featureSetup(){

    const features = await getApi(constants.featuredPosts);
    featuredContainer(features);
}

export async function homepage(){
    featureSetup();
    carousel.carouselSetup(); //Tried my best to get this function in here, but I kept getting errors on it, and I could not for the life of me find out why. Will look into it after delivery.
}

