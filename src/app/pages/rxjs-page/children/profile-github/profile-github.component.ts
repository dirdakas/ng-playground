import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { GithubService } from '../../../../services/github.service';

import { Observable } from 'rxjs';
import { take, tap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-profile-github',
  templateUrl: './profile-github.component.html',
  styleUrls: ['./profile-github.component.scss']
})
export class ProfileGithubComponent implements OnInit {
  user$: Observable<any>;
  repos$: Observable<any>;
  usernameForm: FormGroup;

  constructor(
    private _githubService: GithubService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.usernameForm = this.fb.group({
      username: 'dirdakas'
    });

    this.searchUser(this.usernameForm.get('username').value);

    this.usernameForm.get('username').valueChanges
      .pipe(
        debounceTime(3000),
        tap((_newVal: string) => this.searchUser(_newVal))
      )
      .subscribe();
  }

  searchUser(username: string): void {
    this._githubService.updateUser(username);

    this.user$ = this._githubService.getUser()
      .pipe(
        take(1),
        tap(() => this.getRepos())
      );
  }

  private getRepos(): void {
    this.repos$ = this._githubService.getRepos()
      .pipe(
        take(1)
      );
  }
}
