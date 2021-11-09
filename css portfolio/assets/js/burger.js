//nav du burger

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () =>{
    ul.classList.toggle("show");
});

//fermer le burger menu
//selectionner navlink

const navlink = document.querySelectorAll(".nav-link")

navlink.forEach((link) =>
    link.addEventListener("click", ()=>{
        ul.classList.remove("show");
    })
);

