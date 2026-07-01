function calcular() {

let precio = Number(document.querySelector("#precio").value);
let descuento = Number(document.querySelector("#descuento").value);

let descuentoAplicado = precio * descuento / 100

let precioFinal = precio - descuentoAplicado

let resultado = document.querySelector("strong")
resultado.textContent = precioFinal

}

