import {Component, Input, OnInit} from '@angular/core';
import {Pose, Rotation, Translation} from '../../@core/objects/pose';
import {MindreaderService} from '../../@core/services/mindreader.service';
import {Feelings} from '../../@core/objects/feelings';

@Component({
  selector: 'app-feelings',
  templateUrl: './feelings.component.html',
  styleUrls: ['./feelings.component.css']
})
export class FeelingsComponent implements OnInit {

  @Input()
  user_id: number;
  @Input()
  snapshot_id: string;

  feelings: Feelings;

  constructor(private mindreaderService: MindreaderService) {
  }

  ngOnInit(): void {
    this.mindreaderService.getFeelings(this.user_id, this.snapshot_id)
      .subscribe(feelings => {
        this.feelings = feelings;
      });
  }

}
