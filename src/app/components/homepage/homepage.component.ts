import {Component, OnInit} from '@angular/core';
import {MindreaderService} from '../../@core/services/mindreader.service';
import {UserMD} from '../../@core/objects/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  users: UserMD[] = [];
  // users: UserMD[] = [new UserMD(3, 'Yahav'), new UserMD(42, 'Dan Gittik')];

  constructor(private mindreaderService: MindreaderService, private router: Router) {
  }

  ngOnInit(): void {
    this.mindreaderService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }
}
