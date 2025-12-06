import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { Routing } from './routing/routing';

@Component({
  selector: 'app-root',
  imports: [Routing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('1-first-app');
}
