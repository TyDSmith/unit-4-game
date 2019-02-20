let wins = 0;
let losses = 0;
let score = 0;
let valueGoal;

let blueGem = 0;
let redGem = 0;
let orangeGem = 0;
let greenGem = 0;


function setup(){
    var x = $("#target-num");
    var valueGoal = Math.floor(Math.random() * (120 - 19) + 19);
    x.html(valueGoal)
    var blueGem = Math.floor(Math.random() * (12 - 1) + 1);
    var redGem = Math.floor(Math.random() * (12 - 1) + 1);
    var orangeGem = Math.floor(Math.random() * (12 - 1) + 1);
    var greenGem = Math.floor(Math.random() * (12 - 1) + 1);
    while(blueGem === greenGem) {
      var blueGem = Math.floor(Math.random() * (12 - 1) + 1);
    }
    while(redGem === greenGem || redGem === blueGem) {
      var redGem = Math.floor(Math.random() * (12 - 1) + 1);
    }
    while(orangeGem === greenGem || orangeGem === redGem || orangeGem === blueGem) {
      var orangeGem = Math.floor(Math.random() * (12 - 1) + 1);
    }
    console.log(blueGem);
    console.log(redGem);
    console.log(orangeGem);
    console.log(greenGem);



$("#bluecrystal").click(addBlue);
function addBlue(){
    var x = $("#score-num");
    score = score + blueGem;
    x.html(score);
};

$("#redcrystal").click(addRed);
function addRed(){
    var x = $("#score-num");
    score = score + redGem;
    x.html(score);
};

$("#orangecrystal").click(addOrange);
function addOrange(){
    var x = $("#score-num");
    score = score + orangeGem;
    x.html(score);
};

$("#greencrystal").click(addGreen);
function addGreen(){
    var x = $("#score-num");
    score = score + greenGem;
    x.html(score);
};

$("#bluecrystal,#redcrystal,#orangecrystal,#greencrystal").click(compareValue);
function compareValue(){
    if (score == valueGoal) {
        wins++;
        console.log("Winner!");
        var y = $("#score-num");
        score = 0;
        $("#bluecrystal,#redcrystal,#orangecrystal,#greencrystal").off();
        setup();
    }

    if (score >= valueGoal) {
        losses++;
        console.log("Loser!");
        var y = $("#score-num");
        score = 0;
        $("#bluecrystal,#redcrystal,#orangecrystal,#greencrystal").off();
        setup();
    }
    
    var winsOutput = $("#wins-num");
    winsOutput.html(wins);

    var lossesOutput = $("#losses-num");
    lossesOutput.html(losses);
};















};

