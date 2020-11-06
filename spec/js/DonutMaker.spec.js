import {DonutMaker} from "../../src/js/DonutMaker.js"

describe('Feature: Have a way to count donuts', () => {
    describe('Can add to donut count', () => {
        let underTest;

        beforeEach(() => {
            underTest = new DonutMaker;
        })

        it('Should start with a donut count of 0', () => {
            expect(underTest._donutCount).toBe(0);
        });
        it('Should add one donut to the donut count when it records a click', () => {
            underTest.recordClick();
            expect(underTest._donutCount).toBe(1);
        });
    })
})
describe('Feature: Be able to purchase the first Auto Clicker with 100 Donuts', () =>{
    let underTest;

    beforeEach(() =>{
        underTest = new DonutMaker;   
    })
    it('Can add to the Auto Clicker count', () => {
        underTest._donutCount = 100;
        underTest.purchaseAutoClicker();
        expect(underTest._autoClickerCount).toBe(1);
    })
    it('Auto Clicker costs 100 donuts to purchase', () =>{
        underTest._donutCount = 100;
        underTest.purchaseAutoClicker();
        expect(underTest._autoClickerCount).toBe(1);
    })
})
describe('Feature: The cost of each Auto Clicker will go up with each purchase', () =>{
    let underTest;
    

    beforeEach(() =>{
        underTest = new DonutMaker;
    })

    it ('Will increase the cost of the second Auto Clicker by 10%', () =>{
        underTest._donutCount = 200;
        underTest._autoClickerCount = 1;
        underTest.purchaseAutoClicker();
        expect(underTest._autoClickerCost).toBe(110);
    })
    it ('Will increase each additional Auto Clicker cost another 10%', () =>{
        underTest._donutCount = 300;
        underTest.purchaseAutoClicker();
        underTest.purchaseAutoClicker();
        expect(underTest._autoClickerCost).toBe(121);
    })
    it('Will not sell an Auto Clicker if not enough donuts banked', () =>{
        underTest._donutCount = 50;
        underTest.purchaseAutoClicker();
        expect(underTest._autoClickerCount).toBe(0);
    })
})
describe('The amount of Auto Clickers affect the amount of donuts added when click event is called', () =>{
    let underTest;

    beforeEach(() =>{
        underTest = new DonutMaker;
    })
    it('Donut count increases by the amount of Auto Clickers owned', () =>{
        underTest._donutCount = 100;
        underTest._autoClickerCount = 10;
        underTest.activateAutoClickers();
        expect(underTest._donutCount).toBe(110);
    })
})
describe('Be able to purchase first Donut Multiplier with 10 donuts', () =>{
    let underTest;

    beforeEach(() =>{
        underTest = new DonutMaker;
    })
    it('Can retrieve and add to the Donut Multiplier Count by spending 10 donuts', () =>{
        underTest._donutCount = 20;
        underTest.purchaseDonutMultiplier();
        expect(underTest._donutCount).toBe(10);
    })
})
describe('The cost of each Donut Multipler should go up with each purchase', () =>{
    let underTest;

    beforeEach(() =>{
        underTest = new DonutMaker;
    })
    it('Donut Multipler cost increases by 10% with each purchase', () =>{
        underTest._donutCount = 50;
        underTest.purchaseDonutMultiplier();
        expect(underTest._donutMultiplierCost).toBe(11);
    })
    it('Will not sell Donut Multiplier if not enough Donuts banked', () =>{
        underTest._donutCount= 5;
        underTest.purchaseDonutMultiplier();
        expect(underTest._donutMultiplierCount).toBe(0);
    })
})
describe('Donut Multipliers increase donut count by 1.2x', () =>{
    let underTest;

    beforeEach(() =>{
        underTest = new DonutMaker;
    })
    it('First Donut Multiplier should increase value of a click 1.2x', () =>{
        underTest._donutCount= 10;
        underTest._donutMultiplierCount= 1;
        underTest.recordClick();
        expect(underTest._donutCount).toBe(11.2);
    })
    it('The amount of subsequent Donut Multipliers click bonus will go up exponentially', () =>{
        underTest._donutCount= 10;
        underTest._donutMultiplierCount= 3;
        underTest.recordClick();
        expect(underTest._donutCount).toBe(11.728);
    })
})
describe('Donut Multiplier click bonus will apply to clicks from Auto Clicker', () =>{
    let underTest;

    beforeEach(() =>{
        underTest = new DonutMaker;
    })
    it('When an Auto Clicker is added, increase the value of each Auto Clicker by the amount of Donut Multiplier', () =>{
        underTest._donutCount= 10;
        underTest._donutMultiplierCount= 4;
        underTest._autoClickerCount= 2;
        underTest.activateAutoClickers();
        expect(underTest._donutCount).toBe(14.1472);
    })
})
