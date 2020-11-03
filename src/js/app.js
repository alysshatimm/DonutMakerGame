import {
    DonutMaker
} from "/src/js/DonutMaker.js";

const newDonutMaker = new DonutMaker();

const updatePlayerInfo = function (donutMaker) {
    const donuts = document.querySelector(".donut-count");
    donuts.innerText = `DONUT COUNT: ${donutMaker.retrieveDonutCount}`; 
    // refactor "retrieveDonutCount" to just "donutCount" in future iteration if time
    
    const clickers = document.querySelector(".auto-clicker-count");
    clickers.innerText = `AUTO-CLICKER COUNT: ${donutMaker.retrieveAutoClickerCount}`;

    const multipliers = document.querySelector(".multiplier-count");
    multipliers.innerText = `DONUT MULTIPLIER COUNT: ${donutMaker.retrieveDonutMultiplierCount}`;

    const clickerCost = document.querySelector(".clicker-cost");
    clickerCost.innerText= `Auto-Clicker Costs ${donutMaker.autoClickerCost} donuts to purchase`;

    const multiplierCost = document.querySelector(".multiplier-cost");
    multiplierCost.innerText = `Donut Multiplier Costs ${donutMaker.donutMultiplierCost} donuts to purchase`;
};

updatePlayerInfo(newDonutMaker);
const makeDonuts = document.querySelector(".donut-button");

makeDonuts.addEventListener("click", () => {
    newDonutMaker.recordClick();
    updatePlayerInfo(newDonutMaker);
});

const buyClickers = document.querySelector(".clicker-button");
buyClickers.addEventListener("click", () => {
    newDonutMaker.purchaseAutoClicker();
    newDonutMaker.activateAutoClickers();
    updatePlayerInfo(newDonutMaker);
});

const buyMultipliers = document.querySelector(".multiplier-button");
buyMultipliers.addEventListener("click", () => {
    newDonutMaker.purchaseDonutMultiplier();
    updatePlayerInfo(newDonutMaker);
})