import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {Snapshot} from './@core/objects/snapshot';
import {UserPageComponent} from './components/user-page/user-page.component';
import {SnapshotPageComponent} from './components/snapshot-page/snapshot-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'user/:userId', component: UserPageComponent},
  {path: 'snapshot/:userId/:snapshotId/:index', component: SnapshotPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
