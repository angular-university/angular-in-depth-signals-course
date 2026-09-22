import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MOCK_COURSES } from '../../../shared/mock-courses';

/**
 * Our first component: a class holding the data, a template showing it, and interpolation
 * connecting the two. No inputs yet — the course is hardcoded here.
 */
@Component({
  selector: 'course-card',
  imports: [CurrencyPipe],
  template: `
    <article class="card">

      <div class="card-image">
        <img [src]="course.iconUrl" [alt]="course.title" />
      </div>

      <div class="card-body">
        <span class="card-category">{{ course.category }}</span>
        <h4 class="card-title">{{ course.title }}</h4>
        <p class="card-description">{{ course.description }}</p>
        <p class="card-price">{{ course.price | currency }}</p>
      </div>

    </article>
  `,
  styleUrl: './course-card.scss',
})
export class CourseCard {

  course = MOCK_COURSES[1];

}
