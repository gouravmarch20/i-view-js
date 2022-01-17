const playerOne = document.querySelector("#fire-player-two")
const playerTwo = document.querySelector("#fire-player-one")
// 
const healthPlayerOne = document.querySelector("#health-player-one")
const healthPlayerTwo = document.querySelector("#health-player-two")
// 
const playerOneScore = document.querySelector("#player-one-score")
const playerTwoScore = document.querySelector("#player-two-score")
//
const round = document.querySelector("#round")

// -- global var 
var playerOneLife = 100;
var playerTwoLife = 100;

var playerOneS = 00;
var playerTwoS = 00;

var currentRound = 0

// --  function  define 
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
        alert(`player one win , MESSAGE FOR PLAYER TWO :   𝒹😍 𝓃😍𝓉  𝒻💞𝓇𝑔𝑒𝓉 𝑒𝓋𝑒𝓃 𝑀𝒾𝒸𝒽𝒶𝑒𝓁 𝒥☯𝓇𝒹🍪𝓃 𝒹𝒾𝒹 𝓃🌞𝓉 𝑔𝑒𝓉 𝒶𝒸𝒸𝑒𝓅𝓉𝑒𝒹 𝒾𝓃 𝒽𝒾𝓈 𝒻𝒾𝓇𝓈𝓉 𝒶𝓉𝓉𝑒𝓂𝓅𝓉 𝒶𝓉 𝒽𝒾𝑔𝒽-𝒮𝒸𝒽💙💙𝓁 𝐵𝒶𝓈𝓀𝑒𝓉 𝐵𝒶𝓁𝓁.  𝓉𝒽𝑒 𝓈𝒶𝓂𝑒  you will win  🏵𝓃𝑒 𝒹𝒶𝓎   🎀  🍦 `)
        reload()
    }
    if (playerTwoS == 3) {
        alert(`player two win,  MESSAGE FOR PLAYER One :   𝒹😍 𝓃😍𝓉  𝒻💞𝓇𝑔𝑒𝓉 𝑒𝓋𝑒𝓃 𝑀𝒾𝒸𝒽𝒶𝑒𝓁 𝒥☯𝓇𝒹🍪𝓃 𝒹𝒾𝒹 𝓃🌞𝓉 𝑔𝑒𝓉 𝒶𝒸𝒸𝑒𝓅𝓉𝑒𝒹 𝒾𝓃 𝒽𝒾𝓈 𝒻𝒾𝓇𝓈𝓉 𝒶𝓉𝓉𝑒𝓂𝓅𝓉 𝒶𝓉 𝒽𝒾𝑔𝒽-𝒮𝒸𝒽💙💙𝓁 𝐵𝒶𝓈𝓀𝑒𝓉 𝐵𝒶𝓁𝓁.  𝓉𝒽𝑒 𝓈𝒶𝓂𝑒  you will win  🏵𝓃𝑒 𝒹𝒶𝓎   🎀  🍦 `)
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
    currentRound = currentRound + 1
    round.innerText = currentRound
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

//  
playerOne.addEventListener("click", setPlayerTwoLife)
playerTwo.addEventListener("click", setPlayerOneLife)