import {Result} from './result';

export class Feelings extends Result{
  exhaustion: number;
  happiness: number;
  hunger: number;
  thirst: number;

  constructor(exhaustion: number, happiness: number, hunger: number, thirst: number) {
    super();
    this.exhaustion = exhaustion;
    this.happiness = happiness;
    this.hunger = hunger;
    this.thirst = thirst;
  }
}
