import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MindreaderService} from '../../@core/services/mindreader.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input()
  userId: number;
  @Input()
  snapshotId: string;
  @Input()
  imageType: string;

  @ViewChild('heroImage') image: ElementRef;

  public imageData: any;

  color = 'color';
  depth = 'depth';

  constructor(private mindreaderService: MindreaderService) {
  }

  ngOnInit(): void {
    if (this.imageType === 'color') {
      this.mindreaderService.getColorImageData(this.userId, this.snapshotId)
        .subscribe(blob => {
          this.renderImage(blob);
        });
    }

    if (this.imageType === 'depth') {
      this.mindreaderService.getDepthImageData(this.userId, this.snapshotId)
        .subscribe(blob => {
          this.renderImage(blob);
        });
    }
  }

  renderImage(imageBlob: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageData = reader.result;
    }, false);

    if (imageBlob) {
      reader.readAsDataURL(imageBlob);
    }
  }
}
