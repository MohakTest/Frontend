import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  imports: [FormsModule],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {

  @Input()
  childName : string = ''

  @Output()
  childNameChange = new EventEmitter<string>()

  sendToParent()
  {
    console.log(this.childName)
    this.childNameChange.emit(this.childName)
  }


}
