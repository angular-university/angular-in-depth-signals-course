import { Component, signal } from '@angular/core';
import { AnswerButtons } from './answer-buttons';

@Component({
  selector: 'output-demo',
  imports: [AnswerButtons],
  templateUrl: './output-demo.html',
})
export class OutputDemo {

  answer = signal('none yet');

  onAnswered(answer: string) {
    this.answer.set(answer);
  }

}
