# structu
stacks and rows in JS, inspired in UNICEN Courses http://www.exa.unicen.edu.ar/
And initial aproach to programming with stacks and rows in JS instead of Pascal

en el archivo scripts.js están el uso de la pila para resolver diferentes problemas

#Ejemplo
```
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
```


