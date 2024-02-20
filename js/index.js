import { sidebar, hideSidebar } from "./ui/navbar.js";
import { createBigCard } from "./render/bigcard.js";


//navbar
document.querySelector(".sidebar").addEventListener("click", hideSidebar);
document.getElementById("hamburger").addEventListener("click", sidebar); 


