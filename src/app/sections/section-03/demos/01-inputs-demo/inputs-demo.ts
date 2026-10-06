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

  value = signal('21');

  applyValue(value: string) {
    this.value.set(value);
  }



  on = signal('true');

  applyOn(on: string) {
    this.on.set(on);
  }









  name = signal('Angular');

  applyName(name: string) {
    this.name.set(name);
  }



  text = signal('signals');

  applyText(text: string) {
    this.text.set(text);
  }

}
