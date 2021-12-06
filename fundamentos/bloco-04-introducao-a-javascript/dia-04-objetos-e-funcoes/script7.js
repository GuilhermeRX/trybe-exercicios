let menorvalor = 0

function check (numeros) {
    for (let index in numeros) {
        if(numeros[index] < numeros[menorvalor]) {
            menorvalor = index
        }
    }
    return menorvalor
}

console.log(check([2, -8, 6, 7, 10, 0, -3]))