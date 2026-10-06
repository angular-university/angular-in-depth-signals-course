import { Component, ElementRef, signal, viewChild, viewChildren } from '@angular/core';
import { Hello } from './hello';

@Component({
  selector: 'view-queries-demo',
  imports: [Hello],
  templateUrl: './view-queries-demo.html',
})
export class ViewQueriesDemo {

  children = viewChildren('child');

  queryChildren() {
    console.log("Query children result: ", this.children());
  }





  child = viewChild.required('hello', {read: Hello});

  query() {
    console.log("Query result: ", this.child());
  }
}
