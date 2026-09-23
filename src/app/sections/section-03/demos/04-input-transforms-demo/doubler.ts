import { Component, input, numberAttribute } from '@angular/core';

@Component({
  selector: 'doubler',
  templateUrl: './doubler.html',
})
export class Doubler {

  value = input(0, { transform: numberAttribute });

}
