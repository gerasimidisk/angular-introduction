import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credentials, LoggedInUser, User } from '../interfaces/user';

const API_URL = `${environment.apiURL}/user`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient)

  user = signal<LoggedInUser | null>(null);

  constructor() {
    effect(() => {
      if (this.user()) {
        console.log('User Logged In', this.user().fullname)
      } else {
        console.log('No user Logged In')
      }
    })
  }

  registerUser(user: User) {
    return this.http.post<{msg: string}>(`${API_URL}/register`, user)
  }

  check_duplicate_email(email) {
    return this.http.get<{msg: string}>(`${API_URL}/check_duplicate_email/${email}`)
  }

  loginUser(credentials: Credentials) {
    return this.http.post<{access_token: string}>(`${API_URL}/login`, credentials)
  }
}
