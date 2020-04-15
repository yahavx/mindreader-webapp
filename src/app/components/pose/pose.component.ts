import {Component, Input, OnInit} from '@angular/core';
import {Pose, Rotation, Translation} from '../../@core/objects/pose';
import {MindreaderService} from '../../@core/services/mindreader.service';

@Component({
  selector: 'app-pose',
  templateUrl: './pose.component.html',
  styleUrls: ['./pose.component.css']
})
export class PoseComponent implements OnInit {

  @Input()
  userId: number;
  @Input()
  snapshotId: string;

  pose: Pose;
  translation: Translation;
  rotation: Rotation;

  constructor(private mindreaderService: MindreaderService) {
  }

  r(num: number) {
    return Math.round(num * 10000) / 10000;
  }

  translationToString() {

    if (!this.translation) {
      return;
    }
    return `{${this.r(this.translation.x)}, ${this.r(this.translation.y)}, ${this.r(this.translation.z)}}`;
  }

  rotationToString() {
    if (!this.rotation) {
      return;
    }
    return `{${this.r(this.rotation.w)}, ${this.r(this.rotation.x)}, ${this.r(this.rotation.y)}, ${this.r(this.rotation.z)}}`;
  }

  ngOnInit(): void {
    this.mindreaderService.getPose(this.userId, this.snapshotId)
      .subscribe(pose => {
        this.pose = pose;
        this.translation = pose.translation;
        this.rotation = pose.rotation;
      });
  }
}
