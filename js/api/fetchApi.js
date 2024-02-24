


// export async function fetchApi(url){
//     const response = await fetch(url);
//     const data = await response.json();
//     if(!response.ok){
//         throw new Error("Something went wrong");
//     }
//     return data;
// }

import  {urlEndpoint} from "./constants.js";

//fetching the API

export async function getApi(){
    const response = await fetch(urlEndpoint);
    const results = await response.json();
    return results;
}