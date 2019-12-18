//this works! but you must have declared the array before you put it in the function.
/* board = the array's name, rows = however many horizontal wanted, columns = however many vertical wanted*/
function createBoard(board, rows, columns) {
    for (i = 0; i < rows; i++) {  //this loop will run however many times the value of rows
        board.push([i])  //to push a new array in the array however many times it loops!! 
        for (c = 0; c < columns; c++) { //will create objects inside the array(s) for as many times the value of columns
            board[i][c] = "o" //places the value "o" at the specified coordinate(s)
        }
    }
}
