import { Service, inject } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Course } from '../../../../model/course';

@Service()
export class CoursesService {

  http = inject(HttpClient);

  courseResource(id: number) {
    return httpResource<Course>(() => `/api/courses/${id}`);
  }

  saveCourse(id: number, title: string) {
    return firstValueFrom(this.http.put<Course>(`/api/courses/${id}`, { title }));
  }

}
