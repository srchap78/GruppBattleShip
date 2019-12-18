/**
 * Classic Battleship has a 10X10 board
 * 5 ship types with lenghts of 5, 4, 3, 3, and 2
 * ships cannot overlap and must be wholly placed on the gameboard either horizontally or vertically
 */


let shipsA = 3; //sets player ones's ships to 3
let shipsB = 3; //sets player two's ships to 3


let battleShip = { shipSize: 4, shipSymbol: "B" }; /*declare a variable as an object to hold length and the symbol for the ship. 
access by variablename.object (battleShip.shipSize)*/
let uBoat = { shipSize: 3, shipSymbol: "U" };
let destroyer = { shipSize: 3, shipSymbol: "D" };
let patrolBoat = { shipSize: 2, shipSymbol: "P" };
let carrier = { shipSize: 5, shipSymbol: "C" };

/**INCOMPLETE**Create an array 'ships' with all ship types and sizes!!! and then use this to refer to. work on this later*/
let ships = [
    { shipName: "Carrier", shipSize: 5, shipSymbol: "C" },
    { shipName: "Battleship", shipSize: 4, shipSymbol: "B" },
    { shipName: "U Boat", shipSize: 3, shipSymbol: "U" },
    { shipName: "Destroyer", shipSize: 3, shipSymbol: "D" },
    { shipName: "Patrol Boat", shipSize: 2, shipSymbol: "P" },
]

let boardFour = [];
createBoard(boardFour, 10, 10);
//console.log(boardFour);
let y = "y"; //for selecting vertical placement with create ship functions
let x = "x"; //just to make it easier to have horizontal placement with create ship functions
//when there are 0 ships remaining, the loop breaks and prints the following message
if (shipsA == 0) {
    console.log("Congratulations Player one! You won! All ships are sunk!!");
} else if (shipsB == 0) {
    console.log("Congratulations Player two! You won! All ships are sunk!!");
}
createShipWithCollisionCheck(boardFour, y, battleShip.shipSize, battleShip.shipSymbol);
createShipWithCollisionCheck(boardFour, y, carrier.shipSize, carrier.shipSymbol);
console.log(ships.length);

//this works. now how to implement it to place all ships??
function listArrayElements (array){
    for (x = 0; x < array.length; x++) {
        //for (y = 0; y < array[x].length; y++) {
                console.log(array[x].shipSymbol)

            //}
    
        }
}
listArrayElements(ships);


/* collisionCheck(boardFour, y, battleShip.shipSize, battleShip.shipSymbol);
collisionCheck(boardFour, y, carrier.shipSize, carrier.shipSymbol);
collisionCheck(boardFour, x, uBoat.shipSize, uBoat.shipSymbol)
collisionCheck(boardFour, x, destroyer.shipSize, destroyer.shipSymbol);
collisionCheck(boardFour, x, patrolBoat.shipSize, patrolBoat.shipSymbol);  */

console.log(boardFour);
    
    