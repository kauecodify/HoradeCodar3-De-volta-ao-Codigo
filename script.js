//1------------------------------------------
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe o primeiro valor: ', (firstValue) => {
  rl.question('Informe o segundo valor: ', (secondValue) => {
    secondValue = parseFloat(secondValue);

    while (secondValue <= 0) {
      console.log('O segundo valor deve ser maior que zero. Por favor, informe novamente.');
      rl.question('Informe o segundo valor: ', (newSecondValue) => {
        secondValue = parseFloat(newSecondValue);
      });
    }

    const result = parseFloat(firstValue) / secondValue;
    console.log(`O resultado da divisão é: ${result}`);

    rl.close();
  });
});
//2------------BOMBA RELÓGIO-----------------
function bombaRelogio() {
    let segundos = 30;
  
    const intervalo = setInterval(() => {
      document.write(segundos + "<br>");
      segundos--;
  
      if (segundos < 0) {
        clearInterval(intervalo);
        document.write("EXPLOSÃO");
      }
    }, 1000);
  }
  
  bombaRelogio();
//3----------------  
for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
  let output = "";

  for (let i = 10; i >= 1; i--) {
    output += i + ", ";
  }

  output = output.slice(0, -2);
  
  console.log(output);
  
//4---------------------
let soma = 0;
let contador = 0;

for (let i = 15; i <= 100; i++) {
  soma += i;
  contador++;
}

const media = soma / contador;

console.log("A média aritmética dos números inteiros entre 15 e 100 é: " + media);

//5--------------------------------
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe o primeiro número inteiro: ', (primeiro) => {
  rl.question('Informe o segundo número inteiro: ', (segundo) => {

    primeiro = parseInt(primeiro);
    segundo = parseInt(segundo);

    
    if (primeiro >= segundo) {
      console.log("O primeiro número deve ser menor que o segundo.");
      rl.close();
      return;
    }

    let soma = primeiro + segundo;
    let contador = 2; 

    for (let i = primeiro + 1; i < segundo; i++) {
      soma += i;
      contador++;
    }

    const media = soma / contador;

    console.log(`A média aritmética dos números inteiros entre ${primeiro} e ${segundo} (inclusive) é: ${media}`);

    rl.close();
  });
});

//6---------------------------
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let alunosAprovados = 0;

function calcularMedia() {
  rl.question('Informe a primeira nota do aluno: ', (nota1) => {
    rl.question('Informe a segunda nota do aluno: ', (nota2) => {
      nota1 = parseFloat(nota1);
      nota2 = parseFloat(nota2);

      const media = (nota1 + nota2) / 2;
      console.log(`A média final do aluno é: ${media}`);

      if (media >= 9.5) {
        alunosAprovados++;
      }

      rl.question('Calcular a média de outro aluno? (S/N) ', (resposta) => {
        if (resposta.toUpperCase() === 'S') {
          calcularMedia();
        } else {
          console.log(`Total de alunos aprovados: ${alunosAprovados}`);
          rl.close();
        }
      });
    });
  });
}

calcularMedia();

//7---------------------------
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function lerNota(numeroNota) {
  rl.question(`Informe a nota ${numeroNota}: `, (nota) => {
    nota = parseFloat(nota);

    if (nota >= 0 && nota <= 10) {
      notas.push(nota);
      numeroNota++;

      if (numeroNota > 6) {
        calcularMedia();
      } else {
        lerNota(numeroNota);
      }
    } else {
      console.log("Valor inválido! Por favor, informe uma nota entre 0 e 10.");
      lerNota(numeroNota);
    }
  });
}

function calcularMedia() {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  const media = soma / notas.length;
  console.log(`A média do aluno é: ${media.toFixed(2)}`);
  rl.close();
}

const notas = [];
lerNota(1);

//8----------------------------------------
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe o valor de N: ', (N) => {
  N = parseInt(N);

  if (N > 0) {
    console.log(`Valores inteiros entre 1 e ${N}:`);
    for (let i = 1; i <= N; i++) {
      console.log(i);
    }
  } else {
    console.log("O valor de N deve ser maior que zero.");
  }

  rl.close();
});

//9-
for (let i = 101; i <= 110; i++) {
    console.log(i);
  }

//10-----------------------------------------------------------
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe o valor de N: ', (N) => {
  N = parseInt(N);

  if (N > 0) {
    for (let i = 1; i <= N; i++) {
      console.log(`Tabuada do ${i}:`);
      for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
      }
      console.log();
    }
  } else {
    console.log("O valor de N deve ser maior que zero.");
  }

  rl.close();
});

//11-------------------------------------------
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let dentroIntervalo = 0;
let foraIntervalo = 0;
let contador = 0;

function lerValores() {
  rl.question(`Informe o valor ${contador + 1}: `, (valor) => {
    valor = parseInt(valor);

    if (!isNaN(valor)) {
      if (valor >= 24 && valor <= 42) {
        dentroIntervalo++;
      } else {
        foraIntervalo++;
      }

      contador++;

      if (contador < 10) {
        lerValores();
      } else {
        console.log(`Quantidade de valores dentro do intervalo [24, 42]: ${dentroIntervalo}`);
        console.log(`Quantidade de valores fora do intervalo [24, 42]: ${foraIntervalo}`);
        rl.close();
      }
    } else {
      console.log("Valor inválido. Por favor, informe um número válido.");
      lerValores();
    }
  });
}

lerValores();


