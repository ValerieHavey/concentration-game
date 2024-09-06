/* Concentration (Memory) 

User Story 
As a user, I want to see a landing page when I arrive at the 
website to know I'm in the right place. 

As a user, I want to see instructions and the intial set up of 
the game.  

As a user, I want to be able to see who's turn it is, and then 
have the capability to click on two cards to flip them over 

As a user, I want the computer to show me the front of the 
cards, and then determine if the card images are the same, 
    If the card images are the same, they are a match, and taken 
out of game play. 
    If the card images are different, then they are returned to 
the face down position to be played again. 

As a user, I know who's turn is next and be able to take turns 
with another human player. 

As a user, I want to be able to see a score of how many pairs of 
cards each player has. To view a scoreboard. 

As a user, I want to be able to continue to click on two cards 
per turn, alternating turns, until there are no more matching 
pairs. 

As a user, I want to know who won and have the option to play 
another round. 

Misc: Colors/ images on cards will have the appropriate contrast 
to meet the WCAG 2.0 level AA standard. 

All images will have alt text 

Theme: Images will likely be of animals.  


Pseudocode 
1) Welcome to Concentration! 
2) Instructions (See excalidraw) 

Game Set up in HTML: 
    <Div> 

    Game set up in CSS: 
    Flexbox? 
    Grid? 

    3) Create 12 playing cards, 6 pairs with matching images on the 
front, and each with the same exact backside image. 
    const cardFrontImages = [image1, image2, image3, image4, 
image5, image6]; 
            Question: How to obtain two exact cards with each 
image to create 12 cards total? 
    const cardBackImage = background image 

    4) Create turns for Player 1 and Player 2. 
     
    let = turn 
    let = winner 
    let = tie 
    let - flippedCards? 

    Copied and pasted from Module Build a Browswer Game Walkthrough, 

    Data Best Practices: 
    const players = [ 
    { 
        name: '', 
        score: 0 
    }, 
    { 
        name: '', 
        score: 0 
    } 
]; 

5) The computer shuffles the cards, and places them face down in 
random order. 
    Per Joe: Shuffling: 
    Google how to shuffle/randomize my array 
    Okay to use Fisher Yates shuffle algorithym 

    
6) Message stating Player 1's turn.  
    6a) Player 1 clicks on two cards. 
    IF/ THEN functions: 
7) IF they are a match, THEN the cards are either kept face up 
or moved to the side of the screen.  

8) IF they are a match, THEN that player gets one point. 

9) IF they are not a match, THEN they are returned face down,  

10) Render message stating next players turn. 

11) The game continues with each player  
Copied and pasted from Module Build a Browswer Game Walkthrough, 
Data Best Practices: 
const render = () => { 
    renderBoard(); 
    renderScores(); 
    renderControls(); 
    renderMessages(); 
} 
CACHED ELEMENTS: 
CONST = Initialize/ reset game 
EVENT LISTENERS: 
Add an event listener For Each card, click, handleClick 
Card turns face up and face down 
********************* 
An array of 12 cards (or 6 cards?) 
Object - key value pairs 
Compairing the data of the cards 
Shuffling of the cards 
Array in order of how it was built 
Shuffle button 
Map original array and get it to return to the same array with 
the index's randomized. 
*/

console.log('Welcome to Concetration!');

/*-------------- Constants -------------*/

const cards = document.querySelectorAll('.cardBack');
const gameBoard = [];


/*---------- Variables (state) ---------*/

let board  = ['', '', '', '', '', '', '', '', '', '', '',''];
let playerTurn = 1; 
let winner = false; 
let tie = false;
let flippedCards = [];
let firstCard, secondCard;
let numClicks = 0;
let matchedPairs = 0;

