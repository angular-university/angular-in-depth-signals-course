import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { Section01 } from './sections/section-01/section-01';
import { Section02 } from './sections/section-02/section-02';
import { Section03 } from './sections/section-03/section-03';

@Component({
  selector: 'root',
  imports: [Toolbar, Section01, Section02, Section03],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

}
