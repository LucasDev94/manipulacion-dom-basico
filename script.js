console.log("Hola mundo");

//Seleccionar etiquetas html desde js
const h1 = document.querySelector("h1");
const p = document.querySelector("p");

//const parrafito = document.querySelector(".parrafito");
const parrafito = document.getElementsByClassName("parrafito")[0];

//const pid = document.querySelector("#pid");
const pid = document.getElementById("pid")
const input = document.querySelector("input");

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

//h1.innerHTML = "Patito <br> Feo"
h1.innerText = "Patito <br> Feo";

//h1.getAttribute("pantalla") devuelve el valor del atributo html de mi etiqueta h1
console.log(h1.getAttribute("pantalla"));
console.log(h1.getAttribute("class"));

//h1.setAtrribute("class", "rojo") selecciona un atributo y cambia su valor
h1.setAttribute("class", "rojo");

//Agregar una clase a las que tenga
h1.classList.add("morado");
h1.classList.remove("verde");
parrafito.classList.add("color");


input.value = "456";
const img = document.createElement("img");
img.setAttribute("src", "https://cdn.pixabay.com/photo/2023/09/23/05/42/bee-8270299_1280.jpg");
img.setAttribute("width", "300")
pid.append(img);