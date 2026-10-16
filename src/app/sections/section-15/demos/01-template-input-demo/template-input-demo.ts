import { Component } from '@angular/core';
import { TemplateList } from './template-list';

@Component({
  selector: 'template-input-demo',
  imports: [TemplateList],
  templateUrl: './template-input-demo.html',
})
export class TemplateInputDemo {

  items = ['First', 'Second', 'Third'];

}
