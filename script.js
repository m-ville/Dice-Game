document.querySelector("#btn").onclick = function () { myFunction() };


function myFunction() {

    var index1 = Math.floor(Math.random()*6)+1;
    var index2 = Math.floor(Math.random()*6)+1;

    var randomDiceImg1 = "imgs/" + index1 + ".jpg";
    var randomDiceImg2 = "imgs/" + index2 + ".jpg";

    document.querySelector("#dice1").setAttribute("src",randomDiceImg1)
    document.querySelector("#dice2").setAttribute("src",randomDiceImg2)

    var result = document.querySelector("h1");


    // Winner indictor(h1)
    if(index1>index2)
    result.innerHTML="<img src='imgs/flag.jpg'> Player 1 Wins!";
    else if(index1<index2)
    result.innerHTML=" Player 2 Wins! <img src='imgs/flag.jpg'>";
    else
    result.innerHTML="<img src='imgs/flag.jpg'> Draw! <img src='imgs/flag.jpg'> ";

    
    //audio- Dice rolling
    var diceRollSound = new Audio("sound/DiecRollSound.mp3")
    diceRollSound.play();


}