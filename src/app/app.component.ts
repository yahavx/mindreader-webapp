import {Component, OnInit} from '@angular/core';
import {MindreaderService} from './@core/services/mindreader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mindreader-webapp';

  constructor() {
  }

  ngOnInit(): void {
  }
}
