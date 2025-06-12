import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  EnvironmentInjector,
  inject,
  Injector,
  createComponent,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  @ViewChild('childHost', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  childRef!: ComponentRef<ChildComponent>;
  private injector = inject(Injector);
  private envInjector = inject(EnvironmentInjector);

  childMessage = 'Hello from Parent via Signal!';

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    // this.childRef = this.vcr.createComponent(ChildComponent, {
    //   environmentInjector: this.envInjector,
    //   injector: this.injector,
    // });
    this.childRef = createComponent(ChildComponent, {
      environmentInjector: this.envInjector,
      elementInjector: this.injector,
    });

    this.childRef.setInput('message', this.childMessage);
    this.cdr.detectChanges(); // Needed if you want to update bindings synchronously
  }

  callChildMethod() {
    this.childRef.instance.showMessage();
  }
}
