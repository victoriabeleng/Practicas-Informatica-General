function recomendar() {

    //Recolecto los datos

    let nombre = document.querySelector("#nombre").value;
    let edad = Number(document.querySelector("#edad").value);
    let genero = document.querySelector("#genero").value;

    //RECOMENDACION DE COMEDIA

    if (edad <= 15 && genero == "Comedia") {
        let infantilComedia = document.querySelector(".serie");
        infantilComedia.textContent = 'Te recomendamos:' + " " + 'Toy Story';
    } 

    else if (edad >= 16 && genero == "Comedia") {
        let adultosComedia = document.querySelector(".serie");
        adultosComedia.textContent = 'Te recomendamos:' + " " + 'Son como niños';
    }

    //RECOMENDACION DE TERROR

    if (edad <= 15 && genero == "Terror") {
        let infantilTerror = document.querySelector(".serie");
        infantilTerror.textContent = 'Te recomendamos:' + " " + 'Hotel Transilvania';
    } 

    else if (edad >= 16 && genero == "Terror") {
        let adultosTerror = document.querySelector(".serie");
        adultosTerror.textContent = 'Te recomendamos:' + " " + 'Obsession';
    }

    //RECOMENDACION DE ROMANCE

        if (edad <= 15 && genero == "Romance") {
        let infantilRomance = document.querySelector(".serie");
        infantilRomance.textContent = 'Te recomendamos:' + " " + 'Miraculous Ladybug';
    } 

    else if (edad >= 16 && genero == "Romance") {
        let adultosRomance = document.querySelector(".serie");
        adultosRomance.textContent = 'Te recomendamos:' + " " + 'Nothing Hill';
    }

    //RECOMENDACION DE FANTASÍA

        if (edad <= 15 && genero == "Fantasia") {
        let infantilFantasia = document.querySelector(".serie");
        infantilFantasia.textContent = 'Te recomendamos:' + " " + 'El origen de los guardianes';
    } 

    else if (edad >= 16 && genero == "Fantasia") {
        let adultosFantasia = document.querySelector(".serie");
        adultosFantasia.textContent = 'Te recomendamos:' + " " + 'Harry Potter';
    }

}



