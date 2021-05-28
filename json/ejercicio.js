let fs = require ('fs')

let clasesJSON = fs.readFileSync('clases.json','utf-8')
// console.log(clasesJSON)

let clasesJS = JSON.parse(clasesJSON);
console.log(clasesJS)

let clasesTerminadasJS = clasesJS.filter(function(clase){
    return clase.estado == "Terminada"
})

let clasesTerminadasJSON = JSON.stringify(clasesTerminadasJS)

 fs.writeFileSync('clasesTerminadas.json', clasesTerminadasJSON)