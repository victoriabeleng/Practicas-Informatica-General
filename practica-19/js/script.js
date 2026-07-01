let tituloh1 = document.querySelector("h1")
let tituloh2 = document.querySelector("h2")
let lista = document.querySelector("ul")
let parrafos = document.querySelectorAll("p")
let imagen = document.querySelector("img")

tituloh1.addEventListener("click", function() {
    tituloh1.style.color = "#FFA500"
});

tituloh2.addEventListener("click", function() {
    tituloh2.style.color = "#00ffb3"
})

lista.addEventListener("click", function() {
    lista.style.color = "#530b41"
})

parrafos[0].addEventListener("click", function() {
    parrafos[0].style.color = "#312fac"
})

parrafos[1].addEventListener("click", function() {
    parrafos[1].style.color = "#932fac"
} ) 

lista.addEventListener("click", function() {
    lista.style.color = "#12470e"
})

imagen.addEventListener("click", function() {
    imagen.style.display = "none";
});
