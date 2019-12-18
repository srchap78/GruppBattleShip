function placeShip(board, shipSize, shipSymbol) { //axis and shipSymbol taken out

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
            //console.log(`Y coord Collision detected at X:${xPos} Y:${yPos}`);
            break;
          }
        }
        for (x = 0; x < shipSize; x++) {
          for (s = 0; s < ships.length; s++) {//to iterate through all of ships indexes
            if (board[yPos][xPos + x] === ships[s].shipSymbol) {
              collision = true;
              //console.log(`X coord Collision detected at X:${xPos} Y:${yPos}`);
              break;
            }
          }
        }
        //console.log(`retrying because x:${xPos} y:${yPos} does not work for ship size:${shipSize}`);
      }
  
      tries++;
      //console.log(`end of while loop shiplength:${shipSize} on ${axis}axis starts at x:${xPos} y:${yPos} it took ${tries} tries`);
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