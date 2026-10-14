import { Component, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Course } from '../../../../model/course';

@Component({
  selector: 'http-client-demo',
  templateUrl: './http-client-demo.html',
})
export class HttpClientDemo {

  http = inject(HttpClient);

  course = signal<Course | null>(null);

  error = signal('');

  async load(id: number) {
    try {
      this.error.set('');
      const course = await firstValueFrom(this.http.get<Course>(`/api/courses/${id}`));
      this.course.set(course);
    } catch (error) {
      this.error.set(this.describe(error));
    }
  }

  async save(id: number, title: string) {
    try {
      this.error.set('');
      const course = await firstValueFrom(this.http.put<Course>(`/api/courses/${id}`, { title }));
      this.course.set(course);
    } catch (error) {
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
