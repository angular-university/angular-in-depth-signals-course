import { Component } from '@angular/core';
import { ProvidersDemo } from './demos/01-providers-demo/providers-demo';
import { ScopedServiceDemo } from './demos/02-scoped-service-demo/scoped-service-demo';
import { InjectionContextDemo } from './demos/03-injection-context-demo/injection-context-demo';

@Component({
  selector: 'section-15',
  imports: [ProvidersDemo, ScopedServiceDemo, InjectionContextDemo],
  templateUrl: './section-15.html',
})
export class Section15 {

}
