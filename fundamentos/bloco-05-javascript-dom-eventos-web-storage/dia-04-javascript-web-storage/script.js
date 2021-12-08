let bodycss = document.querySelector('body')
let inputbg = document.querySelector('#input-bg')
let btnadd = document.querySelector('#btn-adicionar') 
let paginas = document.querySelector('#pag')
let inputColor = document.querySelector('#input-color')
let inputFont = document.querySelector('#input-font')
let inputSize = document.querySelector('#input-size')
let inputEsp = document.querySelector('#input-esp')
let texto = document.getElementsByClassName('texto')
let remove = document.getElementById('btn-resetar')

function mudabg(){
    btnadd.addEventListener('click',function(event){

        localStorage.setItem('cachebg',inputbg.value)
        bodycss.style.backgroundColor = inputbg.value
    });

    bodycss.style.backgroundColor = localStorage.getItem('cachebg')
}
mudabg()

function colortext(){
    btnadd.addEventListener('click',function(){
        localStorage.setItem('cachetc',inputColor.value)
        paginas.style.color = inputColor.value
    });
    paginas.style.color = localStorage.cachetc
}

colortext()

function alteraFonte(){
    
    btnadd.addEventListener('click',function(){
        localStorage.setItem('cachefont',inputFont.value)
        bodycss.style.fontFamily = inputFont.value
    });
    bodycss.style.fontFamily = localStorage.cachefont
}

alteraFonte()

function tamanhoFont(){
    btnadd.addEventListener('click',function(){
        localStorage.setItem('cachesize',inputSize.value)
        paginas.style.fontSize = inputSize.value
    });
    paginas.style.fontSize = localStorage.cachesize
}

tamanhoFont()


function espacamento(){
    btnadd.addEventListener('click',function(){
        localStorage.setItem('cacheesp',inputEsp.value)
        texto[0].style.lineHeight = inputEsp.value
        texto[1].style.lineHeight = inputEsp.value
    });

    texto[0].style.lineHeight = localStorage.cacheesp
    texto[1].style.lineHeight = localStorage.cacheesp
}

espacamento()

remove.addEventListener('click',function(){
    
})