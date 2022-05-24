const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
   let hex = "#";
   for(let i = 0; i < 6; i++) {
       hex = hex + colors[getHexColor()]
       console.log(hex);
       document.body.style.background = hex;
       color.textContent = hex;
   } 
    
})

function getHexColor() {
    let randomNumber = Math.floor(Math.random() * colors.length);
    return randomNumber;
}
