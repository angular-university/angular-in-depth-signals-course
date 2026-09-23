import { Component, signal } from '@angular/core';

@Component({
  selector: 'class-bindings-demo',
  templateUrl: './class-bindings-demo.html',
  styleUrl: './class-bindings-demo.scss',
})
export class ClassBindingsDemo {

  featured = signal(false);

  soldOut = signal(false);

}
