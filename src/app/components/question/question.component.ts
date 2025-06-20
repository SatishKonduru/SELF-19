import { CommonModule } from '@angular/common';
import { Component, input, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-question',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  // @Input() question: string = '';
  question = input(signal(''));
  answer: string = '';

  isAnswered(): boolean {
    return this.answer.trim().length > 0;
  }
}
