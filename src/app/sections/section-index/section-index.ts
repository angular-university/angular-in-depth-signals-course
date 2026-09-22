import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SECTIONS } from '../sections';

@Component({
  selector: 'section-index',
  imports: [RouterLink],
  templateUrl: './section-index.html',
  styleUrl: './section-index.scss',
})
export class SectionIndex {

  protected readonly sections = SECTIONS;

}
