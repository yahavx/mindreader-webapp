import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {Snapshot} from './@core/objects/snapshot';
import {UserPageComponent} from './components/user-page/user-page.component';
import {SnapshotPageComponent} from './components/snapshot-page/snapshot-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'user/:id', component: UserPageComponent},
  {path: 'user/:id/snapshot/:snapshot_id', component: SnapshotPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

/*
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user-page/:id', component: UserPageComponent },
  { path: 'snapshot/:userId/:id', component: SnapshotPageComponent } ];

  <div *ngIf="condition">Content to render when condition is true.</div>
*/

// const appRoutes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: UsersComponent },
//   { path: 'user-page/:id', component: UserPageComponent },
//   { path: 'snapshot/:userId/:id/:timestamp', component: SnapshotPageComponent } ];
//
// <a [routerLink]="['/user-page', user.userId]">
//   {{ user.username }} (id: {{ user.userId }})
// </a>
