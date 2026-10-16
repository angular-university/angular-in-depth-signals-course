import { Component } from '@angular/core';
import { FrenchFormat } from './french-format';
import { ConfiguredFormat } from './configured-format';

@Component({
  selector: 'pipe-config-demo',
  imports: [FrenchFormat, ConfiguredFormat],
  templateUrl: './pipe-config-demo.html',
})
export class PipeConfigDemo {

}
