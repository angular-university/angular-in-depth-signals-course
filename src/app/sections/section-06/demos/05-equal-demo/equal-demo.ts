import { Component, signal } from '@angular/core';

function sameIgnoringCase(a: string, b: string) {
  return a.toLowerCase() === b.toLowerCase();
}

@Component({
  selector: 'equal-demo',
  templateUrl: './equal-demo.html',
})
export class EqualDemo {

  plain = signal('angular');

  custom = signal<string>('angular', { equal: sameIgnoringCase });

  applyPlain(value: string) {
    this.plain.set(value);
  }

  applyCustom(value: string) {
    this.custom.set(value);
  }

}
