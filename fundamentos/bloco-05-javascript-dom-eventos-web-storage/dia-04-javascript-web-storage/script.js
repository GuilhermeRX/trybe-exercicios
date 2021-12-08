let bodycss = document.querySelector('body')
let inputbg = document.querySelector('#input-bg')
let btnadd = document.querySelector('#btn-adicionar') 
let paginas = document.querySelector('#pag')
let inputColor = document.querySelector('#input-color')
let inputFont = document.querySelector('#input-font')
let inputSize = document.querySelector('#input-size')
let inputEsp = document.querySelector('#input-esp')
let texto = document.getElementsByClassName('texto')

function mudabg(){
    btnadd.addEventListener('click',function(event){
        bodycss.style.backgroundColor = inputbg.value
    });
}

mudabg()

function colortext(){
    btnadd.addEventListener('click',function(){
        paginas.style.color = inputColor.value
    })
}

colortext()

function alteraFonte(){
    btnadd.addEventListener('click',function(){
        bodycss.style.fontFamily = inputFont.value
    });
}

alteraFonte()

function tamanhoFont(){
    btnadd.addEventListener('click',function(){
        paginas.style.fontSize = inputSize.value
    });
}

tamanhoFont()


function espacamento(){
    btnadd.addEventListener('click',function(){
        texto[0].style.lineHeight = inputEsp.value
        texto[1].style.lineHeight = inputEsp.value
    });
}

espacamento()