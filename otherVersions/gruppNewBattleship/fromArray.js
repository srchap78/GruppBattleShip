function fromArray(board) {
    let canvas = document.querySelector("#canvas"); //why does this need to be here when it is declared in main.js
    let c = canvas.getContext('2d'); //why does this need to be here when it is declared in main.js
    for (x = 0; x < board.length; x++) {
        for (y = 0; y < board[x].length; y++) {
            if (board[y][x] == "A") {
                c.fillStyle = 'red';
                c.fillRect(x * 50, y * 50, 50, 50)

            }
            
            else if(board[y][x] === "B"){
                c.fillStyle = 'green';
                c.fillRect(x * 50, y * 50, 50, 50)

            }
            else if (board[y][x] === "C"){
                c.fillStyle = 'yellow';
                c.fillRect(x * 50, y * 50, 50, 50)

            }
            else if (board[y][x] === "D"){
                c.fillStyle='grey';
                ;
                c.fillRect(x * 50, y * 50, 50, 50)

            }
            else if(board[y][x] === "E"){
                c.fillStyle = 'purple';
                c.fillRect(x * 50, y * 50, 50, 50)

            }
            else if(board[y][x] === "F"){
                c.fillStyle = 'pink';
                c.fillRect(x * 50, y * 50, 50, 50)

            }
        }
    }
}


