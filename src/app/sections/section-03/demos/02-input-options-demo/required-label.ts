import { Component, input } from '@angular/core';

@Component({
  selector: 'required-label',
  templateUrl: './required-label.html',
})
export class RequiredLabel {

  text = input.required<string>();

}
