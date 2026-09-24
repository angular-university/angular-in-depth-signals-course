import { Component, inject, signal } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Course } from '../../../../model/course';

@Component({
  selector: 'observe-demo',
  templateUrl: './observe-demo.html',
})
export class ObserveDemo {

  http = inject(HttpClient);

  body = signal<Course | undefined>(undefined);

  response = signal<HttpResponse<Course> | undefined>(undefined);

  events = signal<string[]>([]);

  async loadBody() {
    const body = await firstValueFrom(this.http.get<Course>('/api/courses/1', { observe: 'body' }));
    this.body.set(body);
  }

  async loadResponse() {
    const response = await firstValueFrom(
      this.http.get<Course>('/api/courses/1', { observe: 'response' }),
    );
    this.response.set(response);
  }

  loadEvents() {
    this.events.set([]);
    this.http
      .get<Course>('/api/courses/1', { observe: 'events', reportDownloadProgress: true })
      .subscribe((event) => this.addEvent(event));
  }

  addEvent(event: HttpEvent<Course>) {
    this.events.update((events) => [...events, HttpEventType[event.type]]);
  }

}
