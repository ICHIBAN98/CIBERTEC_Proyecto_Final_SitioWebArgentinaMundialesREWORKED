/*Script para cambiar imagen y texto al dar click a las pequeñas imagenes */

let imagenCambio = document.getElementById("imagenGrande");
let subCambio = document.getElementById("sub-Cambiar");
let txtCambio = document.getElementById("texto-Cambiar");

imagenCambio.style.height = "246px";
imagenCambio.style.width = "400px";


function cambio1() {
    imagenCambio.src = "IMAGES/BalonQatar.jpg";
    subCambio.innerHTML = "Balón oficial del mundial"
    txtCambio.innerHTML = "El balón de la Copa Mundial de Qatar 2022 se llama Al Rihla, que significa “el viaje” en árabe. Está inspirado en varios elementos de la cultura qatarí, como el idioma, la arquitectura, los barcos emblemáticos y la bandera del país1. Es el primer balón que se fabrica con pegamentos y tintas de base acuosa, lo que lo hace más sostenible2. Además, tiene dos características especiales que mejoran su rendimiento: • CRT-CORE: el corazón del esférico, que le da velocidad, precisión, consistencia y conserva su forma, su aire y su rebote1. • SPEEDSHELL: el cuero de poliuretano texturizado con una forma novedosa de 20 paneles que mejora la estabilidad, la precisión y la rotación en el aire del balón12. El Al Rihla es el decimocuarto balón que diseña y fabrica Adidas para la Copa Mundial de la FIFA. La marca alemana ha proporcionado todos los balones del torneo desde México 19701. El Al Rihla también tiene una causa social: el 1% de las ventas netas globales de los balones de fútbol de Adidas se destinará a Common Goal, una ONG fundada por el exfutbolista español Juan Mata que colabora con proyectos benéficos a través del fútbol2. El Al Rihla se une así a la historia de los balones mundialistas, que han ido evolucionando desde el Tiento y el T-model que se usaron en Uruguay 1930 hasta el Telstar 18 que se usó en Rusia 2018. Cada balón tiene su propia personalidad y refleja el espíritu de cada Copa Mundial. El Al Rihla representa el viaje que emprenderán los mejores equipos y jugadores del mundo en Qatar 2022, donde buscarán hacer historia y levantar el trofeo más codiciado del fútbol."
}

function cambio2() {
    imagenCambio.src = "IMAGES/Estadio2022.jpg";
    subCambio.innerHTML = "Estadio donde se disputo la final"
    txtCambio.innerHTML = "El Estadio Internacional Khalifa de Al Rayyan es el recinto futbolístico más histórico de Catar. Entre otros certámenes deportivos, el estadio ha sido sede de los Juegos Asiáticos, la Copa del Golfo y la Copa Asiática de la AFC. Construido en 1976, el recinto inauguró un nuevo capítulo de su ilustre historia en 2017, año en el que volvió a abrir las puertas tras su renovación y albergó la final de la Copa del Emir, en la que triunfó el Al-Sadd, el equipo de un futbolista campeón de la Copa Mundial de la FIFA™, Xavi. La renovación ultramoderna continúa honrando el pasado de este emblemático estadio y los dos arcos tradicionales de su estructura siguen arañando el cielo. Vale recalcar que este recinto fue sede de cinco partidos de la Copa Mundial de Clubes de la FIFA 2019, entre ellos la final. Los arcos dobles del estadio se mantuvieron intactos tras la remodelación y se han complementado instalando debajo una amplia bóveda para facilitar la integración del nuevo sistema de refrigeración. La nueva grada ha incrementado el aforo en 10 450 localidades y la fachada es nueva. El sistema de iluminación LED instalado añade una nueva dimensión a la experiencia que vivirán los aficionados. Capacidad del Estadio de la Copa Mundial de la FIFA 2022*: 45,857 *La capacidad para partidos específicos puede variar ligeramente"
}

function cambio3() {
    imagenCambio.src = "IMAGES/mascota2022.jpg";
    subCambio.innerHTML = "Mascota oficial del mundial"
    txtCambio.innerHTML = "A tan solo dos días para que dé comienzo el Mundial de Qatar 2022, pocos son los que todavía no conocen todos los detalles acerca del mayor evento en el terreno futbolístico. El primer torneo celebrado en esta época del año tiene como mascota a La'eeb, que fue presentada al mundo el 1 de abril de 2022, en el momento en que se celebró la fase de grupos del torneo. Cómo es La'eeb y qué representa La'eeb simula la figura de un turbante de color blanco, sonriente y que juega al fútbol. Su significado es el de 'jugador habilidoso' y está inspirado en la cultura y las costumbres de Qatar. Curiosamente, el esférico con el que aparece La'eeb no es Al Rihla ('el viaje'), el oficial de la FIFA para el torneo. La'ebb procede del metaverso de las mascotas, un universo paralelo que no se puede describir con palabras y cada uno puede imaginar como quiera. La'ebb anima a todos a creer en sí mismos, declaró la FIFA en su presentación en abril. El objetivo del máximo organismo mundial de fútbol con la mascota es atraer a público de todas las edades. El Balón del Qatar 2022"
}

/*Script para los botones de la trayectoria*/

let marcadorCambio1 = document.getElementById("marcador1");
let marcadorCambio2 = document.getElementById("marcador2");
let marcadorCambio3 = document.getElementById("marcador3");
let tablaCambioS = document.getElementById("tabla");

function boton1() {
    marcadorCambio1.src = "IMAGES/marcador1Q.png";
    marcadorCambio2.src = "IMAGES/marcador2Q.png";
    marcadorCambio3.src = "IMAGES/marcador3Q.png";
    tablaCambioS.src = "IMAGES/Tabla1Q.png";
}

function boton2() {
    marcadorCambio1.src = "";
    marcadorCambio2.src = "IMAGES/marcador4Q.png";
    marcadorCambio3.src = "";
    tablaCambioS.src = "";
}

function boton3() {
    marcadorCambio1.src = "";
    marcadorCambio2.src = "IMAGES/marcador5Q.png";
    marcadorCambio3.src = "";
    tablaCambioS.src = "";
}

function boton4() {
    marcadorCambio1.src = "";
    marcadorCambio2.src = "IMAGES/marcador6Q.png";
    marcadorCambio3.src = "";
    tablaCambioS.src = "";
}

function boton5() {
    marcadorCambio1.src = "";
    marcadorCambio2.src = "IMAGES/marcador7Q.png";
    marcadorCambio3.src = "";
    tablaCambioS.src = "";
}

/*Carrusel de imagenes*/
/*FIguras mundial*/

let sliderFiguras = ["IMAGES/Panini2022.1.png", "IMAGES/Panini20222.png", "IMAGES/Panini2022.3.png", "IMAGES/Panini2022.4.png", "IMAGES/Panini2022.5.png", "IMAGES/Panini2022.6.png", "IMAGES/Panini2022.7.png", "IMAGES/Panini2022.8.png", "IMAGES/Panini2022.9.png", "IMAGES/Panini2022.10.png", "IMAGES/Panini2022.11.jpeg"];

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

let sliderDT = ["IMAGES/DTQATAR.jpg", "IMAGES/DTQATAR2.png", "IMAGES/DTQATAR3.png"];

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

let sliderKempes = ["IMAGES/Messi.jpg", "IMAGES/Messi3.png", "IMAGES/Messi2.png"];

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