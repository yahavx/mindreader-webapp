import {Topics} from './topics';

export class Pose extends Topics{
  translation: Translation;
  rotation: Rotation;

  constructor(translation: Translation, rotation: Rotation) {
    super();
    this.translation = translation;
    this.rotation = rotation;
  }
}

export class Translation {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

export class Rotation {
  x: number;
  y: number;
  z: number;
  w: number;

  constructor(x: number, y: number, z: number, w: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
}
