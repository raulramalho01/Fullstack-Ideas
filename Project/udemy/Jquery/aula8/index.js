// CONST
const NOME = "RAUL RAMALHO";
const SOBRENOME = "LUCENA";
const IDADE = "24";
const MASSA = 80;
const ALTURA = 1.75;
// COMPUTABLE THINGS
let imc;
let ano_nascimento;
let altura_centimetros;

imc = MASSA / (ALTURA * ALTURA)
console.log("Olá meu nome é", NOME, SOBRENOME,"Tenho:", IDADE,"anos e",MASSA,"kg e ",ALTURA,"cm de altura");
console.log(`Meu imc é: ${imc.toFixed(2)} kg/m²`);
// template strings `${var}`