class GuessingGame {
    constructor() {}

    setRange(min, max) {
       this.min = min;
       this.max = max;
    }

    guess() {
       this.averageNum = (Math.ceil((this.max - this.min) / 2)) + this.min;
       return this.averageNum;
    }

    lower() {
        this.setRange(this.min, this.averageNum);
        
    }

    greater() {
        this.setRange(this.averageNum, this.max);
        
    }
}

module.exports = GuessingGame;


