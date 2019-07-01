import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { GithubService } from './../../../../services/github/github.service';

import { Observable } from 'rxjs';
import { take, tap, debounceTime } from 'rxjs/operators';
import { IGitHubReposResponse, IGitHubUser } from 'src/app/interfaces/github';

@Component({
  selector: 'app-profile-github',
  templateUrl: './profile-github.component.html',
  styleUrls: ['./profile-github.component.scss']
})
export class ProfileGithubComponent implements OnInit {
  user$: Observable<IGitHubUser>;
  repos$: Observable<IGitHubReposResponse[]>;
  usernameForm: FormGroup;

  constructor(
    private _githubService: GithubService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
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
        tap((data: IGitHubUser) => {
          this.getRepos();
          console.log('data?', data);
        })
      );
  }

  private getRepos(): void {
    this.repos$ = this._githubService.getRepos()
      .pipe(
        take(1),
        tap((res: IGitHubReposResponse[]) => {
          console.log('res rep', res);
        })
      );
  }
}
