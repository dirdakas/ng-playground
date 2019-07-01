import {
  async,
  TestBed,
  ComponentFixture,
} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { GlobalNotificationsService } from '../../services/global-notifications/global-notifications.service';
import { GlobalNotificationsComponent } from './global-notifications.component';

// @TODO: add new notification catch test

describe('GlobalNotifications Component', () => {
  let component: GlobalNotificationsComponent;
  let fixture: ComponentFixture<GlobalNotificationsComponent>;
  let globalNotificationsService: jasmine.SpyObj<GlobalNotificationsService>;

  const notificationsSource = new BehaviorSubject<any>([]);
  const notifications$ = notificationsSource.asObservable();

  const MOCK_GLOBAL_NOTIFICATIONS_SERVICE = {
    notifications$: notifications$,
    notificationsSource: notificationsSource,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GlobalNotificationsComponent
      ],
      providers: [
        {
          provide: GlobalNotificationsService,
          useValue: MOCK_GLOBAL_NOTIFICATIONS_SERVICE
        },
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalNotificationsComponent);
    globalNotificationsService = TestBed.get(GlobalNotificationsService);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component)
      .toBeDefined();
  });
});
