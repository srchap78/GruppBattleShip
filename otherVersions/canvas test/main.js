/*
fillCanvasWithAColor();
makeADiagonalLine();
makeARectangle();
colorFilledRectangle();
drawLine();
drawCircle();
//giveCoordinates();
clickDraw();
randomCircles();
*/

drawGrid();

function fillCanvasWithAColor() {
    //this variable refers to the canvas on the html page
    let c = document.getElementById("myCanvas");
    //the getContext() method returns an object that provides methods and properties for drawing on the canvas
    let ctx = c.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, c.width, c.height);
}

function makeADiagonalLine() {
    //this variable refers to the canvas on the html page
    let c = document.getElementById("myCanvas");
    //the getContext() method returns an object that provides methods and properties for drawing on the canvas
    let ctx = c.getContext("2d");
    ctx.moveTo(0, 0); //starting X Y position of the line.
    ctx.lineTo(500, 500); //ending X Y position.
    ctx.stroke(); //the line has already been created(its just invisible) but this actually draws it
}

function makeARectangle() {
    //this variable refers to the canvas on the html page
    let c = document.getElementById("myCanvas");
    //the getContext() method returns an object that provides methods and properties for drawing on the canvas
    let ctx = c.getContext("2d");
    ctx.rect(200, 20, 150, 100); //X, Y, width, height. X Y is the top left of the rectangle
    ctx.stroke(); //this actually draws it
}

function colorFilledRectangle() {
    //this variable refers to the canvas on the html page
    let c = document.getElementById("myCanvas");
    //the getContext() method returns an object that provides methods and properties for drawing on the canvas
    let ctx = c.getContext("2d");
    ctx.rect(200, 20, 150, 100); //X, Y, width and height. X Y is the top left of the rectangle
    ctx.fillStyle = "yellow"; //choosing the color to fill the rectangle with
    ctx.fill(); //this actually fills the rectangle
}

function drawLine() {
    //this variable refers to the canvas on the html page
    let c = document.getElementById("myCanvas");
    //the getContext() method returns an object that provides methods and properties for drawing on the canvas
    let ctx = c.getContext("2d");
    ctx.beginPath(); //!!not sure why you need this!! find out why
    ctx.moveTo(100, 200); //starting x y coord
    ctx.lineTo(300, 100); //ending x y coord
    ctx.strokeStyle = "red"; //change color of the line with this if you want
    ctx.stroke();
}

function drawCircle() {
    //this variable refers to the canvas on the html page
    let c = document.getElementById("myCanvas");
    //the getContext() method returns an object that provides methods and properties for drawing on the canvas
    let ctx = c.getContext("2d");
    ctx.beginPath();
    //we will use the arc() method. X Y coordinate for the circle, the third parameter is the radius, then we have teh starting angle and then the end angle
    //2*math.PI is the same as a whole circle
    ctx.arc(150, 90, 75, 0, 2 * Math.PI);
    //give the circle a bigger border
    ctx.lineWidth = 5;
    //change the line color
    ctx.strokeStyle = "purple";
    //fill the circle with a color
    ctx.fillStyle = 'red';
    //fill in and draw the circle
    ctx.fill();
    ctx.stroke();
}

function giveCoordinates() {
    //this will give the coordinates in the canvas element not the screen
    //this variable refers to the canvas on the html page
    canvas = document.getElementById("myCanvas");
    //the getContext() method returns an object that provides methods and properties for drawing on the canvas
    ctx = canvas.getContext("2d");
    //event listener that on the action mousedown, function getCoords is called
    //this event listener would be on the html page usually but can be in a function as well
    canvas.addEventListener("mousedown", getCoords);
}
function getCoords(event) {
    X = event.pageX - canvas.offsetLeft;
    Y = event.pageY - canvas.offsetTop;
    alert(`X: ${X} Y:${Y}`)
}

function clickDraw() { //just for adding evenlistener
    canvas = document.getElementById("myCanvas");
    canvas.addEventListener("mousedown", drawCircleWithClick, false);
}

