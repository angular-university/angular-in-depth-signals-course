import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Course } from '../../../../model/course';

@Service()
export class CoursesService {

  http = inject(HttpClient);

  loadCourse(id: number) {
    return firstValueFrom(this.http.get<Course>(`/api/courses/${id}`));
  }

  saveCourse(id: number, title: string) {
    return firstValueFrom(this.http.put<Course>(`/api/courses/${id}`, { title }));
  }

}
