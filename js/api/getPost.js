



export async function getPost(){

    const queryString = document.location.search;

    const params = new URLSearchParams(queryString);

    const id = params.get("id");

    return id;

}

// export const post = getPost();
