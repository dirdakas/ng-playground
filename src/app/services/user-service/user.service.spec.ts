import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { take, tap } from 'rxjs/operators';

import { IUser } from './../../interfaces/user';
import { UserService, GUEST_USER } from './user.service';

describe('UserService', () => {
  let userService: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        UserService
      ]
    });

    userService = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(userService)
      .toBeTruthy();
  });

  it('should mock login request', () => {
    userService.mockLoginRequest(GUEST_USER.nickName)
      .pipe(
        take(1),
        tap((user: IUser[]) => {
          expect(user)
            .toEqual([GUEST_USER]);
        })
      )
      .subscribe();

    const request = httpMock.expectOne(
      UserService.GET_USER_BY_NICKNAME + GUEST_USER.nickName
    );
    request.flush([GUEST_USER]);

    expect(request.request.method)
      .toBe('GET');
    expect(request.request.url)
      .toBe(UserService.GET_USER_BY_NICKNAME + GUEST_USER.nickName);
  });
});
