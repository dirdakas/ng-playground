import { take, tap } from 'rxjs/operators';
import { IGitHubUsers } from 'src/app/interfaces/github';
import { IGitHubUsersResponse } from './../../interfaces/github';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { PublicHttpDataService } from './public-http-data.service';

describe('PublicHttpDataService', () => {
  let publicHttpDataService: PublicHttpDataService;
  let httpMock: HttpTestingController;

  const MOCK_GITHUB_USER_RESPONSE: IGitHubUsersResponse = {
    incomplete_results: false,
    items: [],
    total_count: 0
  };

  const MOCK_GITHUB_USER: IGitHubUsers = {
    avatar_url: '',
    events_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    gravatar_id: '',
    html_url: '',
    id: 0,
    login: 'mock_login',
    node_id: '',
    organizations_url: '',
    received_events_url: '',
    repos_url: '',
    score: 0,
    site_admin: false,
    starred_url: '',
    subscriptions_url: '',
    type: '',
    url: ''
  };

  const MOCK_USER_NAME: string = 'MOCK_USER_NAME';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        PublicHttpDataService
      ]
    });

    publicHttpDataService = TestBed.get(PublicHttpDataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(publicHttpDataService)
      .toBeTruthy();
  });

  it('should get GitUser', () => {
    publicHttpDataService.getGitUser(MOCK_USER_NAME)
      .pipe(
        take(1),
        tap((user: IGitHubUsersResponse) => {
          expect(user)
            .toEqual(MOCK_GITHUB_USER_RESPONSE);
        })
      )
      .subscribe();

    const request = httpMock.expectOne(
      PublicHttpDataService.GIT_USER_URL + MOCK_USER_NAME
    );
    request.flush(MOCK_GITHUB_USER_RESPONSE);

    expect(request.request.method)
      .toBe('GET');
    expect(request.request.url)
      .toBe(PublicHttpDataService.GIT_USER_URL + MOCK_USER_NAME);
  });

  it('should get GitUser2', () => {
    publicHttpDataService.getGitUser2(MOCK_USER_NAME)
      .pipe(
        take(1),
        tap((users: IGitHubUsers[]) => {
          expect(users)
            .toEqual([MOCK_GITHUB_USER]);
        })
      )
      .subscribe();

    const request = httpMock.expectOne(
      PublicHttpDataService.GIT_USER_URL + MOCK_USER_NAME
    );
    const mockGitHubResponse: IGitHubUsersResponse = {
      incomplete_results: false,
      items: [MOCK_GITHUB_USER],
      total_count: 1
    };

    request.flush(mockGitHubResponse);

    expect(request.request.method)
      .toBe('GET');
    expect(request.request.url)
      .toBe(PublicHttpDataService.GIT_USER_URL + MOCK_USER_NAME);
  });
});
