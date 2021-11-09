//scroll to top fonction
const scrollUp = document.querySelector("#scroll-up");
//Dom html
scrollUp.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});