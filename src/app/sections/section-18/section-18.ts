import { Component } from '@angular/core';
import { I18nDemo } from './demos/01-i18n-demo/i18n-demo';
import { IcuDemo } from './demos/02-icu-demo/icu-demo';
import { I18nPipesDemo } from './demos/03-i18n-pipes-demo/i18n-pipes-demo';

@Component({
  selector: 'section-18',
  imports: [I18nDemo, IcuDemo, I18nPipesDemo],
  templateUrl: './section-18.html',
})
export class Section18 {

}
