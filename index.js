"use strict";
//TEORIA:
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
//CONCEPTOS BASICOS:
//--------------ejemplo objeto para ver cuando ponemos el mouse arriba que nos dice
// const persona = {
//     name: "pepe",
//     age: 32
// }
//--------------podemos declarar variables con un tipo y TS nos la pone con el TIPO que pongamos
// let a = "hola";
// let aaaa = null;
// let c = undefined;
//o podemos aclararle que tipo es(completamente innecesario) --FIN
//--------------INFERIR 2
// let a = 2;
// let b = 3;
// let c = a+b;//infiere en que si a y b  son numericos, c se convierte en numerico tambien!!
//----------------Functions:
var _a;
var hero = {
    name: "thor",
    age: 1500,
    isActive: true
};
function createHero(hero) {
    var name = hero.name, age = hero.age; //aqui extraemos el name y el age del hero
    return { name: name, age: age, isActive: true }; //AQUI hacemos que por defecto el heroe este activo, ya que si lo estamos creando significa que lo esta
}
var thor = createHero({ name: "thor", age: 1500 }); //aca le pasamos un objeto, porque en la funcion recibe un hero/objeto :)
console.log(thor);
(_a = thor.id) === null || _a === void 0 ? void 0 : _a.toString(); //esto es consultar si existe el id antes de hacer el tostring sin necesidad de un condicional(if)
//si viene alguien y de la nada le pinta ponerle a thor un id = 124213123; nos rompe el thor
//entonces usamos la propieda readOnly para que sea solo de escritura en el type
