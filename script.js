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

    console.log(`Your choice : ${humanChoice}`)
    console.log(`computer choice : ${computerChoice}`)


    if (humanChoice == computerChoice){
        console.log("Its a draw")
    }
    else{
        if(humanChoice == "rock" && computerChoice=="paper"){
            console.log("You lose! paper beats rock")
            computerScore++
        }
        else if(humanChoice == "paper" && computerChoice=="rock"){
            console.log("You Won! paper beats rock")
            humanScore++
        }
        else if(humanChoice == "rock" && computerChoice=="scissor"){
            console.log("You Won! rock beats scissor")
            humanScore++
        }
        else if(humanChoice == "scissor" && computerChoice=="rock"){
            console.log("You Lose! rock beats scissor")
            computerScore++
        }
        else if(humanChoice == "paper" && computerChoice=="scissor"){
            console.log("You Lose! scissor beats paper")
            humanScore++
        }
        else if(humanChoice == "scissor" && computerChoice=="paper"){
            console.log("You Lose! scissor beats rock")
            computerScore++
        }
        else{
            console.log("Check Entered input")
        }
    }
    console.log(`humanscore = ${humanScore}`)
    console.log(`computerscore = ${computerScore}`)
}

function playGame(){
    for(let i=1;i<=5;i++){
        playRound(getHumanChoice(),getComputerChoice())
    }
}

playGame()
if(humanScore > computerScore){
    console.log("You won the game")
}
else if(humanScore<computerScore){
    console.log("You lost the game")
}
else{
    console.log("Game tied")
}

