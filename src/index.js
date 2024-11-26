import { renderHomePage } from "./home.js";
import { renderMenuPage } from "./menu.js";

const navBar = document.querySelector('ul');
let contentDiv = document.querySelector('#content');

renderHomePage();

navBar.addEventListener("click", e => {
    contentDiv.innerHTML = '';

    if (e.target.getAttribute("id") === "home-btn") {
        renderHomePage();
    } 
    else if (e.target.getAttribute("id") === "menu-btn") {
        renderMenuPage();
    } 
});