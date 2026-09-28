import { Directive, ElementRef, inject, output } from '@angular/core';

@Directive({
  selector: '[myClickOutside]',
  host: {
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class ClickOutside {

  element = inject(ElementRef);

  myClickOutside = output();

  onDocumentClick(event: MouseEvent) {
    if (this.element.nativeElement.contains(event.target)) {
      return;
    }
    this.myClickOutside.emit();
  }

}
