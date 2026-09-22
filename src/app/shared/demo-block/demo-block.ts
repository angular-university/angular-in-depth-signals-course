import { Component, input } from '@angular/core';

@Component({
  selector: 'demo-block',
  templateUrl: './demo-block.html',
  styleUrl: './demo-block.scss',
})
export class DemoBlock {

  /** Named `heading` rather than `title` so a static value does not also become a DOM tooltip. */
  heading = input.required<string>();

  lessons = input('');

}
