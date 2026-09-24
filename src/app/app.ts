import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { Section01 } from './sections/section-01/section-01';
import { Section02 } from './sections/section-02/section-02';
import { Section03 } from './sections/section-03/section-03';
import { Section04 } from './sections/section-04/section-04';
import { Section05 } from './sections/section-05/section-05';
import { Section06 } from './sections/section-06/section-06';
import { Section07 } from './sections/section-07/section-07';

@Component({
  selector: 'root',
  imports: [Toolbar, Section01, Section02, Section03, Section04, Section05, Section06, Section07],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

}
