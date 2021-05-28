
const fs = require ('fs');
let autos= JSON.parse(fs.readFileSync(__dirname + '/data/AUTOS.json' ,{encoding: "utf-8"}));
// console.log(autos)

 let carrera = {
     autos:autos,
     autosPorTanda:4,
     autosHabilitados:function(){
        //  console.log(autos)
        let autos=this.autos;

        let autosHabilitados = autos.filter(function(auto){
            return auto.sancionado != true
        })
        return  autosHabilitados
        //  var autosHabilitadosOK =[];
        //    for(var i=0; i< autos.length; i++){
        //        if(autos[i].sancionado != true){
        //         autosHabilitadosOK.push(autos[i]);
        //         console.log(autosHabilitadosOK );
        //        }           
        //    }
     },
    listarAutos: function(autos){
        autos.forEach(function(autos){
            if(autos.sancionado != true){
                console.log("Patente: " + autos.patente +" Piloto: "+ autos.piloto +", Peso en Kg: "+ autos.peso + " Estado: puede correr. ")
            }
            else{
                console.log("Patente: " + autos.patente +" Piloto: "+ autos.piloto +", Peso en Kg: "+ autos.peso + " Estado: sancionado.")
            }
          })
          
        // for(var i=0; i< autos.length; i++){
        //     if(autos[i].sancionado != true){
        //         console.log("Patente: " + autos[i].patente +" Piloto: "+ autos[i].piloto +", Peso en Kg: "+ autos[i].peso + " Estado: puede correr. ")
        //     }
        //     else{
        //         console.log("Patente: " + autos[i].patente +" Piloto: "+ autos[i].piloto +", Peso en Kg: "+ autos[i].peso + " Estado: sancionado.")
        //     }
           
        // }
    },
    buscarPorPatente: function(patenteBuscada){
        let autos= this.autos;
        function buscandoAutos(autos) {
            return autos.patente == patenteBuscada;
           }
    
        let autoEncontrado=autos.find(buscandoAutos)
        return autoEncontrado

        // for(var i=0; i< autos.length; i++){
        //     if(autos[i].patente == patente){
        //         console.log(autos[i])
        //     }
        //  }
     },
     buscarPorAnguloDeGiro: function(angulo){  
        let autosHabilitados = this.autosHabilitados();
        let autosPorAngulo = autosHabilitados.filter(function(auto){
            return auto.anguloDeGiro<= angulo;
        })
  
        return autosPorAngulo;
        // var autosHabilitadosYAnguloDeGiro =[];
        // for(var i=0; i< autos.length; i++){
        //     if((autos[i].sancionado != true) && (autos[i].anguloDeGiro <= angulo)){
        //     autosHabilitadosYAnguloDeGiro.push(autos[i]);
        //      console.log(autosHabilitadosYAnguloDeGiro);
        //     }
            
        // }
     },
     ordenarPorVelocidad: function(){
        autos = this.autos
        // ordenar por tiempo de espera
        let arrayDeVelocidad = autos.map(function(auto){
            return auto.velocidad
        })
        function compare(a,b){
            return b -a ;
           }
        arrayDeVelocidad.sort(compare);
       
        let autosOrdenados= arrayDeVelocidad.map(function(velocidad){

            function buscandoPorVelocidad(autos) {
            return autos.velocidad == velocidad;
            }

            let autoEncontrado =  autos.find( buscandoPorVelocidad); 
            return  autoEncontrado;
        })
        return autosOrdenados
     },
     generarTanda:function(angulo,peso){
         let autos = this.autos

         let autosHabilitadosYConAngulo= this.buscarPorAnguloDeGiro(angulo);
        let autosPorPeso= autosHabilitadosYConAngulo.filter(function(auto){
            return auto.peso <= peso;
        })
        // console.log(autosPorPeso)
        
        let tanda = []
        for(let i=0; i<autosPorPeso.length;i++){
            if(i<this.autosPorTanda){
                tanda.push(autosPorPeso[i])
            }
         }  
         return tanda; 
       
        // return autosPorPeso;
        //  console.log(autos)
        //  var autosHabilitados_AnguloDeGiro_Peso =[];
        //  for(var i=0; i< autos.length; i++){
        //      if((autos[i].sancionado != true) && (autos[i].anguloDeGiro <= angulo)&& (autos[i].peso <= peso)){
        //         autosHabilitados_AnguloDeGiro_Peso.push(autos[i]);
        //       console.log(autosHabilitados_AnguloDeGiro_Peso);
        //      }
             
        //  }
     
    //  calcularPodio:function(autos, angulo,peso){
    //     console.log(autos)
    //  }
  },
  calcularPodio: function(angulo,peso){
      let tandaGenerada = this.generarTanda(angulo,peso)
    //   return tandaGenerada
    //   odenar por puntage
    // recorrer el array 
    // console.log(el piloto y el puntaje del podio diferenciando primer, segundo y tercer puesto.)
    let arrayDePuntos = tandaGenerada.map(function(auto){
        return auto.puntaje
        })
    function compare(a,b){
        return b -a ;
       }
       arrayDePuntos.sort(compare);
    //  console.log(arrayDePuntos)
     let autosOrdenados= arrayDePuntos.map(function(puntos){
        function buscandoPorPuntos( tandaGenerada) {
        return  tandaGenerada.puntaje == puntos;
        }
        let autoEncontrado =  tandaGenerada.find(buscandoPorPuntos); 
        return  autoEncontrado ;
    })
    console.log("1.Primer puesto es para: " + autosOrdenados[0].piloto + " con un puntaje de " + autosOrdenados[0].puntaje +
    " 2.Segundo puesto es para: " + autosOrdenados[1].piloto +" con un puntaje de " + autosOrdenados[1].puntaje +
    " 3.Tercer puesto es para: " + autosOrdenados[2].piloto+ " con un puntaje de " + autosOrdenados[2].puntaje  ) 

  }
    
 };
//  console.log(carrera.autosPorTanda)
//  console.log(carrera.autosHabilitados());
// console.log(carrera.listarAutos(autos));
// console.log(carrera.buscarPorPatente("ABC123"));
// console.log(carrera.buscarPorAnguloDeGiro(200))
// console.log(carrera.ordenarPorVelocidad())
// console.log(carrera.generarTanda(500,800));
carrera.calcularPodio(800,500)