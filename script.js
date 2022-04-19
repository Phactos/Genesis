let sequence = [];
let playerSequence = [];
let score = 0;
let start = false;

const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

green.addEventListener('click', function(){ click(0)});
red.addEventListener('click', function(){click(1)});
yellow.addEventListener('click', function(){click(2)});
blue.addEventListener('click', function(){click(3)});

function shuffleOrder() {
    let colorOrder = Math.floor(Math.random() * 4);
    sequence.push(colorOrder);
    playerSequence = [];

    for (color in sequence){
        let elementOrder = createElement(sequence[color]);
        lightColor(elementOrder, Number(color) + 1);
    }
}

function lightColor(element, number){
    number = number * 500
    setTimeout( () => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout( () => {
        element.classList.remove('selected');
    }, number);
}

function checkOrder() {
    console.log('Sequência do jogador')
    console.log(playerSequence)
    console.log('Sequência do cpu')
    console.log(sequence)
    for (let i = 0; i < playerSequence.length; i++){  
        if (playerSequence[i] !== sequence[i]){
            setTimeout(gameOver(),100);
            break;
        }
    }
    if (playerSequence.length === sequence.length){
        nextLevel();
    
    }
}

function click(color){
    if (start === true){
        playerSequence[playerSequence.length] = color;
        createElement(color).classList.add('selected');
        setTimeout( () => {
        createElement(color).classList.remove('selected')
        },100); 
        checkOrder();
    } 
    
}

function createElement(color){
    if (color == 0){return green}
    else if (color == 1){return red}
    else if (color == 2){return yellow}
    else {return blue}
}

function nextLevel(){
    score++;
    shuffleOrder();
}

function gameOver(){
    alert(`Pontuação Final: ${score}`);
    sequence = [];
    playerSequence = [];
    score = 0;
    shuffleOrder();
}

function startGame(){
    if (start === false){
        start = true;
        shuffleOrder();
    }
}

//green.onclick = () => click(0);
//red.onclick = () => click(1);
//yellow.onclick = () => click(2);
//blue.onclick = () => click(3);