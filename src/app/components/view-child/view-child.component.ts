import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { TopicComponent } from '../topic/topic.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-view-child',
  imports: [
    TopicComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css',
})
export class ViewChildComponent {
  topicName = '@ViewChild()';
  inputValueWithRef = signal<string>('');
  inputValueWithViewChild = signal<string>('');
  @ViewChild('input') el: ElementRef;
  @ViewChild('input', { static: true }) inputStaticTrue: ElementRef;
  @ViewChild('input', { static: false }) inputStaticFalse: ElementRef;
  getValueWithRef(el: HTMLInputElement) {
    this.inputValueWithRef.set(el.value);
  }
  getValueWithViewChild() {
    this.inputValueWithViewChild.set(this.el.nativeElement.value);
    // this.inputValueWithViewChild = this.inputStaticTrue?.nativeElement?.value; // We will get result and Also available in OnInit
    // this.inputValueWithViewChild = this.inputStaticFalse?.nativeElement?.value; // We will get result but NOT available in OnInit
  }
  ngOnInit() {
    console.log('ngOnInit() called');
    console.log(
      'inputStaticTrue in ngOnInit:',
      this.inputStaticTrue.nativeElement.value
    ); // will be defined
    console.log(
      'inputStaticFalse in ngOnInit:',
      this.inputStaticFalse?.nativeElement?.value
    ); // will be undefined
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit() called');
    console.log(
      'inputStaticTrue in ngAfterViewInit:',
      this.inputStaticTrue?.nativeElement?.value
    );
    console.log(
      'inputStaticFalse in ngAfterViewInit:',
      this.inputStaticFalse?.nativeElement?.value
    );
  }
}
