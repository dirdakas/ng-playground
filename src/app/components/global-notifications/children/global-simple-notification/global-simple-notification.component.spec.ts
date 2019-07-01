import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  async,
  TestBed,
  ComponentFixture,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { NotificationTypeEnum } from 'src/app/shared/notificationType.enum';
import { IGlobalNotification } from 'src/app/interfaces/global-notification';
import { GlobalSimpleNotificationComponent } from './global-simple-notification.component';
import { GlobalNotificationsService } from '../../../../services/global-notifications/global-notifications.service';

describe('GlobalSimpleNotification Component', () => {
  let component: GlobalSimpleNotificationComponent;
  let fixture: ComponentFixture<GlobalSimpleNotificationComponent>;
  let globalNotificationsService: jasmine.SpyObj<GlobalNotificationsService>;

  const MOCK_AUTO_CLOSE_AFTER: number = 500;
  const MOCK_NOTIFICATION: IGlobalNotification = {
    id: 0,
    isClosable: true,
    isUltimante: false,
    message: 'message',
    type: NotificationTypeEnum.info
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GlobalSimpleNotificationComponent
      ],
      providers: [
        {
          provide: GlobalNotificationsService,
          useValue: jasmine.createSpyObj('GlobalNotificationsService', [
            'removeNotificationById',
          ]),
        },
      ],
      imports: [
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalSimpleNotificationComponent);
    globalNotificationsService = TestBed.get(GlobalNotificationsService);

    component = fixture.componentInstance;

    component.notification = MOCK_NOTIFICATION;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component)
      .toBeDefined();
  });

  it('should close notification', fakeAsync(() => {
    globalNotificationsService.removeNotificationById.and
      .callThrough();

    component.closeNotification(component.notification.id);

    tick(MOCK_AUTO_CLOSE_AFTER * 2);

    expect(globalNotificationsService.removeNotificationById)
      .toHaveBeenCalled();
    expect(globalNotificationsService.removeNotificationById)
      .toHaveBeenCalledWith(MOCK_NOTIFICATION.id);
  }));
});
