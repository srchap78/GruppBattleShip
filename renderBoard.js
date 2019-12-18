function renderBoard(board) {
    //this loops through the whole array(board) which in our case is playerOneBoard. It will find every object in the array and 
    //create a <div> element in the <main> element on index.html 
    
    for (i = 0; i < board.length; i++) {
      for (z = 0; z < board.length; z++) {
  
        //dont understand what this is fully but it is declaring a variable whose value is <div>. this uses jquery.
        let div = $('<div/>');

        //this will assign a unique id to the div so we can use it to check our gameboard array later on.
        //we add an attribute (attr) to the variable 'div'. first is what attribute we want (the id) and then the value we want for it. 
        //it needs to be a string so we use back ticks ( ` ` ) here so we can use template literals to add the variables into
        //the value of the id. The variables i an z represent the objects in the array (playerOneBoard). Later on we will split the id
        //name which is a string and convert it to integers we can use to check the array.
        div.attr("id", `${i},${z}`);
  
        //.append is like pushing to an array. this will add the elements one after one another in <main> on index.html
        $('main').append(div)
      }
    }
  }

  