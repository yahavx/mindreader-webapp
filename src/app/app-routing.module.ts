import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as path from 'path';
import {HomepageComponent} from './pages/homepage/homepage.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'users', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user-page/:id', component: UserPageComponent },
  { path: 'snapshot/:userId/:id', component: SnapshotPageComponent } ];

  <div *ngIf="condition">Content to render when condition is true.</div>
*/
