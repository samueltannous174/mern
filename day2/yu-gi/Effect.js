import { Card } from "./Card.js";

export class Effect extends Card {
  constructor(name, cost, stat, magnitude) {
    super(name, cost);
    this.stat = stat;        
    this.magnitude = magnitude;
  }

  play(target) {
    if (!(target instanceof Card)) {
      throw new Error("Target must be a unit!");
    }

    target[this.stat] += this.magnitude;
    const action = this.magnitude > 0 ? "increased" : "decreased";
    console.log(`${this.name} was played on ${target.name}, ${action} ${this.stat} by ${this.magnitude}.`);}
}
