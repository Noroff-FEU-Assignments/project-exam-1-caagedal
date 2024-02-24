// export const host = "http://thecolouringnest.cecilieaagedal.no";
// export const baseUrl = "/wp-json/wp/v2/posts?_embed";

// export const allPosts = "?per_page=100";
// export const latestPosts = "?per_page=6";
// export const featuredPosts = "?tags=4";


// export const url = host + baseUrl;

export const baseUrl = "http://thecolouringnest.cecilieaagedal.no/wp-json/wp/v2/posts";

export const newPosts = "&per_page=4?_embed";
export const featuredPosts = "?_embed&per_page=3";
export const endPoint = "?per_page=100&_embed";

export const urlEndpoint = baseUrl + endPoint;
export const urlFeatured = baseUrl + featuredPosts;
export const urlNewest = baseUrl + newPosts;