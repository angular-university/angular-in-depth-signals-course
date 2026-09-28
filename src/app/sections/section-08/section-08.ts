import { Component } from '@angular/core';
import { HttpClientDemo } from './demos/01-http-client-demo/http-client-demo';
import { ObserveDemo } from './demos/02-observe-demo/observe-demo';
import { UploadDemo } from './demos/03-upload-demo/upload-demo';
import { InterceptorsDemo } from './demos/04-interceptors-demo/interceptors-demo';

@Component({
  selector: 'section-08',
  imports: [HttpClientDemo, ObserveDemo, UploadDemo, InterceptorsDemo],
  templateUrl: './section-08.html',
})
export class Section08 {

}
