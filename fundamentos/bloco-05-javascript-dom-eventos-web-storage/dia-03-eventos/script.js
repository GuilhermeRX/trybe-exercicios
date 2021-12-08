function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.


  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;


function createdays(){
    let element = document.querySelector('#days')
    for(let index of dezDaysList){
        let day = index
       let dayItem = document.createElement('li')
       element.appendChild(dayItem)
       dayItem.innerHTML = day

       if (day === 24 || day === 31){
           dayItem.className = "day holiday"

         } else if (day == 4 || day == 11 || day == 18){
        dayItem.className = "day friday"

        } else if (day == 25){
            dayItem.className = "day friday holiday"

        } else {
            dayItem.className = 'day'
        }   
    }
}
createdays()

function botton(buttonName){
    let element1 = document.querySelector('.buttons-container')
    let createBotton = document.createElement('button')
    
    createBotton.innerHTML = buttonName
    createBotton.id = "btn-holiday"
    element1.appendChild(createBotton)
    
    
}
botton("Feriados")

function displayHoliday(){

    let botton = document.querySelector('#btn-holiday')
    let holidays = document.getElementsByClassName("holiday")
    let setNewColor = 'pink';
    let backgroundColor = "rgb(238,238,238)" 

    botton.addEventListener('click', function(){
    
        for(let day of holidays){
            
            if(day.style.background === setNewColor){
                day.style.background = "rgb(238,238,238)"
            } else {
                day.style.background = setNewColor
            }
            
        }

    });
    
}

displayHoliday()


function createSexta(buttonName){
    
    let createSexta = document.createElement('button')

        createSexta.id = "btn-friday"
        createSexta.innerHTML = buttonName

        document.querySelector('.buttons-container').appendChild(createSexta)

}

createSexta('Sexta-feira')


function modsexta(){

    let btnSexta = document.getElementById("btn-friday")
    let sextas = document.getElementsByClassName('friday')
    let texto = 'SEXTOU'
    let sexfridays = [4,11,18,25]


    btnSexta.addEventListener('click',function(){
        
        for(let index = 0; index < sextas.length; index +=1){

            if(sextas[index].innerHTML !== texto){
                sextas[index].innerHTML = texto

            }else {

                sextas[index].innerHTML = sexfridays[index]
            }
            
        }

    });

}

modsexta()



function zoom(){
    let days = document.querySelector('#days')
    

    days.addEventListener('mouseover', function(event){
        
           event.target.style.fontSize = '25px';
           event.target.style.fontWeight = '600';
           event.target.style.transition = '0.3s'
        
    });
}

function zoomOut(){
    let days = document.querySelector('#days')

    days.addEventListener('mouseout',function(event){
        event.target.style.fontSize = '20px'
        event.target.style.fontWeight = '200';
        
    });
}



zoom()
zoomOut()


function createElement(string){

    let elemento = document.querySelector('.my-tasks')
    let createTask = document.createElement('span')
    createTask.innerHTML = string

    elemento.appendChild(createTask)

}

createElement('Projeto')


function legend(cor){
    let container = document.querySelector('.my-tasks')
    let legenda = document.createElement('div')
    legenda.style.backgroundColor = cor

    container.appendChild(legenda)
    
}

legend('red')


function selected(){
    let legenda2 = document.querySelector('.my-tasks')
    legenda2.addEventListener('click',function(event) {

        if(event.target.className !== 'task selected'){

            event.target.className = 'task selected'
        }else if (event.target.className == 'task selected'){
            event.target.className = 'task'
        }
    });
};


selected()


function evento(){
    let elemento5 = document.querySelector('#days')
    let tarefa = document.getElementsByClassName('task selected')
    
    elemento5.addEventListener('click',function(event){
        if(event.target.style.color !== tarefa[0].style.backgroundColor){
            event.target.style.color = tarefa[0].style.backgroundColor

        } else if (event.target.style.color === tarefa[0].style.backgroundColor ) {
            event.target.style.color = "rgb(119,119,119)"
        }
        
    });
}

evento()


function compromissos(){
    let caixa = document.querySelector('#task-input')
    let container = document.getElementsByClassName('input-container')
    let adicionar = document.querySelector('#btn-add')

    adicionar.addEventListener('click',function(event){
        let comp = document.createElement('ul')
        let compli = document.createElement('li')
         
        compli.innerHTML = caixa.value

        if(caixa.value.length == 0){
            alert(`Error!
            Digite ao menos 1 caractere`)

        } else {
            comp.appendChild(compli)
        container[0].appendChild(comp)
        }   
    });


        caixa.addEventListener('keyup',function(event){
            let comp = document.createElement('ul')

            if(event.key === 'Enter' && caixa.value.length > 0){
            
                let compli = document.createElement('li')
            compli.innerText = caixa.value

            comp.appendChild(compli)
            container[0].appendChild(comp)
            } else if (caixa.value.length == 0){
                alert(`Error!
            Digite ao menos 1 caractere`)
            }
        });

}

compromissos()