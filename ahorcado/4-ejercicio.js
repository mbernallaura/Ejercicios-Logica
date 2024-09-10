/*
    Crea el juego del ahorcado.
    El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
    secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
    
    Utiliza el método de entrada de datos habitual de tu lenguaje,
    en el caso de JS, usaremos la función prompt.
    
    Ejemplo:
    juegoDelAhorcado('victor');  
    
    Salida:
    Adivina la letra: i
    La palabra es: _i___
*/
// const prompt = require("prompt-sync")();
// const word = 'tabla';
// let lives = 5;
// let letter = prompt( "Tienes "+ lives + " vidas para adivina letra por letra una palabra que tiene " + word.length + ' letras: ');

// function fillLines(word){
//     for (let index = 0; index < word.length; index++) {
//         finallyWord[index] = '_';
//     }
// }

// fillLines(word);

// function playHanged (letter) {
//     if(letter.length > 1 || letter === ''){
//         letter = prompt('Tienes que poner una letra a la vez: ');
//         playHanged(letter);
//     }

//     do {
//         if (word.includes(letter) === false){
//             lives--;
//             letter = prompt( "Tienes "+ lives + " vidas para adivina letra por letra una palabra que tiene " + word.length + ' letras: ');
//         }
//         break;
//     } while (lives >= 1);
    
//     for (let index = 0; index < word.length; index++) {
//         if(word.includes(letter, index) === true){
//         } 
//     }

//     console.log(finallyWord);
    
// }


// playHanged(letter);

const throwPlay = document.querySelector('#lanzarJuego');
throwPlay.addEventListener('click', () => playHanged('tabla'));

function playHanged(word){
    let finallyWord = '_'.repeat(word.length);
    let lives= 5;
    while(lives > 0 && finallyWord !== word){
        let letter= prompt('Adivina la letra: ');
        if(word.includes(letter)){
            for (let index = 0; index < word.length; index++) {
                if(letter === word[index]){
                    let arrayFinallyWord = Array.from(finallyWord);
                    arrayFinallyWord[index] = letter;
                    finallyWord = arrayFinallyWord.join(' ');
                }
            }
        }else{
            lives--;
        }

        console.log('la palabra es: '+ finallyWord);
        console.log('Te quedan '+ lives + ' intentos');
    }

    if(finallyWord === word){
        console.log('Felicidades! ganaste, la palabra era: ' + finallyWord);
    }else{
        console.log('Lo sentimos no pudiste adivinar, la palabra era: ' + finallyWord);
        
    }
}