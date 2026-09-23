import { Component, output } from '@angular/core';

@Component({
  selector: 'answer-buttons',
  templateUrl: './answer-buttons.html',
})
export class AnswerButtons {

  answered = output<string>();

  answer(value: string) {
    this.answered.emit(value);
  }

}
