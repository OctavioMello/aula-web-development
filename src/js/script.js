// Declarações e variáveis
//var, let, e const

const nome ="Fiap";
console.log(nome);
const nome2 = "dev";
console.log(nome2);

if(true){
    var dog = "Cachorro";
}
console.log(dog)

let exemplo1 = "Olá dev-let";
console.log(exemplo1);

const exemplo2 = "Olá dev-const";
console.log(exemplo2);

let exemplo3 = "10";
console.log(typeof exemplo3);

let exemplo4 = {nome:'fiap',
    dia:'hoje',
    data: 10
};
console.log(exemplo4);

let lista = [exemplo1, exemplo2, exemplo3]
console.log(lista);

//Valor undefined
let exemplo5;
console.log(exemplo5);

//Valor null
const exemplo6 = null;
console.log(exemplo6);

//Operadores aritméticos

let exemplo7 = 10;
let exemplo8 = 20;

console.log(exemplo7 + exemplo8);
console.log(exemplo7 - exemplo8);
console.log(exemplo7 * exemplo8);
console.log(exemplo7 / exemplo8);

//Operadores lógicos

const valor3 = 40;
const valor4 = "40";

console.log(valor3 > valor4);
console.log(valor3 >= valor4);
console.log(valor3 < valor4);
console.log(valor3 <= valor4);

//Operadores de comparação

console.log(valor4 == valor3); //Compara valor
console.log(valor4 === valor3); //Compara valor e tipo

//Estrutura condicional

//if

const nome1 = "Fiap"

if(nome1=="Fiap"){
    console.log("Certo")
};

// if/else

if(nome1=="Fiaps"){
    console.log("Certo");
}
else{
    console.log("Errado");
};

// if encadeado/if aninhado

const idade = 18;
const carteira = true;

if(idade >=18){
    if(carteira == true){
        console.log("Pode dirigir")
    }
    else{
        console.log("Não pode dirigir")
    }
} else{
    console.log("Menor de idade")
}

//Match case

const time = "Corinthians";

switch (time){
    case "Corinthians":
        console.log("Maior time do mundo!");
        break;
    case "Trikas":
        console.log("Sem tradição");
    case "Porcada":
        console.log("Sem tradição");
    default:
        console.log("Opção indisponível.")}

//Condicional ternário

const teste = 10;
let resultado = teste == 10? true:false;
console.log(resultado);