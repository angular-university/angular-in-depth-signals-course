import { Component, input } from '@angular/core';

@Component({
  selector: 'list-title',
  templateUrl: './list-title.html',
})
export class ListTitle {

  text = input('');

}
