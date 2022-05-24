
const colors = ["red", "yellow", "blue", "purple", "#49a6e9"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
    getRandomColor();
})

function getRandomColor() {
    let randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];
}
