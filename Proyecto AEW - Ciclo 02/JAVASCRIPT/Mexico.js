/*Script para cambiar imagen y texto al dar click a las pequeñas imagenes */

let imagenCambio = document.getElementById("imagenGrande");
let subCambio = document.getElementById("sub-Cambiar");
let txtCambio = document.getElementById("texto-Cambiar");

imagenCambio.style.height = "246px";
imagenCambio.style.width = "400px";


function cambio1() {
    imagenCambio.src = "IMAGES/BalonMexico.jpg";
    subCambio.innerHTML = "Balón oficial del mundial"
    txtCambio.innerHTML = "El Adidas Azteca, el balón oficial del Mundial de Fútbol de 1986 en México, es un emblema de innovación y patrimonio cultural. Este balón, con su diseño único y material sintético, simboliza un avance significativo en la tecnología del fútbol. Fue el primer balón oficial fabricado con cuero sintético, lo que mejoró su durabilidad y redujo su absorción de agua, permitiendo un rendimiento excepcional en diversas condiciones climáticas y terrenos. Pero el Adidas Azteca es más que un hito tecnológico. Su nombre y los diseños que adornan su superficie son un homenaje a la antigua civilización azteca, reflejando la rica historia y cultura de México. Los intrincados dibujos inspirados en la arquitectura y los murales aztecas convierten a este balón en una obra de arte que lleva consigo la esencia de una civilización milenaria. Además, este balón estuvo presente en uno de los momentos más icónicos del fútbol: el gol de Diego Maradona contra Inglaterra, conocido como “la mano de Dios”. Por lo tanto, el Adidas Azteca no solo representa la evolución del deporte, sino que también evoca recuerdos inolvidables y emociones intensas. En resumen, el Adidas Azteca es una fusión perfecta entre innovación tecnológica y herencia cultural, un objeto que trasciende el campo de juego para convertirse en un símbolo de identidad y memoria colectiva."
}

function cambio2() {
    imagenCambio.src = "IMAGES/Estadio1986.jpg";
    subCambio.innerHTML = "Estadio donde se disputo la final"
    txtCambio.innerHTML = "El Estadio Azteca, ubicado en el corazón de la Ciudad de México, es más que un simple recinto deportivo. Este estadio, con su capacidad para albergar a más de 100,000 espectadores, es un coloso del fútbol y un emblema de la pasión deportiva mexicana. El 29 de junio de 1986, el Estadio Azteca se convirtió en el epicentro del fútbol mundial al acoger la final del Mundial de Fútbol. En este escenario majestuoso, 114,600 espectadores presenciaron un emocionante encuentro entre Argentina y Alemania Federal. Este partido es recordado no solo por la intensidad del juego, sino también por ser el escenario donde Diego Maradona, uno de los más grandes futbolistas de todos los tiempos, llevó a Argentina a su segundo título mundial. El nombre “Azteca” evoca la grandeza de una antigua civilización, y el estadio hace honor a este nombre al ser testigo de momentos históricos y emocionantes en el deporte. Cada gol marcado en su césped, cada ovación de la multitud, resuena con la vibrante energía y el espíritu indomable del fútbol. En resumen, el Estadio Azteca no es solo un lugar para jugar al fútbol. Es un monumento a la pasión deportiva, un escenario que ha visto nacer leyendas y un símbolo de la rica historia futbolística de México."
}

function cambio3() {
    imagenCambio.src = "IMAGES/mascota1986.png";
    subCambio.innerHTML = "Mascota oficial del mundial"
    txtCambio.innerHTML = "Pique, la mascota oficial del Mundial de Fútbol de 1986 en México, es más que un simple personaje animado. Este chile jalapeño, con su sombrero de mariachi y su camiseta roja, es un símbolo vibrante de la rica cultura mexicana. El sombrero de mariachi de Pique es un homenaje a la música tradicional mexicana, una melodía que resuena en el corazón de México. Su bigote, otra característica distintiva, añade un toque de autenticidad y carisma al personaje. Pero lo que realmente destaca de Pique es su representación como un chile jalapeño, un ingrediente emblemático que refleja la pasión y el sabor de la gastronomía mexicana. Cada vez que Pique aparecía en la pantalla o en el campo de juego, no solo animaba a los espectadores, sino que también llevaba consigo el espíritu y la esencia de México. En resumen, Pique no es solo una mascota, sino un embajador cultural que presentó al mundo la identidad única y vibrante de México durante el Mundial de Fútbol de 1986."
}

