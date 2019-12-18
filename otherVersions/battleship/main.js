/* Pseudo Kod
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
/*
let maps = [                   //y
    ["*", "o", "o", "o", "o"], //0
    ["o", "o", "o", "o", "*"], //1
    ["o", "o", "*", "o", "o"], //2
    ["*", "*", "o", "o", "o"], //3
    ["o", "o", "o", "o", "o"]  //4    
];
// x  0    1    2    3    4 
/*
console.log(maps)

//let x = prompt("Enter your x coordinate (0-4)");
//let y = prompt("Enter your y coordinate (0-4)");
//console.log(maps.indexOf("*"))
//console.log(x, y);
let init = true;
let x;
let y;
//
while (init || maps[y][x] !== "*") {
    if (!init) {
        console.log("You missed! Fire again")
    }
    init = false;
    y = prompt("Enter your y coordinate (0-4)");
    x = prompt("Enter your x coordinate (0-4)");




}
console.log("Hit! You sunk a ship!")
*/
/*
do {
    let x = prompt("Enter your x coordinate (0-4)");
    let y = prompt("Enter your y coordinate (0-4)");
    
    console.log(x,y);
    if (maps[x][y] == "*") {
        console.log("Hit! You sunk a ship!")
    } else {
        console.log("You missed! Fire again")
        //break;
    }
} while (maps[x][y] == "o")
*/
/*
function hitOrMiss() {
    if (maps[x][y] == "*") {
        console.log("Hit! You sunk a ship!")
    } else if (maps[x][y] == "o") {
        console.log("You missed! Fire again")
    }
}

//console.log(hitOrMiss())
*/
/*Version 3*//*
let maps = [                   //y 
    [0,0,0,0,0], //0
    [0,0,0,0,0], //1
    [0,0,0,0,0], //2
    [0,0,0,0,0], //3
    [0,0,0,0,0], //4    
];
// x 0 1 2 3 4 */
let maps = [                   //y
    ["o", "o", "o", "o", "o"], //0
    ["o", "o", "o", "o", "o"], //1
    ["o", "o", "o", "o", "o"], //2
    ["o", "o", "o", "o", "o"], //3
    ["o", "o", "o", "o", "o"]  //4    
];
// x  0    1    2    3    4 
let ships;
/*let xPos = Math.floor(Math.random() * 5);
let yPos = Math.floor(Math.random() * 5);

console.log("y" + yPos, "x" + xPos);
console.log(maps)
maps[yPos][xPos]="A";
*/
for (i=0; i<3; i++){
    let xPos = Math.floor(Math.random() * 5);
let yPos = Math.floor(Math.random() * 5);

console.log("y" + yPos, "x" + xPos);
console.log(maps)
maps[yPos][xPos]="A";
}
console.log(maps);



/*
for (i = 0; i < 4; i++) {
    ships = maps[Math.floor(Math.random() * 5)];
}
document.write(ships + "<br")
*/

//document.write(maps.length, maps[0].length);
//let x = math.floor()

//for (i = 0; i < maps.length; i++) {
//    document.write(maps[i][0] + " " + maps[i][1])
//}
/*
for (y in maps) {
    for (x in maps[y]) {
        document.write(maps[y][x] + " ")
    }
}
console.log()
*/

