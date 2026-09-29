import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs';
import { Course } from '../../../../model/course';

@Component({
  selector: 'switch-map-demo',
  templateUrl: './switch-map-demo.html',
})
export class SwitchMapDemo {

  http = inject(HttpClient);

  query = signal('');

  sent = signal(0);

  received = signal(0);

  courses = toSignal(
    toObservable(this.query).pipe(
      debounceTime(300),
      filter((search) => search.length >= 3),
      distinctUntilChanged(),
      tap(() => this.sent.update((value) => value + 1)),
      switchMap((search) =>
        this.http
          .get<Course[]>('/api/courses', { params: { search } })
          .pipe(tap(() => this.received.update((value) => value + 1))),
      ),
    ),
    { initialValue: [] },
  );

  setQuery(query: string) {
    this.query.set(query);
  }

}
