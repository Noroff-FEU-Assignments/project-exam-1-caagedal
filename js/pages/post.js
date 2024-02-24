import { renderPost } from "../render/renderPostSpecific.js";
import { fetchId } from "../api/fetchId.js";

export async function singlePost(){

    const blogPost = await fetchId();
    renderPost(blogPost);
}

singlePost();