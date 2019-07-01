import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { IGitHubUsers, IGitHubUsersResponse } from '../../interfaces/github';

@Injectable({
  providedIn: 'root'
})
export class PublicHttpDataService {
  static GIT_USER_URL: string = 'https://api.github.com/search/users?q=';

  constructor(private http: HttpClient) {}

  getGitUser(name: string): Observable<IGitHubUsersResponse> {
    return this.http.get<IGitHubUsersResponse>(
      PublicHttpDataService.GIT_USER_URL + name
    );
  }

  getGitUser2(name: string): Observable<IGitHubUsers[]> {
    return this.http.get(PublicHttpDataService.GIT_USER_URL + name)
      .pipe(
        first(),
        map((data: IGitHubUsersResponse) => data.items)
      );
  }
}
