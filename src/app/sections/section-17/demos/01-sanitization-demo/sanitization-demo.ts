import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'sanitization-demo',
  templateUrl: './sanitization-demo.html',
})
export class SanitizationDemo {

  sanitizer = inject(DomSanitizer);

  html = `<b onmouseover="alert('XSS')">Hover me</b>`;

  trustedHtml = this.sanitizer.bypassSecurityTrustHtml(this.html);

  url = `javascript:alert('XSS')`;

  trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.url);

}
