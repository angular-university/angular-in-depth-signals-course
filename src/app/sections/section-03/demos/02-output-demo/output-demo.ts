import { Component, signal } from '@angular/core';
import { MessageForm } from './message-form';

@Component({
  selector: 'output-demo',
  imports: [MessageForm],
  templateUrl: './output-demo.html',
})
export class OutputDemo {

  message = signal('');

  onSent(message: string) {
    this.message.set(message);
  }

}
