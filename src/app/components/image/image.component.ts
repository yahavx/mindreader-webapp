import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MindreaderService} from '../../@core/services/mindreader.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input()
  user_id: number;
  @Input()
  snapshot_id: string;
  @Input()
  image_type: string;

  @ViewChild('heroImage') image: ElementRef;

  public image_data: any;

  constructor(private mindreaderService: MindreaderService) {
  }

  ngOnInit(): void {
    if (this.image_type == 'color') {
      this.mindreaderService.getColorImageData(this.user_id, this.snapshot_id)
        .subscribe(blob => {
          this.renderImage(blob);
        });
    }

    if (this.image_type == 'depth') {
      this.mindreaderService.getDepthImageData(this.user_id, this.snapshot_id)
        .subscribe(blob => {
          this.renderImage(blob);
        });
    }
  }

  renderImage(imageBlob: Blob) {
    let reader = new FileReader();
    reader.addEventListener('load', () => {
      this.image_data = reader.result;
    }, false);

    if (imageBlob) {
      reader.readAsDataURL(imageBlob);
    }
  }
}
