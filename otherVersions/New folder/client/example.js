

async function loadExampleList() {
  // Ladda in data ifrån databasen (via backend)
  //test code
  //let query = "SELECT * FROM scores ORDER BY score ASC;"
  //let result = await db.query(query)
  //res.json(result)
  //end of test code 
  let result = await fetch("/data/scores")
  let highScores = await result.json()
  for (let person of highScores) {
    console.log(`High Score: Name:${person.name}: Score:${person.score}`)
    //document.getElementById("scores").innerHTML=`<br>High Score<br>Name:${person.name}<br> Score:${person.score}`
  }
  //renderExampleList(highScores)
}


/* function renderExampleList(highScores) {
  //let list = $("<ul/>")
  for (let person of highScores) {
    console.log(`High Score: Name:${person.name}: Score:${person.score}`)
  }
  //$("main").html(list)
  //console.log(renderExampleList(highScores))
} */

//original function
/* function renderExampleList(highScores) {
  let list = $("<ul/>")
  for (let person of highScores) {
    list.append(`<li>${person.name}: ${person.score}</li>`)
  }
  $("main").html(list)
  console.log(renderExampleList(highScores))
} */

// Lyssna på knapp-klick för att skapa en ny person
$("body").on("click", "button", createScore)

/* async function createScore(player, playerScore) {
  let person = {}
  person.name = player;
  person.score = playerScore;
  // Skicka den nya personen till databasen (via backend)
  let result = await fetch("/data/scores", {
    body: JSON.stringify(person),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
  // Ladda listan på personer igen, eftersom vi just uppdaterat den
 // loadExampleList()
} */
async function createScore(player, playerScore) {
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

}