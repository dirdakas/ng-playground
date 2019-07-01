import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { GithubService } from './github.service';
import { IGitHubUser } from 'src/app/interfaces/github';

describe('GithubService', () => {
  let githubService: GithubService;
  let httpMock: HttpTestingController;

  const MOCK_USER_NAME: string = 'MOCK_USER_NAME';
  const MOCK_GITHUB_USER: IGitHubUser = {
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
    site_admin: false,
    starred_url: '',
    subscriptions_url: '',
    type: '',
    url: '',
    bio: null,
    blog: null,
    company: null,
    created_at: null,
    email: 'mock_email@email.com',
    followers: null,
    following: null,
    hireable: null,
    location: null,
    name: 'myNameIsMock',
    public_gists: null,
    public_repos: null,
    updated_at: null
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        GithubService
      ]
    });

    githubService = TestBed.get(GithubService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(githubService)
      .toBeTruthy();
  });

  it('should update username', () => {
    let userName: string = githubService.getUserName();
    expect(userName)
      .toEqual(GithubService.BRAD_USER_NAME);

    githubService.updateUser(MOCK_USER_NAME);
    userName = githubService.getUserName();

    expect(userName)
      .toEqual(MOCK_USER_NAME);
  });
});
