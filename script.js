console.log("Rock Paper Scissors :");
// Variables rockCounter, paperCounter and scissorsCounter are created to see how randomly 
// rock, paper and scissors are selected by the Computer.
let rockCounter =  localStorage.getItem("rock_counter") ? Number(localStorage.getItem("rock_counter")) : 0;
let paperCounter = localStorage.getItem("paper_counter") ? Number(localStorage.getItem("paper_counter")) : 0;
let scissorsCounter = localStorage.getItem("scissors_counter") ? Number(localStorage.getItem("scissors_counter")) : 0;


const btns = document.querySelectorAll("button");
const scoreMesg = document.querySelector("div");
let humanScore = 0;
let computerScore = 0;
//let gameWon = false;
const style1 = "normal-text";
const style2 = "winner-text";
const style3 = "score-text";
btns.forEach(btn => {
    btn.addEventListener("click", btnHandler);
});

function btnHandler(e)  {
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();
    // console.log("Human Choice : ", humanChoice);
    // console.log("Computer Choice : ", computerChoice);
    playRoundUI(humanChoice, computerChoice);
    
}

//Add Message to the <div> tag
function addMesg(text, style)  {
    const mesg = document.createElement("p");
    mesg.textContent = text;
    mesg.classList.add(style)
    scoreMesg.appendChild(mesg);
    //  track and jump to the specific line
    mesg.scrollIntoView({ behavior: "auto", block: "nearest" });
}

// Clear the Messages
function clearSlate()   {
    scoreMesg.textContent = "";
}

function playRoundUI( humanSelection, computerSelection ) {
    console.log("human selection : ", humanSelection);
    console.log("computer selection : ", computerSelection);
    let winner;
    if (humanSelection === "Rock")  {
        if (computerSelection === "Rock")  {
            winner = "tie";
        } else if(computerSelection === "Paper")    {
            winner = "computer";
            computerScore++;
        } else  { // Scissors
            winner = "human";
            humanScore++;
        }
    } else if (humanSelection === "Paper")  {
        if (computerSelection === "Rock")  {
            winner = "human";
            humanScore++;
        } else if(computerSelection === "Paper")    {
            winner = "tie";
        } else  { // Scissors
            winner = "computer";
            computerScore++;
        }
    }  else { // (humanSelection === "scissors")
        if (computerSelection === "Rock")  {
            winner = "computer";
            computerScore++;
        } else if(computerSelection === "Paper")    {
            winner = "human";
            humanScore++;
        } else  { // Scissors
            winner = "tie";
        }
    }
    clearSlate();
    if (winner === "human") {
        addMesg(humanSelection + " beats "+ computerSelection +".", style1)
    } else if (winner === "computer") {
        addMesg(computerSelection + " beats "+ humanSelection +".", style1)
    } else   {
        addMesg("It's a tie!!!", style1)
        addMesg("Both chose : "+ humanSelection, style1)
    }
    addMesg("Human Score : " + humanScore + ", Computer Score : " + computerScore, style3);
    if (humanScore === 5)   {
        addMesg("You reached 5 points. You are the winner!!!", style2);
        humanScore = 0;
        computerScore = 0;
    }
    if (computerScore === 5)    {
        addMesg("Computer reached 5 points and is the winner...", style2);
        humanScore = 0;
        computerScore = 0;
    }
}

function getComputerChoice()    {
    let randomChoice = Math.floor(Math.random() * 100) % 3;
    //console.log(random_choice);
    if (randomChoice === 0)  {
        rockCounter++;
        localStorage.setItem("rock_counter", rockCounter);
        return "Rock";
    }else if (randomChoice === 1)  {
        paperCounter++;
        localStorage.setItem("paper_counter", paperCounter);
        return "Paper";
    }else   {
        scissorsCounter++;
        localStorage.setItem("scissors_counter", scissorsCounter);
        return "Scissors";
    }
}

function getHumanChoice()   {
    let humanChoice = +prompt("Enter '0' for rock, '1' for paper and '2' for scissors", 1)
    //console.log("human choice : ", humanChoice, "type: ", typeof humanChoice)
    if (humanChoice === 0)  {
        return "rock";
    }else if (humanChoice === 1)  {
        return "paper";
    }else   {
        return "scissors";
    }
}



function playGame()    {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);

    }
    styles1 = "color:gold; font-size: 18px; background-color:black";
    styles2 = "color:aqua; font-size: 18px; background-color:black";
    styles3 = "color:violet; font-size: 18px; background-color:black";

    console.log(`%c Your Total Score: ${humanScore}`, styles1);
    console.log(`%c Computer's Score: ${computerScore}`, styles2);

    if(humanScore > computerScore)  {
        console.log("%c You Won!!!", styles3);
    } else if( computerScore > humanScore)  {
        console.log("%c Computer is the Winner.", styles3);
    } else{
        console.log("%c It's a tie...", styles3)
    }

    function playRound( humanSelection, computerSelection ) {
        console.log("human selection : ", humanSelection);
        console.log("computer selection : ", computerSelection);
        let winner;
        if (humanSelection === "rock")  {
            if (computerSelection === "rock")  {
                winner = "tie";
            } else if(computerSelection === "paper")    {
                winner = "computer";
                computerScore++;
            } else  { // Scissors
                winner = "human";
                humanScore++;
            }
        } else if (humanSelection === "paper")  {
            if (computerSelection === "rock")  {
                winner = "human";
                humanScore++;
            } else if(computerSelection === "paper")    {
                winner = "tie";
            } else  { // Scissors
                winner = "computer";
                computerScore++;
            }
        }  else { // (humanSelection === "scissors")
            if (computerSelection === "rock")  {
                winner = "computer";
                computerScore++;
            } else if(computerSelection === "paper")    {
                winner = "human";
                humanScore++;
            } else  { // Scissors
                winner = "tie";
            }
        }

        if (winner === "human") {
            console.log("You Win!!!")
            console.log(humanSelection + " beats "+ computerSelection +".")
        } else if (winner === "computer") {
            console.log("Sorry!!! You Lost...")
            console.log(computerSelection + " beats "+ humanSelection +".")
        } else   {
            console.log("It's a tie!!!")
            console.log("Both chose : "+ humanSelection)
        }

    }
}


// playGame();

//console.log("rock count: ", rockCounter, ", paper count: ", paperCounter, ", scissors count: ", scissorsCounter)