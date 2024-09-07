/* Concentration (Memory) 

User Story 
As a user, I want to see a landing page when I arrive at the 
website to know I'm in the right place. 

As a user, I want to see instructions and the intial set up of 
the game.  

As a user, I want to start the game and have the capability to click on two cards to flip them over.

As a user, I want the computer to show me the front of the 
cards, and then determine if the card images are the same:

    If the card images are the same, they are a match, and taken 
out of game play. 
    If the card images are different, then they are returned to 
the face down position to be played again. 

As a user, I want to know if I've won or lost the game.  

As a user, I want to be able to continue to click on two cards until there are no more matching 
pairs, or until the timer is expired and the game is over. 

As a user, I want to know if I've won the game and have the option to play 
another round. 

Misc: Colors/ images on cards will have the appropriate contrast 
to meet the WCAG 2.0 level AA standard. 

All images will have alt text 

Theme: Images will likely be of animals.  


Pseudocode 
    1) Welcome to Concentration! 
    2) Objective of the Game
        ul
    3) Instructions 
        ol

Game Set up in HTML: 
    <Div> 
    <cardBacks added to HTML per Usman's guidance>

Gameboard:
    Flexbox with 12 boxes

    4) Create 12 playing cards, 6 pairs with matching images on the 
front, and each with the same exact backside image.
cardFront - 6 animal images, each assigned to 2 cards (let cardPair)
cardBack - barn image 
    Variable array of 6 images (cardFronts)

    5) The computer shuffles the cards, and places them face down in 
        random order. 
    
        Per Joe: Shuffling: 
    Google how to shuffle/randomize my array 
    Okay to use Fisher Yates shuffle algorithym (Okay this took some work/googling/ research)

    
6) Click on Start Game button, which sets timer & randomizes the cardFronts.

7) Only two cards can be clicked per turn, at which time a matchedPair if/else function is called.

    IF/ THEN functions: 
8) IF they are a match, THEN the cards are kept face up 

9) IF they are not a match, THEN they are returned face down,  

10) If all 6 pairs are matched before the 60 second timer expires, You Win!

11) If the timer expires before all 6 pairs are matched, you lose and can play again by clicking the Start Game button.

12) Win/loss condition:
    Timer? (code from Stack Overflow dot com)
    Max numClicks?

CACHED ELEMENTS: 
CONST - Start Game button

EVENT LISTENERS: 
handle Click for two cards
handle Click reset/Start Game button


handleClicks:
    Max two clicks per turn before If/Else runs to match the cards and determine if a matched pair was made.

document query selector to obtain the image of the clicked card

 if/else
    to determine if the click is the 1st click or the 2nd click

if/else
    if document query selector of the ${first card} source equals to the ${second card} source,

    then numClicks resets to 0 so the game can continue
    matchedPairs is called

    else
    
    The setTimer function is called to flip the cards back to cardBack in 2 seconds
    and setAttribute method is used to return both cards back to the cardBack image

    and numClicks is reset back to 0

if matchedPairs === 6 within the 60 second game timer, the message "You Win!"" appears

If matchedPairs does not equal (!=) 6 within the 60 second timer, the player loses and they are offered to play again. 


Reset function sets the matchedPairs and numClicks back to 0 and blanks out the message (message being the timer and win/loss condtion)

Then,
The Fisher Yates suffle function is called to randomize the cardFronts when the Start Game button is clicked. 




********************* 

Fisher Yates Shuffle algorithm

Compare cardPairs to determine if they are a matched event.target.parentElement.id


console.log('Welcome to Concetration!');

/*-------------- Constants -------------*/

const cards = document.querySelectorAll('.cardBack');


/*---------- Variables (state) ---------*/

let firstCard, secondCard;
let numClicks = 0;
let matchedPairs = 0;
let timeleft = 60;

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

const resetBtnElm = document.querySelector('#reset');


/*-------------- Functions -------------*/


function handleClick(event) {
    if (matchedPairs < 6 && timeleft > 0) {
        if (numClicks < 2) {
            const targetImage = document.querySelector(`#${event.target.parentElement.id} img`)

            if (numClicks === 0) {
                firstCard === event.target.parentElement.id
            }
            else {
                secondCard = event.target.parentElement.id
            }
            let id = event.target.parentElement.id.substring(4)
            targetImage.setAttribute('src', cardFronts[id].revealImage);

            numClicks ++ ;
        }
        if (numClicks === 2) {
            if (document.querySelector(`#${firstCard} img`).src === document.querySelector(`#${secondCard} img`).src) {
                numClicks = 0;
                matchedPairs ++ ;
            } 
            else { 
                setTimeout(function() {
                    document.querySelector(`#${firstCard} img`).setAttribute('src', './assets/Barn.jpeg');
                    document.querySelector(`#${secondCard} img`).setAttribute('src', './assets/Barn.jpeg');
                    numClicks = 0;
                },2000);
            }
        }
    }
};



function reset() {
    matchedPairs = 0;
    numClicks = 0;

    let cardDivs = document.querySelectorAll('.cardBack img');
    cardDivs.forEach(card => {
        card.setAttribute('src', './assets/Barn.jpeg');
    })

    randomize(cardFronts);
    timeleft = 60;
    let downloadTimer = setInterval(function() {
        if (matchedPairs === 6) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "You win!";
        }
        else if(timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Time's up! Try again.";
        } 
        else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
}

function randomize (cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        let index = Math.floor(Math.random() * (i + 1)); 
        let temp = cards[i]; 
        cards[i] = cards[index];
        cards[index] = temp;
    }
};

// /*----------- Event Listeners ----------*/

cards.forEach(cardBack => {
    cardBack.addEventListener('click', handleClick);
});

resetBtnElm.addEventListener('click', reset);