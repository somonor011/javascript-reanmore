
const heading = document.querySelector(".heading");
const btn = document.querySelector(".btn");

btn.onclick = function () {
    // display : by default is empty string so first click is "" after click "block"
    if (heading.style.display === "block" || heading.style.display === "") {
        heading.style.display = "none";
    } else {
        heading.style.display = "block";
    }
}