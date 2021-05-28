// CLOSURES, ayudan a que la memoria de nuestro programa sea mucho mas liviana

// / funciones que viven dentro de otras funciones, procedimientos dentro de otros procedimientos
// se busca optimizar el rendimiento de los script
// sera utilizado solo cuando su funcion contenedora sea ejecutada, despues dejara de existir
// de esta forma libera memoria de ejecucion para dejarla disponible a otras funciones
// SCOPE LOCAL

// function padre(){
//     function hija(){
//         // codigo a ejecutar
//     }
//     return hija();
// }

// la funcion hija debe ser ejecutada dentro de la funcion padre
// puede tomar cualquier parametro que reciba la funcion padre, sin necesidad de volver a pasarselos a la funcion hija

 function saludar(persona){
     let mensaje="Bienvenidx";

    function nombre(){
            return mensaje + " " + persona;
        }
        return nombre(); 
    }

    console.log(saludar("flor"))