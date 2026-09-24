import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Course } from '../../../../model/course';

@Component({
  selector: 'http-client-demo',
  templateUrl: './http-client-demo.html',
})
export class HttpClientDemo {

  http = inject(HttpClient);

  loaded = signal<Course | undefined>(undefined);

  saved = signal<Course | undefined>(undefined);

  async load() {
    const course = await firstValueFrom(this.http.get<Course>('/api/courses/1'));
    this.loaded.set(course);
  }

  async save(title: string) {
    const course = await firstValueFrom(this.http.put<Course>('/api/courses/1', { title }));
    this.saved.set(course);
  }

}
