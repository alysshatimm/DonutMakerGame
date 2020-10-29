class DonutMaker {

    constructor(){
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;

    }

    recordClick(){
       this._donutCount++;
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
        this._donutCount += this._autoClickerCount;
    }


}



    