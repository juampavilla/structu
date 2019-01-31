"use strict";

/*
program PASADISTINTOS;
{Este un programa carga por teclado una pila ORIGEN y pasa a la pila DESTINTO
todos aquellos elementos que preceden al valor 5}
uses estructu;
*/
var origen;
var distinto;

origen = inicPila();
distinto = inicPila();
readPila(origen);
writePila(origen);

if (!pilaVacia(origen)){
  console.log("entro");
  while (tope(origen) != 5) {
    apilar (distinto, desapilar(origen))
  }

} 

writePila(origen);

writePila(distinto);
