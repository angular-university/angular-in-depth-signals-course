import { Component } from '@angular/core';
import { HttpClientDemo } from './demos/01-http-client-demo/http-client-demo';
import { ErrorHandlingDemo } from './demos/02-error-handling-demo/error-handling-demo';
import { ObserveDemo } from './demos/03-observe-demo/observe-demo';
import { UploadDemo } from './demos/04-upload-demo/upload-demo';
import { InterceptorsDemo } from './demos/05-interceptors-demo/interceptors-demo';

@Component({
  selector: 'section-08',
  imports: [HttpClientDemo, ErrorHandlingDemo, ObserveDemo, UploadDemo, InterceptorsDemo],
  templateUrl: './section-08.html',
})
export class Section08 {

}
