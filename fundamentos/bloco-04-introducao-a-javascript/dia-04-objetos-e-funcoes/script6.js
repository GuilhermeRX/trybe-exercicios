
let indiceMaior = 0

function inteiros (teste) {
    for (let index = 0; index < teste.length; index +=1) {        
        if (teste[index] > teste[indiceMaior] ) {
            indiceMaior = index
        }
    }
    return indiceMaior
}

console.log(inteiros([2, 3, 6, 7, 40, 20]))