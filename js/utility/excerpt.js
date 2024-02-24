export function customExcerpt(excerpt) {
    const words = excerpt.split(" ");
    if (words.length > 15) {
        return words.slice(0, 15).join(" ") + "...";
    }
    return excerpt;
}