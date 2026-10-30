import { Component, signal } from '@angular/core';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

@Component({
  selector: 'i18n-pipes-demo',
  imports: [I18nPluralPipe, I18nSelectPipe],
  templateUrl: './i18n-pipes-demo.html',
})
export class I18nPipesDemo {

  count = signal(0);

  role = signal('fullAccess');

  countMapping = {
    '=0': $localize`:@@pipeNoItems:No items`,
    '=1': $localize`:@@pipeOneItem:One item`,
    'other': $localize`:@@pipeManyItems:# items`,
  };

  roleMapping = {
    'fullAccess': $localize`:@@pipeAdminRole:Administrator`,
    'other': $localize`:@@pipeViewerRole:Viewer`,
  };

  increment() {
    this.count.update((current) => current + 1);
  }

  decrement() {
    this.count.update((current) => Math.max(0, current - 1));
  }

  setRole(role: string) {
    this.role.set(role);
  }

}
