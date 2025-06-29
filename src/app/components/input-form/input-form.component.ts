import {
  Component,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.scss',
  standalone: false,
})
export class InputFormComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  @Output() change = new EventEmitter<string>();
  @Input() label: string = "";
  @Input() value: string = "";
  @Input() number: number = 0;

  onInputChange(): void {
    this.change.emit(this.value);
  }
}
