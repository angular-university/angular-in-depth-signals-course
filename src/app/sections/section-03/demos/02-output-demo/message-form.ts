import { Component, output } from '@angular/core';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.html',
})
export class MessageForm {

  sent = output<string>();

  send(message: string) {
    this.sent.emit(message);
  }

}
