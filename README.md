# structu
stacks and rows in JS, inspired in UNICEN Courses http://www.exa.unicen.edu.ar/
And initial aproach to programming with stacks and rows in JS instead of Pascal


#Example 
"use strict";

/*function writeMensaje(mensaje){
  var pilaMensaje = inicPila();
  apilar(pilaMensaje, mensaje);
  writePila(pilaMensaje);
}*/

var CJTO1 = inicPila();
var CJTO2 = inicPila();
var DADA = inicPila();
var elemAux;

readPila(DADA);
consoleAddMessage("DADA al principio:");
writePila(DADA);

elemAux = desapilar(DADA);
apilar(CJTO1, elemAux);
elemAux = desapilar(DADA);
apilar(CJTO1, elemAux);
elemAux = desapilar(DADA);
apilar(CJTO1, elemAux);

apilar(CJTO2, desapilar(DADA));
apilar(CJTO2, desapilar(DADA));
consoleAddMessage("********RESULTS*******");
consoleAddMessage("DADA:");
writePila(DADA);
consoleAddMessage("CJTO1:");
writePila(CJTO1);

consoleAddMessage("CJTO2:");
writePila(CJTO2);

