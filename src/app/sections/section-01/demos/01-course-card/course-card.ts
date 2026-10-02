import {Component, signal} from '@angular/core';
import { MOCK_COURSES } from '../../../../shared/mock-courses';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss',
})
export class CourseCard {

  course = signal(MOCK_COURSES[1]);

}
