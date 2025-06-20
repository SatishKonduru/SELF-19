import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  QueryList,
  signal,
  ViewChildren,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { QuestionComponent } from '../question/question.component';
import { FormsModule } from '@angular/forms';
interface QuestionItem {
  id: number;
  text: string;
}
@Component({
  selector: 'app-questionnaire',
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    QuestionComponent,
  ],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css',
})
export class QuestionnaireComponent {
  // ✅ Signal-based state
  questions = signal<QuestionItem[]>([
    { id: 1, text: 'What is your name?' },
    { id: 2, text: 'What is your favorite language?' },
  ]);

  newQuestion = signal('');
  nextId = signal(2);
  checked = signal(false);

  @ViewChildren(QuestionComponent)
  questionComponents!: QueryList<QuestionComponent>;
  allAnswered = signal(false);

  addQuestion() {
    const questionText = this.newQuestion().trim();
    if (questionText) {
      this.questions.update((qList) => [
        ...qList,
        { id: this.nextId(), text: questionText },
      ]);
      this.nextId.update((n) => n + 1);
      this.newQuestion.set('');
    }
  }

  removeQuestion(index: number) {
    this.questions.update((qList) => qList.filter((_, i) => i !== index));
  }

  checkAnswers() {
    this.checked.set(true);
    const all = this.questionComponents.toArray().every((q) => q.isAnswered());
    this.allAnswered.set(all);
  }
}
