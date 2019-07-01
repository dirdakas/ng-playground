import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IGitHubUser, IGitHubReposResponse } from '../../interfaces/github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  public static BRAD_USER_NAME: string = 'bradtraversy';
  public static USERS_URL: string = 'http://api.github.com/users/';
  public static CLIENT_SECRET_URL: string = '&client_secret=';
  public static CLIENT_ID_URL: string = '?client_id=';
  public static CLIENT_REPOS_ID: string = '/repos?client_id=';
  public static CLIENT_ID = 'd9308aacf8b204d361fd';
  public static CLIENT_SECRET = '62551cc02cee983fff0bac41baf170eb5a312c1c';

  private username: string;

  constructor(private _http: HttpClient) {
    console.log('Github Service Ready...');
    this.username = GithubService.BRAD_USER_NAME;
  }

  getUser(): Observable<IGitHubUser> {
    return this._http.get<IGitHubUser>(
        GithubService.USERS_URL +
        this.username +
        GithubService.CLIENT_ID_URL +
        GithubService.CLIENT_ID +
        GithubService.CLIENT_SECRET_URL +
        GithubService.CLIENT_SECRET
      );
  }

  getRepos(): Observable<IGitHubReposResponse[]> {
    return this._http.get<IGitHubReposResponse[]>(
      GithubService.USERS_URL +
        this.username +
        GithubService.CLIENT_REPOS_ID +
        GithubService.CLIENT_ID +
        GithubService.CLIENT_SECRET_URL +
        GithubService.CLIENT_SECRET
      );
  }

  updateUser(username: string) {
    this.username = username;
  }

  getUserName(): string {
    return this.username;
  }
}
