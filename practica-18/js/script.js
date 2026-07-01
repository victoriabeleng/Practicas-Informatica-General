alert("Al aceptar cambia todo");

let fondo = document.querySelector("body");
fondo.style.backgroundColor = "#ff00a2"

let titulo = document.querySelector(".titulo");
titulo.style.color = "red"
titulo.textContent = "El impacto de la danza en el bienestar físico y emocional"


let parrafos = document.querySelectorAll("p")
parrafos[0].style.color = "#FFA500"
parrafos[1].style.color = "#FFA500"
parrafos[0].textContent = "La danza es una disciplina artística que combina movimiento, expresión y música. Además de ser una forma de arte, contribuye al desarrollo de la coordinación, la fuerza y la flexibilidad. Practicar danza de manera regular también ayuda a mejorar la concentración y la confianza personal."
parrafos[1].textContent = "Diversos estudios señalan que bailar puede reducir el estrés y favorecer el bienestar emocional. Al involucrar tanto el cuerpo como la mente, la danza permite expresar sentimientos, desarrollar la creatividad y fortalecer los vínculos sociales cuando se practica en grupo."