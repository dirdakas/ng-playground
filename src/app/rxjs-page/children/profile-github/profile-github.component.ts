import { Component } from '@angular/core';
import { GithubService } from '../../../services/github.service';
import { take, tap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-profile-github',
  templateUrl: './profile-github.component.html',
  styleUrls: ['./profile-github.component.scss']
})
export class ProfileGithubComponent {
  user: any;
  repos: any[];
  username: string;

  constructor(private _githubService: GithubService) {
    this.user = false;
  }

  searchUser(): void {
    this._githubService.updateUser(this.username);

    // TODO check debounce
    this._githubService.getUser()
      .pipe(
        debounceTime(300),
        take(1),
        tap(user => {
          this.user = user;
          this.getRepos();
        })
      )
      .subscribe();
  }

  private getRepos(): void {
    this._githubService.getRepos()
      .pipe(
        take(1),
        tap(repos => this.repos = repos)
      ).subscribe();
  }
}
