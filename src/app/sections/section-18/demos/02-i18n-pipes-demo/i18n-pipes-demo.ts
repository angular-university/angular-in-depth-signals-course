import { Component, signal } from '@angular/core';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

@Component({
  selector: 'i18n-pipes-demo',
  imports: [I18nPluralPipe, I18nSelectPipe],
  templateUrl: './i18n-pipes-demo.html',
})
export class I18nPipesDemo {

  count = signal(1);

  role = signal('admin');

  countMapping = { '=0': 'No items', '=1': 'One item', other: '# items' };

  roleMapping = { admin: 'Admins see everything', other: 'Viewers see nothing' };

  increment() {
    this.count.update((current) => current + 1);
  }

  setRole(role: string) {
    this.role.set(role);
  }

}
