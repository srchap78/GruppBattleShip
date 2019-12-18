
let playerOneBoard = [                   //y
    ["o", "o", "o", "o", "o"], //0
    ["o", "o", "o", "o", "o"], //1
    ["o", "o", "o", "o", "o"], //2
    ["o", "o", "o", "o", "o"], //3
    ["o", "o", "o", "o", "o"]  //4    
];
// x  0    1    2    3    4 

let playerTwoBoard = [                   //y
    ["o", "o", "o", "o", "o"], //0
    ["o", "o", "o", "o", "o"], //1
    ["o", "o", "o", "o", "o"], //2
    ["o", "o", "o", "o", "o"], //3
    ["o", "o", "o", "o", "o"]  //4    
];
// x  0    1    2    3    4 

for (i = 0; i < 3; i++) {
    //let xPos = Math.floor(Math.random() * 5); //random number 0-4 for x axis
    //let yPos = Math.floor(Math.random() * 5); //random number 0-4 for y axis
    let xPos = prompt("Player one, please enter your ship's x coordinate (0-4)"); //random number 0-4 for x axis
    while (xPos > 4 || xPos < 0) {
        xPos = prompt("Player one, you must enter your ship's x coordinate (0-4). Please try again."); //if an invalid number is entered, asks again until it is valid
    }
    let yPos = prompt("Player one, please enter your ship's y coordinate (0-4)"); //random number 0-4 for y axis
    while (yPos > 4 || yPos < 0) {
        yPos = prompt("Player one, you must enter your ship's y coordinate (0-4). Please try again."); //if an invalid number is entered, asks again until it is valid
    }

    /*
    while (xPos > 4 || xPos < 0 || yPos > 4 || yPos < 0) {
        alert("You must enter a number between 0-4");
        let xPos = prompt("Player one, please enter your ship's x coordinate (0-4)"); //random number 0-4 for x axis
        let yPos = prompt("Player one, please enter your ship's y coordinate (0-4)"); //random number 0-4 for y axis
    }*/
    console.log("x" + xPos, "y" + yPos,);
    console.table(playerOneBoard)
    playerOneBoard[yPos][xPos] = "A"; //changes value at playerOneBoard playerOneBoard[yPos][xPos] to "A"
}
//console.log(playerOneBoard);

for (i = 0; i < 3; i++) {
    //let xPos = Math.floor(Math.random() * 5); //random number 0-4 for x axis
    //let yPos = Math.floor(Math.random() * 5); //random number 0-4 for y axis
    let xPos = prompt("Player two, please enter your ship's x coordinate (0-4)"); //random number 0-4 for x axis
    while (xPos > 4 || xPos < 0) {
        xPos = prompt("Player two, you must enter your ship's x coordinate (0-4). Please try again."); //if an invalid number is entered, asks again until it is valid
    }
    let yPos = prompt("Player two, please enter your ship's y coordinate (0-4)"); //random number 0-4 for y axis
    while (yPos > 4 || yPos < 0) {
        yPos = prompt("Player two, you must enter your ship's y coordinate (0-4). Please try again."); //if an invalid number is entered, asks again until it is valid
    }
    console.log("y" + yPos, "x" + xPos);
    console.table(playerTwoBoard)
    playerTwoBoard[yPos][xPos] = "A"; //changes value at playerTwoBoard playerTwoBoard[yPos][xPos] to "A"
}
//console.log(playerTwoBoard);

let x;
let y;
let shipsA = 3; //sets player ones's ships to 3
let shipsB = 3; //sets player two's ships to 3
console.log(`There are ${shipsA} ships for player one to find!`);
console.log(`There are ${shipsB} ships for player two to find!`);






while (shipsA > 0 && shipsB > 0) { //while there are more than 0 ships the loop will start/continue
    y = prompt("Player 1:To shoot, enter your y coordinate (0-4)");
    while (y > 4 || y < 0) {
        y = prompt("Player one, you must enter your shot's y coordinate (0-4). Please try again."); //if an invalid number is entered, asks again until it is valid
    }
    x = prompt("Player 1:To shoot, enter your x coordinate (0-4)");
    while (x > 4 || x < 0) {
        x = prompt("Player one, you must enter your shot's x coordinate (0-4). Please try again."); //if an invalid number is entered, asks again until it is valid
    }

    if (playerTwoBoard[y][x] !== "A") { //if the player guesses incorrectly, they try again
        console.log("You missed! Wait for your next turn player one")
    } else if (playerTwoBoard[y][x] == "A") { //if there is a hit, 1 is subtracted from ships and loop continues
        console.log("Hit! You sunk a ship player one!");
        shipsA--;
        if (shipsA == 0) {
            break;
        }
        console.log(`There are ${shipsA} ships remaining for player one!`);

    }
    y = prompt("Player 2:To shoot, enter your y coordinate (0-4)");
    while (y > 4 || y < 0) {
        y = prompt("Player two, you must enter your shot's y coordinate (0-4). Please try again."); //if an invalid number is entered, asks again until it is valid
    }
    x = prompt("Player 2:To shoot, enter your x coordinate (0-4)");
    while (x > 4 || x < 0) {
        x = prompt("Player two, you must enter your shot's x coordinate (0-4). Please try again."); //if an invalid number is entered, asks again until it is valid
    }
    if (playerOneBoard[y][x] !== "A") { //if the player guesses incorrectly, they try again
        console.log("You missed! Wait for your next turn player two")
    } else if (playerOneBoard[y][x] == "A") { //if there is a hit, 1 is subtracted from ships and loop continues
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

