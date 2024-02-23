


export async function fetchApi(url){
    const response = await fetch(url);
    const data = await response.json();
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    return data;
}