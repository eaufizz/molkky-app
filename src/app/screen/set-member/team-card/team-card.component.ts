import { Component, Input } from '@angular/core';
import { Team } from '../../../core/service/ScoreAppService';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss',
  standalone: false,
})
export class TeamCardComponent {
  @Input() team!: Team;

  ngOnInit(): void {
    if (this.team.member.length === 0) {
      this.addMember();
    }
  }

  removeMember(): void {
    this.team.member.pop();
  }

  addMember(): void {
    this.team.member.push({name: "ゲスト"});
  }
}
