console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
// console.log(
//   `Destinos possíveis: \n${salvador}, ${saoPaulo}, \n${rioDeJaneiro}`
// );

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
console.log(`Destinos possíveis: ${listaDeDestinos}`);
console.log(listaDeDestinos);

listaDeDestinos.push(`Belo Horizonte`);
console.log(listaDeDestinos);

listaDeDestinos.splice(listaDeDestinos.indexOf(`São Paulo`), 1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);
