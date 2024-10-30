  // Tabuada de um número
let num = parseInt(prompt("Insira um número para ver sua tabuada:"));

for (let i = 1; i <= 10; i++) {
    alert(num + " X " + i + " = " + num * i);
}

  // Contador regressivo
let counter = parseInt(prompt("Insira um número para iniciar contagem regressiva:"));

while (counter >= 0) {
    alert(counter);
    if (counter === 0) {
        alert("Sua contagem chegou ao fim!")
    }
    counter--;
}

  // Verificar número primo
let numP = prompt("Insira um número:");
numP = parseInt(numP);

while (!primo(numP)) {
  numP = prompt("Insira outro número:");
  numP = parseInt(numP);
}

alert(numP + " é um número primo!");

function primo(numP) {
  for (let i = 2; i < numP; i++)
    if (numP % i === 0) return false;
  return numP !== 1;
}