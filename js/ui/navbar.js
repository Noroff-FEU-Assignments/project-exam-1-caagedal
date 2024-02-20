export function sidebar(){
    const menu = document.querySelector(".sidebar");
    menu.style.display = "flex";
}

export function hideSidebar(){
    const close = document.querySelector(".sidebar");
    close.style.display = "none";
}