

let a = [12,5,6,42,2];
console.log(a)
let somma = 0;
for (i = 0; i < a.length; i++ ){
    somma += a[i];
}
console.log(somma)


let num = [1,2,3,4,5,6,7,8,9,10];
console.log(num)
let numeri = num.filter(n => n %2 === 0).map(n => n * 2);
console.log(numeri)

const persone = [
    {nome: "maria", eta: 12},
    {nome: "franesca", eta: 29},
    {nome: "luca", eta: 19} 
]
persone.sort((a, b) => a.eta - b.eta);
let maggiorenni = persone.filter( persone => persone.eta >= 18).map(persone => persone.nome)
console.log(persone)
console.log(maggiorenni)
