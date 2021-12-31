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
let options = document.getElementById('coresbg')
let textcolor = document.getElementById('corestext')
let altfont = document.getElementById('altfont')
let pxfont = document.getElementById('fontsize')
let esp = document.getElementById('espfont')

function optionsbg(){

    coresbg.addEventListener('change',function(event){
        if(event.target.value == 'red'){
            bodycss.style.backgroundColor = 'red'
    
        } else if (event.target.value == 'grey'){
            bodycss.style.backgroundColor = 'grey'
    
        } else if (event.target.value == 'black'){
            bodycss.style.backgroundColor = 'black'
    
        } else if (event.target.value == 'green'){
            bodycss.style.backgroundColor = 'green'
        }

        localStorage.setItem('selectbg',coresbg.value)
        
    });
    bodycss.style.backgroundColor = localStorage.selectbg
}
optionsbg()

function colortext(){

    textcolor.addEventListener('change',function(event){
        localStorage.setItem('corestext',textcolor.value)
        if(event.target.value == 'black'){
            paginas.style.color = textcolor.value
    
        } else if (event.target.value == 'grey'){
            paginas.style.color = textcolor.value
    
        }  else if (event.target.value == 'white'){
            paginas.style.color = textcolor.value
        }
    });
    paginas.style.color = localStorage.corestext
}

colortext()

function alteraFonte(){
    altfont.addEventListener('change',function(event){
        localStorage.setItem('altfontc',altfont.value)
        if(event.target.value == 'Roboto'){
            bodycss.style.fontFamily = 'Roboto'

        } else if (event.target.value == 'Corinthia'){
            bodycss.style.fontFamily = 'Corinthia'

        } else if (event.target.value == 'Montserrat'){
            bodycss.style.fontFamily = 'Montserrat'

        }else if (event.target.value == 'Arial'){
            bodycss.style.fontFamily = 'Arial'
        }else {
            bodycss.style.fontFamily = 'Roboto'
        }
    });
    bodycss.style.fontFamily = localStorage.altfontc
}

alteraFonte()

function tamanhoFont(){
   pxfont.addEventListener('change',function(event){
       localStorage.setItem('fontpx',pxfont.value)
       if(event.target.value == '14px'){
           paginas.style.fontSize = '14px'

       } else if (event.target.value == '18px'){
        paginas.style.fontSize = '18px'

       } else if (event.target.value == '22px'){
        paginas.style.fontSize = '22px'

       } else if (event.target.value == '26px'){
        paginas.style.fontSize = '26px'

       }else if (event.target.value == '30px'){
        paginas.style.fontSize = '30px'

       } else if (event.target.value == '34px'){
        paginas.style.fontSize = '34px'
       }

   });   
   paginas.style.fontSize = localStorage.fontpx
}

tamanhoFont()

function espacamento(){

    esp.addEventListener('change',function(event){

        localStorage.setItem('espcache',esp.value)

        if(event.target.value == '1.3'){
            texto[0].style.lineHeight = '1.3'
            texto[1].style.lineHeight = '1.3'

        } else if (event.target.value == '1.6'){
            texto[0].style.lineHeight = '1.6'
            texto[1].style.lineHeight = '1.6'

        } else if (event.target.value == '1.9'){
            texto[0].style.lineHeight = '1.9'
            texto[1].style.lineHeight = '1.9'

        } else if (event.target.value == '2'){
            texto[0].style.lineHeight = '2'
            texto[1].style.lineHeight = '2'

        } else if (event.target.value == '2.3'){
            texto[0].style.lineHeight = '2.3'
            texto[1].style.lineHeight = '2.3'

        }else if (event.target.value == '2.6'){
            texto[0].style.lineHeight = '2.6'
            texto[1].style.lineHeight = '2.6'
        }
    })

        texto[0].style.lineHeight = localStorage.espcache
        texto[1].style.lineHeight = localStorage.espcache

}

espacamento()