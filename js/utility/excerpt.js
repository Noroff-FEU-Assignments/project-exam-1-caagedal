
//added a function to make the excerpts shorter as I don't want all the cards to have the generic long ones from wordpress

export function customExcerpt(excerpt) {
    const words = excerpt.split(" ");
    if (words.length > 15) {
        return words.slice(0, 15).join(" ") + "...";
    }
    return excerpt;
}