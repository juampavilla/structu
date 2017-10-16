/**
 *  permite administar una pila
 *
 * @class Pila
 */
class Pila {
  /**
   * Creates an instance of Pila.
   * @memberof Pila
   */
  constructor() {
    this.cant = 0;
    this.element = [];
  }

  /**
   *  dice si la pila está vacia
   *
   * @returns boolean
   * @memberof Pila
   */
  vacia() {
    if (this.cant === 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * devuelve el tope, null si la pila es vacia
   *
   * @returns Object
   * @memberof Pila
   */
  tope() {
    if (!this.vacia()) {
      return this.element[this.cant - 1];
    } else {
      return null;
    }

  }



  /**
   * saca un elemento de la pila
   * y lo devuelve
   * @returns Object
   * @memberof Pila
   */
  desapilar() {
    if (!this.vacia()) {
      this.cant--;
      return this.element.pop();
    } else {
      return null;
    }

  }

  /**
   * apila un elemento pasado por parametro
   *
   * @param {any} element
   * @memberof Pila
   */
  apilar(element) {
    this.element.push(element);
    this.cant++;
  }


  /**
   * devuelve lo que tiene la pila en un String
   * @return {String} out
   */
  write() {
    var i = 0;
    var out = "<BASE>";
    while (i < this.cant) {
      out = out + "|" + this.element[i] + "|";
      i++;
    }
    out = out + "<TOPE>";
    //console.log(out);
    return out;
  }
}
