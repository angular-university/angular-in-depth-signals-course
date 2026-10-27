import { Component, ElementRef, afterNextRender, viewChild } from '@angular/core';

@Component({
  selector: 'focused-input',
  templateUrl: './focused-input.html',
})
export class FocusedInput {

  field = viewChild.required<ElementRef<HTMLInputElement>>('field');

  constructor() {
    afterNextRender({
      write: () => this.field().nativeElement.focus(),
    });
  }

}
