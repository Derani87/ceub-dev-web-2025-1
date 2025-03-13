var ola = "Olá Mundo! JS";
console.log(ola);

function log(valor) {
    console.log(valor)
}

// Tipos de Variáveis

var valor = 10;
log(typeof valor); //number

var palavra = "Gabriel";
log(typeof palavra); //string

var isOK = true;
log(typeof isOK); //boolean

var meuObj = {}; //Object
var meuArray = []; // Array
var nulo = null; //Null
var variavelPalmeiras; //Undefined

function compararEscopo() {
    if (true) {
        var varDentro = "Var dentro do bloco";
        let letDentro = "Let dentro do bloco";
        const constDentro = "Const dentro do bloco";

        log(varDentro); //Funciona
        log(letDentro); //Funciona
        log(constDentro); // Funciona
    }

    //log(palavra); //Funciona (global)
    //log(varDentro); //Funciona (Escopo)
    //log(letDentro); // Erro (Local)
    //log(constDentro); // Erro (Local)


}
compararEscopo()

//Operacoes simples
const n1 = 1;
const n2 = 5;
const valorNumericoStr = "5";

log(n1 + n2);
log(n1 - n2);
log(n1 / n2);
log(n1 * n2);
log(n1 == n2)
log(n1 == valorNumericoStr);
log(n1 === valorNumericoStr);

log((n2 > n1) || (n2 > n1) && (1 > 2)); //false

//Manipulação de arrays
let frutas = ["Maca", "Banana", "Laranja"]
log(frutas.lenght);
log(frutas[1])

frutas.push("Manga");

log(frutas);

frutas.pop()

log(frutas)

const idade = 18;
if (idade >= 18) {
    log("Sou Adulto");

} else if (idade >= 2) {
    log("Sou criança");
} else {
    log("Sou bebe");
}

const instituicao = "CEM10";

switch (instituicao) {
    case "CEM10": log("Escola");
    break;
    case "CIL": log("Escola de linguas");
    break;
    case "CEUB": log("Faculdade");
    break;
    default:
        log("Não é uma instituição");
}

// Estrutura de repetição

for(let loop = 0; loop < 5; loop++){
    log(`Meu valor no loop: ${loop}`)

}
let valorWhile = 0;
while(valorWhile < 5){
    log(`Meu valor no loop: ${valorWhile}`);
    valorWhile++;
}


