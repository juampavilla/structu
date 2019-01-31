# structu
stacks and rows in JS, inspired in UNICEN Courses http://www.exa.unicen.edu.ar/
And initial aproach to programming with stacks and rows in JS instead of Pascal

en el archivo scripts.js están el uso de la pila para resolver diferentes problemas

#Ejemplo
```
"use strict";

/*
program PASADISTINTOS;
{Este un programa carga por teclado una pila ORIGEN y pasa a la pila DESTINO
todos aquellos elementos que preceden al valor 5}
uses estructu;
*/
var origen;
var destino;

origen = inicPila();
destino = inicPila();
readPila(origen);
writePila(origen);

if (!pilaVacia(origen)){
  console.log("entro");
  while (tope(origen) != 5) {
    apilar (destino, desapilar(origen))
  }

} 

writePila(origen);

writePila(destino);

```

#resultado
input/origen: <BASE>|1||2||3||4||5||6||7|<TOPE>

destino: <BASE>|1||2||3||4||5|<TOPE>
origen: <BASE>|7||6|<TOPE>

