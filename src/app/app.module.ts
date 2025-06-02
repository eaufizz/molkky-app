import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './screen/home/home.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { InputFormComponent } from './components/score-app/select-team/input-form/input-form.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ScoreAppComponent } from './components/score-app/score-app.component';
import { SelectTeamComponent } from './components/score-app/select-team/select-team.component';
import { FormsModule } from '@angular/forms';
import { SetMemberComponent } from './components/score-app/select-team/set-member/set-member.component';


@NgModule({
  declarations: [
    HomeComponent,
    InputFormComponent,
    HeaderComponent,
    ScoreAppComponent,
    SelectTeamComponent,
    AppComponent,
    SetMemberComponent,
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
