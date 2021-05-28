// es una funcion que se pasa como parámetro de otra funcion
// se ejecutara cuando la funcion padre lo determine
// puede estar definida previamente
// operacionMatematica (2,3,sumar)
// o puede ser una funcion anónima que definas en ese momento
// operacionMatematica (2,3,(n1,n2)=>{return n1 +n2})

let sumar =(num1,num2) => num1 + num2;
let restar =(num1,num2) => num1 - num2;
let multiplicar = (num1,num2) => num1 * num2;
let dividir = (num1,num2) => num1 / num2;

let calculadora = (num1,num2,operacion) => operacion(num1,num2)

// console.log(calculadora(18,2,multiplicar))

//callback anonimo- recibe la funcion como parametro y el tiempo que tiene que esperar para ejecurarla
setTimeout( function(){
    // console.log('Hola Mundo!')
   } , 1000)
// misma funcion pero con el parametro definido anteriormete
let miCallback = () => console.log('Hola mundo!');
setTimeout(miCallback, 1000);

// Al escribir una función como parámetro lo hacemos sin los paréntesis para evitar que se ejecute. Será la
// función que la recibe quien se encargue de ejecutarla.
 
let array= ["www.google.com","www.yahoo.com"];

function agregarHttp(url) {
    return ("http://" + url)
    // escribí tu código aquí
}
// console.log(agregarHttp("www.google.com"))

function largoElementos(url) {
    return url.length;
    // escribí tu código aquí
}

function procesar(array,callback){
    nuevoArray=[];
    for(let i=0; i<array.length;i++){
        nuevoArray.push(callback(array[i]))      }
         return  nuevoArray;
    // escribí tu código aquí
    // recuerda iterar en cada uno de los elementos del array. Eso lo podes hacer utilizando...
}
console.log(procesar(array,agregarHttp))
console.log(procesar(array,largoElementos))
//la misma funcion procesar la puedo usar con dos callbacks diferentes