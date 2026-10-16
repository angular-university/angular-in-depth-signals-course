import { Injectable } from '@angular/core';

@Injectable()
export class Formatter {

  format(text: string) {
    return text;
  }

}

@Injectable()
export class UppercaseFormatter extends Formatter {

  override format(text: string) {
    return text.toUpperCase();
  }

}
