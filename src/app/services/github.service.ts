import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IGitHubUser, IGitHubReposResponse } from '../interfaces/github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username: string;
  private client_id = 'd9308aacf8b204d361fd';
  private client_secret = '62551cc02cee983fff0bac41baf170eb5a312c1c';

  constructor(private _http: HttpClient) {
    console.log('Github Service Ready...');
    this.username = 'bradtraversy';
  }

  getUser(): Observable<IGitHubUser> {
    return this._http.get<IGitHubUser>(
        'http://api.github.com/users/' +
        this.username + '?client_id=' +
        this.client_id +
        '&client_secret=' +
        this.client_secret
      );
  }

  getRepos(): Observable<IGitHubReposResponse[]> {
    return this._http.get<IGitHubReposResponse[]>(
        'http://api.github.com/users/' +
        this.username +
        '/repos?client_id=' +
        this.client_id +
        '&client_secret=' +
        this.client_secret
      );
  }

  updateUser(username: string) {
    this.username = username;
  }
}
