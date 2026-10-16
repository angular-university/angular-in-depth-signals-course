import { Component } from '@angular/core';
import { InnerHtmlDemo } from './demos/01-inner-html-demo/inner-html-demo';
import { XsrfDemo } from './demos/02-xsrf-demo/xsrf-demo';

@Component({
  selector: 'section-17',
  imports: [InnerHtmlDemo, XsrfDemo],
  templateUrl: './section-17.html',
})
export class Section17 {

}
