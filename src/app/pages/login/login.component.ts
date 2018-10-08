import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

import { User } from '../../interfaces/user';

import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

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
    if (this.loginForm.valid) {
      this.userService.mockLoginRequest()
        .pipe(
          tap(_user => {
            const user: User = {
              firstName: _user.name,
              nickName: _user.login
            };
            this.userService.login(user);
            this.router.navigate(['/home']);
          })
        )
        .subscribe();
    }
  }

}
