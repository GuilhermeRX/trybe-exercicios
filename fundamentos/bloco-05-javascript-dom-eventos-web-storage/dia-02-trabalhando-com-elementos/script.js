document.querySelector('#elementoOndeVoceEsta').parentNode.style.background = 'red'

document.querySelector('#primeiroFilhoDoFilho').innerText = 'primeiroFilhoDoFilho'

document.querySelector('#pai').firstElementChild

document.querySelector('#elementoOndeVoceEsta').previousElementSibling

document.querySelector('#elementoOndeVoceEsta').nextSibling

document.querySelector('#elementoOndeVoceEsta').nextElementSibling

document.querySelector('#pai').lastElementChild.previousElementSibling 


const pai = document.getElementById('pai')

    const irmaoElementoOndeVoceEsta = document.createElement('section');

        irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';

            pai.appendChild(irmaoElementoOndeVoceEsta);



const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

    const filhoElementoOndeVoceEsta = document.createElement('section');

        filhoElementoOndeVoceEsta.id = "filhoElementoOndeVoceEsta";

             elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);


const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho')

    const filhoPrimeiroFilhoDoFilho = document.createElement('section')

        filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho'

        primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho)

        filhoPrimeiroFilhoDoFilho.innerText = 'nascido da tormenta, ultimo de seu nome'


const terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling



    for (let index = pai.childNodes.length -1; index >= 0; index -= 1){
        let itens = pai.childNodes[index]
        if(itens.id !== 'elementoOndeVoceEsta') {
            itens.remove()
        }
    }
    
       const segundoEUltimoFilhoDoFilho = document.querySelector('#segundoEUltimoFilhoDoFilho')

       segundoEUltimoFilhoDoFilho.remove()


       let p = document.querySelector('#elementoOndeVoceEsta')

       for (let i of p.childNodes) {
        i.remove()
     }
    
       
           

    

