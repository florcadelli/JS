

function Auto(marca, modelo, precio, km, color, cuotas, anio, patente, estado) {
    this.marca = marca, 
    this.modelo = modelo, 
    this.precio = precio, 
    this.km = km, 
    this.color = color, 
    this.cuotas = cuotas, 
    this.anio = anio, 
    this.patente = patente, 
    this.estado = estado
}

let autos = [
    auto1 = new Auto("Ford", "Fiesta",150000, 200, "Azul" ,12 , 2019,"APL123", "En venta"),
    auto2 = new Auto("Toyota", "Corolla",100000, 180, "Blanco" ,14 , 2017,"JJK116", "En venta"),
    auto3 = new Auto("Cotröen", "Aircroos",200000, 2500, "Gris" ,12 , 2018,"AAA123", "vendido"),
    auto4 = new Auto("Toyota", "Corolla",180000, 0, "Negro" ,14 , 2019,"JAF345", "vendido")
]
// console.log (autos[0].patente);

module.exports=autos
