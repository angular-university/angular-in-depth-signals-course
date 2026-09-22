import { Component } from '@angular/core';
import { Toolbar } from './toolbar/toolbar';
import { S01Intro } from './sections/s01-intro/s01-intro';

@Component({
  selector: 'root',
  imports: [Toolbar, S01Intro],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

}
