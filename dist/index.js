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
//crypto.randomUUID() : sirve para generar un id aleatorio!!
//readOnly no se puede modificar jamas su valor, lo usamos para el id de hero
//TYPE teoria:
//Al utilizar TypeScript en el desarrollo web, no solo reduces la posibilidad de errores, sino que también mejoras la legibilidad y la mantenibilidad del código,
//lo que es especialmente valioso en proyectos a largo plazo.
//typeof: te permite crear codigo a partir de otro codigo LIN255
//Para hacer un inner html debemos validar que el contenedor o lo que querramos inyectarle codigo, que no sea null, EJ  if(div){div.innerHTML="hola"}
////enum funciona tambien como tipo!!!! en funciones podemos aclarar que recibimos un tipo enum
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
//--teoria: nos permite crear de que datos va a estar compuesto los heroes
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
//-----------------Templete union type
// type HexadecimalColor = `#${string}`
// // const color: HexadecimalColor = '0033ff';//se queja porque no tiene Hashtag y arriba esta indicado que si debia tenerla
// const color2: HexadecimalColor = '#003344'
//Optional Properties:
// aca queremos saber cuales estan inactivos:
// type HeroId = `${string}-${string}-${string}-${string}-${string}`//creacion de tipos para poder usarlo en otros tipos
// type Hero = {//creamos el tipo de variables del heroe que vamos a estar aceptando
//     readonly id?: HeroId//podemos indicar el tipo creando un tipo -lin139- :) readOnly no se puede modificar jamas su valor, lo usamos para el id de hero
//     name:string
//     age:number
//     isActive?: boolean//esta preopiedad es opcional con el ?
// }
// let hero: Hero = {
//     name: "thor",
//     age:1500,
// }
// function createHero(hero:Hero):Hero{//le queremos pasar un hero, que es del tipo Hero y esto devuelve un Hero
//   const {name, age} = hero//aqui extraemos el name y el age del hero
//     return{id:crypto.randomUUID(), name,age, isActive:true}//AQUI hacemos que por defecto el heroe este activo, ya que si lo estamos creando significa que lo esta
// }
// // lo bueno de TS es que podemos indicar que tipo de cadena queremos que nos acepte el id
// const thor = createHero({name:"thor", age:1500})//aca le pasamos un objeto, porque en la funcion recibe un hero/objeto :)
// console.log(thor)
// thor.id?.toString()//esto es consultar si existe el id antes de hacer el tostring sin necesidad de un condicional(if)
//const thor = Object.freeze(createHero({name:"thor", age:1500})) esto nos sirve para decirle que no se pueda mutar!!
// si viene alguien y de la nada le pinta ponerle a thor un id = 124213123; nos rompe el thor
// entonces usamos la propieda readOnly para que sea solo de escritura en el type
//-------------------------union types esto | esto
//ejemplo tipico(sin los comentarios de arriba)
// type HeroId = `${string}-${string}-${string}-${string}-${string}`
//agregados en esta parte y en la lin184, lin197
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' //aca le decimos que su escala de poder puede ser una de esas cadena de textos esta (| = o) esta
// let ann: number | string //UNION DE TIPOS podemos indicarle dos tipos, una locura!
// let annn: string | 2 // podemos indicarle directamente el  valor 
// const enableAnimationDuration: boolean | number = 200 //200ms
// type Hero ={
//     readonly id?: HeroId
//     name:string
//     age:number
//     isActive?: boolean
//     powerScale?: HeroPowerScale
// }
// let hero: Hero = {
//     name: "thor",
//     age:1500,
// }
// function createHero(hero:Hero):Hero{
//   const {name, age} = hero
//     return{id:crypto.randomUUID(), name,age, isActive:true}
// }
// const thor = createHero({name:"thor", age:1500})
// thor.powerScale = "universal" //otro agregado de esta parte
// console.log(thor)
//-----------------intersection Types
//para extender tipos, como hacemos? a diferencia del union types que nos permitia esto | esto, este es esto & esto tenemos esta propiedad
// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// // agregados en esta parte y en la lin184, lin197
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' //aca le decimos que su escala de poder puede ser una de esas cadena de textos esta (| = o) esta
// let ann: number | string //UNION DE TIPOS podemos indicarle dos tipos, una locura!
// let annn: string | 2 // podemos indicarle directamente el  valor 
// const enableAnimationDuration: boolean | number = 200 //200ms
// //------desde aca comienza el cambio usando intersection types
// type HeroInfoInput = {
//     name:string
//     age:number
// }
// type HeroProperties ={
//     readonly id?: HeroId
//     isActive?: boolean
//     powerScale?: HeroPowerScale
// }
// type Hero = HeroInfoInput & HeroProperties;//unimos propiedades
// let hero: Hero = {
//     name: "thor",
//     age:1500,
// }
// //-----------------hasta aca
// function createHero(input:HeroInfoInput):Hero{//aca modificamos y le decimos que input(o el nombre que querramos) acepte un hero mucho mas simple sin tener que mover el otro type tan grande y usar solo una parte de el
//   const {name, age} = input
//     return{id:crypto.randomUUID(), name,age, isActive:true}
// }
// const thor = createHero({name:"thor", age:1500})
// thor.powerScale = "universal" //otro agregado de esta parte
// console.log(thor)
//---------------type indexing
// type HeroProperties = {
//     isActive: boolean
//     address: {
//         planet: string,
//         city: string
//     }
// }
// const addressHero: HeroProperties['address']= {//esto nos permite reutilizar partes de un tipo que tengamos por ahi
//     city: 'madrid',
//     planet: 'tierra'
// }
//-----------------------Type From Value
// const address = {
//     planet: 'Earth',
//     city: 'madrid'
// }
// type Address = typeof address;//creando esto, ahora Address podemos heredarlo en otro lado
// const addressQSY: Address = {//aca heredamos Address, que esta planteado para recibir dos tipos de datos(planet y city)
//     planet:'marte',
//     city: 'no hay'
// }
//--------------------tyoe from function return (extraer los tipos de lo que devuelve la funcion)
// function createAddress(){
//     return {
//         planet: 'tierra',
//         city: 'mexico  '
//     }
// }
// type Address = ReturnType<typeof createAddress>//el return type es: quiero que me recuperes el tipo de lo que devuleve la funcion que tiene este createAddress
//ahora el Address tiene los valores que retorna la funcion
//-----------------------------Arrays
// type Lenguaje = {
//     Lenguaje: string;
//     dificultad: number;
//     error: boolean;
// };
// const Lenguages: Lenguaje[] = [];
// Lenguages.push(
//     { Lenguaje: 'javascript', dificultad: 2, error: true },
//     { Lenguaje: 'python', dificultad: 1, error: false }
// );
// Lenguages.forEach(i => {
//     console.log(`Lenguaje: ${i.Lenguaje}\nDificultad del 1 al 3: ${i.dificultad}`);
// });
//--EJEMPLO CON HEROS
// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' //aca le decimos que su escala de poder puede ser una de esas cadena de textos esta (| = o) esta
// type HeroInfoInput = {
//     id?:number
//     name:string
//     age:number
// }
// const herosWithBasicInfo:HeroInfoInput[] = [] //podemos tambien decirle a nuestro objeto que tipos de datos va a obtener y que tipo(poner mouse arriba de herosWithBasicInfo y vas a ver lo que hereda)
//---------------------Matrices y tuplas
//explicacion con tateti
//una tupla es un array con un limite fijado de longitud, en este caso es GameBoard
// type cellValue = 'X'| 'O'|''
// type GameBoard = [
//     [cellValue,cellValue,cellValue],
//     [cellValue,cellValue,cellValue],
//     [cellValue,cellValue,cellValue]
// ]
// const gameBoard: GameBoard = [
//     ['X','O','X'],
//     ['X','O','X'],
//     ['X','O','X']
// ]
// //ejemplo para entender tupla sencillo
// //Los colores RGB son tuplas, ya que tienen un alogitud y un tipo de dato definido
// type RGB = readonly [number,number,number]//indicamos que rgb va a ser un array que recibe con numeros
// const red:RGB = [2,1,3];
// red.push(4)//Se lo traga, esto destruye a la tupla, es un fallo de ts que no loarreglan porque rompe la retrocompatibilidad con todo lo logrado en el lenguaje
//la forma para slucionarlo es poner a RGB como ReadOnly
// console.log(rgb)
//---------------------------ENUMS---ejemplo en js y como lo hariamos en TS con ENUMS
//en javascript podemos utilizar algo asi para dar mensajes de error:
// const ERROR_TYPES = {
//      NOT_FOUND: "notfound",
//      UNAUTHORIZED: "Unahotirized",
//      FORBIDDEN: "Forbidden"
// }
// function mostrarMensajeERR(tipoDeError:string){
//      if(tipoDeError === ERROR_TYPES.NOT_FOUND){
//         console.log("no se encuentra el recurso")
//      }
//      else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED){
//         console.log("sin permiso para acceder")
//      }
//      else if(tipoDeError === ERROR_TYPES.FORBIDDEN){
//         console.log("error no existe")
//      }
// }  
//------------------forma de hacerlo en TS:
//teoria ENUMS
//enum funciona tambien como tipo para lo que recibe una funcion o cuando creamos una variable!!!!
//usar siempre const enum, genera menos codigo en el compilado que "enum" solamente!!! 
//pero si lo que hagamos se va dirigido a algo externo a la web, usar enum para que se pueda consumir(curso 2 midu, min 31) 
//les da numeros a los valores q hay creados dentro, especificado=>
// enum ERROR_TYPES  {
//     NOT_FOUND, //0
//     UNAUTHORIZED, //1
//     FORBIDDEN  //2
// }
// si estuvieramos laburadno con una base de datos que ya tiene sus id para los errores, lo correcto seria hacer esto:
// enum ERROR_TYPES  {
//     NOT_FOUND = "notFound", //en lugar de un indice automatico por enum, tendriamos u8n string y no chocaria con la BD
//     UNAUTHORIZED ="unauthorized", 
//     FORBIDDEN ="forbidden" 
// }
// function mostrarMensajeERR (tipoDeError:ERROR_TYPES){
//      if(tipoDeError === ERROR_TYPES.NOT_FOUND){
//         console.log("no se encuentra el recurso")
//      }
//      else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED){
//         console.log("sin permiso para acceder")
//      }
//      else if(tipoDeError === ERROR_TYPES.FORBIDDEN){
//         console.log("error no existe")
//      }
// }  
//explicacion enlace entre tyoescript y html
//typesrcipt no sabe si realmente estas trayendo un elemento desde el html porque no funciona en tiempo de ejecucion
//debemos validar, 1er forma no tan correcta, porque si escribimos mal lo que recibimos en el getelementbyid,
// la cagamos, la forma correcta seria LIN399
// const canvas = document.getElementById("canvas") as HTMLCanvasElement
// if(canvas){
//     const ctx = canvas.getContext('2d')
// }
//de esta forma nos aseguramos de que el elemneto que recibimos es un canvas
const canvas = document.getElementById("span"); //aca ingresamos span a propisto para ver error, pero no petaria por la validacion que hay acontinuacion
if (canvas instanceof HTMLCanvasElement) {
    const ctxContexto = canvas.getContext('2d');
}
//typeof => para tipos (string,number,booleam)=> basicos
//instanceof => para instancias (canvas, date) => para mas complejidad
//---------------------------------fetching de datos=>{
//primero creamos un archivo .mts en lugar de .ts para hacer fetch a un link de git
//archivo.mts:Un archivo .mts es un archivo TypeScript que se usa en un entorno
// de módulos de ES (ECMAScript). Al hacer fetch a una API desde un archivo 
//.mts, el proceso es similar al de un archivo JavaScript, pero con la ventaja 
//de que puedes usar tipos y otras características de TypeScript.
