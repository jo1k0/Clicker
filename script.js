let game_state = {
    "count": 0,
    "icreemnt": 1,
    "max_cost": 10,
    "start_price": 10,
    "Auto_icreemnt": 1,
    "Auto_max_cost": 10,
    "Auto_start_price": 10
}

let score_h1 = document.getElementById("score-h1")
let upgrateBtn = document.getElementsByClassName("button2")
let AutoClicker = document.getElementsByClassName("button6")

function Click() {
    game_state.count += game_state.icreemnt
    score_h1.innerText = "Score:" + game_state.count

}

function Upgrate() {
    if (game_state.count >= game_state.max_cost) {
        game_state.count -= game_state.max_cost;
        game_state.icreemnt += 1;
        game_state.max_cost = Math.floor(game_state.max_cost * 2.0);
        score_h1.innerText = "Score: " + game_state.count;
        upgrateBtn[0].innerText = "prise:" + game_state.max_cost;
        alert("Прокачка успішна! Ваш приріст збільшено.");
    } else {
        alert("Недостатньо досвіду для прокачки.");

    }

}

function Reset() {
    game_state.count = 0;
    game_state.icreemnt = 1;
    score_h1.innerText = "Score: " + game_state.count;
}

function saveProgress() {
    localStorage.setItem('gameState', JSON.stringify(game_state));
    alert("Your progres save");
}


function loadProgress() {
    let savedState = localStorage.getItem('gameState');
    if (savedState) {
        game_state = JSON.parse(savedState);
        score_h1.innerText = "Score: " + game_state.count;
        updateUpgradeButton();
        alert("Your progress save!");
    } else {
        alert("Saved progres not definded");
    }
}
function BuyAutoClicker() {
    if (game_state.count >= game_state.Auto_max_cost) {
        game_state.count -= game_state.Auto_max_cost;
        game_state.Auto_icreemnt += 1; "Auto_max_cost"
        game_state.Auto_max_cost = Math.floor(game_state.Auto_max_cost * 2.0);
        AutoClicker[0].innerText = "AutoClicker prise:" + game_state.Auto_max_cost
        window.setInterval(Click, 2000)
        alert("Прокачка успішна! ");
    } else {
        alert("Недостатньо досвіду для прокачки.");

    }
    score_h1.innerText = "Score: " + game_state.count;
}
function AutoClickUpgrate() {
    game_state.max_cost = Math.floor(game_state.max_cost * 2.0);
}
