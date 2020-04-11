import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { SnapshotPageComponent } from './components/snapshot-page/snapshot-page.component';
import {MindreaderService} from './@core/services/mindreader.service';
import { HttpClientModule } from '@angular/common/http';
import { PoseComponent } from './components/pose/pose.component';
import { FeelingsComponent } from './components/feelings/feelings.component';
import { ColorImageComponent } from './components/color-image/color-image.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserPageComponent,
    SnapshotPageComponent,
    PoseComponent,
    FeelingsComponent,
    ColorImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MindreaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
