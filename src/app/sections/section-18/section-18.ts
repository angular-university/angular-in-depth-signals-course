import { Component } from '@angular/core';
import { IcuDemo } from './demos/01-icu-demo/icu-demo';
import { I18nPipesDemo } from './demos/02-i18n-pipes-demo/i18n-pipes-demo';

@Component({
  selector: 'section-18',
  imports: [IcuDemo, I18nPipesDemo],
  templateUrl: './section-18.html',
})
export class Section18 {

}
