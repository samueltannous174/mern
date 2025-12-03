import { Card } from "./Card.js";

export class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }

  attack(target) {
    if (!(target instanceof Unit)) {
      throw new Error("Target must be a unit!");
    }

    target.res -= this.power;
    console.log(`${this.name} attacked ${target.name}, reducing its resilience to ${target.res}`);
}
}
