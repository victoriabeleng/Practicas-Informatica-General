function calcular() {

//Primero guardo en variables todos los valores que el usuario ingresa para cada aula

//Obtengo valores de las aulas

let aula001 = Number(document.querySelector("#aula001").value);
let aula101 = Number(document.querySelector("#aula101").value);
let aula201 = Number(document.querySelector("#aula201").value);
let aula301 = Number(document.querySelector("#aula301").value);
let aula501 = Number(document.querySelector("#aula501").value);


//Entonces ahora armo una variable que compare los valores que ingresó el usuario

//Calculo menor
let menor = Math.min(aula001, aula101, aula201, aula301, aula501);

if (menor == aula001) {
    let aulaMenor = document.querySelector("#menor");
    aulaMenor.textContent = "Aula 001 con " + menor;
}

else if (menor == aula101) {
    let aulaMenor = document.querySelector("#menor");
    aulaMenor.textContent = "Aula 101 con " + menor;
}

else if (menor == aula201) {
    let aulaMenor = document.querySelector("#menor");
    aulaMenor.textContent = "Aula 201 con " + menor;
}

else if (menor == aula301) {
    let aulaMenor = document.querySelector("#menor");
    aulaMenor.textContent = "Aula 301 con " + menor;
}

else if (menor == aula501) {
    let aulaMenor = document.querySelector("#menor");
    aulaMenor.textContent = "Aula 501 con " + menor;
}



//Calculo mayor
let mayor = Math.max(aula001, aula101, aula201, aula301, aula501);

if (mayor == aula001) {
    let aulaMayor = document.querySelector("#mayor");
    aulaMayor.textContent = "Aula 001 con " + mayor;
}

else if (mayor == aula101) {
    let aulaMayor = document.querySelector("#mayor");
    aulaMayor.textContent = "Aula 101 con " + mayor;
}

else if (mayor == aula201) {
    let aulaMayor = document.querySelector("#mayor");
    aulaMayor.textContent = "Aula 201 con " + mayor;
}

else if (mayor == aula301) {
    let aulaMayor = document.querySelector("#mayor");
    aulaMayor.textContent = "Aula 301 con " + mayor;
}

else if (mayor == aula501) {
    let aulaMayor = document.querySelector("#mayor");
    aulaMayor.textContent = "Aula 501 con " + mayor;
}

//Calculo los que faltan para que lleguen a 80

let faltantes001 = 80 - aula001
let faltantes101 = 80 - aula101
let faltantes201 = 80 - aula201
let faltantes301 = 80 - aula301
let faltantes501 = 80 - aula501

//Armo if para que no me den numeros negativos
if (faltantes001<0) {
    faltantes001 = 0
}

if (faltantes101<0) {
    faltantes101 = 0
}

if (faltantes201<0) {
    faltantes201 = 0
}

if (faltantes301<0) {
    faltantes301 = 0
}

if (faltantes501<0) {
    faltantes501 = 0
}

//Los muestro en la pantalla

let pupitresFaltantes = document.querySelector("#faltantes").innerHTML = "<br>" +
"Aula 001 = " + faltantes001 + "<br>" +
"Aula 101 = " + faltantes101 + "<br>" +
"Aula 201 = " + faltantes201 + "<br>" +
"Aula 301 = " + faltantes301 + "<br>" +
"Aula 501 = " + faltantes501 + "<br>" 

}