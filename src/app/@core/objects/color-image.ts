import {Result} from './result';

export class ColorImage extends Result {
  height: number;
  width: number;
  path: string;

  constructor(height: number, width: number, path: string) {
    super();
    this.height = height;
    this.width = width;
    this.path = path;
  }
}
