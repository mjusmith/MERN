const Ninja = require('./ninja')


class Sensei extends Ninja {
    constructor(nameInput){
        super(nameInput)
        this.health= 200;
        this.speed= 10;
        this.strength= 10;
        this.wisdom= 10;
    }

    speakWisdom() {
        super.drinkSake()
        console.log("Wise message pending..")
    }
}
let BenSei= new Sensei ("Ben")

BenSei.speakWisdom()