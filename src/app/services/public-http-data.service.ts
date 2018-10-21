import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicHttpDataService {

  constructor(private http: HttpClient) {}

  getGitUser(name: string): Observable<any> {
    return this.http.get('https://api.github.com/search/users?q=' + name);
  }

  getGitUser2(name: string): Observable<any> {
    return this.http.get('https://api.github.com/search/users?q=' + name)
      .pipe(
        first(),
        map((data: any) => data.items)
      );
  }
}
