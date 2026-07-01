//=======NOMBRE Y BIENVENIDA===========//

let respuesta = confirm("¿Querés personalizar la bienvenida?");

if (respuesta) {

    let nombre = prompt ("Ingresar nombre");

    if (nombre) {
        let bienvenida = document.querySelector(".tituloh1")
        bienvenida.textContent = "Bienvenida" + " " + nombre 
}
    else {
        let bienvenida = document.querySelector(".tituloh1")
    bienvenida.textContent = "Bienvenido extraño"
    }
}

else {
    let bienvenida = document.querySelector(".tituloh1")
    bienvenida.textContent = "Bienvenido extraño"
}

//==========DARK MODE====================//

let darkmode = confirm("¿Querés leer en dark mode");

if (darkmode) {
    let instrucciones = document.querySelector("ol");
    instrucciones.style.backgroundColor = "#140e00"
    instrucciones.style.color = "#fcffd9"
}

else {
    let instrucciones = document.querySelector("ol");
    instrucciones.style.backgroundColor = "#fcffd9"
    instrucciones.style.color = "#140e00"
}


//==========QUE HORA ES============//

let hora = Number(prompt("¿Qué hora es?"));
let despedida = document.querySelector("strong")

if (hora >= 6 && hora <=11) {
    despedida.textContent = "buenos días"
}

else if (hora >= 12 && hora <= 19) {
    despedida.textContent = "buenas tardes"
}

else {
    despedida.textContent = "buenas noches"
}
