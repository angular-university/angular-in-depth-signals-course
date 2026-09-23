import { Component, signal } from '@angular/core';

@Component({
  selector: 'safe-navigation-demo',
  templateUrl: './safe-navigation-demo.html',
})
export class SafeNavigationDemo {

  course = signal<{ title: string } | null>(null);

  toggleCourse() {
    this.course.update((current) => (current ? null : { title: 'Angular In Depth (Signals Edition)' }));
  }

}
