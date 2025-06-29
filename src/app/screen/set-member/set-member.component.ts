import { Component } from '@angular/core';
import {
  ScoreAppService,
  Team,
  Player,
} from '../../core/service/ScoreAppService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-member',
  templateUrl: './set-member.component.html',
  styleUrl: './set-member.component.scss',
  standalone: false,
})
export class SetMemberComponent {
  currentTeams: Team[] = [];
  teamCount: number = 0;

  constructor(
    private scoreAppService: ScoreAppService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.currentTeams = this.scoreAppService.getSelectedTeams().slice();
    this.teamCount = this. scoreAppService.getTeamCount();
    for (let i = 0; i < this.teamCount; i++) {
      const team: Team = {
        name: `チーム${i + 1}`,
        member: [],
        number: i,
        score: 0,
        totalScore: 0,
        miss: 0,
      };
      this.currentTeams.push(team);
    }
  }

  goNext(): void {
    this.router.navigate(["/game"]);
  }

  moveToBack(): void {
    this.router.navigate(["select-team"]);
  }

  moveToHome(): void {
    this.router.navigate([""]);
  }
}
