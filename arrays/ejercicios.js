let films = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
// console.log(films[1])
let mayuscula = [];

for(var i=0; i< films.length; i++){
    mayuscula.push( films[i].toUpperCase())
}

// console.log( mayuscula)

let cartoons = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

cartoons.pop();

for(var i=0; i< cartoons.length; i++){
    films.push(cartoons[i])
}
// console.log(films)

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9];
let resultado=[];
// for que recorre asia
// if que pregunta si son iguales a euro en esa posicion
// devuelve un nuevo array "igual"/ "distinto"

for(var i=0; i< asiaScores.length; i++){
     if(asiaScores[i]==euroScores[i]){
         resultado.push("igual")
     }else{
        resultado.push("distinto")
     }
}

console.log(resultado)
