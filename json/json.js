// los podemos utilizar en arrays y objetos. JSON es un string

let datosEnJSON = '[{"nombre":"Argentina","capital":"Buenos Aires","region":"Américas"}]'
let datosConvertidos = JSON.parse(datosEnJSON);

console.log(datosConvertidos)

let datosEnObjeto = {
    nombre:"Juana",
    apellido:"DeArco",
    pais: "Francia"
}

let objetoConvertido = JSON.stringify(datosEnObjeto)
console.log(objetoConvertido)