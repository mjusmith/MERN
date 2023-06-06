
class Ninja {
    constructor(nameInput) {
        this.name= nameInput;
        this.health= 90;
        this.speed= 3;
        this.strength= 3;
    }

    sayName() {
        console.log(this.name)
    }

    showStats() {
        console.log(`Health: ${this.health} \nSpeed: ${this.speed} \nStrength: ${this.strength}`)
    }

    drinkSake() {
        this.health += 10
        console.log("Refreshing! Your current hp is " + this.health)
    }

}

let NinJoe= new Ninja ("Joe")

NinJoe.sayName()
NinJoe.showStats()
NinJoe.drinkSake()