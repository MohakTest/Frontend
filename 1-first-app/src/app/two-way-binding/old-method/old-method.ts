import { Component } from '@angular/core';
import { ChildComponent } from './child-component/child-component';

@Component({
  selector: 'app-old-method',
  imports: [ChildComponent],
  templateUrl: './old-method.html',
  styleUrl: './old-method.css',
})
export class OldMethod {

  parentName : string = "Mohak"

  getFromParent(newName : string)
  {
    this.parentName = newName

  }

}
