/////////https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array///////

// .push()===================================
     // agrega al final de un array ya existente

// .pop()====================================
     // elimina al final de un array ya existente
     // No recibe parametro
     // retorna el dato eliminado
    //  conviene guardar su resultado dentro de una variable
    let nombres=["more", "seba","flor"]
    let ultimoNombre = nombres.pop()
//     console.log(ultimoNombre)

// .shifth()====================================
     // elimina el primer elemento de un array ya existente
     // No recibe parametro
     // retorna el dato eliminado
     //  conviene guardar su resultado dentro de una variable
     let names=["more", "seba","flor"]
     let ultimoName = names.shift()
     // console.log(ultimoName)

// .unshift()====================================
     //inserta uno o mas datos al principio de un array
     let colores=["rojo","amarillo","verde"]
     colores.unshift("violeta","azul")
     // console.log(colores)

// .indexOf()====================================
     //recibe como parametro una cadena de texto y devuelve la posicion en donde lo encuentra
      //solo de¿vuelve la primer posicion donde lo encuentra
     //si no lo encuentra devuelve -1
     // console.log(colores.indexOf("violeta"))
     // console.log(colores.indexOf("marron"))

// .lastIndexOf()====================================
     //similar a indexOf pero cuenta de atras hacia adelante
     let numeros= ["1","2","3","2","5","2"];
     // console.log("desde adelante " +numeros.indexOf("2"))
     // console.log("desde atras " +numeros.lastIndexOf("2"))

// .join()====================================
    // unifica todos los elementos del array en un único string
    //recibe como parametro el delimitador entre cada elemento, si no recibe nada deja una coma
    let diasSemana=["lunes", "martes", "miercoles", "jueves", "viernes"]
//     console.log(diasSemana.join())
//     console.log(diasSemana.join("-"))
//     console.log(diasSemana.join(" "))

// .toUpperCase()====================================
    //transforma a mayuscula el string que recibe como parametro
//     console.log(diasSemana.join(" ").toUpperCase())

// Math.min()====================================    
   let notas = [9.3, 8.5, 3.2, 7, 10];
   Math.min(...notas); // Devuelve 3.2

/////////////METODOS AVANZADOS QUE RECIBEN CALLBACK COMO PARAMETROS////////////

//.map()====================================SIMILAR AL FOR

// se ejecuta sobre un array dado
// recibe como parametro un callback
// cada uno de los elementos del array seran el parametro de la funcion
// devuelve un array nueva con esa logica implementada.el cual guardamos en una variable
 
   let numerosPares = [2, 4 ,6];

   let elDobleDeLosNumeros = numerosPares.map(function(numeroPar){ return numeroPar*2})
   console.log(elDobleDeLosNumeros)

//.filter()====================================SIMILAR AL IF

// filtrara los elementos de un array dependiendo la condicion que le pasemos
// devuelve un nuevo array

let numerosImpares = [1,3,5,7,9]
let imparesMayores = numerosImpares.filter(function(impar){
     return impar>= 5; //condicion
});
// console.log(imparesMayores)

//.reduce()==================================== 

// la funcion recibe 2 parametros: 1-el acumulador 2-cada elemento del array
// retorna un unico valor

let nums = [0,1,2,3,4,5,6,7,8,9]

let sumarTodos = nums.reduce(function(acumulador,num){
     return num + acumulador;
});
//  console.log(sumarTodos)

//.forEach()====================================SIMILAR AL FOR
// no devuelve nada
// su unica funcion es iterar sobre el array

let numbers = [0,1,2,3,4,5,6,7,8,9]

let imprimirTodos = numbers.forEach(function(num){
    console.log(num);
});

//.slice()============="rodaja"=======================
// Este método devuelve (extrae) una copia de una parte del array dentro de un
// array (subarray). Determina el índice inicial y el final (opcional). El final no está
// incluido para el nuevo array
// ---Si el inicio es un valor negativo, extrae los últimos elementos del array
// desplazándose desde el final del mismo. Si es omitido, por defecto es 0 y si
// es mayor a array.length, devolverá array vacío.
// ---Si el final es negativo, realiza un desplazamiento al final, array.slice(3, -1)
// extrae desde el cuarto elemento hasta el penúltimo. Si es mayor a array.length
// o si es omitido, extrae hasta el final del array,

