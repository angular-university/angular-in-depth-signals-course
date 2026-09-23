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

  required = signal('Required value');

  aliased = signal('Aliased value');

  overridden = signal('Overridden value');

  on = signal('true');

  value = signal('21');

  applyName(name: string) {
    this.name.set(name);
  }

  applyRequired(text: string) {
    this.required.set(text);
  }

  applyAliased(text: string) {
    this.aliased.set(text);
  }

  applyOverridden(text: string) {
    this.overridden.set(text);
  }

  applyOn(on: string) {
    this.on.set(on);
  }

  applyValue(value: string) {
    this.value.set(value);
  }

}
