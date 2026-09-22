import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionData } from '../sections';

/**
 * The frame every section page shares: the heading, and the column its demos stack in.
 * It reads the section number and title from the route, so a section component only has
 * to list its demos.
 */
@Component({
  selector: 'section-page',
  template: `
    <div class="page-container">

      <header class="section-head">
        <span class="section-number">{{ section.number }}</span>
        <h2 class="section-title">{{ section.title }}</h2>
      </header>

      <div class="section-demos">
        <ng-content />
      </div>

    </div>
  `,
  styleUrl: './section-page.scss',
})
export class SectionPage {

  protected readonly section = inject(ActivatedRoute).snapshot.data as unknown as SectionData;

}
