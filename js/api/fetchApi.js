import  {baseUrl} from "./constants.js";

//fetching the API

export async function getApi(param){
    try{
        const response = await fetch(baseUrl+param);
        if (!response.ok){
            throw new Error("error, failed to fetch url");
        }
        const results = await response.json();
        return results;
    } catch(error){
        console.error("Error, failed to fetch posts", error);
    }
}