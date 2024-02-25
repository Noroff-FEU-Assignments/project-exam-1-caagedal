export function backTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    backToTopButton.addEventListener('click', function() {
        window.scroll({top: 0, behavior: "smooth"})
    });
}