import { Component, signal } from '@angular/core';

@Component({
  selector: 'safe-navigation-demo',
  templateUrl: './safe-navigation-demo.html',
})
export class SafeNavigationDemo {

  course = signal<{ title: string } | null>(null);

  nickname = signal<string | null>(null);

  lesson = signal<{ title: string } | undefined>({ title: 'Signals Deep Dive' });

  toggleCourse() {
    this.course.update((current) => (current ? null : { title: 'Angular In Depth' }));
  }

  toggleNickname() {
    this.nickname.update((current) => (current ? null : 'Ada'));
  }

}
