var score = 0;
const scores = {
  wins: 0,
  loses: 0,
  ties: 0,
};
document.getElementById("sr").innerHTML = score;
var stato = "Neutral";
var compImg = "images/laffy.png";
document.getElementById("state").innerHTML;
var holder;
document.getElementById("img").style.height = "90px";
document.getElementById("img").style.width = "90px";
document.getElementById("img").style.background = "transparent";

document.getElementById("img2").style.height = "90px";
document.getElementById("img2").style.width = "90px";
document.getElementById("img2").style.background = "transparent";
var count = 0;
console.log(compImg);
let autoplaying = false;
let autoId;
function jankenn(input) {
  if (input == "reset") {
    score = 0;
    document.getElementById("sr").innerHTML = `Score:${score}`;
  }
  if (input == "autoplay") {
    if (autoplaying == false) {
      autoId = setInterval(autoplay, 1000);
      setInterval(autoplay(), 1000);
    } else {
      clearInterval(autoId);
      autoplaying = false;
    }
  }

  count++;
  let c = ["rock", "paper", "scissors"];
  function randomInt() {
    var num = Math.random();

    if (num > 0.66) {
      return 0;
    } //probability 0.3
    else if (num > 0.33) {
      return 1;
    } // probability 0.3
    else return 2;
  } //probability 0.3

  // copied this code  lol :)

  let cchoice = randomInt();

  let comp = c[cchoice];

  if (input == "rock") {
    document.getElementById("img2").src = "images/rock.icon.png";
    if (comp == "scissors") {
      stato = "Won";
      scores.wins++;
      score++;
      document.getElementById("img").src = "images/scissorsicon.png";
    } else if (comp == "paper") {
      stato = "Lost";
      scores.loses++;
      score--;
      document.getElementById("img").src = "images/paper2.icon.png";
    } else {
      stato = "Drew";
      scores.ties++;
      document.getElementById("img").src = "images/rock.icon.png";
      console.log(compImg);
    }
  }
  if (input == "paper") {
    document.getElementById("img2").src = "images/paper2.icon.png";
    if (comp == "scissors") {
      stato = "Lost";
      scores.loses++;
      score--;
      document.getElementById("img").src = "images/scissorsicon.png";
    } else if (comp == "rock") {
      stato = "Won";
      score++;
      scores.wins++;
      document.getElementById("img").src = "images/rock.icon.png";
    } else {
      stato = "Drew";
      scores.ties++;
      document.getElementById("img").src = "images/paper2.icon.png";
    }
  }
  if (input == "scissors") {
    document.getElementById("img2").src = "images/scissorsicon.png";
    if (comp == "paper") {
      stato = "Won";
      score++;
      scores.wins++;
      document.getElementById("img").src = "images/paper2.icon.png";
    } else if (comp == "rock") {
      stato = "Lost";
      scores.loses++;
      score--;
      document.getElementById("img").src = "images/rock.icon.png";
    } else {
      stato = "Drew";
      scores.ties++;
      document.getElementById("img").src = "images/scissorsicon.png";
    }
  }

  if (stato == "Won") {
    document.getElementById("state").style.color = "darkgreen";
  } else if (stato == "Lost") {
    document.getElementById("state").style.color = "darkred";
  } else if (stato == "Drew") {
    document.getElementById("state").style.color = "black";
  }

  console.log(scores);
  document.getElementById("sr").innerHTML = `${score}`;
  document.getElementById("state").innerHTML = "";
}

function autoplay() {
  autoplaying = true;
  console.log("working");
  let list = ["rock", "paper", "scissors"];
  var num2 = Math.random();
  function randInt() {
    if (num2 > 0.66) {
      return 0;
    } //probability 0.3
    else if (num2 > 0.33) {
      return 1;
    } // probability 0.3
    else return 2;
    //probability 0.3

    // copied this code  lol :)
  }
  let bot2 = randInt();

  let vax = list[bot2];
  jankenn(vax);
}

const ibz = {
  anime: "onepiece",
  manga: "vagabond",
  color: "green",
  sport: "soccer",
  rating: function (a) {
    if (a == 9) {
      console.log("vinland Saga");
      console.log("code geass");
    } else {
      console.log("nooooooooice 9s");
    }
  },
};
function find() {
  print("found");
}
const jax = ["messi", "maradona", "ronaldo", "pele"];
jax.forEach((value, index) => {
  if (index === 0) {
    index = "Alien";
  }
  if (index === 3) {
    index = "Fraud";
  }
  console.log(value + " " + index);
});
const math = {
  add: (a, b) => {
    return a + b;
  },
};
console.log(math.add(5, 15));
