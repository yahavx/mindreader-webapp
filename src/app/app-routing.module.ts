import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '/home', component: HomepageComponent }
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
