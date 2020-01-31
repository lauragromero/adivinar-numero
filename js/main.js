'use strict';
const elementForm = document.querySelector ('#mainForm')
const elementImput = document.querySelector ('#imputNumber');
const elementButton = document.querySelector ('#btn');
const elementTextClue = document.querySelector ('#clue');
const elementNumberTry = document.querySelector ('#numberTry');
const elementButtonReset = document.querySelector ('#resetButton');
const maxNumber = 100;

//Funcion numero aletorio
const getRandomNumber = (max) => {
     return Math.ceil(Math.random() * max);
};



let randomNumber = getRandomNumber(100);
console.log ('Mi numero aleatorio es ' + randomNumber);


//función string como parámetro
let stringText = '';
const innerText =(stringText)=>{
    elementTextClue.innerHTML = stringText;

}
 //funcion juego
const imputNumberValue = () => {
    const valueNumberImput = parseInt (elementImput.value);
    if(valueNumberImput > maxNumber || valueNumberImput === '' || valueNumberImput <= 0){
        innerText('Numero entre 0 y 100');
    } else if (valueNumberImput < randomNumber){
        innerText('Demasiado bajo');
    } else if (valueNumberImput > randomNumber){
        innerText('Demasiado alto');
    } else {
        innerText('¡Bien, has acertado!');
        elementButton.classList.add('off');
        elementButtonReset.classList.remove ('hidden');
    }  
};
//Función contador 
let numberIntent = 0;
const attempNumber =() =>{
    numberIntent +=1;
    elementNumberTry.innerHTML = numberIntent;
}
//Función manejadora 
const guessHandler =() =>{
    imputNumberValue ();
    attempNumber ();
}
//función pulsar intro
const enterKey = (event) =>{
    event.preventDefault ();
    guessHandler()

}

//función juega otra vez refresca la página
const newGame=()=>{
    location.reload();
}


elementForm.addEventListener ('submit', enterKey);
elementButton.addEventListener ('click', guessHandler);
elementButtonReset.addEventListener('click', newGame)