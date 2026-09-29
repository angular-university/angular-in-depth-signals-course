import { Component, signal } from '@angular/core';
import { TruncatePipe } from './truncate-pipe';

@Component({
  selector: 'custom-pipe-demo',
  imports: [TruncatePipe],
  templateUrl: './custom-pipe-demo.html',
})
export class CustomPipeDemo {

  text = signal('Custom pipes transform values');

  setText(text: string) {
    this.text.set(text);
  }

}
