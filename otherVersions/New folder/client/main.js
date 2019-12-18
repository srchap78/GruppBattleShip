//playerOne = prompt("Player one, please enter your name");
//playerTwo = prompt("Player two, please enter your name");
let playerName = prompt("Please enter your name")
alert("Click the square to fire at a ship!");

let ships = [
  { shipName: "Carrier", shipSize: 5, shipSymbol: "C" },
  { shipName: "Battleship", shipSize: 4, shipSymbol: "B" },
  { shipName: "U Boat", shipSize: 3, shipSymbol: "U" },
  { shipName: "Destroyer", shipSize: 3, shipSymbol: "D" },
  { shipName: "Patrol Boat", shipSize: 2, shipSymbol: "P" },
];

function placeShip1(board, shipSize, shipSymbol) { //axis and shipSymbol taken out

  let collision = true; //sets collision to true to initialize the while loop

  //gives us 0 or 1 to determine vertical or horizontal placement
  let axis = Math.floor(Math.random() * 2);

  while (collision === true) {
    let tries = 1;
    //Logic fail here as neither horizontal or vertical ships will be wholly on the 9th index
    xPos = Math.floor(Math.random() * (board.length - shipSize + 1));
    yPos = Math.floor(Math.random() * (board.length - shipSize + 1));
    collision = false;

    //beginning of test code 
    for (y = 0; y < shipSize; y++) {
      for (s = 0; s < ships.length; s++) {//to iterate through all of ships indexes
        if (board[yPos + y][xPos] === ships[s].shipSymbol) { //checks to make sure there isnt a value -- it works!
          collision = true;
          console.log(`Y coord Collision detected at X:${xPos} Y:${yPos}`);
          break;
        }
      }
      for (x = 0; x < shipSize; x++) {
        for (s = 0; s < ships.length; s++) {//to iterate through all of ships indexes
          if (board[yPos][xPos + x] === ships[s].shipSymbol) {
            collision = true;
            console.log(`X coord Collision detected at X:${xPos} Y:${yPos}`);
            break;
          }
        }
      }
      console.log(`retrying because x:${xPos} y:${yPos} does not work for ship size:${shipSize}`);
    }

    tries++;
    console.log(`end of while loop shiplength:${shipSize} on ${axis}axis starts at x:${xPos} y:${yPos} it took ${tries} tries`);
  }//end of while loop

  if (axis === 0) {
    {
      //for vertical ships (descending)
      for (i = 0; i < shipSize; i++) {
        board[yPos + i][xPos] = shipSymbol;
      }
    }
  } else {
    //for horizontal (going to the right)
    for (i = 0; i < shipSize; i++) {
      board[yPos][xPos + i] = shipSymbol;
    }
  }
}

loadExampleList();

