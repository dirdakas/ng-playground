import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

import { IUser } from '../../interfaces/user';

import { tap, take, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  // @TODO: used for simple error, 404 user
  userNotFound: boolean;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  login() {
    this.userNotFound = false;

    if (this.loginForm.valid) {
      this.userService.mockLoginRequest(this.loginForm.get('username').value)
        .pipe(
          take(1),
          map((response: any) => response[0]),
          tap((_user: IUser) => {
            if (_user) {
               this.userService.login(_user);
               this.router.navigate(['/home']);
            } else {
              // @TODO: 404 add with form validation
              this.userNotFound = true;
            }
          }),
          catchError((_err: any) => {
            // @TODO: add http error notifications
            console.log('err', _err);

            return EMPTY;
          })
        )
        .subscribe();
    }
  }

}
