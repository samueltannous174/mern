class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();

        console.log("hello.");
    }
}

const superSensei = new Sensei("Sensiei");
superSensei.speakWisdom();
superSensei.showStats();
