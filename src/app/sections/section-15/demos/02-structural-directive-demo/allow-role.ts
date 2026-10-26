import { Directive, TemplateRef, ViewContainerRef, computed, effect, inject, input } from '@angular/core';
import { RoleService } from './role-service';

@Directive({
  selector: '[myAllowRole]',
})
export class AllowRole {

  roleService = inject(RoleService);

  myAllowRole = input('');

  allowed = computed(() => this.roleService.role() === this.myAllowRole());

  template = inject(TemplateRef);

  container = inject(ViewContainerRef);

  render = effect(() => {
    this.container.clear();
    if (!this.allowed()) {
      return;
    }
    this.container.createEmbeddedView(this.template);
  });

}
