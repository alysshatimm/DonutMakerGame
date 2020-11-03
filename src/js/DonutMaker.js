class DonutMaker {


    constructor(){
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;
        this._donutMultiplierCount = 0;
        this._donutMultiplierCost = 10;

    }

    get retrieveDonutCount(){
        return this._donutCount;
    }

    get retrieveAutoClickerCount(){
        return this._autoClickerCount;
    }

    get retrieveDonutMultiplierCount(){
        return this._donutMultiplierCount;
    }

    get autoClickerCost(){
        return this._autoClickerCost;
    }

    get donutMultiplierCost(){
        return this._donutMultiplierCost;
    }

    recordClick(){
        if(this._donutMultiplierCount === 1){
            this._donutCount += 1.2; 
        }else if(this._donutMultiplierCount > 1){
            this._donutCount += Math.pow(1.2, this._donutMultiplierCount);   
        } else {
        this._donutCount++;   
        }
    }

    purchaseAutoClicker(){
        if(this._donutCount < this._autoClickerCost){
            this._autoClickerCount;
            this._donutCount;
        } else if(this._donutCount >= this._autoClickerCost){
            ++this._autoClickerCount;
            this._donutCount -=100;
        } 
        

         this._autoClickerCost += .1 * this._autoClickerCost;   
        } 
        
    

    activateAutoClickers(){
        if(this._donutMultiplierCount >= 1){
            this._donutCount += (Math.pow(1.2, this._donutMultiplierCount)) * this._autoClickerCount;
        }else {
           this._donutCount += this._autoClickerCount; 
        }
    }

    purchaseDonutMultiplier(){
        if(this._donutCount < this._donutMultiplierCost){
            this._donutMultiplierCount;
            this._donutCount;
        } else if(this._donutCount >= this._donutMultiplierCount) {
            ++this._donutMultiplierCount; 
            this._donutCount -= 10;
        }
       
        

        this._donutMultiplierCost += .1 * this._donutMultiplierCost;
    }
}

export { DonutMaker }





    