let playerOneBoard = [                   //y
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"], //0
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"], //1
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o"]
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

/* for (i = 0; i < 3; i++) {
  let xPos = Math.floor(Math.random() * 5); //random number 0-4 for x axis
  let yPos = Math.floor(Math.random() * 5); //random number 0-4 for y axis
  /* let xPos = prompt("Player one, please enter your ship's x coordinate (0-4)"); //random number 0-4 for x axis
  while (xPos > 4 || xPos < 0) {
      xPos = prompt("Player one, you must enter your ship's x coordinate (0-4). Please try again."); //if an invalid number is entered, asks again until it is valid
  }
  let yPos = prompt("Player one, please enter your ship's y coordinate (0-4)"); //random number 0-4 for y axis
  while (yPos > 4 || yPos < 0) {
      yPos = prompt("Player one, you must enter your ship's y coordinate (0-4). Please try again."); //if an invalid number is entered, asks again until it is valid
  } */

/*
while (xPos > 4 || xPos < 0 || yPos > 4 || yPos < 0) {
    alert("You must enter a number between 0-4");
    let xPos = prompt("Player one, please enter your ship's x coordinate (0-4)"); //random number 0-4 for x axis
    let yPos = prompt("Player one, please enter your ship's y coordinate (0-4)"); //random number 0-4 for y axis
}
console.log("x" + xPos, "y" + yPos);
//console.table(playerOneBoard)
playerOneBoard[yPos][xPos] = "A"; //changes value at playerOneBoard playerOneBoard[yPos][xPos] to "A"
} 
//console.log(playerOneBoard);

for (i = 0; i < 3; i++) {
let xPos = Math.floor(Math.random() * 5); //random number 0-4 for x axis
let yPos = Math.floor(Math.random() * 5); //random number 0-4 for y axis
/* let xPos = prompt("Player two, please enter your ship's x coordinate (0-4)"); //random number 0-4 for x axis
while (xPos > 4 || xPos < 0) {
    xPos = prompt("Player two, you must enter your ship's x coordinate (0-4). Please try again."); //if an invalid number is entered, asks again until it is valid
}
let yPos = prompt("Player two, please enter your ship's y coordinate (0-4)"); //random number 0-4 for y axis
while (yPos > 4 || yPos < 0) {
    yPos = prompt("Player two, you must enter your ship's y coordinate (0-4). Please try again."); //if an invalid number is entered, asks again until it is valid
} */
//console.log("y" + yPos, "x" + xPos);
//console.table(playerTwoBoard)
//playerTwoBoard[yPos][xPos] = "A"; //changes value at playerTwoBoard playerTwoBoard[yPos][xPos] to "A"
//}
//console.log(playerTwoBoard);

let x;
let y;
let shipsA = 3; //sets player ones's ships to 3
let shipsB = 3; //sets player two's ships to 3
console.log(`There are ${shipsA} ships for player one to find!`);
console.log(`There are ${shipsB} ships for player two to find!`);

// Denna startar vi först så att vi laddar in listan på personer
//loadExampleList();

let playerOneScore = 0;
let playerTwoScore = 0;


/* while (shipsA > 0 && shipsB > 0) { //while there are more than 0 ships the loop will start/continue
    y = prompt("Player 1:To shoot, enter your y coordinate (0-4)");
    while (y > 4 || y < 0) {
        y = prompt("Player one, you must enter your shot's y coordinate (0-4). Please try again."); //if an invalid number is entered, asks again until it is valid
    }
    x = prompt("Player 1:To shoot, enter your x coordinate (0-4)");
    while (x > 4 || x < 0) {
        x = prompt("Player one, you must enter your shot's x coordinate (0-4). Please try again."); //if an invalid number is entered, asks again until it is valid
    }

    if (playerTwoBoard[y][x] !== "A") { //if the player guesses incorrectly, they try again
        console.log("You missed! Wait for your next turn player one");
        playerOneScore++;
    } else if (playerTwoBoard[y][x] == "A") { //if there is a hit, 1 is subtracted from ships and loop continues
        console.log("Hit! You sunk a ship player one!");
        shipsA--;
        playerOneScore++;
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
        console.log("You missed! Wait for your next turn player two");
        playerTwoScore++;

    } else if (playerOneBoard[y][x] == "A") { //if there is a hit, 1 is subtracted from ships and loop continues
        console.log("Hit! You sunk a ship player two!");
        shipsB--;
        playerTwoScore++;

        if (shipsB == 0) {
            break;
        }
        console.log(`There are ${shipsB} ships remaining for player two!`);
    }
} */

/* async function createScore(player, playerScore) {
  let person = {}
  person.name = player;
  person.score = playerScore;
  
  let result = await fetch("/data/scores", {
    body: JSON.stringify(person),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
  // Ladda listan på personer igen, eftersom vi just uppdaterat den

} */

//when there are 0 ships remaining, the loop breaks and prints the following message
if (shipsA == 0) {
  console.log("Congratulations Player one! You won! All ships are sunk!!" + `It took you ${playerOneScore} shots to win!`);
  createScore(playerOne, playerOneScore);
  loadExampleList();
  //renderExampleList();

} else if (shipsB == 0) {
  console.log("Congratulations Player two! You won! All ships are sunk!!" + `It took you ${playerTwoScore} shots to win!`);
  createScore(playerTwo, playerTwoScore);
  loadExampleList();
  //renderExampleList();

}
placeShip1(playerOneBoard, 5, "C");
placeShip1(playerOneBoard, 4, "B");
placeShip1(playerOneBoard, 3, "U");
placeShip1(playerOneBoard, 3, "D");
placeShip1(playerOneBoard, 2, "P");

workingOnRenderBoard(playerOneBoard);
//newRenderBoard(playerOneBoard);


console.table(playerOneBoard);

//event listener that selects the html element 'body' 
//and when there is a 'click' on the 'button' element the function updateBoard is called.
$('body').on('click', 'button', updateBoard)

function updateBoard() {
  //takes what is entered from input boxes after the button 'go' has been pressed and 
  //writes out the strings in the 'board' element
  let x = $('#x-coord').val()
  let y = $('#y-coord').val()
  //puts the two strings together
  let result = x + y
  //puts text at the element 'board'
  $('#board').text(result)
  //this erases the numbers from the input boxes ('x-coord' and 'y-coord')
  x = $('#x-coord').val('')
  y = $('#y-coord').val('')
}

function workingOnRenderBoard(board) {
  //this loops through the array board to check for a specific value and adds the 
  //appropriate div element for the value ('*', 't', and whatever other value)

  for (i = 0; i < board.length; i++) {
    for (z = 0; z < board.length; z++) {

      //dont understand what this is
      let div = $('<div/>');
      div.attr("id", `${i},${z}`);



      //.append is like pushing to an array. this will add the elements after one another in main
      $('main').append(div)
    }
  }
}



function renderBoard(board) {
  //this loops through the array board to check for a specific value and adds the 
  //appropriate div element for the value ('*', 't', and whatever other value)
  for (let y of board) {
    for (let x of y) {

      //dont understand why this is
      let div = $('<div/>')


      //pushes the canoe div and uses its css if a '*'
      if (x === 'A') {
        div.addClass('canoe')
      }
      //pushes the torpedoe div if a 't' and uses its css
      else if (x === '*') {
        div.addClass('torpedoe')
      }

      //if the value is neither '*' or 't' it will push a regular div element and use its css

      //.append is like pushing to an array. this will add the elements after one another in main
      $('main').append(div)
    }
  }
}

//test!
function newRenderBoard(board) {
  //this loops through the array board to check for a specific value and adds the 
  //appropriate div element for the value ('*', 't', and whatever other value)
  for (let y of board) {
    for (let x of y) {

      //dont understand why this is
      let div = $('<div/>')

      //test code for colorful ships
      //pushes the canoe div and uses its css if a '*'
      if (x === 'U') {
        div.attr('uBoat')
      }
      //pushes the torpedoe div if a 't' and uses its css
      else if (x === 'B') {
        div.attr('battleShip')
      } else if (x === 'U') {
        div.attr('uBoat')
      } else if (x === 'C') {
        div.attr('carrier')
      } else if (x === 'D') {
        div.attr('destroyer')
      } else if (x === 'P') {
        div.attr('patrolBoat')
      }

      //end of colorful ships test code


      //if the value is neither '*' or 't' it will push a regular div element and use its css

      //.append is like pushing to an array. this will add the elements after one another in main
      $('main').append(div)
    }
  }
}
//end test



//listen event that looks at the 'body' element and when there is a click on a div within 
// the main element it will call the place function
//$('body').on('click', 'main>div', place)


//the code below is a test to split a string and convert it to a number
let stringTosplit = "1 2 3 4 5 6 7 8";
let newStringArray = stringTosplit.split("")
console.log(newStringArray)
let seperatedString = newStringArray[0];
console.log(seperatedString)
let convertedString = parseInt(newStringArray[0], 10);
let numberToTest = 1;
console.log("there should be true after this:" + (numberToTest === convertedString));
//end of split string to number test code */

//testing to return the unique id of whatever is clicked
$('body').on('click', 'main>div', returnId) //listen event for a click
function returnId() {
  console.log(this.id);
}
//end of test for returning unique id
let battleShipHits = 0;
let carrierHits = 0;
let uBoatHits = 0;
let destroyerHits = 0;
let patrolBoatHits = 0;

let totalShips = 5;
let guess = 0;

//now a test to see a hit
$('body').on('click', 'main>div', hitOrMiss) //listen event for a click
function hitOrMiss() {
  guess++;
  let newArray = this.id.split("");
  let xcoord = parseInt(newArray[0]);
  let ycoord = parseInt(newArray[2]);
  //console.log(xcoord + "" + ycoord)

  for (s = 0; s < ships.length; s++) {//to iterate through all of ships indexes
    if (playerOneBoard[xcoord][ycoord] === ships[s].shipSymbol) { //checks to make sure there isnt a value -- it works!
      console.log("its a hit!!!!")
      if (ships[s].shipSymbol === 'U') {
        $(this).addClass('uBoat')
        uBoatHits++;
        // document.getElementById("info").innerHTML=`You have hit the uboat! There are ${totalShips} ships left.`
        if (uBoatHits === 3) {
          totalShips--;
         // document.getElementById("info").innerHTML=`You have sunk the uboat! There are ${totalShips} ships left.`
          alert(`You have sunk the uboat! There are ${totalShips} ships left."`)
        }
      }
      else if (ships[s].shipSymbol === 'B') {
        $(this).addClass('battleShip')
        battleShipHits++;
        //let remainingBattleship = 4-battleShipHits;
         //document.getElementById("info").innerHTML=`You have hit the battleship! There are ${remainingBattleship} coordinates left to sink it. There are ${totalShips} ships left.`
        if (battleShipHits === 4) {
          totalShips--;
          //document.getElementById("info").innerHTML=`You have sunk the battleship! There are ${totalShips} ships left.`
          alert(`You have sunk the battleship! There are ${totalShips} ships left."`)
        }
        console.log("hits on battleship:" + battleShipHits)
      } else if (ships[s].shipSymbol === 'C') {
        $(this).addClass('carrier')
        carrierHits++;
        if (carrierHits === 5) {
          totalShips--;
          // document.getElementById("info").innerHTML=`You have sunk the carrier! There are ${totalShips} ships left.`
          alert(`You have sunk the carrier! There are ${totalShips} ships left."`)
        }
      } else if (ships[s].shipSymbol === 'D') {
        $(this).addClass('destroyer')
        destroyerHits++;
        if (destroyerHits === 3) {
          totalShips--;
          // document.getElementById("info").innerHTML=`You have sunk the destroyer! There are ${totalShips} ships left.`
          alert(`You have sunk the destroyer! There are ${totalShips} ships left."`)
        }
      } else if (ships[s].shipSymbol === 'P') {
        $(this).addClass('patrolBoat')
        patrolBoatHits++;
        if (patrolBoatHits === 2) {
          totalShips--;
          //document.getElementById("info").innerHTML=`You have sunk the patrol boat! There are ${totalShips} ships left.`
          alert(`You have sunk the patrol boat! There are ${totalShips} ships left."`)
        }
      }
    }
    else if (playerOneBoard[xcoord][ycoord] === "o") {
      $(this).addClass('miss')
      //document.getElementById("info").innerHTML=`You missed! Fire again! There are ${totalShips} ships left.`
    }

  }
  //end of hitOrMiss test

if (totalShips === 0){
  alert(`${playerName}, you won!!! It took you ${guess} shots to sink all of the ships`)
  createScore(playerName, guess);
  loadExampleList();

}

  








































    function place() {
      //depending on the div id, this will change the div id to something else
      if ($(this).hasClass('torpedoe')) { //if the background is a torpedoe, it changes div id="torpedoe"
        $(this).addClass('bang') // to div id="bang"
      } else if ($(this).hasClass('canoe')) { //if the div id="canoe" is clicked on, it will change to 
        $(this).addClass('torpedoe') //div id="torpedoe"
      } else { //if the div id is equal to anything else, it will become
        $(this).addClass('canoe') //div id="canoe"
      }
    }
  }
