import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { Hello } from './hello';

@Component({
  selector: 'query-options-demo',
  imports: [Hello],
  templateUrl: './query-options-demo.html',
})
export class QueryOptionsDemo {

  box = viewChild.required<ElementRef<HTMLInputElement>>('box');

  hello = viewChild.required('hello', { read: ElementRef });

  tagName = signal('');

  clear() {
    this.box().nativeElement.value = '';
  }

  readTagName() {
    this.tagName.set(this.hello().nativeElement.tagName);
  }

}
