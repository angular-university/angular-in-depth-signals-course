import { Component, ElementRef, signal, viewChild, viewChildren } from '@angular/core';
import { Hello } from './hello';

@Component({
  selector: 'view-queries-demo',
  imports: [Hello],
  templateUrl: './view-queries-demo.html',
})
export class ViewQueriesDemo {

  box = viewChild.required<ElementRef<HTMLInputElement>>('box');

  children = viewChildren<ElementRef<HTMLElement>>('child');

  texts = signal('');

  helloComponent = viewChild.required<Hello>('hello');

  helloElement = viewChild.required('hello', { read: ElementRef });

  result = signal('');

  focus() {
    this.box().nativeElement.focus();
  }

  readChildren() {
    this.texts.set(this.children().map((child) => child.nativeElement.textContent).join(', '));
  }

  readComponent() {
    this.result.set(this.helloComponent().name);
  }

  readElement() {
    this.result.set(this.helloElement().nativeElement.outerHTML);
  }

}
