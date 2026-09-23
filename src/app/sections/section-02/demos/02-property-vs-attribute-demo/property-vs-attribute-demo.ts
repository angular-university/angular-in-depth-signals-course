import { Component, signal } from '@angular/core';

@Component({
  selector: 'property-vs-attribute-demo',
  templateUrl: './property-vs-attribute-demo.html',
})
export class PropertyVsAttributeDemo {

  soldOut = signal(false);

}
