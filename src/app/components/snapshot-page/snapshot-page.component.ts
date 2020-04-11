import {Component, OnDestroy, OnInit} from '@angular/core';
import {Snapshot} from '../../@core/objects/snapshot';
import {MindreaderService} from '../../@core/services/mindreader.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../@core/objects/user';

@Component({
  selector: 'app-snapshot-page',
  templateUrl: './snapshot-page.component.html',
  styleUrls: ['./snapshot-page.component.css']
})
export class SnapshotPageComponent implements OnInit, OnDestroy {
  user_id: number;
  snapshot_id: string;
  user: User;
  snapshot: Snapshot;
  results: string[];
  sub: any;

  constructor(private mindreaderService: MindreaderService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.user_id = +params['userId'];
      this.snapshot_id = params['snapshotId'];
      this.getSnapshot(this.user_id, this.snapshot_id);
      this.getUser(this.user_id);
    });
  }

  getUser(user_id: number) {
    this.mindreaderService.getUser(user_id)
      .subscribe(user => {
        this.user = user;
      });
  }

  getSnapshot(user_id: number, snapshot_id: string) {
    this.mindreaderService.getSnapshot(user_id, snapshot_id)
      .subscribe(snapshot => {
        this.snapshot = snapshot;
        this.results = snapshot.results;
      });
  }

  hasPose(){
    return this.hasResult('pose');
  }

  hasFeelings(){
    return this.hasResult('feelings');
  }

  hasColorImage(){
    return this.hasResult('color_image');
  }

  hasDepthImage(){
    return this.hasResult('depth_image');
  }

  hasResult(result: string) {
    if (!this.results) {
      return false;
    }
    return this.results.find((r) => r == result) != undefined;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
