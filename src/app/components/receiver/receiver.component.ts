import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-receiver',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css',
})
export class ReceiverComponent {
  // @Input() postman: any;
  postman = input<string>();
  @Output() reply = new EventEmitter();
  msg = signal<string>('');
  private replySignal = signal('This is the Reply Message');
  replyMessage() {
    this.reply.emit(this.replySignal);
  }
  showParentMessage() {
    this.msg.set(this.postman());
  }
}
