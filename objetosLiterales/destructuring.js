// permite la estraccion de datos de arrays u obejetos literales
// DESTRUCTURACION DE ARRAYS

let colores=["rojo", "amarillo","verde","violeta"];

// let primerColor = colores[0];
// let segundoColor = colores[1];
// let tercerColor = colores[2];

 let[pirulo,segundoColor, ,cuartoColor]= colores;
 console.log(pirulo);
// dejamos un espacio vacio para saltearnos un lugar
// crea automaticamente las variables, dependiendo del orden en el array
// la asignacion no modificara el array de origen

// DESTRUCTURACION DE OBJETOS

let persona={
    nombre:"Flor",
    edad:40,
    estadoCivil: "concubina",
    hijos:true
}

// aca no es necesario dejar los espacios vacios porque llamamos a las propiedades por su nombre y no por su lugar

let{ nombre,edad} =persona;
console.log(nombre)