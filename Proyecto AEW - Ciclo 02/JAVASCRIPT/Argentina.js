/*Script para cambiar imagen y texto al dar click a las pequeñas imagenes */

let imagenCambio = document.getElementById("imagenGrande");
let subCambio = document.getElementById("sub-Cambiar");
let txtCambio = document.getElementById("texto-Cambiar");

imagenCambio.style.height = "246px";
imagenCambio.style.width = "400px";


function cambio1() {
    imagenCambio.src = "IMAGES/BalonArgentina.jpg";
    subCambio.innerHTML = "Balón oficial del mundial"
    txtCambio.innerHTML = "El Adidas Tango, el balón oficial del Mundial de Fútbol de 1978 celebrado en Argentina, es más que un simple objeto deportivo. Este balón, con su diseño único de veinte paneles que crean la ilusión de doce círculos idénticos, es un emblema de resistencia y adaptabilidad, diseñado para soportar las condiciones climáticas más adversas. Pero más allá de su funcionalidad, el Adidas Tango lleva consigo una rica herencia cultural. Su nombre, “Tango”, es un homenaje al icónico género musical y baile que nació en la región del Río de la Plata. Este balón no solo simboliza el espíritu competitivo y la pasión por el fútbol, sino también la vibrante cultura y la identidad única de Argentina. El diseño del Adidas Tango se convirtió en un clásico, perdurando durante cinco mundiales consecutivos. Así, cada vez que este balón cruzaba el campo de juego, no solo se llevaba consigo las esperanzas y sueños de los jugadores, sino también el ritmo y la esencia del tango argentino. En resumen, el Adidas Tango es una perfecta fusión entre deporte y cultura."
}

function cambio2() {
    imagenCambio.src = "IMAGES/Estadio1978.jpg";
    subCambio.innerHTML = "<br>" + "<br>" + "Estadio donde se disputo la final"
    txtCambio.innerHTML = "La final de la Copa Mundial de la FIFA 1978 se jugó en el Estadio Monumental, oficialmente conocido como el Estadio Antonio Vespucio Liberti, en Buenos Aires, Argentina. Este estadio es el hogar del Club Atlético River Plate y es uno de los estadios más icónicos de Argentina. La final se llevó a cabo el 25 de junio de 1978 en este estadio, donde Argentina se enfrentó a los Países Bajos. Argentina ganó el partido 3-1 después de tiempo suplementario y se consagró campeón del mundo en su propia tierra."
}

function cambio3() {
    imagenCambio.src = "IMAGES/mascota1978.jpg";
    subCambio.innerHTML = "<br>" + "Mascota oficial del mundial"
    txtCambio.innerHTML = "La mascota de la Copa Mundial de la FIFA 1978 en Argentina fue un simpático y peculiar personaje llamado “Gauchito”. El Gauchito era un niño vestido como un gaucho argentino, con un pañuelo al cuello, bombachas, y un sombrero típico. La elección de un gaucho como mascota se hizo para representar una parte importante de la cultura argentina, ya que los gauchos son considerados como iconos culturales en la historia del país. El Gauchito era un personaje amigable y alegre, destinado a promover la identidad argentina y el entusiasmo por el torneo. Su imagen se usó en diversos materiales promocionales y productos relacionados con la Copa Mundial, como carteles, souvenires y programas. La elección de un gaucho como mascota reflejaba el deseo de Argentina de destacar su herencia cultural y crear una conexión con el público durante el torneo"
}

/*Script para los botones de la trayectoria*/

let marcadorCambio1 = document.getElementById("marcador1");
let marcadorCambio2 = document.getElementById("marcador2");
let marcadorCambio3 = document.getElementById("marcador3");
let tablaCambioS = document.getElementById("tabla");

function boton1() {
    marcadorCambio1.src = "IMAGES/marcador1.png";
    marcadorCambio2.src = "IMAGES/marcador2.png";
    marcadorCambio3.src = "IMAGES/marcador3.png";
    tablaCambioS.src = "IMAGES/Tabla1.jpg";
}

function boton2() {
    marcadorCambio1.src = "IMAGES/fase_2.1.png";
    marcadorCambio2.src = "IMAGES/fase_2.2.png";
    marcadorCambio3.src = "IMAGES/fase_2.3.png";
    tablaCambioS.src = "IMAGES/Tabla2.png";
}

function boton3() {
    marcadorCambio1.src = "";
    marcadorCambio2.src = "IMAGES/final.png";
    marcadorCambio3.src = "";
    tablaCambioS.src = "";
}

/*Carrusel de imagenes*/
/*FIguras mundial*/

let sliderFiguras = ["IMAGES/Panini1978.1.png", "IMAGES/Panini19782.png", "IMAGES/Panini1978.3.png", "IMAGES/Panini1978.4.jpg", "IMAGES/Panini1978.5.png", "IMAGES/Panini1978.6.png", "IMAGES/Panini1978.7.png", "IMAGES/Panini1978.8.png", "IMAGES/Panini1978.9.png", "IMAGES/Panini1978.10.png", "IMAGES/Panini1978.11.png"];

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

let sliderDT = ["IMAGES/Entrenador.jpg", "IMAGES/EntrenadorSegundaIMG1978.png", "IMAGES/EntrenadorTerceraIMG1978.png"];

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

let sliderKempes = ["IMAGES/Kempes.jpg", "IMAGES/KempesSegundaIMG.png", "IMAGES/KempesTerceraIMG.png"];

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