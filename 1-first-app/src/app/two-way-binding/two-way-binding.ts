import { Component } from '@angular/core';
import { OldMethod } from './old-method/old-method';
import { NewMethod } from './new-method/new-method';

@Component({
  selector: 'app-two-way-binding',
  imports: [OldMethod, NewMethod],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {


}
