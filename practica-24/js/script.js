
//armo un numero al azar y lo muestro por consola
let numero = Math.random()
console.log(numero);

//lo redondeo para que sea entero
console.log(Math.round(numero))


//////  AHORA SI, EL EJERCICIO  ////////

//creo una funcion que envuelva todo esto cuando se presiona el boton
function generar() {

let azar = Math.floor(Math.random() * 6) + 1; 
let mostrarResultado = document.querySelector(".resultado");
mostrarResultado.innerText = azar;

let imagen = document.querySelector(".dado");
imagen.src = "img/" + azar + ".gif"

}