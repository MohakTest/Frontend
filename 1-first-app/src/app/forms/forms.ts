import { Component } from '@angular/core';
import { Reactive } from './reactive/reactive';
import { TemplateDriven } from './template-driven/template-driven';

@Component({
  selector: 'app-forms',
  imports: [Reactive, TemplateDriven],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {

}
