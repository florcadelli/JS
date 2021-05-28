let fs = require('fs')

let persona = {
    nombre:'Roberto',
    email: 'roberto@gmail.com',
    contraseña:'minjuegos'
}

let personaJSON = JSON.stringify(persona);
fs.writeFileSync('persona.json', personaJSON)
// esta funcion siempre pisa lo que ya estaba escrito en persona.js

fs.appendFileSync('persona.json', personaJSON)
// esta funcion agrega al final

// si corremos este archivo se crea automaticamente el archivo persona.json

let texto = fs.readFileSync('persona.json',{encoding:'utf-8'})
console.log(texto)