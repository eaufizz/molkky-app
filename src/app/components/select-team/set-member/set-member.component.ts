import { Component } from '@angular/core';
import {
  ScoreAppService,
  Team,
  Player,
} from '../../../core/service/ScoreAppService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-member',
  templateUrl: './set-member.component.html',
  styleUrl: './set-member.component.scss',
  standalone: false,
})
export class SetMemberComponent {
  currentTeams: Team[] = [];

  constructor(
    private scoreApp: ScoreAppService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.currentTeams = this.scoreApp.getSelectedTeams();
  }

  goNext(): void {
    this.router.navigate(["/game"]);
  }
}
