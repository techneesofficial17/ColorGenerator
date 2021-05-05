const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


const hexBtn = document.querySelector('#btn')
const main = document.querySelector('.main');
const color = document.querySelector('.color');
const hexid = document.querySelector('#hex');


hexBtn.addEventListener('click' , clicked);

function clicked() {
    let hexColor = "#";
    for(i = 0; i < 6; i++){
        hexColor += hex[getRandomHex()];
    }
    color.textContent = hexColor;
    main.style.background = hexColor;

    function getRandomHex() {
    return Math.floor(Math.random() * hex.length);
    }
}


// for simple color 
const simpleColorCode = [0,1,2,3,4,5,6,7,8,9];

const simpleBtn = document.querySelector('#btn-simple');


simpleBtn.addEventListener('click', simpleFunction);

function simpleFunction() {
    let simpleColor = "#";
    for(i = 0;i < 6; i++) {
        simpleColor += simpleColorCode[getRandomSimple()];
    }
    color.textContent = simpleColor;
    main.style.background = simpleColor;
    function getRandomSimple() {
    return Math.floor(Math.random() * simpleColorCode.length);
    }
}