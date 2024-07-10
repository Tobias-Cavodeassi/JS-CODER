// QUIZ FÚTBOL ARGENTINO 2024 //

const nombre = prompt("Ingresá tu nombre")
function saludarPersona(){
        alert("Hola, " + nombre + ". Te doy la bienvenida al Quiz de Fútbol Argentino 2024!");
        alert("A continuación responderás 10 preguntas acerca del Fútbol Argentino");
    }
saludarPersona();

let preguntasRespondidas = 0
const cantidadDePreguntas = 5

while (preguntasRespondidas < cantidadDePreguntas){
    const pregunta1 = prompt("¿Cuántas Copas del Mundo tiene la selección Argentina?");
        if (pregunta1 === "3"){
            alert("Correcto!");
        }else{
            alert("Incorrecto")
        }
        preguntasRespondidas += 1;
    const pregunta2 = prompt("¿Cuántas Copas América tiene la selección Argentina?");
        if (pregunta2 === "15"){
            alert("Correcto!");
        }else{
            alert("Incorrecto")
        }
        preguntasRespondidas += 1;
    const pregunta3 = prompt("¿En qué año Diego Armando Maradona debutó en la selección Argentina?");
        if (pregunta3 === "1977"){
            alert("Correcto!");
        }else{
            alert("Incorrecto")
        }
        preguntasRespondidas += 1;
    const pregunta4 = prompt("¿En qué año se inauguró el Estadio Mario Alberto Kempes?");
        if (pregunta4 === "1978"){
            alert("Correcto!");
        }else{
            alert("Incorrecto")
        }
        preguntasRespondidas += 1;
    const pregunta5 = prompt("¿En qué año Argentina ganó su primer Mundial de Fútbol?");
        if (pregunta5 === "1978"){
            alert("Correcto!");
        }else{
            alert("Incorrecto")
        }
        preguntasRespondidas += 1;
}
alert("Muchas gracias por participar!!!")