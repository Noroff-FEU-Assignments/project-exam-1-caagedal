


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



