import { Component, TemplateRef, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'template-list',
  imports: [NgTemplateOutlet],
  templateUrl: './template-list.html',
})
export class TemplateList {

  items = input<string[]>([]);

  itemTemplate = input<TemplateRef<{ $implicit: string }>>();

}
