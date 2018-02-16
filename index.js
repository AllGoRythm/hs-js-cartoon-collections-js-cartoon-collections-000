
//add numbers to people in line
function dwarfRollCall(dwarves) {
  var lineOfDwarves = []

  for (var i = 0; i < dwarves.length; i++) {
    lineOfDwarves += (i + 1) + ". " + dwarves[i] + " "
  }

  lineOfDwarves = lineOfDwarves.slice(0, lineOfDwarves.length)
  return lineOfDwarves
}

//modify text
function summonCaptainPlanet(planeteerCalls){
  var hearTheCall = []

  for (var i = 0; i < planeteerCalls.length; i++) {
    hearTheCall.push(planeteerCalls[i].toUpperCase + "!")
  }
  return hearTheCall
}

//test word length
function longPlaneteerCalls(words) {
  var testValidity = []

  for (var i = 0; i < words.length; i++) {
    if (words.length < 4) {
      return false
    } else {
      return true
    }
  }
}

//search for the word
function findTheCheese (foods) {

  for (var i = 0; i < foods.length; i++) {

    switch (foods[i]) {
      case "cheddar":
        return "cheddar"
        break;
      case "gouda":
        return "gouda"
        break;
      case "camembert":
        return "camembert"
        break;
    }
  }
  return "no cheese!"
}
