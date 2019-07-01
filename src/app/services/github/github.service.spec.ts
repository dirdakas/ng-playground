import { GithubService } from './github.service';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('GithubService', () => {
  let githubService: GithubService;
  let httpMock: HttpTestingController;

  const MOCK_USER_NAME: string = 'MOCK_USER_NAME';

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
