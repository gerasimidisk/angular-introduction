import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Kostas';

  person0 = {
       givenName: 'Kostas',
       surName: 'Gerasimidis',
       age: 39,
       email: 'gerasimidisk00@gmail.com',
       address: 'Athens, Greece'
  }

  person1 = {
    givenName: 'John',
    surName: 'Doe',
    age: 0x25,
    email: 'john@example.com',
    address: 'New york, USA'
  }
}
