import { Component } from '@angular/core';
import { InnerText } from './inner-text';

@Component({
  selector: 'ng-deep-demo',
  imports: [InnerText],
  templateUrl: './ng-deep-demo.html',
  styleUrl: './ng-deep-demo.scss',
})
export class NgDeepDemo {

}
