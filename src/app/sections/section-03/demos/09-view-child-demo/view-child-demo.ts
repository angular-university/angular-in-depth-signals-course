import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'view-child-demo',
  templateUrl: './view-child-demo.html',
})
export class ViewChildDemo {

  box = viewChild<ElementRef<HTMLInputElement>>('box');

  focus() {
    this.box()?.nativeElement.focus();
  }

}
