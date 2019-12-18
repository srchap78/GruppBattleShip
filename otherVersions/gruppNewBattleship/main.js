let canvas = document.querySelector("#canvas");
let c = canvas.getContext('2d');
addEventListener("click", handleClick)

canvas.width = 500;
canvas.height = 500;
let yAxis = "y";
let xAxis = "x"


let gameBoard = [];

/* let ships = [
    { shipName: "Carrier", shipSize: 5, shipSymbol: "C" },
    { shipName: "Battleship", shipSize: 4, shipSymbol: "B" },
    { shipName: "U Boat", shipSize: 3, shipSymbol: "U" },
    { shipName: "Destroyer", shipSize: 3, shipSymbol: "D" },
    { shipName: "Patrol Boat", shipSize: 2, shipSymbol: "P" },
] */

drawGrid();
createBoard(gameBoard, 10, 10);
console.log(gameBoard)

placeShip(gameBoard, yAxis, 3, "A");
placeShip(gameBoard, yAxis, 5, "C");
placeShip(gameBoard, yAxis, 4, "B");
placeShip(gameBoard, xAxis, 3, "D");
placeShip(gameBoard, xAxis, 3, "E");
placeShip(gameBoard, xAxis, 2, "F");

document.write("<br>Green ship is 4 long<br> Yellow is 5 long<br> Red, grey and purple are 3 long")

fromArray(gameBoard);

console.log(gameBoard);

/* for (x = 0; x < gameBoard.length; x++) {
    for (y = 0; y < gameBoard[x].length; y++) {
        if (gameBoard[y][x] === 1) {
            c.fillStyle = 'red';
            c.fillRect(x * 50, y * 50, 50, 50);
            
            

        }
    }
} */