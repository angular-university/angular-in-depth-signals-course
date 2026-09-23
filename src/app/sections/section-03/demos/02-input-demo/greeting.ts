import { Component, input } from '@angular/core';

@Component({
  selector: 'greeting',
  templateUrl: './greeting.html',
})
export class Greeting {

  name = input('');

}
