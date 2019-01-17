import { Component } from '@angular/core';
import { PublicHttpDataService } from '../../services/public-http-data.service';

import { switchMap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { IExampleObject } from '../../interfaces/example-object';
// import { ProfileGithubComponent } from './children/profile-github/profile-github.component';
import { IGitHubUsers } from 'src/app/interfaces/github';

@Component({
  selector: 'app-rxjs-page',
  templateUrl: './rxjs-page.component.html',
  styleUrls: ['./rxjs-page.component.scss']
})
export class RxjsPageComponent {
  examplesList: IExampleObject[] = [
    {
      component: 'ProfileGithubComponent',
      description: 'Search for GitHub profile'
    },
    {
      component: 'none-at-this-time',
      description: 'Async data loading example, which will call after 2s'
    }
  ];

  users$: Observable<IGitHubUsers[]>;

  constructor(private publicHttpDataService: PublicHttpDataService) {}

  toggleExample(element: HTMLElement, index: number): void {
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

  initDelayedAsyncCall(): void {
    setTimeout(() => {
      this.users$ = this.publicHttpDataService.getGitUser2('dirdakas');
    }, 2000);

    this.publicHttpDataService.getGitUser2('dirdakas')
      .pipe(
        take(1),
        switchMap((data: IGitHubUsers[]) => this.getFirstLoginFromResponse(data))
      )
      .subscribe();
  }

  /* @TODO: check it, it works not as expected  */
  private getFirstLoginFromResponse(data: IGitHubUsers[]): string {
    if (data && data.length > 0) {
      return data[0].login;
    }

    return '';
  }
}
