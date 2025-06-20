import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { InputFormComponent } from './components/select-team/input-form/input-form.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ScoreAppComponent } from './screen/score-app/score-app.component';
import { SelectTeamComponent } from './components/select-team/select-team.component';
import { FormsModule } from '@angular/forms';
import { SetMemberComponent } from './components/select-team/set-member/set-member.component';
import { GameComponent } from './screen/game/game.screen';

@NgModule({
  declarations: [
    InputFormComponent,
    HeaderComponent,
    ScoreAppComponent,
    SelectTeamComponent,
    AppComponent,
    SetMemberComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatInputModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
