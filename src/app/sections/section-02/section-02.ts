import { Component } from '@angular/core';
import { InterpolationDemo } from './demos/01-interpolation-demo/interpolation-demo';
import { PropertyVsAttributeDemo } from './demos/02-property-vs-attribute-demo/property-vs-attribute-demo';
import { ClassBindingsDemo } from './demos/03-class-bindings-demo/class-bindings-demo';
import { StyleBindingsDemo } from './demos/04-style-bindings-demo/style-bindings-demo';
import { EventBindingDemo } from './demos/05-event-binding-demo/event-binding-demo';
import { TemplateRefDemo } from './demos/06-template-ref-demo/template-ref-demo';
import { LetDemo } from './demos/07-let-demo/let-demo';
import { SafeNavigationDemo } from './demos/08-safe-navigation-demo/safe-navigation-demo';

@Component({
  selector: 'section-02',
  imports: [
    InterpolationDemo,
    PropertyVsAttributeDemo,
    ClassBindingsDemo,
    StyleBindingsDemo,
    EventBindingDemo,
    TemplateRefDemo,
    LetDemo,
    SafeNavigationDemo,
  ],
  templateUrl: './section-02.html',
})
export class Section02 {

}
