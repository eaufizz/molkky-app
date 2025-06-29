import { Injectable } from '@angular/core';

export interface Team {
  name: string;
  member: Player[];
  number?: number;
  score?: number;
  totalScore?: number;
  miss?: number;
}

export interface Player {
  name: string;
  id?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ScoreAppService {
  private selectedTeams: Team[] = [];
  private teamCount: number = 0;

  constructor() {}

  setSelectedTeams(teams: Team[]): void {
    this.selectedTeams = teams;
  }

  getSelectedTeams(): Team[] {
    return this.selectedTeams;
  }

  setTeamCount(value: number) {
    this.teamCount = value;
  }

  getTeamCount(): number {
    return this.teamCount;
  }
}
