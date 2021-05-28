// METODOS: funciones que se asignan como valor a una clave
// para acceder al metodo llamar al ===== objeto.metodo()=============
// THIS  ==== cuando estas dentro de un metodo y queres llamar a una propiedad interna de ese objeto. HACE REFERENCIA AL OBJETO.

let miPais ={
    nombre: "Argentina",
    poblacion: 40006000,
    capital:"Buenos Aires",
    decirNacionalidad: function(){
        return ("Yo nací en "+ this.nombre)
    }
}
console.log(miPais.decirNacionalidad())

// CONSTRUCTOR DE OBJETOS
// Funciones constructoras, inician con mayuscula

function Auto(laMarca,elModelo){
    this.marca= laMarca,
    this.modelo= elModelo
}

// INSTANCIAR-crear un objeto particular a partir de su funcion molde

let miAuto= new Auto("Peugeot", 2019);
let otroAuto= new Auto("Citröen", 2020);

console.log(miAuto.marca)
console.log(otroAuto.marca)