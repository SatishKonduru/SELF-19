import { Component, signal } from '@angular/core';
import { ReceiverComponent } from '../receiver/receiver.component';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-sender',
  imports: [ReceiverComponent, MatButtonModule],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css',
})
export class SenderComponent {
  message = 'This Message is from Parent Component';
  // incomingMsg: any;
  incomingMsg = signal<string>(''); // signal instead of normal variable
  updateIncomingMsg(msg: string) {
    this.incomingMsg.set(msg);
  }
}
