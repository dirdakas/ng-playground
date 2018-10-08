import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../interfaces/user';

import { Observable, of, BehaviorSubject } from 'rxjs';

export const GUEST_USER: User = {
  nickName: 'Guest'
};

export const LOGGED_USER: User = {
  firstName: 'Tom',
  lastName: 'Timmoty',
  nickName: 'Tom&Tim'
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject(GUEST_USER);

  user$: Observable<User> = this.userSubject.asObservable();

  constructor(private _http: HttpClient) { }

  mockLoginRequest(): Observable<any> {
    return this._http.get(
      'http://api.github.com/users/' +
      'dirdakas' +
      '?client_id=d9308aacf8b204d361fd&client_secret=' +
      '62551cc02cee983fff0bac41baf170eb5a312c1c'
    );
  }

  login(user: User): void {
    this.userSubject.next(user);
  }

  logout(): void {
    this.userSubject.next(GUEST_USER);
  }
}
