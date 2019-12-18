let canvas = document.querySelector('#canvas');
let c = canvas.getContext("2d");
addEventListener("click", handleClick);


//let canvas2 = document.querySelector('#canvas2');
//let c2 = canvas2.getContext('2d');

//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;
canvas.width=500;
canvas.height=500;

//canvas2.width = 500;
//canvas2.height = 500;
//canvas2.border = 5;

console.log(canvas);
//console.log(canvas2);

drawLineGrid();
fromArray(boardFour);

