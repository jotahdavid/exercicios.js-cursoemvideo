/* não colocando como parâmetro, ele usa a variável fora do escopo */
// function somar(){
//     console.log(x,y);
//     return x + y
// }

// let x = 2, y = 3;
// console.log(somar(x,y));

/* caso não passe os dois parâmetros na chamada, serão definidas os valores atribuídos */
function somar(x = 0, y = 0){
    return x + y
}

console.log(somar(9))