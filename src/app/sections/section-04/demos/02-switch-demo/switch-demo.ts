import { Component, signal } from '@angular/core';

@Component({
  selector: 'switch-demo',
  templateUrl: './switch-demo.html',
})
export class SwitchDemo {

  status = signal('idle');

}
