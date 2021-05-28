// let cuenta = {
//     numeroDeCuenta: 35 ,
//     saldo: 100,
//     titular: 'flor' ,
//     deposito:function(cantidadDeDineroEntrante){
//         let suma = cantidadDeDineroEntrante + this.saldo;
//         console.log( "Deposito realizado de "+ cantidadDeDineroEntrante + ". Saldo total " + suma)
//     },
//     extraccion: function(cantidadDeDineroSaliente){
//         if(this.saldo > cantidadDeDineroSaliente){
//             let resta = this.saldo- cantidadDeDineroSaliente 
//             console.log( "Extraccion realizada de "+ cantidadDeDineroSaliente + ". Saldo total " + resta) 
//         }else{
//             console.log('Fondos Insuficientes');
//         }
//     }
// }
// cuenta.deposito(20);
// cuenta.extraccion(50);
// cuenta.extraccion(150);

// funcion constructora
function Cuenta (numeroDeCuenta,saldo,titular) {
    this.numeroDeCuenta=numeroDeCuenta ,
    this.saldo=saldo,
    this.titular=titular,
    this.deposito= function(cantidadDeDineroEntrante){
        let suma = cantidadDeDineroEntrante + this.saldo;
        console.log( "Deposito realizado de "+ cantidadDeDineroEntrante + ". Saldo total " + suma)
    },
    this.extraccion = function(cantidadDeDineroSaliente){
        if(this.saldo > cantidadDeDineroSaliente){
            let resta = this.saldo- cantidadDeDineroSaliente 
            console.log( "Extraccion realizada de "+ cantidadDeDineroSaliente + ". Saldo total " + resta) 
        }else{
            console.log('Fondos Insuficientes');
        }
    }
}
// instanciar

let cuentaFlor = new Cuenta(33,20,"flor")
console.log(cuentaFlor);
cuentaFlor.deposito(50);
cuentaFlor.extraccion(10)

let cuentaSeba = new Cuenta(20,50,"seba")
console.log(cuentaSeba);
cuentaSeba.deposito(150);
cuentaSeba.extraccion(150);

// ============ejercico 2======================

// let alumno = {
//     nombre:"flor" ,
//     numeroDeLegajo: 3333,
//     listaDeNotas:[3,8,9,10],
//     promedio: function(){
       
//         let totalNotas= 0;
//         let cantidadNotas =0;
//         for(let i=0; i< this.listaDeNotas.length; i++){
//             totalNotas=this.listaDeNotas[i]+totalNotas
//             cantidadNotas = cantidadNotas + 1;
//         }
//         return(totalNotas/cantidadNotas);
//         // console.log( "es promedio es " + (totalNotas/cantidadNotas) ) 
//     },
//     aprobado: function(){
//         if(this.promedio()>=7){
//             console.log("El alumno "+ this.nombre + " SI aprobo la materia. Su nota es " + this.promedio())
//         }else{
//             console.log("El alumno "+ this.nombre + " NO aprobo la materia. Su nota es " + this.promedio())
//         }
//     }
// }
// alumno.aprobado();

// funcion constructora
function Alumno (nombre, numeroDeLegajo, listaDeNotas) {
    this.nombre=nombre,
    this.numeroDeLegajo=numeroDeLegajo,
    this.listaDeNotas=listaDeNotas,
    this.promedio= function(){
        let totalNotas= 0;
        let cantidadNotas =0;
        for(let i=0; i< this.listaDeNotas.length; i++){
            totalNotas=this.listaDeNotas[i]+totalNotas
            cantidadNotas = cantidadNotas + 1;
        }
        return(totalNotas/cantidadNotas);
        // console.log( "es promedio es " + (totalNotas/cantidadNotas) ) 
    },
   this.aprobado= function(){
        if(this.promedio()>=7){
            console.log("El alumno "+ this.nombre + " SI aprobo la materia. Su nota es " + this.promedio())
        }else{
            console.log("El alumno "+ this.nombre + " NO aprobo la materia. Su nota es " + this.promedio())
        }
    }
}
// instancias de alumnos
let alumnaFlor = new Alumno("flor", 70, [9,9,10])
console.log(alumnaFlor);
alumnaFlor.aprobado();

let alumnoSeba = new Alumno("Seba", 70, [9,9,1])
console.log(alumnoSeba);
alumnoSeba.aprobado();