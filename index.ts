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

// function saludar (name:string){
//      console.log(`hola! ${name}`)  
// }

// saludar("Bruno")
// // saludar(2)//no nos lo permitiria

// const gritar = (grito:string)=>{
//     console.log(`el grito que escuche fue ${grito}`)
// }
// gritar("AAAAAAA")
// gritar("adawdwad")
//-------------tipar objeto en funcion

// function saludar ({name, age} : {name:string, age:number})
// {
//     console.log(`hola ${name}, tu edad es de ${age} años`)
// }

// saludar({name: "pepe", age : 22})
// function saludar ({name, age} : {name:string, age:number})
// {
//     console.log(`hola ${name}, tu edad es de ${age} años`)
//     return age;
// }
//si quisieramos guardar lo que devuelve en una variable tipo strimg no podriamos, ya que returna number
// let a:string = saludar({name:"pepe",age:2}) //nos daria:
//El tipo 'number' no se puede asignar al tipo 'string'.ts(2322)
//-------------Tipar Funciones
//si ponemos void como tipo de dato devuelto, y retornamos string, no hay
//drama porque void significa que no nos importa lo que carajo devulve y funciona igual
// const FuncionDentroDeFuncion = (funcionRecibida: (name : string) => string)=>{//si hubiera return name; deberiamos poner => string
//     return funcionRecibida("miguel")//esto lo enviamos al parametro donde llamamos a la funcion
// }
// const Funcion = ((name: string)=>{
//     console.log(`Hola ${name}`)
//     return name;
// })
// FuncionDentroDeFuncion(Funcion);
// //------------tipar arrow Functions (funciones flecha)
// const sumar = (b: number, a: number):number=>{
//     return a+b;
// }
// console.log(sumar(3,2))
 //----------------never (caso muy tipico y que nos va a servir)
//  function throwError(message:string):never {//le decimos que nunca se va a ejecutar por completo y nunca  va a retornar nada
// 
//     if(message) throw new Error(message);
//     throw new  Error(message)
// }

//-----------------inferencia en funciones anonimas segun el contexto (estas no hacen falta agregarle el tipo)
//lo entiende de por si
// const avengers = ["spiderman", "hulk", "cap america"];

// avengers.forEach(avenger =>{
//     console.log(avenger)
// })
//---------------------inferencia de datos en un array

let hero = {
    name : "thor",
    age: 1500
};

// hero.power = 222 no podemos crearle un  nuevo dato al objeto
//hero.name no podemos