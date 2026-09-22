import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AngularLogo } from '../shared/angular-logo/angular-logo';
import { sectionLinks } from '../shared/sections';

@Component({
  selector: 'toolbar',
  imports: [AngularLogo, RouterLink, RouterLinkActive],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {

  private router = inject(Router);

  protected readonly sections = sectionLinks(this.router);

  protected onSectionSelected(event: Event) {
    const slug = (event.target as HTMLSelectElement).value;

    if (slug) {
      this.router.navigate(['/', slug]);
    }
  }

}
