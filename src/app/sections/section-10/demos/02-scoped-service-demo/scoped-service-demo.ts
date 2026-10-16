import { Component } from '@angular/core';
import { LessonBrowser } from './lesson-browser';

@Component({
  selector: 'scoped-service-demo',
  imports: [LessonBrowser],
  templateUrl: './scoped-service-demo.html',
})
export class ScopedServiceDemo {

}
