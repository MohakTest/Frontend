import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { TwoWayBinding } from './two-way-binding/two-way-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TwoWayBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('1-first-app');
}
