import { Component, input } from '@angular/core';

@Component({
  selector: 'default-label',
  templateUrl: './default-label.html',
})
export class DefaultLabel {

  text = input('Default value');

}
