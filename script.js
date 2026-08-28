console.log("Hello World");
let rockCounter =  localStorage.getItem("rock_counter") ? Number(localStorage.getItem("rock_counter")) : 0;
let paperCounter = localStorage.getItem("paper_counter") ? Number(localStorage.getItem("paper_counter")) : 0;
let scissorsCounter = localStorage.getItem("scissors_counter") ? Number(localStorage.getItem("scissors_counter")) : 0;





function getComputerChoice()    {
    let randomChoice = Math.floor(Math.random() * 100) % 3;
    //console.log(random_choice);
    if (randomChoice === 0)  {
        rockCounter++;
        localStorage.setItem("rock_counter", rockCounter);
        return "rock";
    }else if (randomChoice === 1)  {
        paperCounter++;
        localStorage.setItem("paper_counter", paperCounter);
        return "paper";
    }else   {
        scissorsCounter++;
        localStorage.setItem("scissors_counter", scissorsCounter);
        return "scissors";
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


playGame();

//console.log("rock count: ", rockCounter, ", paper count: ", paperCounter, ", scissors count: ", scissorsCounter)