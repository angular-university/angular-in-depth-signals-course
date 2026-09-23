import { Component, signal } from '@angular/core';
import { MOCK_COURSES } from '../../../../shared/mock-courses';

@Component({
  selector: 'class-bindings-demo',
  templateUrl: './class-bindings-demo.html',
  styleUrl: './class-bindings-demo.scss',
})
export class ClassBindingsDemo {

  course = MOCK_COURSES[1];

  featured = signal(false);

  soldOut = signal(false);

}
