import { Component } from '@angular/core';
import { SanitizationDemo } from './demos/01-sanitization-demo/sanitization-demo';
import { XsrfDemo } from './demos/02-xsrf-demo/xsrf-demo';

@Component({
  selector: 'section-17',
  imports: [SanitizationDemo, XsrfDemo],
  templateUrl: './section-17.html',
})
export class Section17 {

}
