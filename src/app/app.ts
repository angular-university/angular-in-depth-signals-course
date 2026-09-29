import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { Section01 } from './sections/section-01/section-01';
import { Section02 } from './sections/section-02/section-02';
import { Section03 } from './sections/section-03/section-03';
import { Section04 } from './sections/section-04/section-04';
import { Section05 } from './sections/section-05/section-05';
import { Section06 } from './sections/section-06/section-06';
import { Section07 } from './sections/section-07/section-07';
import { Section08 } from './sections/section-08/section-08';
import { Section09 } from './sections/section-09/section-09';
import { Section10 } from './sections/section-10/section-10';
import { Section11 } from './sections/section-11/section-11';
import { Section12 } from './sections/section-12/section-12';
import { Section13 } from './sections/section-13/section-13';
import { Section14 } from './sections/section-14/section-14';

@Component({
  selector: 'root',
  imports: [Toolbar, Section01, Section02, Section03, Section04, Section05, Section06, Section07, Section08, Section09, Section10, Section11, Section12, Section13, Section14],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

}
