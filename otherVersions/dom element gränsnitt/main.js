let board = [
  [' ', ' '],
  ['*', 't']
]
renderBoard();
place();

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

function renderBoard() {
  //this loops through the array board to check for a specific value and adds the 
  //appropriate div element for the value ('*', 't', and whatever other value)
  for (let y of board) {
    for (let x of y) {

      //dont understand why this is
      let div = $('<div/>')

      //pushes the canoe div and uses its css if a '*'
      if (x === '*') {
        div.addClass('canoe')
      }
      //pushes the torpedoe div if a 't' and uses its css
      else if (x === 't') {
        div.addClass('torpedoe')
      }
      //if the value is neither '*' or 't' it will push a regular div element and use its css

      //.append is like pushing to an array. this will add the elements after one another in main
      $('main').append(div)
    }
  }
}



//listen event taht looks at the 'body' element and when there is a click on a div within 
// the main element it will call the place function
$('body').on('click', 'main>div', place)

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