let numeros = [3, 4, 5, 6, 7];
let subArray = numeros.slice(0, 3);
// console.log(subArray); // [3,4,5]

//.splice()================"empalme"====================
// Este método nos sirve para remover y/o agregar elementos de un array.
// Recibe tres parámetros:
// inicio: El índice del primer elemento (de donde comenzará el cambio).
// cant: (opcional) Un entero que indica la cantidad de elementos a eliminar, si
// se omite o si es mayor que (array.length - inicio), se eliminarán todos los
// elementos desde el inicio.
// Items: (opcional) indica los elementos que se agregaran en el array, desde
// inicio. Si se omite splice, solo elimina.

let numeros = [3, 4, 5, 6, 7];
numeros.splice(0, 0, 2);
// console.log(numeros); // [2,3,4,5,6,7]
numeros.splice(1, 2);
// console.log(numeros); // [2,5,6,7]


//.sort()================"clasificar"====================
// Este método nos sirve para ordenar los elementos de un array.
// Recibe una callback como parámetro (opcional) que especifica el modo de
// ordenamiento, si es omitida, el array es ordenado con el valor de string
// (Unicode), convierte a string a cada elemento.
// La función recibe dos parámetros, que son los elementos a comparar, el
// primero vs. el segundo elemento.

let marcas = ['samsung', 'xiaomi', 'apple'];
marcas.sort();
// console.log(marcas);
// [‘apple’, ‘samsung’ , ‘xiaomi’]
let marcas2 = ['samsung', 'Xiaomi', 'appl', '3M'];
marcas2.sort();
// console.log(marcas);
// [‘3M’, ‘Xiaomi’, ‘apple’, ‘samsung’]
function compare(a,b){
     return a-b;
    }
    numeros.sort(compare);
//     console.log(numeros);
    // [4, 7, 8, 9, 10, 52]

//.flat()================"aplana"====================   
// Este método nos sirve para desenvolver subarrays dentro arrays, no modifica
// el array original.
// Recibe como parámetro (opcional) un nivel de profundidad que especifica
// cuánto debe aplanarse el array anidado. Si es omitido, por defecto toma 1
// como valor.
let numeros = [1, 2, 3, [4] , [[5, 6]]];
let flatten = numeros.flat();
// console.log(flatten);
// [1, 2, 3, 4, [[5, 6]]
let flatten2 = numeros.flat(2);
// console.log(numeros2);
// [1, 2, 3, 4, 5, 6]

//.includes()================"incluye"====================   
// Este método nos sirve para determinar si un array incluye un elemento,
// devuelve true en caso de coincidencia y false caso contrario.
// Parámetros que recibe:
// • Requerido, elemento que se desea buscar.
// • Opcional, posición en que comenzará la búsqueda. Si se omite el valor
// predeterminado, es 0
let numeros = [3, 4, 5, 6, 7];
let res1 = numeros.includes(4);
// console.log(res1); // true
let res2 = numeros.includes(4, 2);
// console.log(res2); // false

//.find()================"encontrar"==================== 
// Este método devuelve el valor del primer elemento de un array que cumple
// con una función especificada (callback).
// Recibe un callback que se ejecuta sobre cada índice del array hasta que
// encuentre uno que devuelve un valor verdadero, y toma tres parámetros:
// • Elemento: Se utiliza un alias para representar el valor del elemento actual
// que está procesando el array.
// • Index: opcional, posición del elemento actual que se está procesando en el
// array.
// • Array: que está siendo recorrido.

let criptos = [
     {nombre: 'Bitcoin', simbolo: 'BTC'},
     {nombre: 'Ethereum', simbolo: 'ETH'},
     {nombre: 'Cardano', simbolo: 'ADA'}
    ];
    function esBitcoin(criptos) {
     return criptos.nombre === 'Bitcoin';
    }
//   console.log(criptos.find(esBitcoin));
     // {nombre: 'Bitcoin', simbolo: 'BTC'}

    let res = criptos.find(e => e.nombre === 'Bitcoin');

















