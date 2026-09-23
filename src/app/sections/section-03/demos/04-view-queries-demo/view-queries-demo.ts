import { Component, ElementRef, signal, viewChild, viewChildren } from '@angular/core';
import { Hello } from './hello';

@Component({
  selector: 'view-queries-demo',
  imports: [Hello],
  templateUrl: './view-queries-demo.html',
})
export class ViewQueriesDemo {

  box = viewChild.required<ElementRef<HTMLInputElement>>('box');

  children = viewChildren('child');

  ids = signal([1, 2, 3]);

  helloComponent = viewChild.required<Hello>('hello');

  helloElement = viewChild.required('hello', { read: ElementRef });

  result = signal('');

  focus() {
    this.box().nativeElement.focus();
  }

  add() {
    this.ids.update((current) => [...current, current.length + 1]);
  }

  remove() {
    this.ids.update((current) => current.slice(0, -1));
  }

  readComponent() {
    this.result.set(this.helloComponent().name);
  }

  readElement() {
    this.result.set(this.helloElement().nativeElement.outerHTML);
  }

}
