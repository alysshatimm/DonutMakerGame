class DonutMaker {

    constructor(){
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;
        this._donutMultiplierCount = 0;
        this._donutMultiplierCost = 10;

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

    get retrieveDonutCount(){
        return this._donutCount;
    }

    retrieveAutoClickerCount(){
        this._autoClickerCount;
    }

    purchaseAutoClicker(){
        if(this._donutCount < this._autoClickerCost){
            this._autoClickerCount;
        } else {
            this._autoClickerCount++;
        }

        this._donutCount -=100;
        
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
        } else {
            this._donutMultiplierCount++; 
        }
       
        this._donutCount -= 10;

        this._donutMultiplierCost += .1 * this._donutMultiplierCost;
    }


}



    