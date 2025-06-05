let a: number = 10;
let b: number = 5;

//Aritimetivos
//normal dos outros

//identidade estrita
console.log('identico', a === b);
console.log ("nao identico", a !== b)

//logicos
let x: boolean = true;
let y: boolean = false;

console.log("AND", x&& y);
console.log("NOT", !x);
console.log("OR", x || y);

//operador condicional(terminario)
let idade: number = 17;
let acesso = idade >= 18 ? 'Pode beijar na boca' : 'Nao pode'; // condicao ? valor se true : valor se false