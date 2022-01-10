console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
listaDeDestinos.push(`Belo Horizonte`);

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

const idadeComprador = 15;
const estaAcompanhado = true;

let temPassagemComprada = false;

if (idadeComprador >= 18 || estaAcompanhado) {
  console.log(`Boa viagem!`);
  listaDeDestinos.splice(listaDeDestinos.indexOf(`São Paulo`), 1);
  temPassagemComprada = true;
} else {
  console.log(`Comprador é menor de idade e não pode comprar!`);
}

console.log(`Embarque: \n\n`);
if ((idadeComprador >= 18 || estaAcompanhado) && temPassagemComprada) {
  console.log("Boa viagem!");
} else {
  console.log("Você não pode embarcar!");
}