/*Script para los botones de la trayectoria*/

let marcadorCambio1 = document.getElementById("marcador1");
let marcadorCambio2 = document.getElementById("marcador2");
let marcadorCambio3 = document.getElementById("marcador3");
let tablaCambioS = document.getElementById("tabla");

function boton1() {
    marcadorCambio1.src = "IMAGES/marcador1M.png";
    marcadorCambio2.src = "IMAGES/marcador2M.png";
    marcadorCambio3.src = "IMAGES/marcador3M.png";
    tablaCambioS.src = "IMAGES/TablaM.png";
}

function boton2() {
    marcadorCambio1.src = "";
    marcadorCambio2.src = "IMAGES/marcador4M.png";
    marcadorCambio3.src = "";
    tablaCambioS.src = "";
}

function boton3() {
    marcadorCambio1.src = "";
    marcadorCambio2.src = "IMAGES/marcador5M.png";
    marcadorCambio3.src = "";
    tablaCambioS.src = "";
}

function boton4() {
    marcadorCambio1.src = "";
    marcadorCambio2.src = "IMAGES/marcador6M.png";
    marcadorCambio3.src = "";
    tablaCambioS.src = "";
}

function boton5() {
    marcadorCambio1.src = "";
    marcadorCambio2.src = "IMAGES/marcador7M.png";
    marcadorCambio3.src = "";
    tablaCambioS.src = "";
}

/*Carrusel de imagenes*/
/*FIguras mundial*/

let sliderFiguras = ["IMAGES/Panini1986.1.png", "IMAGES/Panini19862.png", "IMAGES/Panini1986.3.png", "IMAGES/Panini1986.4.png", "IMAGES/Panini1986.5.png", "IMAGES/Panini1986.6.png", "IMAGES/Panini1986.7.png", "IMAGES/Panini1986.8.png", "IMAGES/Panini1986.9.png", "IMAGES/Panini1986.10.png", "IMAGES/Panini1986.11.png"];

let indiceFiguras = 0;

function carruselFiguras() {

    if (indiceFiguras < 10) {
        indiceFiguras++;
    } else {
        indiceFiguras = 0;
    }

    let cambioFiguras = document.getElementById("sliderIMG");
    cambioFiguras.src = sliderFiguras[indiceFiguras];
    cambioFiguras.style.width = '400px';
    cambioFiguras.style.height = '600px';

}

setInterval(carruselFiguras, 3000)

/*Slider del DT*/

let sliderDT = ["IMAGES/1986DT.jpg", "IMAGES/1986DT.Segundo.png", "IMAGES/1986DT.Tercero.png"];

let indiceImagenesDT = 0;

function carruselImagenesDT() {

    if (indiceImagenesDT < 2) {
        indiceImagenesDT++
    } else {
        indiceImagenesDT = 0;
    }

    let cambioDT = document.getElementById("imagenGrande_DT");
    cambioDT.src = sliderDT[indiceImagenesDT];
    cambioDT.style.width = '360px';
    cambioDT.style.height = '470px';
}

setInterval(carruselImagenesDT, 3000)

/*Slider de Kempes*/

let sliderKempes = ["IMAGES/Maradona.jpg", "IMAGES/Maradona.Segundo.png", "IMAGES/Maradona.Tercero.png"];

let indiceImagenesKempes = 0;

function carruselImagenesKempes() {

    if (indiceImagenesKempes < 2) {
        indiceImagenesKempes++
    } else {
        indiceImagenesKempes = 0;
    }

    let cambio = document.getElementById("imagenGrande_PM");
    cambio.src = sliderKempes[indiceImagenesKempes];
    cambio.style.width = '360px';
    cambio.style.height = '470px';
}

setInterval(carruselImagenesKempes, 3000)