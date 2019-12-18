
// x 0 1 2 3 4 */
let maps = [                   //y
    ["o", "o", "o", "o", "o"], //0
    ["o", "o", "o", "o", "o"], //1
    ["o", "o", "o", "o", "o"], //2
    ["o", "o", "o", "o", "o"], //3
    ["o", "o", "o", "o", "o"]  //4    
];
// x  0    1    2    3    4 

for (i = 0; i < 3; i++) {
    let xPos = Math.floor(Math.random() * 5); //random number 0-4 for x axis
    let yPos = Math.floor(Math.random() * 5); //random number 0-4 for y axis
    console.log("y" + yPos, "x" + xPos);
    console.log(maps)
    maps[yPos][xPos] = "A"; //changes value at maps maps[yPos][xPos] to "A"
}
console.log(maps);

let x;
let y;
let ships = 3; //sets number of ships to 3 and will start the game loop

console.log(`There are ${ships} remaining!`);

while (ships > 0) { //while there are more than 0 ships the loop will start/continue
    y = prompt("Enter your y coordinate (0-4)");
    x = prompt("Enter your x coordinate (0-4)");
    
    if (maps[y][x] !== "A") { //if the player guesses incorrectly, they try again
        console.log("You missed! Fire again")
    } else if (maps[y][x] == "A") { //if there is a hit, 1 is subtracted from ships and loop continues
        console.log("Hit! You sunk a ship!");
        ships--;
        console.log(`There are ${ships} remaining!`);
    }
}
//when there are 0 ships remaining, the loop breaks and prints the following message
console.log("Congratulations! You won! All ships are sunk!!")
