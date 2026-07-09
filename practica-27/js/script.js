function Calcular() {

let cantidadLibros = Number(document.querySelector("#libros").value);

    if (cantidadLibros <= 0 || isNaN(cantidadLibros)) {
        alert("Por favor indique una cantidad válida de libros");
        return;
    } 

    
    let precioTotal = 0;
    let masCaro;
    let masBarato;


    for (let i = 1; i <= cantidadLibros; i++) {
        let precio = Number(prompt("Ingrese el precio del libro " + i + " aquí:"));

        while (isNaN(precio) || precio <= 0) {
            alert("Por favor indique un número válido");
            precio = Number(prompt("Ingrese un precio válido para el libro " + i));
        }

    precioTotal = precio + precioTotal;
    
    if (i === 1 || precio > masCaro) {
        masCaro = precio;
    }

    if (i === 1 || precio < masBarato) {
        masBarato = precio;
    }

    }

   let promedio = precioTotal / cantidadLibros;

   let resultados = document.querySelector("#resultado").innerText =
   "Total gastado: " + precioTotal +
   "\nMás Caro: " + masCaro +
   "\nMás Barato: " + masBarato +
   "\nPromedio: " + promedio;
}