import {
    DonutMaker
} from "/src/js/DonutMaker.js";

let newDonutMaker = new DonutMaker();

const updatePlayerInfo = function (donutMaker) {
    const donuts = document.querySelector(".donut-count");
    donuts.innerText = `YOU'VE BAKED ${donutMaker.retrieveDonutCount} DONUTS!`; 
    // refactor "retrieveDonutCount" to just "donutCount" in future iteration if time
    
    const clickers = document.querySelector(".auto-clicker-count");
    clickers.innerText = `YOU HAVE ${donutMaker.retrieveAutoClickerCount} AUTO-CLICKERS`;

    const multipliers = document.querySelector(".multiplier-count");
    multipliers.innerText = `YOU HAVE ${donutMaker.retrieveDonutMultiplierCount} DONUT MULTIPLIERS`;

    const clickerCost = document.querySelector(".clicker-cost");
    clickerCost.innerText= `Auto-Clicker Costs ${donutMaker.autoClickerCost} donuts to purchase`;

    const multiplierCost = document.querySelector(".multiplier-cost");
    multiplierCost.innerText = `Donut Multiplier Costs ${donutMaker.donutMultiplierCost} donuts to purchase`;

    const clickValue = document.querySelector(".click-value");
    clickValue.innerText = `Cha-CHING! Each click is worth ${(donutMaker.retrieveDonutMultiplierCount * 1.2) + donutMaker.retrieveAutoClickerCount} donuts`

    disableAutoClickerButton(donutMaker);

    disableDonutMultiplierButton(donutMaker);

    // activateSprinkleBooster(donutMaker);

};

updatePlayerInfo(newDonutMaker);
const makeDonuts = document.querySelector(".donut-button");

const resetGame = document.querySelector(".reset-button");
resetGame.addEventListener("click", () => {
    if(confirm("Do you really wanna hang up your apron?")) {
        newDonutMaker._donutCount = 0;
        newDonutMaker._autoClickerCount = 0;
        newDonutMaker._autoClickerCost = 100;
        newDonutMaker._donutMultiplierCount = 0;
        newDonutMaker._donutMultiplierCost = 10;
        console.log(newDonutMaker.retrieveAutoClickerCount);
        updatePlayerInfo(newDonutMaker);
    } else {
        return null;
    }
});

makeDonuts.addEventListener("click", () => {
    newDonutMaker.recordClick();
    updatePlayerInfo(newDonutMaker);
});

const buyClickers = document.querySelector(".clicker-button");
buyClickers.addEventListener("click", () => {
    newDonutMaker.purchaseAutoClicker();
    newDonutMaker.activateAutoClickers();
    newDonutMaker.automaticallyClick();
    updatePlayerInfo(newDonutMaker);
});

const buyMultipliers = document.querySelector(".multiplier-button");
buyMultipliers.addEventListener("click", () => {
    newDonutMaker.purchaseDonutMultiplier();
    updatePlayerInfo(newDonutMaker);
});

const sprinkleBoost = document.querySelector(".sprinkle-booster");
sprinkleBoost.addEventListener("click", () =>{
    newDonutMaker.sprinkleBooster();
    updatePlayerInfo(newDonutMaker);
})



function disableAutoClickerButton(donutMaker){
    const autoClickerButton = document.querySelector(".clicker-button");
    autoClickerButton.disabled = true;
    if(donutMaker.autoClickerCost > donutMaker.retrieveDonutCount){
        autoClickerButton.disabled = true;
    } else if(donutMaker.autoClickerCost <= donutMaker.retrieveDonutCount){
        autoClickerButton.disabled = false;
    }
}

function disableDonutMultiplierButton(donutMaker){
    const donutMultiplierButton = document.querySelector(".multiplier-button");
    donutMultiplierButton.disabled = true;
    if(donutMaker.donutMultiplierCost > donutMaker.retrieveDonutCount){
        donutMultiplierButton.disabled = true;
    } else if(donutMaker.donutMultiplierCost <= donutMaker.retrieveDonutCount){
        donutMultiplierButton.disabled = false;
    }
}



setInterval(function(){
    newDonutMaker.activateAutoClickers();
    updatePlayerInfo(newDonutMaker)
    },1000);




