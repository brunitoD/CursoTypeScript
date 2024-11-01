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
// let hero = {
//     name : "thor",
//     age: 1500
// };

// // hero.power = 222 no podemos crearle un  nuevo dato al objeto
// //hero.name = 22 no podemos asignarle valores diferentes a los que predeterminado nos dio

// //crear heroes mediante funcion
// const createHero = (name:string, age:number)=>{
//     return{//aqui retornamos un objeto, la info nos llega con lo que nos pasa cuando llaman a la funcion
//         name,age
//     }
// }
// const thor = createHero("thor", 1500)
//Type Alias (de lo mas potente de TS)
//teoria: nos permite crear de que datos va a estar compuesto los heroes

// type Hero = {//creamos el tipo de variables del heroe que vamos a estar aceptando
//     name:string
//     age:number
// }
// let hero: Hero ={
//     name: "thor",
//     age:1500
// }

// function createHero(name:string, age: number):Hero{//si no ponemos :hero, nos devuelve un objeto cuando lo llamemos y le pasemos datos, en cambio, con :hero nos devuelve un Hero!
//     return{name,age}
// }
// const thor = createHero("thor",1500)

//lo anterior potenciado para ver la potencia que tienen los tipos en los parametros

// type Hero = {//creamos el tipo de variables del heroe que vamos a estar aceptando
//     name:string
//     age:number
// }
// let hero: Hero ={
//     name: "thor",
//     age:1500
// }

// function createHero(hero:Hero):Hero{//le queremos pasar un hero, que es del tipo Hero y esto devuelve un Hero
//   const {name, age} = hero//aqui extraemos el name y el age del hero
//     return{name,age}
// }
// const thor = createHero({name:"thor", age:1500})//aca le pasamos un objeto, porque en la funcion recibe un hero/objeto :)
//Optional Properties:
//aca queremos saber cuales estan inactivos:
type Hero = {//creamos el tipo de variables del heroe que vamos a estar aceptando
    readonly id?:number
    name:string
    age:number
    isActive?: boolean//esta preopiedad es opcional con el ?
}
let hero: Hero = {
    name: "thor",
    age:1500,
    isActive:true
}

function createHero(hero:Hero):Hero{//le queremos pasar un hero, que es del tipo Hero y esto devuelve un Hero
  const {name, age} = hero//aqui extraemos el name y el age del hero
    return{name,age, isActive:true}//AQUI hacemos que por defecto el heroe este activo, ya que si lo estamos creando significa que lo esta
}
const thor = createHero({name:"thor", age:1500})//aca le pasamos un objeto, porque en la funcion recibe un hero/objeto :)
console.log(thor)
thor.id?.toString()//esto es consultar si existe el id antes de hacer el tostring sin necesidad de un condicional(if)

//si viene alguien y de la nada le pinta ponerle a thor un id = 124213123; nos rompe el thor
//entonces usamos la propieda readOnly para que sea solo de escritura en el type