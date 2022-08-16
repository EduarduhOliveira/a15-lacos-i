let coxinhas = prompt("Você quer uma coxinha ? /n S para sim /n N para não").toUpperCase()
let conta = 0


while (coxinhas !== "N"){
    conta = conta + 2.50
      coxinhas = prompt("Você quer uma coxinha ? /n S para sim /n N para não").toUpperCase();
}

console.log(conta)