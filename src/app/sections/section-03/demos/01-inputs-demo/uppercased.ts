import { Component, input } from '@angular/core';

@Component({
  selector: 'uppercased',
  templateUrl: './uppercased.html',
})
export class Uppercased {

  text = input('', { transform: (value: string) => value.toUpperCase() });

}
