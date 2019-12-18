
let playerOneBoard = [         //y
    ["o", "o", "o", "o", "o"], //0
    ["o", "o", "o", "o", "o"], //1
    ["o", "o", "o", "o", "o"], //2
    ["o", "o", "o", "o", "o"], //3
    ["o", "o", "o", "o", "o"]  //4    
];
// x  0    1    2    3    4 

let playerTwoBoard = [         //y
    ["o", "o", "o", "o", "o"], //0
    ["o", "o", "o", "o", "o"], //1
    ["o", "o", "o", "o", "o"], //2
    ["o", "o", "o", "o", "o"], //3
    ["o", "o", "o", "o", "o"]  //4    
];
// x  0    1    2    3    4 

let shipPlacement;

shipPlacement = shipA(playerOneBoard);

shipPlacement = shipA(playerTwoBoard);

shipPlacement = shipB(playerOneBoard);

shipPlacement = shipB(playerTwoBoard);

shipPlacement = shipC(playerOneBoard);

shipPlacement = shipC(playerTwoBoard);

console.log("Player 1 Board");
console.log(playerOneBoard);

console.log("Player 2 Board");
console.log(playerTwoBoard);

let x;
let y;
let shipsA = 3; //sets player ones's ships to 3
let shipsB = 3; //sets player two's ships to 3
console.log(`There are ${shipsA} ships for player one to find!`);
console.log(`There are ${shipsB} ships for player two to find!`);

while (shipsA > 0 && shipsB > 0) { //while there are more than 0 ships the loop will start/continue
    //y = $("#ycoord").val();
    //x = $("#xcoord").val();
    y = prompt("Player 1:Enter your y coordinate (0-4)");
    x = prompt("Player 1:Enter your x coordinate (0-4)");


    if (playerTwoBoard[y][x] !== "A" || "B" || "C") { //if the player guesses incorrectly, they try again
        console.log("You missed! Wait for your next turn player one")
    } else if (playerTwoBoard[y][x] == "A" || "B" || "C") { //if there is a hit, 1 is subtracted from ships and loop continues
        console.log("Hit! You sunk a ship player one!");
        shipsA--;
        if (shipsA == 0) {
            break;
        }
        console.log(`There are ${shipsA} ships remaining for player one!`);

    }
    y = prompt("Player 2:Enter your y coordinate (0-4)");
    x = prompt("Player 2:Enter your x coordinate (0-4)");
    if (playerOneBoard[y][x] !== "A" || "B" || "C") { //if the player guesses incorrectly, they try again
        console.log("You missed! Wait for your next turn player two")
    } else if (playerOneBoard[y][x] == "A" || "B" || "C") { //if there is a hit, 1 is subtracted from ships and loop continues
        console.log("Hit! You sunk a ship player two!");
        shipsB--;
        if (shipsB == 0) {
            break;
        }
        console.log(`There are ${shipsB} ships remaining for player two!`);
    }
}


//when there are 0 ships remaining, the loop breaks and prints the following message
if (shipsA == 0) {
    console.log("Congratulations Player one! You won! All ships are sunk!!");
} else if (shipsB == 0) {
    console.log("Congratulations Player two! You won! All ships are sunk!!");
}

