import { Component, signal } from '@angular/core';

@Component({
  selector: 'property-vs-attribute-demo',
  templateUrl: './property-vs-attribute-demo.html',
  styleUrl: './property-vs-attribute-demo.scss',
})
export class PropertyVsAttributeDemo {

  enrolmentOpen = signal(true);

  span = signal(1);

}
