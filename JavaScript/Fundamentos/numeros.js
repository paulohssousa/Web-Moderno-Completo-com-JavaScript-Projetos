const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

// método .toFixed fixa quantas casas decimais serão mostradas (no caso 2)
console.log(media.toFixed(2));

// retorna uma string que representa um objeto 
// (a entrada 2 faz com que seja mostrado a representação em números binários)
console.log(media.toString(2))
console.log(typeof(media));