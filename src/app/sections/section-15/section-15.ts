import { Component } from '@angular/core';
import { TemplateInputDemo } from './demos/01-template-input-demo/template-input-demo';
import { StructuralDirectiveDemo } from './demos/02-structural-directive-demo/structural-directive-demo';

@Component({
  selector: 'section-15',
  imports: [TemplateInputDemo, StructuralDirectiveDemo],
  templateUrl: './section-15.html',
})
export class Section15 {

}
