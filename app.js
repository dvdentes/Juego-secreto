let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroIntentos = 5;//se ponen 5 intentos pero en realida son 4 por que intentos inicia en 0 y es tomado como 1 intento
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
/*esta funcion recibe 2 parametros: elementoHTML(elemento), que es donde 
se pone lo que aparece en la paguina wed, y titulo.innerHTML(texto), que es 
el texto que va en en elementoHTML.
*/

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //el "input" que esta es en html, tiene un "id" llamado "valorUsuario" (puede haber varios id en el input) que es la caja blanca del la pagina donde se registra el numero del usuario
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //juegos++;
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        numeroMaximoIntentos();
    }
    return;
    /*console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);*/
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    /*let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1; 
    return numeroSecreto;"este codigo solo muestra como seria la forma larga de utilizar la generacion de numero aleatorio"*/
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;//return, retonar un valor.en este caso retorna el numero secreto

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los intetos posibles');
    } else {
        //si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) //el include verifica si un numero ya esta en lista y devuelve si es true o fall
        {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del el 1 al ${numeroMaximo} tienes ${numeroIntentos-1} intentos para ganar`);//numeroIntentos-1, se pone asi porque el intento inicial es "0" y es tomado como si fuera el primer intento
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');    
}

function numeroMaximoIntentos() {
 if (numeroIntentos == intentos) {
    limpiarCaja();
    //document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.getElementById('reiniciar').removeAttribute('disabled');    
    asignarTextoElemento('p','Fin del juego');  
    //reiniciarJuego();    
 }
}
condicionesIniciales();

