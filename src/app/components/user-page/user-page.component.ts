import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../@core/objects/user';
import {ActivatedRoute} from '@angular/router';
import {MindreaderService} from '../../@core/services/mindreader.service';
import {SnapshotMD} from '../../@core/objects/snapshot';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit, OnDestroy {
  user_id: number;
  user: User;
  snapshots: SnapshotMD[] = [];
  sub: any;

  constructor(private mindreaderService: MindreaderService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.user_id = +params['id'];
      this.getUser(this.user_id);
      this.getSnapshots(this.user_id);
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
        this.snapshots = snapshots;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
