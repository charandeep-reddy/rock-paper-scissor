function getComputerChoice(){
    let n = Math.floor(Math.random()*3)

    if(n==0){
        return "rock"
    }
    else if(n==1){
        return "paper"
    }
    else{
        return "scissor"
    }
}

function getHumanChoice(){
    let humanChoice = prompt("select rock/paper/scissor : ").toLowerCase()
    return humanChoice
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice,computerChoice){

    alert(`computer choice : ${computerChoice}`)


    if (humanChoice == computerChoice){
        alert("Its a draw")
    }
    else{
        if(humanChoice == "rock" && computerChoice=="paper"){
            alert("You lose! paper beats rock")
            computerScore++
        }
        else if(humanChoice == "paper" && computerChoice=="rock"){
            alert("You Won! paper beats rock")
            humanScore++
        }
        else if(humanChoice == "rock" && computerChoice=="scissor"){
            alert("You Won! rock beats scissor")
            humanScore++
        }
        else if(humanChoice == "scissor" && computerChoice=="rock"){
            alert("You Lose! rock beats scissor")
            computerScore++
        }
        else if(humanChoice == "paper" && computerChoice=="scissor"){
            alert("You Lose! scissor beats paper")
            humanScore++
        }
        else if(humanChoice == "scissor" && computerChoice=="paper"){
            alert("You Lose! scissor beats rock")
            computerScore++
        }
        else{
            alert("Check Entered input")
        }
    }
}

function playGame(){
    for(let i=1;i<=5;i++){
        playRound(getHumanChoice(),getComputerChoice())
    }
}

playGame()
alert(`your score = ${humanScore}`)
alert(`bot score = ${computerScore}`)
if(humanScore > computerScore){
    alert("You won the game")
}
else if(humanScore<computerScore){
    alert("You lost the game")
}
else{
    alert("Game tied")
}

