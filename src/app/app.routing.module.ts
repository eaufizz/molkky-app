import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { HomeComponent } from './screen/home/home.component';
import { ScoreAppComponent } from './components/score-app/score-app.component';
import { SelectTeamComponent } from './components/score-app/select-team/select-team.component';
import { SetMemberComponent } from './components/score-app/select-team/set-member/set-member.component';

const routes: Routes = [
  { path: '', component: ScoreAppComponent },
  { path: 'score', component: ScoreAppComponent },
  { path: 'select-team', component: SelectTeamComponent },
  { path: 'set-member', component: SetMemberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const appRoutes: Routes = routes;
