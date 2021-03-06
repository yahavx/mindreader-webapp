import {Topics} from './topics';

export class ColorImage extends Topics {
  height: number;
  width: number;
  dataUrl: string;

  constructor(height: number, width: number, dataUrl: string) {
    super();
    this.height = height;
    this.width = width;
    this.dataUrl = dataUrl;
  }
}
