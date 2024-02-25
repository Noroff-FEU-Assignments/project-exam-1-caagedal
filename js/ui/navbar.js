export function toggle() {
    const nav = document.querySelector(".navbar");
  
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  }
  
  export function hamburger() {
    const hamburger = document.querySelector(".hamburger");
  
    hamburger.addEventListener("click", toggle);
  }
  
  hamburger();