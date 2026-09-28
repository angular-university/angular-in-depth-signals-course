import { Component } from '@angular/core';
import { HttpClientDemo } from './demos/01-http-client-demo/http-client-demo';
import { UploadDemo } from './demos/02-upload-demo/upload-demo';
import { InterceptorsDemo } from './demos/03-interceptors-demo/interceptors-demo';

@Component({
  selector: 'section-08',
  imports: [HttpClientDemo, UploadDemo, InterceptorsDemo],
  templateUrl: './section-08.html',
})
export class Section08 {

}
