// Crear una función que reciba un array compuesto por números, y retorne un nuevo
// array con todos los valores divididos por la suma de todos los del array —usar map()
// y reduce()—.
let numeros = [1,2,3,4,5,6,7,8,9]

// let todosSumados = numeros.reduce(function(acumulador,numero){
//     return acumulador + numero;
// })
 function num(numeros){
    let todosSumados = numeros.reduce(function(acumulador,numero){
        return acumulador + numero;
    })
    let division = numeros.map(function(n){
        return n / todosSumados;
    })  
    return division;
}
// console.log(num(numeros))


// Crear una función que reciba un array de palabras y un número, y que retorne un array
// con solo las palabras que tengan más que esa cantidad de letras —revisá cómo
// funciona el método filter()—.

let palabras = ['hola', 'pirulo', 'estas', 'del','tomate'];
let numero = 4;

function contandoLetras(palabras,numero){
    let masDeNumero = palabras.filter(function(palabra){
        return palabra.length > numero
    })
    return masDeNumero;
}
// console.log(contandoLetras(palabras,numero))

// ) Crear un array de objetos literales, cada objeto va a ser de alumnos, y va a tener dos
// atributos: nombre y nota. Crear dos funciones que ordenen el array: una va a ordenar
// a los alumnos alfabéticamente y la otra lo hará por nota de mayor a menor

let alumnos = [
    {
        nombre:"flor",
        nota:55
    },
    {
        nombre:"seba",
        nota:90
    },
    {
        nombre:"more",
        nota:50
    },
    {
        nombre:"mia",
        nota:63
    }
];

function ordenarPorAlumnos(alumnos){
    let nombresAlumnos = [];
    let alumnosOrdenados= [];
    // funcion que cree un nuevo array solo de notas.
    for(let i=0; i<alumnos.length;i++){
        nombresAlumnos.push(alumnos[i].nombre)
    } 
     
    nombresAlumnos.sort(); 

    for(let i=0; i<nombresAlumnos.length;i++){
        for(let j=0; j<alumnos.length;j++){
            if(nombresAlumnos[i] == alumnos[j].nombre){
                alumnosOrdenados.push( alumnos[j])
            }
        }
    }
    return alumnosOrdenados
}
// console.log(ordenarPorAlumnos(alumnos))


function ordenarPorNotas(alumnos){
    let alumnosOrdenados= [];

    let notasAlumnos = alumnos.map(function(alumno){    
        return alumno.nota
    })
    function compare(a,b){
            return  b -a ;
           }
    notasAlumnos.sort(compare);
    
    for(let i=0; i<notasAlumnos.length;i++){
        for(let j=0; j<alumnos.length;j++){
            if(notasAlumnos[i] == alumnos[j].nota){
                alumnosOrdenados.push( alumnos[j])
            }
        }
    }
    return alumnosOrdenados
}
console.log(ordenarPorNotas(alumnos))



