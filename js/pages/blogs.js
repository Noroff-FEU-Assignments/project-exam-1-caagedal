import { blogCard } from "../render/renderAllPosts.js";
import * as constants from "../api/constants.js";
import { getApi } from "../api/fetchApi.js";

export async function allPosts (){

    const getAllPosts = await getApi(constants.endPoint);
    blogCard(getAllPosts);
}
