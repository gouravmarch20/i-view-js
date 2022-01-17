const playerOne = document.querySelector("#fire-player-two")
const playerTwo = document.querySelector("#fire-player-one")
// 
const healthPlayerOne = document.querySelector("#health-player-one")
const healthPlayerTwo = document.querySelector("#health-player-two")
// 
const playerOneScore = document.querySelector("#player-one-score")
const playerTwoScore = document.querySelector("#player-two-score")

var playerOneLife = 100;
var playerTwoLife = 100;

var playerOneS = 00;
var playerTwoS = 00;

const getRandomInt = (max) => Math.ceil(Math.random() * max)
const reload = () => location.reload();

function scoreBoard() {
    healthPlayerOne.innerText = `${playerOneLife}`
    healthPlayerTwo.innerText = `${playerTwoLife}`

    if (playerTwoLife == 0 || playerTwoLife < 0) {
        playerOneS = playerOneS + 1
        playerOneScore.innerText = playerOneS
    }


    if (playerOneLife == 0 || playerOneLife < 0) {
        playerTwoS = playerTwoS + 1
        playerTwoScore.innerText = playerTwoS
    }
}

function championDecide() {
    if (playerOneS == 3) {
        alert("player one win ")
        reload()
    }
    if (playerTwoS == 3) {
        alert("player two win  ")
        reload()

    }
}

function decreaseLife(key) {
    switch (key) {
        case 1:
            return 5
        case 2:

            return 5
        case 3:

            return 20
        case 4:

            return 30

        case 5:

            return 40

        default:
            break;
    }
}
function endGame() {
    alert("Game ended !! we had reset the life of players ");

    playerOneLife = 100;
    playerTwoLife = 100;
    championDecide()
}


const setPlayerTwoLife = () => {

    let randomShot = getRandomInt(5)
    let decreaseLifeScore = decreaseLife(randomShot)

    playerTwoLife = playerTwoLife - decreaseLifeScore
    scoreBoard()


    if (playerTwoLife == 0 || playerTwoLife < 0) {
        endGame()
    }
}
const setPlayerOneLife = () => {

    let randomShot = getRandomInt(5)
    let decreaseLifeScore = decreaseLife(randomShot)

    playerOneLife = playerOneLife - decreaseLifeScore
    scoreBoard()

    if (playerOneLife == 0 || playerOneLife < 0) {
        endGame()
    }
}

playerOne.addEventListener("click", setPlayerTwoLife)
playerTwo.addEventListener("click", setPlayerOneLife)