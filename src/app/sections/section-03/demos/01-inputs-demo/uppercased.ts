import { Component, input } from '@angular/core';

function toUpperCase(value: string) {
  return value.toUpperCase();
}

@Component({
  selector: 'uppercased',
  templateUrl: './uppercased.html',
})
export class Uppercased {

  text = input('', { transform: toUpperCase });

}
