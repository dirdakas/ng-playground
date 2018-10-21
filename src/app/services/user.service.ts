import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../interfaces/user';

import { Observable, BehaviorSubject } from 'rxjs';

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
  public static GET_USER_BY_NICKNAME = 'http://localhost:4200/users?nickName=';

  private userSubject = new BehaviorSubject(GUEST_USER);

  user$: Observable<User> = this.userSubject.asObservable();

  constructor(private _http: HttpClient) {}

  mockLoginRequest(nickName: string): Observable<any> {
    return this._http
      .get(UserService.GET_USER_BY_NICKNAME + nickName);
  }

  login(user: User): void {
    this.userSubject.next(user);
  }

  logout(): void {
    this.userSubject.next(GUEST_USER);
  }
}
