//gem vars
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;   
var gem4 = 0;
//other vars
var target = 0; //create a random target score
var win = 0; //win++ add winn
var loss = 0; //loss++ add loss
var currentScore = 0; //add up gem values

//create a random score generator for gems
function numGenerator(){
    gem1 = Math.floor((Math.random() * 10) + 2);
    gem2 = Math.floor((Math.random() * 10) + 2);
    gem3 = Math.floor((Math.random() * 10) + 2);
    gem4 = Math.floor((Math.random() * 10) + 2);
    targetScore = Math.floor(((Math.random() * 50) + 11));

    $(".targetScore").text(targetScore);
    console.log(targetScore);
    
    $(".yourScore").text(currentScore);
    console.log(currentScore);  
}
//total gem values to give score
function addGems(value) {
    currentScore += value;
}
numGenerator();
//Need reset button or game reset 

function winner (){
if(currentScore === targetScore){
    win++;
    $(".wins").text(win);
    console.log(win);
    currentScore = 0;
    numGenerator();
    }
}
function loser(){
    if(currentScore > targetScore){
        loss++;
        $(".losses").text(loss);
        console.log(loss);
        currentScore = 0;
        numGenerator();
    }
}
$(".gem1").on("click", function(){
    addGems(gem1);
    console.log(gem1);
    console.log("this is your score " + currentScore);
    $(".yourScore").text(currentScore);
    $(".wins").text(winner);
    $(".losses").text(loser);

});
$(".gem2").on("click", function(){
    addGems(gem2);
    console.log(gem2);
    console.log("this is your score " + currentScore);
    $(".yourScore").text(currentScore);
    $(".wins").text(winner);
    $(".losses").text(loser);
});
$(".gem3").on("click", function(){
    addGems(gem3);
    console.log(gem3);
    console.log("this is your score " + currentScore);
    $(".yourScore").text(currentScore);
    $(".wins").text(winner);
    $(".losses").text(loser);
});
$(".gem4").on("click", function(){
    addGems(gem4);
    console.log(gem4);
    console.log("this is your score " + currentScore);
    $(".yourScore").text(currentScore);
    $(".wins").text(winner);
    $(".losses").text(loser);
});


$(document).ready()