import {Component, OnDestroy, OnInit} from '@angular/core';
import {Snapshot, SnapshotMD} from '../../@core/objects/snapshot';
import {MindreaderService} from '../../@core/services/mindreader.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {User} from '../../@core/objects/user';
import {DefaultObjects} from '../../@core/objects/default-objects';
import {DatePipe} from '@angular/common';

@Component({
selector: 'app-snapshot-page',
templateUrl: './snapshot-page.component.html',
styleUrls: ['./snapshot-page.component.css']
})
export class SnapshotPageComponent implements OnInit, OnDestroy {
userId: number;
snapshotId: string;
user: User = DefaultObjects.user;
snapshot: Snapshot = DefaultObjects.snapshot;
index: number; // snapshot index at the list
snapshotList: SnapshotMD[];

isUserLoaded = false;
isSnapshotLoaded = false;

results: string[];
sub: any;

constructor(private mindreaderService: MindreaderService, private route: ActivatedRoute, private router: Router,  private datepipe: DatePipe) {
    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    };

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
      this.userId = +params['userId'];
      this.snapshotId = params['snapshotId'];
      this.index = +params['index'];
      this.getSnapshot(this.userId, this.snapshotId);
      this.getSnapshots(this.userId);
      this.getUser(this.userId);
    });
  }

  getUser(userId: number) {
    this.mindreaderService.getUser(userId)
      .subscribe(user => {
        this.user = user;
        this.isUserLoaded = true;
      });
  }

  getSnapshots(userId: number) {
    this.mindreaderService.getSnapshots(userId)
      .subscribe(snapshots => {
        this.snapshotList = snapshots;
      });
  }

  getSnapshot(userId: number, snapshotId: string) {
    this.mindreaderService.getSnapshot(userId, snapshotId)
      .subscribe(snapshot => {
        this.snapshot = snapshot;
        this.results = snapshot.topics;
        this.isSnapshotLoaded = true;
      });
  }

  getNextSnapshotId() {
    if (!this.snapshotList) {
      return 0;
    }
    if (this.index === this.snapshotList.length - 1) {  // for safety
      return this.snapshotList.length - 1;
    }
    return this.snapshotList[this.index + 1].snapshotId;
  }

  getPrevSnapshotId() {
    if (!this.snapshotList || this.index === 0) {
      return 0;
    }
    return this.snapshotList[this.index - 1].snapshotId;
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
    return this.results.find((r) => r === result) !== undefined;
  }

  dateToString(timestamp: number) {
    const date = new Date(timestamp);  // convert to milliseconds
    return this.datepipe.transform(date, 'dd/MM/yyyy, HH:mm:ss:SSS000');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
