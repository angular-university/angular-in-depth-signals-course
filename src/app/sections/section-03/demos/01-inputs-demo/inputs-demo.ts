import { Component, signal } from '@angular/core';
import { Greeting } from './greeting';
import { RequiredLabel } from './required-label';
import { AliasedLabel } from './aliased-label';
import { DefaultLabel } from './default-label';
import { OnOff } from './on-off';
import { Doubler } from './doubler';

@Component({
  selector: 'inputs-demo',
  imports: [Greeting, RequiredLabel, AliasedLabel, DefaultLabel, OnOff, Doubler],
  templateUrl: './inputs-demo.html',
})
export class InputsDemo {

  name = signal('Angular');

  apply(name: string) {
    this.name.set(name);
  }

}
