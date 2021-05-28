const autos = require('./autos.js')
// console.log(autos)

var persona = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }

var concesionaria = {
    autos: autos,
    buscarPorPatente:function(patenteBuscada){
        let posicionAutoEncontrado;
        for(let i=0; i<this.autos.length; i++){
           if(this.autos[i].patente == patenteBuscada){
            posicionAutoEncontrado = i;
            return posicionAutoEncontrado;
           }  
        }
        if(posicionAutoEncontrado == undefined){
            return null;
        }
    },
    marcarVendido:function(patenteBuscada){
        let posicionAuto = this.buscarPorPatente(patenteBuscada)
        console.log(posicionAuto)
        if(posicionAuto != null){
            this.autos[posicionAuto].vendido = "Vendido" 
        }else{
            console.log("El auto no fue encontrado")
        }
     },
     autosParaLaVenta:function(){
        //  recorrelo los autos
        let autosEnVenta =[];
        for(let i =0; i<this.autos.length; i++){
            if(this.autos[i].estado == "En venta"){
               autosEnVenta.push(this.autos[i])
            }
        }
        if( autosEnVenta.length> 0 ){
            return autosEnVenta;
        }else{
            return "No hay autos para la venta"
        }
     },
     autosNuevos: function(){
        let autosEnVentaNuevos =[];
        for(let i =0; i<this.autos.length; i++){
            if(this.autos[i].estado == "En venta" && this.autos[i].km < 100 ){
               autosEnVentaNuevos.push(this.autos[i])
            }
        }
        if( autosEnVentaNuevos.length> 0 ){
            return autosEnVentaNuevos;
        }else{
            return "No hay autos para la venta nuevos"
        }
     }, 
     listaDeVentas: function(){
        let autosVendidos =[];
        for(let i =0; i<this.autos.length; i++){
            if(this.autos[i].estado == "vendido"){
                autosVendidos.push(this.autos[i].precio)
            }
        }
        if( autosVendidos.length> 0 ){
            return autosVendidos;
        }else{
            return "No se han realizado ventas de autos"
        }
     },
     totalDeVentas:function(){
         let preciosAutosVendidos = this.listaDeVentas()
         let totalVentas = 0;
         for(let i =0; i<preciosAutosVendidos.length; i++){
            totalVentas =  totalVentas + preciosAutosVendidos[i];
         }
         return totalVentas;
     },
     puedeComprar:function(patente,persona){
        let posicionAuto = this.buscarPorPatente(patente);
        if(this.autos[posicionAuto].estado == 'En venta'){
            let precioTotalAuto = this.autos[posicionAuto].precio
            console.log('el valor total del auto es: '+ precioTotalAuto)
            let valorCuotasAuto = this.autos[posicionAuto].precio / this.autos[posicionAuto].cuotas
            console.log('el valor de cada cuota es: '+ valorCuotasAuto)
            if(persona.capacidadDePagoTotal>=precioTotalAuto && persona.capacidadDePagoEnCuotas >= valorCuotasAuto ){
                return true
            }else{
                return false
            } 
        }else{
            return 'No esta en venta'
        }   
     },
     autosQuePuedeComprar:function(persona){
         let autosQueLeAlcanzan=[];
         for(let i=0; i<this.autos.length; i++){
            let autoQuePuedeComprar = this.puedeComprar(this.autos[i].patente,persona);
            if( autoQuePuedeComprar == true){
                autosQueLeAlcanzan.push(this.autos[i])
            }
         }
    
        if (autosQueLeAlcanzan.length > 0){
            return autosQueLeAlcanzan;
        }else{
            return "No le alcanza para ninguno"
        }
     }
}
// console.log(concesionaria.autos)
// console.log(concesionaria.buscarPorPatente('JJK'))
// concesionaria.marcarVendido(1)
// concesionaria.marcarVendido('JJK116')
// console.log(autos)
// console.log(concesionaria.autosParaLaVenta())
// console.log(concesionaria.autosNuevos())
// console.log(concesionaria.listaDeVentas())
// console.log(concesionaria.totalDeVentas())
// console.log(concesionaria.puedeComprar('APL123',{
//     nombre: 'Juan',
//     capacidadDePagoEnCuotas: 20000,
//     capacidadDePagoTotal: 100000
//     }))
console.log(concesionaria.autosQuePuedeComprar({
        nombre: 'Juan',
        capacidadDePagoEnCuotas: 20000,
        capacidadDePagoTotal: 100000
        }))

