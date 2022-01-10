console.log(`\nTrabalhando com loops`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
listaDeDestinos.push(`Belo Horizonte`);

console.log(`\nDestinos possíveis:`);
console.log(listaDeDestinos);

const idadeComprador = 15;
const estaAcompanhado = true;
let temPassagemComprada = false;
const podeComprar = idadeComprador >= 18 || estaAcompanhado;

const destino = "Belo Oriente";
let destinoExiste = false;

let contador = 0;
while (contador < 4) {
  if (destino === listaDeDestinos[contador]) {
    destinoExiste = true;
  }
  contador++;
}

if (podeComprar && destinoExiste) {
  listaDeDestinos.splice(listaDeDestinos.indexOf(`São Paulo`), 1);
  temPassagemComprada = true;
} else {
  console.log(`\nNão é possível comprar essa passagem!`);
}

console.log(`\n\nEmbarque: `);
if (podeComprar && temPassagemComprada) {
  console.log("Boa viagem!");
} else {
  console.log("Você não pode embarcar!");
}

//Novo destino
novoDestino = "Belo Horizonte";
destinoExiste = false;

for (contador = 0; contador <= 3; contador++) {
  if (novoDestino === listaDeDestinos[contador]) {
    destinoExiste = true;
  }
}

if (podeComprar && destinoExiste) {
  listaDeDestinos.splice(listaDeDestinos.indexOf(`São Paulo`), 1);
  temPassagemComprada = true;
} else {
  console.log(`\nNão é possível comprar essa passagem!`);
}

console.log(`\n\nEmbarque: `);
if (podeComprar && temPassagemComprada) {
  console.log("Boa viagem!");
} else {
  console.log("Você não pode embarcar!");
}
