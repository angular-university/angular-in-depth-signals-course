import { Component, ElementRef, viewChildren } from '@angular/core';

@Component({
  selector: 'view-children-demo',
  templateUrl: './view-children-demo.html',
})
export class ViewChildrenDemo {

  fields = viewChildren<ElementRef<HTMLInputElement>>('field');

  clearAll() {
    for (const field of this.fields()) {
      field.nativeElement.value = '';
    }
  }

}
