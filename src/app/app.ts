import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { Section01 } from './sections/section-01/section-01';

@Component({
  selector: 'root',
  imports: [Toolbar, Section01],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

}
