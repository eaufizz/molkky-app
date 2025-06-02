import { Injectable } from '@angular/core';

export interface Team {
  name: string;
  member: Player[];
  number?: number;
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

  constructor() {}

  setSelectedTeams(teams: Team[]): void {
    this.selectedTeams = teams;
  }

  getSelectedTeams(): Team[] {
    return this.selectedTeams;
  }
}
