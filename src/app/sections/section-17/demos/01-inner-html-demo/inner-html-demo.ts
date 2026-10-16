import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'inner-html-demo',
  templateUrl: './inner-html-demo.html',
})
export class InnerHtmlDemo {

  html = '<b style="color: #ff4d8d">Bold</b>';

  trustedHtml = inject(DomSanitizer).bypassSecurityTrustHtml(this.html);

}
