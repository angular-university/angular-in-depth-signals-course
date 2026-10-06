import { Component, ElementRef, signal, viewChild, viewChildren } from '@angular/core';
import { Hello } from './hello';

@Component({
  selector: 'view-queries-demo',
  imports: [Hello],
  templateUrl: './view-queries-demo.html',
})
export class ViewQueriesDemo {

  child = viewChild('input');

  query() {
    console.log(this.child());
  }






  children = viewChildren<ElementRef<HTMLElement>>('child');

  texts = signal('');

  readChildren() {
    this.texts.set(this.children().map((child) => child.nativeElement.textContent).join(', '));
  }

}
