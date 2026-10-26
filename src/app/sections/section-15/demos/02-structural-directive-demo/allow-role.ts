import { Directive, TemplateRef, ViewContainerRef, computed, effect, inject, input } from '@angular/core';
import { UserProfile } from './user-profile';

@Directive({
  selector: '[myAllowRole]',
})
export class AllowRole {

  userProfile = inject(UserProfile);

  myAllowRole = input('');

  allowed = computed(() => this.userProfile.role() === this.myAllowRole());

  template = inject(TemplateRef);

  container = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      this.container.clear();
      if (!this.allowed()) {
        return;
      }
      this.container.createEmbeddedView(this.template);
    });
  }

}
