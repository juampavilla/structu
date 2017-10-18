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
consoleAddMessage("********RESULTADOS*******");
consoleAddMessage("DADA:");
writePila(DADA);
consoleAddMessage("CJTO1:");
writePila(CJTO1);

consoleAddMessage("CJTO2:");
writePila(CJTO2);
