import { Component, contentChild, contentChildren } from '@angular/core';
import { ListItem } from './list-item';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.html',
})
export class ItemList {

  first = contentChild(ListItem);

  items = contentChildren(ListItem);

  allItems = contentChildren(ListItem, { descendants: true });

}
