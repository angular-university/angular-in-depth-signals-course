import { Component, input } from '@angular/core';

@Component({
  selector: 'demo-block',
  templateUrl: './demo-block.html',
  styleUrl: './demo-block.scss',
})
export class DemoBlock {

  title = input.required<string>();

  lessons = input('');

}
