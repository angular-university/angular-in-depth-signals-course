import { Component } from '@angular/core';
import { MOCK_COURSES } from '../../../shared/mock-courses';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss',
})
export class CourseCard {

  course = MOCK_COURSES[1];

}
