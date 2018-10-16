import { Component, OnInit } from '@angular/core';

import { UserService, GUEST_USER } from '../../services/user.service';

import { User } from '../../interfaces/user';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.userService.user$
      .pipe(
        map((user: User) => user !== GUEST_USER)
      );
  }

  logout(): void {
    this.userService.logout();
  }
}
