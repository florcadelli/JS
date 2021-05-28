// bloque de codigo reutilizable, funcionalidad que no altera a otros bloques.
// atomizar el codigo en pequeños archivos

// MODULOS NATIVOS www.nodejs.org/api

// MODULOS CREADOS POR OTROS, QUE PODEMOS INSTALAR


// crear archivo de entrada a la aplicacion, en el proyecto de NODE. app.js
// desde ahi requerir el modulo, sea nativo o instalado
// al requerir se guarda un objeto literal en esa variable, llena de propiedades y metrodos

const fs = require ('fs'); //nativo
const moment = require ('moment');//instalado
// console.log(fs);
console.log(moment().format('DD MMMM YYYY'));

let datos = fs.readFileSync(__dirname + "/pruebaLectura.txt", 'utf-8')
console.log(datos);

// MODULOS CREADOS POR NOSOTROS
// crear una carpeta con el nombre del modulo y dentro de el un index.js
// al final del archivo usar module.exports=nombreDelObjeto a exportar
// requerirlo en el archivo que deseamos utilizarlo, pasandole la ruta donde encontrarlo. 
// si el archivo interno se llama index, no es necesario aclarar el nombre del archivo,si le pusimos otro nombre hay que aclararlo