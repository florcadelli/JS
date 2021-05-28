// OPERADOR DE PROPAGACION


// en ARRAYS
let frutasUno=["banana","manzana","pera"];
let frutasDos=["anana","uva","naranja"];

// de esta forma incluye dos arrays dentro del array
// let todasLasFrutas=[frutasUno,frutasDos]
let todasLasFrutas=[...frutasUno,...frutasDos]
console.log(todasLasFrutas)

// en OBJETOS
let cursada= {
    curso:"full stack",
    turno: "tarde",
    sede: "bergrano"
}
// de esta forma incluye un objeto dentro del objeto
// let estudianteUno ={
//     nombre:"javier",
//     edad:27,
//     cursada
// }
let estudianteUno ={
    nombre:"javier",
    edad:27,
    ...cursada
}
let estudianteDos = {
    nombre:"roberto",
    edad:35,
    ...cursada
}
console.log(estudianteUno);
console.log(estudianteDos);

// en FUNCIONES
   //esto permite untilizar la funcion con distinta cantidad de parametros
   //lo devuelve en un formato de array con el que podemos trabajar

function peliculasVistas(...nombresDePeliculas){
    for(let i=0; i<nombresDePeliculas.length;i++){
        console.log("la persona ya vio " + nombresDePeliculas[i])
    }
}

peliculasVistas("bambi","todo sobre mi madre", "mi pobre angelito")
peliculasVistas("coco", "froozen")

let notas = [9.3, 8.5, 3.2, 7, 10];
Math.min(...notas); // Devuelve 3.2

// PARAMETRO REST se escribe de la misma manera que el operador spread … .
// La diferencia es que se utiliza durante la definición de la función, y no durante su ejecución.
// El parámetro rest generará un array con todos los argumentos adicionales que se le pasen a la función.

function miFuncion(param1, param2, ...otros) {
    return otros;
   }
   miFuncion('a', 'b', 'c', 'd', 'e');
   // retornará ['c', 'd', 'e']

