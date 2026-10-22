import {Component, contentChild, contentChildren, effect, ElementRef} from '@angular/core';
import { ListItem } from './list-item';
import { ListTitle } from './list-title';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.html',
})
export class ItemList {

  title = contentChild('title', {read: ElementRef});

  items = contentChildren(ListItem);

  constructor() {
    effect(() => {
      console.log(this.title());
    });
  }






  // title = contentChild(ListTitle);                       -> ListTitle instance
  // title = contentChild('title');                         -> ListTitle instance (#title on a component)
  // title = contentChild('title', { read: ElementRef });   -> ElementRef of <list-title>
  // title = contentChild.required(ListTitle);              -> ListTitle, error if missing

}
