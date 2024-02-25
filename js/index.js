import { singlePost } from "./pages/blogPost.js";
import { homepage } from "./pages/home.js";
import { allPosts } from "./pages/blogs.js";
import { hamburger} from "./ui/navbar.js";



// backTop(); Tried to make a "Back to top" button, but time ran out
hamburger();



export async function router(){

    switch (window.location.pathname){
        case "/":
        case "/index.html":
            await homepage();
            break;

        case "/blog/blogspecific":
        case "/blog/blogspecific/":
        case "/blog/blogspecific/index.html":
            await singlePost();
            break;
        case "/blog":
        case "/blog/":
        case "/blog/index.html":
            await allPosts();
            break;
    }

}

router();