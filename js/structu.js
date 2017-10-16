/**
 *  InicPila(p) // inicializa la pila con 0 elementos
 *  ReadPila(p) //le dice al usuario que cargue los valores
 *  TopePila(p)  // me dice el tope de la pila
 *  Apilar(p, elemento)  // apila el elemento en el tope de la pila
 *  Desapilar(p) // desapila un elemento de la pila
 *  vaciarPila(p) // vacia la pila
 *  WritePila(p) // imprime la pila en pantalla
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

function tope(p){
  return p.tope();
}

function pilaVacia(){
  return p.vacia();
}


function vaciarPila(p){
  while (!p.vacia()){
    p.desapilar();
  }
}

function readPila(p){
  nombre=prompt('Ingrese su nombre:','');
}
