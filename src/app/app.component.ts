import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Kostas';

  person = {
    givenName: 'Kostas',
    surName: 'Gerasimidis',
    age: 39,
    email: 'gerasimidisk00@gmail.com'
  }
}
