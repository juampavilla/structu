"use strict";

var pila1 = inicPila();
var pila2 = inicPila();
apilar(pila1,5);
apilar(pila1,"hola");
apilar(pila1,8);
writePila(pila1);
apilar(pila2,desapilar(pila1));
writePila(pila1);
writePila(pila2);

vaciarPila(pila1);
writePila(pila1);
