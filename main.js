//prompt asking for the player's name. I want to make a button for this but its getting late and I am old and need my sleep.
let playerName = prompt("Please enter your name.")

//array to hold our ships information
let ships = [
  { shipName: "Carrier", shipSize: 5, shipSymbol: "C" },
  { shipName: "Battleship", shipSize: 4, shipSymbol: "B" },
  { shipName: "U Boat", shipSize: 3, shipSymbol: "U" },
  { shipName: "Destroyer", shipSize: 3, shipSymbol: "D" },
  { shipName: "Patrol Boat", shipSize: 2, shipSymbol: "P" },
];

//declaring variables to be used in the code later
let battleShipHits = 0;
let carrierHits = 0;
let uBoatHits = 0;
let destroyerHits = 0;
let patrolBoatHits = 0;
let totalShips = 5;
let guess = 0;

//this loads the high score from the server database(the sql stuff)
loadExampleList();

//this array is the game board we will be using
let playerOneBoard = [
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"]
];

//this function is called 5 times to place our 5 different ships
placeShip(playerOneBoard, 5, "C");
placeShip(playerOneBoard, 4, "B");
placeShip(playerOneBoard, 3, "U");
placeShip(playerOneBoard, 3, "D");
placeShip(playerOneBoard, 2, "P");

//this function is called and will render the GUI (gränsnitt)
renderBoard(playerOneBoard);

//just to show us where the ships are so we can cheat at the game!
console.table(playerOneBoard);

//listen event for a click and calls the hitOrmiss function
$('body').on('click', 'main>div', hitOrMiss) 



