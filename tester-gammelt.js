
/*
function candies(children, candy){
    const candyPerChild = Math.floor(candy / children);
    
    return candyPerChild * children;
}    

const children = 3;

const candy = 43838;

const result = candies(children, candy);

console.log(result);

*/

const baseUrl = "http://thecolouringnest.cecilieaagedal.no";
const apiEndpoint = "/wp-json/wp/v2/posts";
const apiPosts = baseUrl + apiEndpoint;

// async function fetchPostById(postId){
//     try {
//         const response = await fetch(apiPosts + "/" + postId + "?_embed";
//         if(!response.ok){
//             throw new Error(response.statusText);
//         }    
//         const data = await response.json();
//         return data;
        
//     }   catch (error){
//         console.log(error);
//     }    
// } 

async function apiCall() {
   try{
    const response = await fetch(apiPosts + "/" + "?_embed");
    const data = await response.json();
    
    return data;
   }
    catch(error){
         console.log(error);
    }
}


let posts = await apiCall();


const postSection = document.querySelector(".bottom");

function generateBlogPost(date, title, content){

    const blogContainer = document.createElement("div");
    blogContainer.classList.add("blog-container");

    const postDate = document.createElement("p");
    postDate.textContent = date;

    const postTitle = document.createElement("h1");
    postTitle.textContent = title;

    const postContent = document.createElement("p");
    postContent.innerHTML = content;

    blogContainer.appendChild(postDate);
    blogContainer.appendChild(postTitle);
    blogContainer.appendChild(postContent);

    return blogContainer;

}

function generateAllBlogPosts (allBlogs){
    allBlogs.forEach(function(currentBlog){
        const date = currentBlog.date;
        const title = currentBlog.title.rendered;
        const content = currentBlog.content.rendered;

        const blogPost = generateBlogPost(date, title, content);
        postSection.appendChild(blogPost);
    })
}

function blogPostPage(){
    generateAllBlogPosts(posts);
}

blogPostPage();


// async function displayBlogCard(postId, containerId){




    //     const post = await fetchPostById(postId);    
    //     if (post) {
        //         const container = document.getelementbyId(containerId);    
//         container.innerHTML = `
//             <div class="blog-container">
//                 <h2>${post.title.rendered}</h2>
//                 <p>${post.date}</p>
//                 <p>${post.content.rendered}</p>
//             </div>
//         `;
//     }
// }













// export async function apiCall() {
//     try {
//         const response = await fetch(url);    
//         const data = await response.json();
//         return data;

//     } catch (error) {
//         console.log(error);    
//     }
// }

// let blogs = await apiCall();

// console.log(blogs);

// let posts = await apiCall();

// const postSection = document.querySelector(".bottom");

// async function createPosts(){

//     try{
//         postSection.innerHTML = "";    

//         for (let i = 0; i < posts.length; i++){

//             postSection.innerHTML += `    
//                 <div class="blog-container">
//                     <img src = "`
//         }
//     }
// }



