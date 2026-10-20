import { Component } from '@angular/core';
import { TruncatePipe } from './truncate-pipe';

@Component({
  selector: 'custom-pipe-demo',
  imports: [TruncatePipe],
  templateUrl: './custom-pipe-demo.html',
})
export class CustomPipeDemo {

  text = 'Custom pipes transform values';

}
