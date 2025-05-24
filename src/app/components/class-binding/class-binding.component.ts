import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  imports: [CommonModule],
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.css',
})
export class ClassBindingComponent {
  textColor = 'myTextColor';
  textSize = 'myTextSize';
  myGroupClass = {
    myTextColor: true,
    myTextSize: true,
  };
}
