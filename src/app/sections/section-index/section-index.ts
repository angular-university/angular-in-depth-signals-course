import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { sectionLinks } from '../../shared/sections';

@Component({
  selector: 'section-index',
  imports: [RouterLink],
  templateUrl: './section-index.html',
  styleUrl: './section-index.scss',
})
export class SectionIndex {

  protected readonly sections = sectionLinks(inject(Router));

}
