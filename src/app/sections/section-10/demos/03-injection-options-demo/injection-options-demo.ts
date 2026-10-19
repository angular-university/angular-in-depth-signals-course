import { Component } from '@angular/core';
import { LEVEL } from './level';
import { OptionsChild } from './options-child';

@Component({
  selector: 'injection-options-demo',
  imports: [OptionsChild],
  providers: [{ provide: LEVEL, useValue: 'parent' }],
  templateUrl: './injection-options-demo.html',
})
export class InjectionOptionsDemo {

}
