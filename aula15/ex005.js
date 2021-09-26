// let num = [2, 15, 8, 1, 4];

// /* adiciona novos valores na última posição do array */
// num.push(2);

// /* organiza valores dos vetores em ordem */
// num.sort(function(a,b) {return a-b})

// /* diz a quantidade de valores que um array tem */
// num.length

// console.log(`Array: ${num}, com ${num.length} valores`);
// // console.log(num[1]);

// let num = [5, 9];
// num[4] = 10

// for(let i=1; i<=5; i++){
//     // num.push(Math.floor(Math.random()*100, 2));
//     if(num[i] == undefined){
//         num[i] = "vazio";
//     }
//     if(num[i] == "vazio"){
//         console.log(`Há vaga na posição ${i}`)
//     }
// }

// // num.sort((a,b) => {return (a-b)});
// console.log(num);

// /* organizando letras alfabeticamente */
// let words = ["ba", "c", "ab", "d", "bb", "dc", "da"];

// words.sort()
// console.log(words);

// let num = [];

// for(let i = 0; i < 12; i++){
//     if((Math.floor(Math.random()*10, 2) % 2 == 0)){
//         num[i] = 'X';
//         console.log(`A posição ${i} está ocupada`);
//     } else {
//         num[i] = '';
//         console.log(`Há vaga na posição ${i}`);
//     }
// }

// for(let i = 0; i < num.length; i++){
//     if(num[i] == ""){
//         console.log(`Há vaga na posição ${i}`);
//     } else {
//         console.log(`A posição ${i} está ocupada por: ${num[i]}`);
//     }
// }

let num = [];

for(let i = 0; i < 10; i++){
    num.push(Math.floor(Math.random()*100));
}

let x = 0;
for(let i = 0; i<num.length; i++, x++){
    for(let j = x; j<num.length; j++){
        if(num[i] > num[j]){
            let reserva = num[i];
            num[i] = num[j];
            num[j] = reserva;
        }
    }
}
console.log(num);