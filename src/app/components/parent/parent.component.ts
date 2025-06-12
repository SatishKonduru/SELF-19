import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TopicComponent } from '../topic/topic.component';
import { ChildComponent } from '../child/child.component';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-parent',
  imports: [TopicComponent, MatButtonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  topicName = '@ViewChild() with Component Reference';
  @ViewChild('childHost', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  childRef!: ComponentRef<ChildComponent>;

  childMessage = 'Hello from Parent via Signal!';

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.childRef = this.vcr.createComponent(ChildComponent);

    // ✅ Pass signal-based @Input
    this.childRef.setInput('message', this.childMessage);

    // Optional: trigger change detection to avoid ExpressionChangedAfterItHasBeenCheckedError
    this.cdr.detectChanges();
  }

  callChildMethod() {
    this.childRef.instance.showMessage();
  }
}
