import { Component, input } from '@angular/core';

@Component({
  selector: 'aliased-label',
  templateUrl: './aliased-label.html',
})
export class AliasedLabel {

  text = input('', { alias: 'label' });

}
