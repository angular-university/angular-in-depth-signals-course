import { Component, ElementRef, signal, viewChild, viewChildren } from '@angular/core';
import { Hello } from './hello';

@Component({
  selector: 'view-queries-demo',
  imports: [Hello],
  templateUrl: './view-queries-demo.html',
})
export class ViewQueriesDemo {

  box = viewChild.required<ElementRef<HTMLInputElement>>('box');

  fields = viewChildren<ElementRef<HTMLInputElement>>('field');

  hello = viewChild.required('hello', { read: ElementRef });

  tagName = signal('');

  focus() {
    this.box().nativeElement.focus();
  }

  clearAll() {
    for (const field of this.fields()) {
      field.nativeElement.value = '';
    }
  }

  readTagName() {
    this.tagName.set(this.hello().nativeElement.tagName);
  }

}
