import  {urlEndpoint} from "./constants.js";

//fetching the API

export async function getApi(){
    try{
        const response = await fetch(urlEndpoint);
        if (!response.ok){
            throw new Error("error, failed to fetch url");
        }
        const results = await response.json();
        return results;
    } catch(error){
        console.error("Error, failed to fetch posts", error);
    }
}



// export async function fetchApi(url){
//     const response = await fetch(url);
//     const data = await response.json();
//     if(!response.ok){
//         throw new Error("Something went wrong");
//     }
//     return data;
// }




// const response = await fetch(urlEndpoint);
    
// const results = await response.json();
// return results;