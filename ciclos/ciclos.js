

function loro(frase){
 for(let i=0; i<5; i++){
    //  console.log(frase)
 }
}

loro("repito sin parar")

// En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .
function noParesDeContarImparesHasta(numero){
    cantidad = 0;
    for(let i=0; i<numero; i++){
        if(i%2!==0){
         cantidad = cantidad + 1;   
        }
    }
    // console.log(cantidad)
}

noParesDeContarImparesHasta(4)

// WHILE

let clase =3; //inicializacion

while(clase<=4){ //condicion
    // console.log('Bienvenidos a las clase '+clase);
    clase++; // incremento
}
// DO WHILE-ejecuta el codigo al menos una vez antes de pregunatr si la condicion es verdadera

do{ 
    // console.log('Bienvenidos a las clase while'+clase);
    clase++; // incremento
}while(clase<=10) //condicion

// Queremos construir una función llamada encontreUn5 que reciba un array como parámetro llamado numeros. La función deberá recorrer este array e imprimir por consola cada uno de los números. En caso de encontrar un 5, deberá cortar la ejecución e imprimir por consola el texto "Se encontró un 5!".
// Para resolver este ejercicios DEBES utilizar el do-while.

function encontreUn5(numeros){
    
let i =0; //inicializacion

do{ //condicion
     console.log(numeros[i]);
     i++; // incremento
} while(numeros[i]!=5)
if(numeros[i]==5){
    // console.log("Se encontró un 5!");   
}

}
encontreUn5([6,7,8,5,8])

// TABLA DE MULTIPLICAR usar while

function tabla(numero){
    let i=1;
    while(i<= 10){
        console.log(numero + " * " + i + " = " + (numero*i));
        i++;
    }  
}

tabla(4);