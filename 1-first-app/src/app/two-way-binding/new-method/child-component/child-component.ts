import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  imports: [FormsModule],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {

  childName  =  model<string>('')
  newName = ''

  sendToParent()
  {
    this.childName.set(this.newName)
  }

}
