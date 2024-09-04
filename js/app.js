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




/*---------- Variables (state) ---------*/

let cards = [
    {
      revealImage: '../assets/Blue the pig.jpeg',
      cardPair: 1
    }, 
    {
      revealImage: '../assets/Blue the pig.jpeg',
      cardPair: 1
    }, 
    {
      revealImage: '../assets/bunny.jpeg',
      cardPair: 2
    },
    {
      revealImage: '../assets/bunny.jpeg',
      cardPair: 2
    },
    {
      revealImage: './assets/fox.jpeg',
      cardPair: 3
    },
    {
      revealImage: './assets/fox.jpeg',
      cardPair: 3
    },
    {
        revealImage: './assets/highland cow.jpeg',
        cardPair: 4
      },
      {
        revealImage: './assets/highland cow.jpeg',
        cardPair: 4
      },{
        revealImage: './assets/horse.jpeg',
        cardPair: 5
      },
      {
        revealImage: './assets/horse.jpeg',
        cardPair: 5
      },{
        revealImage: './assets/Serena and Thelma.jpeg',
        cardPair: 6
      },
      {
        revealImage: './assets/Serena and Thelma.jpeg',
        cardPair: 6
      },
  ]

/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/


/*----------- Event Listeners ----------*/
console.log(document.getElementById('0'));
document.getElementById('0').classList.remove("card-back");
console.log(document.getElementById('0'));
document.getElementById('0').style.backgroundImage="url("+cards[2].revealImage+")";
document.getElementById('0').style.border="3px solid red";
console.log(cards[2].revealImage);
console.log(document.getElementById("0").style.backgroundImage);