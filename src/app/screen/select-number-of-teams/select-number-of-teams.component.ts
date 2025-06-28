import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-select-number-of-teams',
  templateUrl: './select-number-of-teams.component.html',
  styleUrl: './select-number-of-teams.component.scss',
  standalone: false,
})
export class SelectNumberOfTeamsComponent {

  constructor(
    private router: Router,
  ) {}

  moveToHome(): void {
    this.router.navigate(['']);
  }
}
