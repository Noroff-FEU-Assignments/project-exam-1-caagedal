import { renderPost } from "../render/renderPost.js";
import { fetchId } from "../api/fetchId.js";


//post

export async function singlePost(){

    const blogPost = await fetchId();
    renderPost(blogPost);
}
