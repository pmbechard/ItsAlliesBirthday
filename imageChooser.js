/********************  Image Module  **********************/

let pictureIndex = Math.ceil(Math.random() * 28);
const image = document.querySelector("#dicky-pic");
image.setAttribute("src", `images/${pictureIndex}.jpg`);