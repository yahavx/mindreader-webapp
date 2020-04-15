import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../@core/objects/user';
import {ActivatedRoute} from '@angular/router';
import {MindreaderService} from '../../@core/services/mindreader.service';
import {SnapshotMD} from '../../@core/objects/snapshot';
import {DefaultObjects} from '../../@core/objects/default-objects';
import {DatePipe} from '@angular/common';

@Component({
selector: 'app-user-page',
templateUrl: './user-page.component.html',
styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit, OnDestroy {
userId: number;
user: User = DefaultObjects.user;
snapshots: SnapshotMD[] = [];
sub: any;
isUserLoaded = false;
isSnapshotLoaded = false;


constructor(private mindreaderService: MindreaderService, private route: ActivatedRoute, private datepipe: DatePipe) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.userId = +params['userId'];
      this.getUser(this.userId);
      this.getSnapshots(this.userId);
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
        this.snapshots = snapshots;
        this.isSnapshotLoaded = true;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  snapshotDateToString(timestamp: number) {
    const date = new Date(timestamp);  // convert to milliseconds
    return this.datepipe.transform(date, 'dd/MM/yyyy, HH:mm:ss:SSS000');
  }

  userDateToString(birthday: number) {
    let date = new Date(birthday * 1000);
    return this.datepipe.transform(date, 'dd/MM/yyyy');
  }
}
