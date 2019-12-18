function createBoard(board, rows, columns) {
    for (i = 0; i < rows; i++) {  //this loop will run however many times the value of rows
        board.push([i])  //to push a new array in the array however many times it loops!! 
        for (c = 0; c < columns; c++) { //will create objects inside the array(s) for as many times the value of columns
            board[i][c] = "O" //places the value "o" at the specified coordinate(s)
        }
    }
}