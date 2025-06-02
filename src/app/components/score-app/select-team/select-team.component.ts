import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { InputFormComponent } from './input-form/input-form.component';
import { Router } from '@angular/router';
import {
  ScoreAppService,
  Team,
  Player,
 } from '../../../core/service/ScoreAppService';

@Component({
  selector: 'app-select-team',
  standalone: false,
  templateUrl: './select-team.component.html',
  styleUrl: './select-team.component.scss'
})
export class SelectTeamComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  teamCount: number = 1;
  showAdd: boolean = true;
  showNext: boolean = true;
  selectedTeams: Team[] = [];

  constructor(
    private router: Router,
    private scoreAppService: ScoreAppService,
  ) {}

  ngAfterViewInit(): void {
    this.addInputForm();
  }

  addInputForm(): void {
    const inputFormRef = this.container.createComponent(InputFormComponent);
    inputFormRef.instance.label = `チーム${this.teamCount}`;
    inputFormRef.location.nativeElement.classList.add('form');
    inputFormRef.location.nativeElement.classList.add(`form${this.teamCount}`);
    if (this.teamCount === 6) {
      this.showAdd = false;
    }
    const teamNumber = this.teamCount;
    this.teamCount ++;
    let team: Team = {
      name: `チーム${teamNumber}`,
      member: [],
    }
    this.selectedTeams[teamNumber - 1] = team;
    inputFormRef.instance.change.subscribe((value: string)=> {
      team.name = value;
      if (team.name === "") {
        team.name = `チーム${teamNumber}`;
      }
      this.selectedTeams[teamNumber - 1] = team;
      console.log(this.selectedTeams);
    })
  }

  goNext(): void {
    this.scoreAppService.setSelectedTeams(this.selectedTeams);
    this.router.navigate(['/set-member'])
  }
}
