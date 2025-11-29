import { Component } from '@angular/core';
import { ChildComponent } from './child-component/child-component';

@Component({
  selector: 'app-new-method',
  imports: [ChildComponent],
  templateUrl: './new-method.html',
  styleUrl: './new-method.css',
})
export class NewMethod {

  parentName : string = 'Mohak'

  getName(newName : string)
  {
    this.parentName = newName
  }

}
