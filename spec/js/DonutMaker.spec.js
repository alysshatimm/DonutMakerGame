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

    it('Can retrieve an Auto Clicker count', () =>{
        underTest.retrieveAutoClickerCount();
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
        underTest.purchaseAutoClicker();
        expect(underTest._autoClickerCost).toBe(110);
    })
    it ('Will increase each additional Auto Clicker cost another 10%', () =>{
        underTest.purchaseAutoClicker();
        underTest.purchaseAutoClicker();
        expect(underTest._autoClickerCost).toBe(121);
    })
    it ('Will increase each additional Auto Clicker cost yet another 10%', () =>{
        underTest.purchaseAutoClicker();
        underTest.purchaseAutoClicker();
        underTest.purchaseAutoClicker();
        expect(underTest._autoClickerCost).toBe(133.1);
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
