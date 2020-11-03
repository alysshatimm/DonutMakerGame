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
})