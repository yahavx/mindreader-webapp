import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Snapshot, SnapshotMD} from '../../@core/objects/snapshot';
import {MindreaderService} from '../../@core/services/mindreader.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {User} from '../../@core/objects/user';
import {DefaultObjects} from '../../@core/objects/default-objects';

@Component({
  selector: 'app-snapshot-page',
  templateUrl: './snapshot-page.component.html',
  styleUrls: ['./snapshot-page.component.css']
})
export class SnapshotPageComponent implements OnInit, OnDestroy {
  user_id: number;
  snapshot_id: string;
  user: User = DefaultObjects.user;
  snapshot: Snapshot = DefaultObjects.snapshot;
  index: number; // snapshot index at the list
  snapshot_list: SnapshotMD[];

  results: string[];
  sub: any;

  constructor(private mindreaderService: MindreaderService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });

  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.user_id = +params['userId'];
      this.snapshot_id = params['snapshotId'];
      this.index = +params['index'];
      this.getSnapshot(this.user_id, this.snapshot_id);
      this.getSnapshots(this.user_id);
      this.getUser(this.user_id);
    });
  }

  getUser(user_id: number) {
    this.mindreaderService.getUser(user_id)
      .subscribe(user => {
        this.user = user;
      });
  }

  getSnapshots(user_id: number) {
    this.mindreaderService.getSnapshots(user_id)
      .subscribe(snapshots => {
        this.snapshot_list = snapshots;
      });
  }

  getSnapshot(user_id: number, snapshot_id: string) {
    this.mindreaderService.getSnapshot(user_id, snapshot_id)
      .subscribe(snapshot => {
        this.snapshot = snapshot;
        this.results = snapshot.results;
      });
  }

  getNextSnapshotId() {
    if (!this.snapshot_list)
      return 0;
    if (this.index == this.snapshot_list.length - 1) {  // for safety
      return this.snapshot_list.length - 1;
    }
    return this.snapshot_list[this.index + 1].snapshot_id;
  }

  getPrevSnapshotId() {
    if (!this.snapshot_list || this.index == 0) {
      return 0;
    }
    return this.snapshot_list[this.index - 1].snapshot_id;
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
