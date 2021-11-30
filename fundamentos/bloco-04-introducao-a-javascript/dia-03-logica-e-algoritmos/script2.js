let base = 5
let symbol = '*'
let linha = ''
let space = ' '


for ( var index = 0; index <= base; index++){
    console.log(linha)
    linha = linha + symbol
    if (index == 2){
        linha = space + symbol
    }
}


