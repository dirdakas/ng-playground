import { RouterTestingModule } from '@angular/router/testing';
import {
  async,
  TestBed,
  ComponentFixture,
  fakeAsync,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BehaviorSubject } from 'rxjs';
import { tap, last } from 'rxjs/operators';

import { IUser } from './../../interfaces/user';
import { GUEST_USER, LOGGED_USER } from './../../services/user-service/user.service';
import { HeaderComponent } from './header.component';
import { UserService } from 'src/app/services/user-service/user.service';

describe('Header Component', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let userService: jasmine.SpyObj<UserService>;

  const userSubject = new BehaviorSubject<IUser>(null);
  const user$ = userSubject.asObservable();

  const MOCK_USER_SERVICE = {
    user$: user$,
    userSubject: userSubject,
    logout: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: UserService,
          useValue: MOCK_USER_SERVICE
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    userService = TestBed.get(UserService);

    component = fixture.componentInstance;
  }));

  it('should create', () => {
    fixture.detectChanges();

    expect(component)
      .toBeDefined();
  });

  it('should create with MOCK user', fakeAsync((done) => {
    userSubject.next(LOGGED_USER);
    fixture.detectChanges();

    component.isLoggedIn$
      .pipe(
        last(),
        tap((isLoggedUser: boolean) => {
          expect(isLoggedUser)
            .toBeTruthy();
          done();
        })
      )
      .subscribe();
  }));

  it('should create with GUEST user', fakeAsync((done) => {
    userSubject.next(GUEST_USER);
    fixture.detectChanges();

    component.isLoggedIn$
      .pipe(
        last(),
        tap((isLoggedUser: boolean) => {
          expect(isLoggedUser)
            .toBeFalsy();
          done();
        })
      )
      .subscribe();
  }));

  it('should call logout', () => {
    fixture.detectChanges();
    spyOn(userService, 'logout').and
      .callThrough();

    component.logout();

    expect(userService.logout)
      .toHaveBeenCalled();
  });
});
