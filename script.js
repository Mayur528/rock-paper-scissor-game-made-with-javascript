let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const result_p=document.querySelector(".result>p");
const rockDiv=document.getElementById("r");
const paperDiv=document.getElementById("p");
const sciDiv=document.getElementById("s");
/*when you get the answer you get r and s as users ,thats why we write this function👇*/
function convert(letter){
  if(letter==="r") return " Rock";
  if(letter==="p") return "  paper";
   return "scissor";
  
}


function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;
  const userSmall= "user".fontsize(5).sub();
  const compSmall= "comp".fontsize(3).sub();
  result_p.innerHTML=`
   ${convert(userChoice)}${userSmall} beats  
  ${convert(computerChoice)}${compSmall} .you win🔥`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function (){
  document.getElementById(userChoice).classList.remove('green-glow')},1000);
}

function lose(userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;
  const userSmall= "nice".fontsize(5).sub();
  const compSmall= "comp".fontsize(3).sub();
  result_p.innerHTML=`
   ${convert(userChoice)}${userSmall} beats ${convert(computerChoice)}${compSmall}you loose😝`;
     document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function (){
  document.getElementById(userChoice).classList.remove('red-glow')},1000);
}

function Draw(userChoice, computerChoice){
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;
  const userSmall= "user".fontsize(5).sub();
  const compSmall= "comp".fontsize(4).sub();
  result_p.innerHTML=`
   ${convert(userChoice)}${userSmall} 
  ${convert(computerChoice)}${compSmall} its a draw🙃 `;
    document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(function (){
  document.getElementById(userChoice).classList.remove('gray-glow')},1000);
}



function getComputerChoice(){
  const choices=['r','p','s'];
  const randomNumber=Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function game(userChoice){
 const computerChoice=getComputerChoice();
 switch(userChoice+computerChoice){
    case "rs":
    case "pr":
    case "sp":
    win(userChoice, computerChoice);
    break;
   case "rp":
    case "ps":
    case "sr":
     lose(userChoice,computerChoice);
    break;
    case "rr":
    case "pp":
    case "ss":
    Draw(userChoice, computerChoice);
    break;
}
}


function main(){
rockDiv.addEventListener('click', function(){ game("r");
  
})
paperDiv.addEventListener('click', function(){ game("p");
})
sciDiv.addEventListener('click', function(){ 
  game("s");
})
}
main();




