/*
Skapa spelplan (1d array)
Placera båt
SPELSTART (game loop)
Skriv in skott
Kolla om det blir träff eller miss
	OM träff
		Skriv ut “Träff, du vann!”
	ANNARS miss
		Skriv ut “Miss, försök igen”
		Gå tillbaka till skott
*/
/* //Version 1
let maps = ["o", "o", "o", "x", "o"];

let playerShot = prompt("Fire by entering a number between 0 and 4")
console.log(maps);

while (playerShot != 3 ) {
    if (playerShot === null) {
        break;
    } else
        playerShot = prompt("you missed! fire again by entering a number between 0 and 4");
}
alert("you hit the ship! Congratulations! You won!!")

console.log("you hit the ship! Congratulations! You won!!")
*/
/*version 2*/
let maps = [
    // x= 0    1    2    3    4      y
    ["o", "o", "o", "o", "o"], //0
    ["o", "o", "o", "o", "o"], //1
    ["o", "o", "o", "o", "o"], //2
    ["o", "o", "o", "o", "o"], //3
    ["o", "o", "o", "o", "o"]  //4
];
/*
for (y in maps){
    for (x in maps[y]){
document.write(maps[y][x] + " ")
    }
}
*/

/* this gives a random starting index between 0 and 2
so our 3 coordinate ship will fit within the array
*/ 
let xPos = Math.floor(Math.random() * 3);
document.write("Ship A: x:" + xPos + " ")
let yPos = Math.floor(Math.random() * 3);
document.write("y:" + yPos)

/*this place ship "A" at 3 coordinates*/ 
for (i = 0; i < 3; i++) {
    maps[yPos][xPos + i] = "A";
}


/*
xPos = Math.floor(Math.random() * 4);
document.write("<br> Ship B: x:" + xPos + " ")
yPos = Math.floor(Math.random() * 4);
document.write("y:" + yPos)
*/
/*
for (i = 0; i < 2; i++) {
    maps[yPos][xPos] = "B";
    yPos++;
}
*/
//console.log(maps);

/*
loop(to get a starting point) 
inside a loop (to make sure it is far enough away from ship a) 
inside a loop (to make a 2 coordinate ship) 
*/

/*Now we will check if we can place ship "B". This will avoid having ships overlap. Before placing the ship, the while loop runs checking to make sure that 
the coordinate doesn't have the value "A". If it does, the loop restarts until all coordinates */
let collision = true; //sets collision to true to initialize the while loop
while (collision === true) {
    xPos = Math.floor(Math.random() * 4);
    document.write("<br> Ship B: x:" + xPos + " ")
    yPos = Math.floor(Math.random() * 4);
    document.write("y:" + yPos);
    collision = false; //sets collision to false so the loop completes as long as all of the coordinates are valid

    /*loop to check if there is an "A" at either coordinates. if the first coordinate has "A", the whole while loop starts
    again, if the first coordinates passes but the second doesn't... the loop restarts. when both coordinates pass,
    the loop finishes.*/
    for (i = 0; i < 2; i++) {
        if (maps[yPos + i][xPos] === "A") {
            collision = true
            break;
        }
    }
}
/*Now we place ship B in the array since we know the coordinates are available and won't overlap another ship*/
for (i = 0; i < 2; i++) {
    maps[yPos + i][xPos] = "B";
}

    /*
    while (maps[yPos][xPos] == "A") {
        xPos = Math.floor(Math.random() * 4);
        document.write("<br> Ship B: x:" + xPos + " ")
        yPos = Math.floor(Math.random() * 4);
        document.write("y:" + yPos)
    }
    
    for (i = 0; i < 2; i++) {
        maps[yPos][xPos] = "B";
        yPos++;
    }
    */
    console.log(maps);

