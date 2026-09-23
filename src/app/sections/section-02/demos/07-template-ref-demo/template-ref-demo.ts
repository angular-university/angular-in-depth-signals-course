import { Component, signal } from '@angular/core';

@Component({
  selector: 'template-ref-demo',
  templateUrl: './template-ref-demo.html',
})
export class TemplateRefDemo {

  saved = signal('');

  save(title: string) {
    this.saved.set(title);
  }

}
