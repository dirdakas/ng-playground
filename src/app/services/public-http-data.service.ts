import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { IGitHubUsers, IGitHubUsersResponse } from '../interfaces/github';

@Injectable({
  providedIn: 'root'
})
export class PublicHttpDataService {

  constructor(private http: HttpClient) {}

  getGitUser(name: string): Observable<IGitHubUsersResponse> {
    return this.http.get<IGitHubUsersResponse>('https://api.github.com/search/users?q=' + name);
  }

  getGitUser2(name: string): Observable<IGitHubUsers[]> {
    return this.http.get('https://api.github.com/search/users?q=' + name)
      .pipe(
        first(),
        map((data: IGitHubUsersResponse) => data.items)
      );
  }
}
