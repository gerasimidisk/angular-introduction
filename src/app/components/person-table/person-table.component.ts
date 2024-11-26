import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: 'Kostas',
    surName: 'Gerasimidis',
    age: 39,
    email: 'gerasimidisk00@gmail.com'
  }
}
