import { Component } from '@angular/core';
import { ProvidersDemo } from './demos/01-providers-demo/providers-demo';
import { ScopedServiceDemo } from './demos/02-scoped-service-demo/scoped-service-demo';
import { InjectionOptionsDemo } from './demos/03-injection-options-demo/injection-options-demo';
import { InjectionContextDemo } from './demos/04-injection-context-demo/injection-context-demo';

@Component({
  selector: 'section-10',
  imports: [ProvidersDemo, ScopedServiceDemo, InjectionOptionsDemo, InjectionContextDemo],
  templateUrl: './section-10.html',
})
export class Section10 {

}
