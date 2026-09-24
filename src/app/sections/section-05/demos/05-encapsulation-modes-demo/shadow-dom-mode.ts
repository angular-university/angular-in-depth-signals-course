import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shadow-dom-mode',
  templateUrl: './shadow-dom-mode.html',
  styleUrl: './mode.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowDomMode {

}
