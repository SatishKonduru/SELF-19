import {
  Component,
  computed,
  ContentChildren,
  QueryList,
  signal,
} from '@angular/core';
import { StepComponent } from '../step/step.component';
import { CommonModule } from '@angular/common';
import { TopicComponent } from '../topic/topic.component';

@Component({
  selector: 'app-stepper',
  imports: [CommonModule, TopicComponent],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
})
export class StepperComponent {
  topicName = '@ContentChildren()';
  @ContentChildren(StepComponent) steps!: QueryList<StepComponent>;

  // stepTitles: string[] = [];
  // currentStepIndex: number = 0;

  // ngAfterContentInit(): void {
  //   this.stepTitles = this.steps.map((step) => step.title);
  // }

  // goToStep(index: number) {
  //   if (index >= 0 && index < this.steps.length) {
  //     this.currentStepIndex = index;
  //   }
  // }
  // ✅ Signals
  private _currentStepIndex = signal(0);
  currentStepIndex = this._currentStepIndex; // Exposed for template binding

  // ✅ Computed signal for step titles
  stepTitles = computed(() => this.steps?.map((step) => step.title) ?? []);

  // ✅ Computed signal for current templateRef
  currentStepTemplate = computed(
    () => this.steps?.toArray()[this._currentStepIndex()]?.templateRef
  );

  ngAfterContentInit(): void {
    // Optional: Trigger recompute if QueryList changes
    this.steps.changes.subscribe(() => {
      this.stepTitles(); // triggers re-computation
    });
  }

  goToStep(index: number) {
    if (index >= 0 && index < this.steps.length) {
      this._currentStepIndex.set(index);
    }
  }
}