function drawCircleWithClick(event) {
    //this variable refers to the canvas on the html page
    let c = document.getElementById("myCanvas");
    //the getContext() method returns an object that provides methods and properties for drawing on the canvas
    let ctx = c.getContext("2d");

    //Here we get teh x and y coords with with the mouse click event
    x = event.pageX;
    y = event.pageY;


    //fill the circle with a color
    ctx.fillStyle = 'green';
    ctx.beginPath();
    //we will use the arc() method. X Y coordinate for the circle, the third parameter is the radius, then we have teh starting angle and then the end angle
    //2*math.PI is the same as a whole circle
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    //fill in and draw the circle
    ctx.fill();
    ctx.stroke();
}

function randomCircles() {
    //this variable refers to the canvas on the html page
    let c = document.getElementById("myCanvas");
    //the getContext() method returns an object that provides methods and properties for drawing on the canvas
    let ctx = c.getContext("2d");
    //a for loop to loop through and draw 10 circles
    for (i = 0; i < 10; i++) {
        //get random x and y coords using the width and height of our canvas element
        x = Math.random() * 500;
        y = Math.random() * 500;
        //fill the circle with a color
        ctx.fillStyle = 'white';
        ctx.beginPath();
        //we will use the arc() method. X Y coordinate for the circle, the third parameter is the radius, then we have teh starting angle and then the end angle
        //2*math.PI is the same as a whole circle
        ctx.arc(x, y, 40, 0, 2 * Math.PI);
        //fill in and draw the circle
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}

//defining for click counter
let clicks = 0;
function clickCounter() {
    //this variable refers to the canvas on the html page
    let c = document.getElementById("myCanvas");
    //the getContext() method returns an object that provides methods and properties for drawing on the canvas
    let ctx = c.getContext("2d");

    //raises clicks by 1 every time the function is called
    clicks++;

    //this will clear the canvas so it isnt just continuously overwriting the values
    ctx.clearRect(0, 0, c.width, c.height);
    //this outputs text, the last two are the X and Y coordinates of the text to start
    ctx.fillText(`Score: ${clicks}`, 150, 30);

    if (clicks > 10) {
        alert("You have clicked 10 times. It is time to stop");
    }

}

//this will be for a clickable grid!!!!!!!!!!
window.onload = function () {
    //this variable refers to the canvas on the html page
    c = document.getElementById("myCanvas");
    //the getContext() method returns an object that provides methods and properties for drawing on the canvas
    ctx = c.getContext("2d");
    //event listener (can be plased elsewhere, doesnt need to be in a function)
    c.addEventListener('click', handleClick);

    //for drawGrid
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
}

//to get the mouse position
//getBoundingClientRect is used to get only the canvas
function getMousePos(c, evt) {
    let rect = c.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    }
}
function handleClick(e) {
    c = document.getElementById("myCanvas");
    //the getContext() method returns an object that provides methods and properties for drawing on the canvas
    ctx = c.getContext("2d");
    let pos = getMousePos(c, e);
    //this is the x and y coords on the canvas
    posx = pos.x;
    posy = pos.y;
    alert(`X:${posx} Y:${posy}`);
}

function drawBoxGrid() {
    c = document.getElementById("myCanvas");
    //the getContext() method returns an object that provides methods and properties for drawing on the canvas
    ctx = c.getContext("2d");
    for (x = 0; x < 8; x++) {
        for (y = 0; y < 8; y++) {
            //using the % mod operator, if x and y give the same remainder, fill the square with black
            if (x % 2 == y % 2) {
                ctx.fillStyle = "black";
                //draws the square with x,y,width,height
                ctx.fillRect(63 * x, 63 * y, 63, 63);
            }
            else {
                ctx.fillStyle = "white";
                ctx.fillRect(63 * x, 63 * y, 63, 63);
            }
        }
    }
}

function drawGrid() {
    c = document.getElementById("myCanvas");
    //the getContext() method returns an object that provides methods and properties for drawing on the canvas
    ctx = c.getContext("2d");
    //this loop will place a line at i+ 60 pixel width
    for (i = 0; i < 600; i = 60 + i) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 600);
        ctx.stroke();
    }
    for (j=0; j<=600; j=60+j){
        ctx.moveTo(0, j);
        ctx.lineTo(600, j);
        ctx.stroke();
    }
}