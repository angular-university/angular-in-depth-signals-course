import { Component, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Course } from '../../../../model/course';

@Component({
  selector: 'error-handling-demo',
  templateUrl: './error-handling-demo.html',
})
export class ErrorHandlingDemo {

  http = inject(HttpClient);

  title = signal('');

  error = signal('');

  async load(id: number) {
    try {
      const course = await firstValueFrom(this.http.get<Course>(`/api/courses/${id}`));
      this.title.set(course.title);
      this.error.set('');
    } catch (error) {
      this.title.set('');
      this.error.set(this.describe(error));
    }
  }

  describe(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      return `${error.status} ${error.statusText}`;
    }
    return String(error);
  }

}
