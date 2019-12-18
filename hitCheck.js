function hitOrMiss() {
    //increases guess by 1 to keep track of guesses and is used for the high score list
    guess++;

    //new variable to be used to split the div.id so we can get integers(int) to use to check the array
    let newArray = this.id.split("");

    //new variable that is the index place of newArray that is converted to an int to be used later to check the gameboard(playerOneBoard) array
    let xcoord = parseInt(newArray[0]);
    let ycoord = parseInt(newArray[2]);

    //to help us go through all of ships index places so each of the different ships' shipSymbol is checked
    for (s = 0; s < ships.length; s++) {
        //this checks for the value at playerOneBoard[][] and then depending on what it is, will
        //execute the code after the appropriate if or else if statement.
        if (playerOneBoard[xcoord][ycoord] === ships[s].shipSymbol) {

            if (ships[s].shipSymbol === 'U') {
                //adds the class 'uboat' to the div that is clicked on and then follows the styling for .uboat on styles.css
                $(this).addClass('uBoat')

                //increases the hits so we can can if the ship is sunk
                uBoatHits++;

                //this variable is declared and set to the value 3 to represent that there are 3 hits to sink it
                let uBoatLeft = 3 - uBoatHits;

                //this writes to the 'info' element to show the player they hit the ship, how many hits are left to sink the ship
                //and the number of ships that are left to sink.
                document.getElementById("info").innerHTML = `You have hit the uboat! There are ${uBoatLeft} coordinates left to sink it. There are ${totalShips} ships left.`

                //this checks to see if there are 3 hits and if there are the boat is sunk!
                if (uBoatHits === 3) {

                    //this will decrement (subtract 1 from) totalShips. There are 5 totalShips so when 0 is reached the game is over.
                    totalShips--;

                    //this will write at the element 'info'
                    document.getElementById("info").innerHTML = `You have sunk the uboat! There are ${totalShips} ships left.`
                }
            }
            //each of the different statements below are the same as above except they are just a tiny bit different because its 
            //for different ships. So if you arent sure what a line does below, check above and find the similar line of code.
            else if (ships[s].shipSymbol === 'B') {
                $(this).addClass('battleShip')
                battleShipHits++;
                let remainingBattleship = 4 - battleShipHits;
                document.getElementById("info").innerHTML = `You have hit the battleship! There are ${remainingBattleship} coordinates left to sink it. There are ${totalShips} ships left.`

                if (battleShipHits === 4) {
                    totalShips--;
                    document.getElementById("info").innerHTML = `You have sunk the battleship! There are ${totalShips} ships left.`
                }

            } else if (ships[s].shipSymbol === 'C') {
                $(this).addClass('carrier')
                carrierHits++;
                let carrierLeft = 5 - carrierHits;
                document.getElementById("info").innerHTML = `You have hit the carrier! There are ${carrierLeft} coordinates left to sink it. There are ${totalShips} ships left.`

                if (carrierHits === 5) {
                    totalShips--;
                    document.getElementById("info").innerHTML = `You have sunk the carrier! There are ${totalShips} ships left.`
                }

            } else if (ships[s].shipSymbol === 'D') {
                $(this).addClass('destroyer')
                destroyerHits++;
                let destroyerLeft = 3 - destroyerHits;
                document.getElementById("info").innerHTML = `You have hit the destroyer! There are ${destroyerLeft} coordinates left to sink it. There are ${totalShips} ships left.`

                if (destroyerHits === 3) {
                    totalShips--;
                    document.getElementById("info").innerHTML = `You have sunk the destroyer! There are ${totalShips} ships left.`
                }

            } else if (ships[s].shipSymbol === 'P') {
                $(this).addClass('patrolBoat')
                patrolBoatHits++;
                let patrolBoatLeft = 2 - patrolBoatHits;
                document.getElementById("info").innerHTML = `You have hit the patrol boat! There are ${patrolBoatLeft} coordinates left to sink it. There are ${totalShips} ships left.`

                if (patrolBoatHits === 2) {
                    totalShips--;
                    document.getElementById("info").innerHTML = `You have sunk the patrol boat! There are ${totalShips} ships left.`
                }
            }
        }
        else if (playerOneBoard[xcoord][ycoord] === "o") {
            $(this).addClass('miss')
            document.getElementById("info").innerHTML = `You missed! Fire again! There are ${totalShips} ships left.`
        }

    }

    //when totalships is equal to 0 the game is over. the total guesses are sent to the database. Then the high score is shown when 
    //loadExampleList is called.
    if (totalShips === 0) {
        document.getElementById("info").innerHTML = `${playerName}, you won!!! It took you ${guess} shots to sink all of the ships`
        createScore(playerName, guess);
        loadExampleList();

    }
}