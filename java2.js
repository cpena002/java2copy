// Purppose To print out greater value number
// Signature (interger, interger) - > (greater interger)
// Examples greaterNum(1, 2) ->  2
//          greaterNum(6, 4) -> 6


// var a = prompt ("Enter First number");
// var b = prompt ("Enter Second number");
function greaterNum () {
  var a = prompt ("Enter First number");
  var b = prompt ("Enter Second number");
  if (a > b) {return a
  } else {return b}
};
//End of Greater Number Challenge


//Purppose Return "Hello, World" for given language, for 3 languages.
//Signature (string) -> string
//Examples helloWorld (es or de or en) -> "Hello, World" in the selected language.
          //  helloWorld (es) -> "Hola, Mundo"
          // helloWorld (de) -> "Hello, World" in Dutch.

function helloWorld() {
  // var es = "es";
  // var de = "de";
  // var jp = "jp";
  var language = prompt("select es for Spanish, de for German, or jp for Japanese");
  // while (language === false){
  //   alert("Not valid entry")
  // }
  if (language === "es") {
      alert("Hola, Mundo");
    }
  if (language === "de") {
    alert("Hallo, Welt");
    }
  if (language === "jp") {
    alert("Kon'nichiwa, sekai");
    }
  if (language !== "es" && language !== "de" && language !== "jp") {
    alert("Not valid entry. Try again");
    }
};
// and

function helloWorld () {
    var es = "Hola, Mundo";
    var de = "Hallo, Welt";
    var jp = "Kon'nichiwa, sekai";
  var language = prompt("select es for Spanish, de for German, or jp for Japanese")
  if (language === "es") {alert(es)}
  if (language === "de") {alert(de)}
  if (language === "jp") {alert(jp)}
  if (language !== "es" && language !== "de" && language !== "jp") {
    alert("Not valid entry. Try again");
    }
};

// and

function helloWorld () {
  var es = "es";
  var de = "de";
  var jp = "jp";
  var language = prompt("select es for Spanish, de for German, or jp for Japanese")
  if (language === es) {alert("Hola, Mundo")}
  if (language === de) {alert("Hallo, Welt")}
  if (language === jp) {alert("Kon'nichiwa, sekai")}
  if (language !== "es" && language !== "de" && language !== "jp") {
    alert("Not valid entry. Try again");
    }
};
// variable assignment is not the same as a string. if (language === es) {alert("Hola, Mundo")} was invoking a varskim      //  assignGrade(85) -> "B"
          // assignGrade(75) -> "C".

function assignGrade() {

  var x = prompt("Please input grade in number")
  if (90<x) {
    alert("A");
  }
  if (80<x && x<89) {
    alert("B");
  }
  if (70<x && x<79) {
    alert("C");
  }
  if (60<x && x<69) {
    alert("D");
  }
  if (0<x && x<59) {
    alert("F");
  }
  // if (typeof(parseInt(x) !== "number")) {
  //   alert("Please enter numeriacal number")
  // }
};
// end of Grae Assigner challenge. We tried alerting the user when he/she didn't enter a number, but we coldn't figured it out. Minichallenge for later.


//Purppose get random number, have user try to guess the random number.
//Signature (integer) -> string
//Examples randomNum() - > you guessed right = you win || you guesse wrong = try agian by going higher/lower

function randomNum() {
  var randNumber = Math.floor((Math.random() * 100) + 1);
  console.log(randNumber);
  var guess =  prompt("i'm thinking of a number between 1 and 100. Can you guess it?");
  console.log(guess);
  while (guess !== randNumber) {//need to use parseInt(guess) because variable guess comes back as a string and wee need to turn it into an integer.
    if (guess > randNumber) {
      var guess = prompt("Guess lower. Try again.");// guess needs to be a variable so whatever the user enters again applies to the variable.
    }
    if (guess < randNumber) {
      var guess = prompt("Guess higher. Try again.");
    }
  }
  if (guess === randNumber) { //need to use parseInt(guess) because variable guess comes back as a string and wee need to turn it into an integer.
    alert("You guessed right! You Win!")
  }
};
// The code above doesn't work because we're asking the while look and the last if to compare a string with a number.

//The code below is correct.

function randomNum() {
  var randNumber = Math.floor((Math.random() * 100) + 1);
  var guess =  prompt("i'm thinking of a number between 1 and 100. Can you guess it?");
  while (parseInt(guess) !== randNumber) {
    if (guess > randNumber) {
      var guess = prompt("Guess lower. Try again.");
    }
    if (guess < randNumber) {
      var guess = prompt("Guess higher. Try again.");
    }
  }
  if (parseInt(guess) === randNumber) {
    alert("You guessed right! You Win!")
  }
};
//End of Hi/Lo Game Challenge.

// Hi/Lo Game Challenge: Stretch one: game over after 7 tries.

function randomNum() {
  var randNumber = Math.floor((Math.random() * 100) + 1);
  var guess =  prompt("i'm thinking of a number between 1 and 100. Can you guess it?");
  var count = 0


    // Count reguluation of 7th tries goes below within while
    while (parseInt(guess) !== randNumber && count < 6) {
      count = count + 1;

      if (guess > randNumber) {
        guess = prompt("Guess lower. Try again.");
      }
      if (guess < randNumber) {
        guess = prompt("Guess higher. Try again.");
      }

      if (count === 5) {
        alert("You have one more guess")
      }

    }
// 7th trie alert goes outside the loop above, otherwise it breaks everything. 
    if (count === 6) {
      alert("You LOST!@")
    }


  if (parseInt(guess) === randNumber) {
    alert("You guessed right! You Win!")
  }
};
// Game Ends
