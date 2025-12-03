import {Unit} from "./Unit.js";
import {Effect} from "./Effect.js";

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgorithm = new Effect("Hard Algorithm", 2, "res", 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "res", -2);
const pairProgramming = new Effect("Pair Programming", 3, "power", 2);

hardAlgorithm.play(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja); 
pairProgramming.play(redBeltNinja); 

redBeltNinja.attack(blackBeltNinja);
