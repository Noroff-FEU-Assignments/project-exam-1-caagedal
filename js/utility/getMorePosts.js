// import { blogCard } from "../render/renderAllPosts.js";

// export let currentIndex = 0;
// export const perPage = 9;
// let sortPosts = [];
// export let postsNumber = perPage;


// export function loadMore(posts){

//     loadMoreButton(posts);
//     loadMoreButtonRemove(posts);

// }

// function loadMoreButton(posts) {

//     const button = document.querySelector(".load-more button");
//     if (!button) return;

//     button.addEventListener("click", () => {
//         const displayedPosts = sortPosts.length > 0 ? sortPosts : posts;
//         currentIndex += perPage;
//         postsNumber += perPage;
//         const loadPosts = displayedPosts.slice(currentIndex, currentIndex + perPage);
//         blogCard(loadPosts, true);
//         loadMoreButtonRemove(displayedPosts);
//     })
// }

// function loadMoreButtonRemove(displayedPosts){
//     const button = document.querySelector(".load-more button");
//     if (!button) return;
//     button.style.display = postsNumber >= displayedPosts.length ? "none" : "block";
// }