// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const texth2 = document.querySelector('#jokeContainer')

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => texth2.innerHTML = data.joke);

  

  
};



window.onload = () => fetchJoke();

