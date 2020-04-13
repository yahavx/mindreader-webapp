import {Component, Input, OnInit} from '@angular/core';
import {Pose, Rotation, Translation} from '../../@core/objects/pose';
import {MindreaderService} from '../../@core/services/mindreader.service';
import {Feelings} from '../../@core/objects/feelings';
import {DefaultObjects} from '../../@core/objects/default-objects';
import {element} from 'protractor';
import {elementEventFullName} from '@angular/compiler/src/view_compiler/view_compiler';

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

  feelings: Feelings = DefaultObjects.feelings;

  constructor(private mindreaderService: MindreaderService) {
  }

  ngOnInit(): void {
    this.mindreaderService.getFeelings(this.user_id, this.snapshot_id)
      .subscribe(feelings => {
        this.feelings = feelings;
        this.SetColors();
      });
  }

  SetColors() {
    const elements = ['hunger', 'thirst', 'happiness', 'exhaustion'];
    const map = {
      hunger: this.feelings.hunger,
      thirst: this.feelings.thirst,
      happiness: this.feelings.happiness,
      exhaustion: this.feelings.exhaustion
    };
    elements.forEach(elem => {
      document.getElementById(elem).style.color = this.getColor(map[elem]);
    });
  }

  getColor(value: any): string {
    if (value == -1) {
      return '#bd2222';
    }
    if (value <= -0.8) {
      return '#79260d';
    }
    if (value <= -0.6) {
      return '#77381d';
    }
    if (value <= -0.4) {
      return '#76551c';
    }
    if (value <= -0.2) {
      return '#74641c';
    }
    if (value <= 0) {
      return '#6d7703';
    }
    if (value <= 0.2) {
      return '#5a7611';
    }
    if (value <= 0.4) {
      return '#547828';
    }
    if (value <= 0.6) {
      return '#3b7738';
    }
    if (value <= 0.8) {
      return '#1f732c';
    }
    if (value <= 1) {
      return '#00a202';
    }
  }

  round(feeling: number) {
    return Math.round(feeling * 100000) / 100000;
  }


}
