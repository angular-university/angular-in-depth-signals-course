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
    if (this.course()) {
      this.course.set(null);
      return;
    }

    this.course.set({ title: 'Definitive Angular' });
  }

  toggleNickname() {
    if (this.nickname()) {
      this.nickname.set(null);
      return;
    }

    this.nickname.set('Ada');
  }

}
