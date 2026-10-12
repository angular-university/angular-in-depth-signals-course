import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'linked-signal-demo',
  templateUrl: './linked-signal-demo.html',
})
export class LinkedSignalDemo {

  title = signal('Hello World');

  slug = linkedSignal({
    source: () => ({ title: this.title() }),
    computation: (source, previous) => {
      console.log('previous', previous);
      return slugify(source.title);
    },
  });

  setTitle(value: string) {
    this.title.set(value);
  }

  setSlug(value: string) {
    this.slug.set(value);
  }

}

function slugify(value: string) {
  return value.toLowerCase().replaceAll(' ', '-');
}




// slug = linkedSignal({
//   source: this.title,
//   computation: (title, previous) => slugify(title),
// });
