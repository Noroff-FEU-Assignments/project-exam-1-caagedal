


const url = "https://thecolouringnest.cecilieaagedal.no/wp-json/wp/v2/posts?_embed&per_page=6";

export async function getPosts(){

    try{
        const response = await fetch(url);
        const posts = await response.json();
        
        console.log(posts);

        return posts;
    }catch(error){
        console.log(error);
    }finally{}
}

export let posts = await getPosts();
console.log(posts);

const carousel = document.querySelector(".carousel");




// const newsTemplate = 
// `
// <article class="news-card">
// <img src="" alt="">
// <div class="news-card-text">
// <div class="date">
// <p></p>
// </div>
// <div class="news-text">
// <h1></h1>
// <p></p>
// </div>
// </div>
// </article>
// `;

// export function carouselContainer(api) {

//     const contentContainer = document.getElementById("carousel");

    

//     const link = document.createElement("a");
//     link.innerHTML = newsTemplate;
//     link.href = `/blog/blogspecific/index.html?id=${api.id}`;
//     const image = link.querySelector("img");
//     const date = link.querySelector(".date");
//     const title = link.querySelector("h1");
//     const text = link.querySelector("p");
//     // const imgSrc = api._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

//     image.src = api._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
//     image.alt = api._embedded?.["wp:featuredmedia"]?.[0]?.alt_text;
//     date.textContent = new Date(api.date).toLocaleString("en-GB", {day: "numeric", month: "long", year: "numeric"});
//     title.innerHTML = api.title.rendered;
//     text.innerHTML = api.excerpt.rendered;
//     contentContainer.append(link);
    
// }


// export async function getApi(){
//     const response = await fetch(url);
//     const result = await response.json();
//     return result;
// }

// export async function renderCarousel(){
//     try{
//         const posts = await getApi();
//         posts.forEach(element => {
//             carouselContainer(element);
//         });
//     }
//     catch(error){
//         console.error(error);
//     }
// }





// carouselContainer(renderCarousel);