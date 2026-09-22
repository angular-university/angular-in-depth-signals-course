import { Component } from '@angular/core';
import { MOCK_COURSES } from '../../../shared/mock-courses';

/**
 * Lessons 2.1 - 2.2: a component is a custom HTML element. The class is the model,
 * the template is the view, and interpolation is what connects the two.
 */
@Component({
  selector: 'first-component-demo',
  template: `
    <h4 class="demo-heading">{{ title }}</h4>
    <p class="demo-text">{{ description }}</p>
    <p class="demo-meta">Price: {{ price }}</p>
  `,
  styleUrl: './demo-shared.scss',
})
export class FirstComponentDemo {

  title = MOCK_COURSES[0].title;

  description = MOCK_COURSES[0].description;

  price = MOCK_COURSES[0].price;

}
