//Es necesario que sean asignadas como valor de una variable pafra poder nombrarlas, sino son anonimas

let suma= (num1,num2)=>{return num1 + num2}
// optimizacion si tiene solo una sentecia de codigo a ejecutar y solo un resultado posible
let suma= (num1,num2)=>num1 + num2
// si recibe un solo parametro no son necesarios los parentesis
let elDoble = num => num*2

// cambiando la sintaxis
function dameCinco() {
    return [1,2,3,4,5];
}

let dameCinco =()=>  [1,2,3,4,5];


function multiplicarPorDos() {
  return 123 * 2 ;
}
let multiplicarPorDos =() => 123 * 2

function mostrarNombre() {
  return "Mi nombre es Hernán";
}
let mostrarNombre =() => "Mi nombre es Hernán"