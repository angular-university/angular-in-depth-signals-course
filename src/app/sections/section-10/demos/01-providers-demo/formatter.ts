import { Injectable } from '@angular/core';

export abstract class Formatter {
  abstract format(text: string): string;
}

@Injectable()
export class UppercaseFormatter extends Formatter {

  format(text: string) {
    return text.toUpperCase();
  }

}
