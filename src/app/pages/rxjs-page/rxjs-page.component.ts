import { Component, OnInit } from '@angular/core';
import { PublicHttpDataService } from '../../services/public-http-data.service';

import { tap, first, switchMap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ExampleObject } from '../../interfaces/exampleObject';
import { ProfileGithubComponent } from './children/profile-github/profile-github.component';
import { pipe } from '@angular/core/src/render3/pipe';

@Component({
  selector: 'app-rxjs-page',
  templateUrl: './rxjs-page.component.html',
  styleUrls: ['./rxjs-page.component.scss']
})
export class RxjsPageComponent {
  examplesList: Array<ExampleObject> = [
    {
      component: ProfileGithubComponent,
      description: 'Search for GitHub profile'
    },
    {
      component: 'none-at-this-time',
      description: 'Async data loading example, which will call after 2s'
    }
  ];

  users$: Observable<any>;

  constructor(private publicHttpDataService: PublicHttpDataService) { }

  toggleExample(element: HTMLElement, index: number) {
    if (element.style.display === 'none') {
      element.style.display = 'block';
      this.examplesList[index].isActive = true;
    } else {
      element.style.display = 'none';
      this.examplesList[index].isActive = false;
    }
    if (index === 1) {
      this.initDelayedAsyncCall();
    }
  }

  initDelayedAsyncCall() {
    setTimeout(() => {
      this.users$ = this.publicHttpDataService.getGitUser2('dirdakas');
    }, 2000);

    this.publicHttpDataService.getGitUser2('dirdakas')
      .pipe(
        take(1),
        switchMap((data: any) => this.getFirstLoginFromResponse(data)),
        tap((res: any) => console.log('res', res))
      )
      .subscribe();
  }

  // @TODO: netaip veikia kazkodel
  private getFirstLoginFromResponse(data: any): string {
    if (data && data.length > 0) {
      return data[0].login;
    }

    return '';
  }
}
