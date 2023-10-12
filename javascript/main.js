let ulclick = document.getElementById("click");
let nvb = document.getElementById("nav");
ulclick.addEventListener("click", () => {
    nvb.classList.toggle("nav")
    ulclick.classList.toggle("rtx");
});
