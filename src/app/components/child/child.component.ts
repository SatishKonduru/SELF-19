import { Component, input, Input, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  // Signal-based input
  // @Input({ required: true }) message = signal<string>('');
  message = input<string>('');
  showMessage() {
    alert('Child says: ' + this.message());
  }
}
