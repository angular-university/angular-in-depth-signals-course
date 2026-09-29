import { Component, input } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.html',
})
export class ListItem {

  label = input('');

}
