import { Component, signal } from '@angular/core';
import { Greeting } from './greeting';
import { OnOff } from './on-off';
import { Doubler } from './doubler';
import { Uppercased } from './uppercased';

@Component({
  selector: 'inputs-demo',
  imports: [Greeting, OnOff, Doubler, Uppercased],
  templateUrl: './inputs-demo.html',
})
export class InputsDemo {

  name = signal('Angular');

  on = signal('true');

  value = signal('21');

  text = signal('signals');

  applyName(name: string) {
    this.name.set(name);
  }

  applyOn(on: string) {
    this.on.set(on);
  }

  applyValue(value: string) {
    this.value.set(value);
  }

  applyText(text: string) {
    this.text.set(text);
  }

}
