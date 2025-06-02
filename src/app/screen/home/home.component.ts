import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    console.log('test');
  }

  openApp(): void {
    this.router.navigate(['/score']);
  }
}
