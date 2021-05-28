// CADELLI FLORENCIA
// console.log('hola mundo!')
// const a = [23, 45, 32];//puntos totales
// const b = [12, 67, 7]; //puntos totales

// aPuntos=[];
// bPuntos=[];

// function encontrarGanador(a, b) {
//  for(let i=0; i<a.length;i++){
//      if(a[i]>b[i]){
//         aPuntos.push(1);
//         bPuntos.push(0);
//      }else if(a[i]<b[i]){
//         aPuntos.push(0);
//          bPuntos.push(1)
//      }else{
//         aPuntos.push(0);
//         bPuntos.push(0)
//      }
//  }
//  console.log(aPuntos);
//  console.log(bPuntos);
// }
// encontrarGanador(a,b)
const a = [23, 45, 32];
const b = [12, 67, 7];
function encontrarGanador(a, b) {

    let puntosPrimerParticipante = 0;
    let puntosSegundoParticipante = 0;

    for(let i=0; i<a.length;i++){

       if (a[i] > b[i]) {
       puntosPrimerParticipante = puntosPrimerParticipante + 1;
       } else if (a[i] < b[i]) {
       puntosSegundoParticipante = puntosSegundoParticipante + 1;
     }
    }
// comparación final
if (puntosPrimerParticipante > puntosSegundoParticipante) {
return "primer";
} else {
return "segundo";
}

}
console.log("El ganador es: El " + encontrarGanador(a, b) + " participante");