let cardFronts = [
    {
        revealImage: "./assets/Bluethepig.jpg",
        cardPair: 1
    }, 
    {
        revealImage: "./assets/Bluethepig.jpg",
        cardPair: 1
    }, 
    {
        revealImage: "./assets/bunny.jpeg",
        cardPair: 2
    },
    {
        revealImage: "./assets/bunny.jpeg",
        cardPair: 2
    },
    {
        revealImage: "./assets/fox.jpeg",
        cardPair: 3
    },
    {
        revealImage: "./assets/fox.jpeg",
        cardPair: 3
    },
    {
        revealImage: "./assets/highlandcow.jpeg",
        cardPair: 4
    },
    {
        revealImage: "./assets/highlandcow.jpeg",
        cardPair: 4
    },
    {
        revealImage: "./assets/horse.jpeg",
        cardPair: 5
    },
    {
        revealImage: "./assets/horse.jpeg",
        cardPair: 5
    },
    {
        revealImage: "./assets/SerenaandThelma.jpg",
        cardPair: 6
    },
    {
        revealImage: "./assets/SerenaandThelma.jpg",
        cardPair: 6
    },
];

/*----- Cached Element References  -----*/

const messageElm = document.querySelector('#message');
const resetBtnElm = document.querySelector('#reset');


/*-------------- Functions -------------*/

// function flipCard(revealImage) {
//     const elem = document.getElementById('cardBack');
//     elem.flip.card = revealImage;
// };



function handleClick(event) {
    if (matchedPairs < 6) {
        if (numClicks < 2) {
            console.log(event.target.parentElement.id);
            const targetImage = document.querySelector(`#${event.target.parentElement.id} img`)
            console.log(targetImage);
            //targetImage.setAttribute('src', './assets/SerenaandThelma.jpg');
            if (numClicks == 0) {
                firstCard = event.target.parentElement.id
            }
            else {
                secondCard = event.target.parentElement.id
            }
            let id = event.target.parentElement.id.substring(4)
            targetImage.setAttribute('src', cardFronts[id].revealImage);
            numClicks ++ ;
        }
        if (numClicks == 2) {
            if (document.querySelector(`#${firstCard} img`).src == document.querySelector(`#${secondCard} img`).src) {
                numClicks = 0;
                console.log('match');
                matchedPairs ++ ;
            } else {
                setTimeout(function() {
                    document.querySelector(`#${firstCard} img`).setAttribute('src', './assets/Barn.jpeg');
                    document.querySelector(`#${secondCard} img`).setAttribute('src', './assets/Barn.jpeg');
                    numClicks = 0;
                },2000);
            }
        }
        if (matchedPairs == 6) {
            document.querySelector('.message').innerHTML = 'You Win!';
        }
    }
};

cards.forEach(cardBack => {
    console.log('something');
    cardBack.addEventListener('click', handleClick);
});

function reset() {
    matchedPairs = 0;
    numClicks = 0;
    document.querySelector('.message').innerHTML = '';
    let cardDivs = document.querySelectorAll('.cardBack img');
    cardDivs.forEach(card => {
        card.setAttribute('src', './assets/Barn.jpeg');
    })
    randomize(cardFronts);
}

// function flipCard(event) {
//     event.currentTarget.classList.toggle('cardBack');
//     //use class list/ toggle to flip card back
//};

// const render = () => {
//     updateBoard();
//     updateMessage();
// };

// const init = () => {
//     board  = ['', '', '', '', '', '', '', '', '', '', '',''];
//     playerTurn = '1';
//     winner = false;
//     tie = false;
//     render();
// };

// init();

randomize(cardFronts)
 console.log(cardFronts);

//Fisher Yates shuffle function//
function randomize (cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        let index = Math.floor(Math.random() * (i + 1));
        let temp = cards[i];
        cards[i] = cards[index];
        cards[index] = temp;
    }
};

// const render = () => { 
//     renderBoard(); 
//     renderScores(); 
//     renderControls(); 
//     renderMessages(); 
// } 

// /*----------- Event Listeners ----------*/

resetBtnElm.addEventListener('click', reset);