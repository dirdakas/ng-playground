import { GlobalNotificationsService } from './global-notifications.service';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { AnimationBuilder } from '@angular/animations';

describe('GlobalNotificationsService', () => {
  let globalNotificationsService: GlobalNotificationsService;
  let httpMock: HttpTestingController;
  let animationBuilder: AnimationBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        GlobalNotificationsService,
        {
          provide: AnimationBuilder,
          useValue: jasmine.createSpyObj('AnimationBuilder', [
            'build'
          ]),
        },
      ]
    });

    globalNotificationsService = TestBed.get(GlobalNotificationsService);
    httpMock = TestBed.get(HttpTestingController);
    animationBuilder = TestBed.get(AnimationBuilder);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(globalNotificationsService)
      .toBeTruthy();
  });
});
