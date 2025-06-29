import { Component, Input } from '@angular/core';

export interface SelectOption {
  name: string;
  value: string;
}

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrl: './select-box.component.scss',
  standalone: false,
})
export class SelectBoxComponent {
  @Input() options: SelectOption[] = [

  ];
}
