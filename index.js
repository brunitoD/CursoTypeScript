"use strict";
//TEORIA:
//Types y interfaces esta bueno(es un agregado propio de TS que al compilarlo a JS desaparece y de 30 lineas quedan 5)
//MIdu Recomienda usar siempre types (tipos)
// le agregamos una extension, pretty typescript errors, nos explica de mejor manera los errores
//esto nos va a devolver dos explicaciones de errores con la extension , la de arriba es con
//la original y la otra (abajo)es la "mejor explicada" --FIN
//usar todo lo que nos brinda TypeScript,EJ: poner la variable let a = "hola", no es necesario agregarle :string --FIN
// ayuda de escritura: cuando ponemos la variable hola. automaticamente nos ofrece todas las cosas posibles para la cadena de texto!! --FIN
// si no le ponemos un valor a la variable la asigna como ANY, le estariamos indicando que
//ingnore el tipado de ts y no nos ofrece las ayudas ni nada!  --FIN
//INFERIR: significa que sin decrile el tipo, TS si lo sabe (infiere en el tipo) en varias ocasiones sucede
//en funcion si devolvemos edad que es numerico, si ponemos el mouse arriba del nombre de la function nos dice lo que devuelve al final de todo
//FUNCIONES: se escriben igual que en javascript, pero a ,los parametros debemos indicarles el TIPO, hay excepciones!! LIN 28
//crypto.randomUUID() : sirve para generar un id aleatorio!!
//readOnly no se puede modificar jamas su valor, lo usamos para el id de hero
//TYPE teoria:
//Al utilizar TypeScript en el desarrollo web, no solo reduces la posibilidad de errores, sino que también mejoras la legibilidad y la mantenibilidad del código,
//lo que es especialmente valioso en proyectos a largo plazo.
//typeof: te permite crear codigo a partir de otro codigo LIN255
//Para hacer un inner html debemos validar que el contenedor o lo que querramos inyectarle codigo, que no sea null, EJ  if(div){div.innerHTML="hola"}
////enum funciona tambien como tipo!!!! en funciones podemos aclarar que recibimos un tipo enum
//----primer forma de indicar que personaje usar del type Personaje
// function jugar(personaje: Personaje){
//     if(personaje.company == "Nintendo"){
//         personaje.saltar() // porque este es mario, se da cuenta que es mario
//         return
//     }
//     personaje.correr()//ahora correr funciona porque solamente queda Sonic que tiene la propiedad correr()
// }
//-----segunda forma
function checkIsSonic(personaje) {
    return personaje.correr != undefined;
}
function jugar(personaje) {
    if (checkIsSonic(personaje)) {
        personaje.correr();
    }
}
