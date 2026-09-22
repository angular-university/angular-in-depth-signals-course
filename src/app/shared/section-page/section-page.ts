import { Component, input } from '@angular/core';

/**
 * The frame around one course section: a numbered heading, and the column its demos stack in.
 * On main every section is stacked in app.html, so this is also the separator between them.
 */
@Component({
  selector: 'section-page',
  template: `
    <section class="section" [id]="'s' + number()">
      <div class="page-container">

        <header class="section-head">
          <span class="section-number">{{ number() }}</span>
          <h2 class="section-title">{{ heading() }}</h2>
        </header>

        <div class="section-demos">
          <ng-content />
        </div>

      </div>
    </section>
  `,
  styleUrl: './section-page.scss',
})
export class SectionPage {

  number = input.required<number>();

  heading = input.required<string>();

}
