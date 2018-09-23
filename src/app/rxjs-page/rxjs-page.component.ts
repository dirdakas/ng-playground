import { Component, OnInit } from '@angular/core';
import { PublicHttpDataService } from '../services/public-http-data.service';

import { take, map, tap, first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-page',
  templateUrl: './rxjs-page.component.html',
  styleUrls: ['./rxjs-page.component.css']
})
export class RxjsPageComponent implements OnInit {

  users$: Observable<any>;

  constructor(private publicHttpDataService: PublicHttpDataService) { }

  ngOnInit() {
    this.users$ = this.publicHttpDataService.getGitUser2('dirdakas');

    this.publicHttpDataService.getGitUser('dirdakas')
      .pipe(
        first(),
        tap(res => {
          console.log('res', res);
        })
      )
      .subscribe();
  }

}
