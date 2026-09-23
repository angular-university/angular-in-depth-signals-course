import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'on-off',
  templateUrl: './on-off.html',
})
export class OnOff {

  on = input(false, { transform: booleanAttribute });

}
