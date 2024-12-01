let userScore = 0;
let compScore = 0;

let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");

let msg = document.querySelector("#msg");
let choices = document.querySelectorAll(".choices");

let gencompChoice = ()=>{
    let options = ["rock","paper","scissors"];
    let rndmIndx = Math.floor(Math.random()*3);
    return options[rndmIndx];   
};

let draw = ()=>{
    msg.innerText="draw!";
    msg.style.backgroundColor="black";   
}

let showWinner = (userWin,compChoice,userChoice)=>{
    if(userWin){
        userScore++;
        user_score.innerText=userScore;
        msg.innerText=`your ${userChoice} beats comp ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        comp_score.innerText=compScore;
        msg.innerText=`comp ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

let playGame = (userChoice)=>{
    let compChoice = gencompChoice();

    if(compChoice === userChoice){
        draw();
    }else{
        userWin=true;
        if(userChoice === "rock"){
            if(compChoice==="paper"){
                userWin=false;
            }else{
                userWin=true;
            }
         }
        else if(userChoice === "paper"){
            if(compChoice==="scissors"){
                userWin=false;
            }else{
                userWin=true;
            }
         }
         else{
            if(compChoice==="rock"){
                userWin=false;
            }else{
                userWin=true;
            }
         }
         showWinner(userWin,compChoice,userChoice)
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})