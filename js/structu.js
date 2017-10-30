/**
 *  inicPila() // inicializa la pila con 0 elementos, retorna la pila inicializada
 *  readPila(p) //le dice al usuario que cargue los valores
 *  topePila(p)  // me dice el tope de la pila
 *  apilar(p, elemento)  // apila el elemento en el tope de la pila
 *  desapilar(p) // desapila un elemento de la pila
 *  vaciarPila(p) // vacia la pila
 *  writePila(p) // imprime la pila en pantalla
 *  pilaVacia(p) //indica si la pila está vacía
 */

/**
 * [inicPila se encarga de inicializar la pila]
 * @param  {Pila} p
 **/
function inicPila() {
  p = new Pila();
  return p;
}

function writePila(p) {
  var message = p.write();
  console.log(message);
  consoleAddMessage(message);
  return p.write(message);
}

function apilar(p, element) {
  p.apilar(element);
}

function desapilar(p) {
  var auxTope = p.desapilar();
  if (auxTope === null) {
    alert("intentaste desapilar una pila vacia!!");
  } else {
    return auxTope;
  }
}

function tope(p) {
  return p.tope();
}

function pilaVacia(p) {
  return p.vacia();
}


function vaciarPila(p) {
  while (!p.vacia()) {
    p.desapilar();
  }
}

function readPila(p) {
  var pilaString = prompt('ingrese los elementos de la pila\nseparados por comas:','');
  if (pilaString !== null && pilaString !== "") {
    //console.log(pilaString);
    var arrayAux = pilaString.split(",");
    var i = 0;
    while (i < arrayAux.length ){
      if (arrayAux[i] !== ""){
        p.apilar(arrayAux[i]);
      }
      i++;
    }
    return p;
  }
}
