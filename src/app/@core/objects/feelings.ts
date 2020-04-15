import {Topics} from './topics';

export class Feelings extends Topics{
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
