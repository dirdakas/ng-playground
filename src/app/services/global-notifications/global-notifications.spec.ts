import { TestBed } from '@angular/core/testing';
import { AnimationBuilder } from '@angular/animations';

import { NotificationTypeEnum } from './../../shared/notificationType.enum';
import { IGlobalNotification } from './../../interfaces/global-notification';
import { GlobalNotificationsService } from './global-notifications.service';

describe('GlobalNotificationsService', () => {
  let globalNotificationsService: GlobalNotificationsService;
  let animationBuilder: jasmine.SpyObj<AnimationBuilder>;

  const MOCK_NOTIFICATION: IGlobalNotification = {
    id: -1,
    message: 'notification message',
    isUltimante: false,
    isClosable: true,
    type: null
  };

  const MOCK_MSG: string = 'MOCK message';

  beforeEach(() => {
    TestBed.configureTestingModule({
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
    animationBuilder = TestBed.get(AnimationBuilder);

    globalNotificationsService.updateNotificationList([]);
  });

  it('should be created', () => {
    expect(globalNotificationsService)
      .toBeTruthy();
  });

  describe('should add new notification', () => {
    it('should add first notification into the list', () => {
      let notification: IGlobalNotification = globalNotificationsService.getNotificationById(0);

      expect(notification)
        .toBeNull();

      globalNotificationsService.addNotification(MOCK_NOTIFICATION);

      notification = globalNotificationsService.getNotificationById(0);
      expect(notification).not
        .toBeNull();
    });

    it('should add second notification into the list', () => {
      let notification: IGlobalNotification = globalNotificationsService.getNotificationById(0);

      expect(notification)
        .toBeNull();

        globalNotificationsService.addNotification(MOCK_NOTIFICATION);
        globalNotificationsService.addNotification(MOCK_NOTIFICATION);

      notification = globalNotificationsService.getNotificationById(1);
      expect(notification).not
        .toBeNull();
    });

    it('should not get notification if ID is incorrect', () => {
      let notification: IGlobalNotification = globalNotificationsService.getNotificationById(0);

      expect(notification)
        .toBeNull();

      globalNotificationsService.addNotification(MOCK_NOTIFICATION);

      notification = globalNotificationsService.getNotificationById(1);
      expect(notification)
        .toBeNull();
    });

    it('should not get notification if list is empty', () => {
      const notification: IGlobalNotification = globalNotificationsService.getNotificationById(0);

      expect(notification)
        .toBeNull();
    });
  });

  it('should add simple notification into the list', () => {
    let notification: IGlobalNotification = globalNotificationsService.getNotificationById(0);

    expect(notification)
      .toBeNull();

    globalNotificationsService.addSimpleNotification(MOCK_MSG);

    notification = globalNotificationsService.getNotificationById(0);
    expect(notification).not
      .toBeNull();
    expect(notification.id)
      .toEqual(0);
    expect(notification.message)
      .toEqual(MOCK_MSG);
    expect(notification.isUltimante)
      .toBeFalsy();
    expect(notification.isClosable)
      .toBeTruthy();
    expect(notification.type)
      .toBeNull();
  });

  it('should add typed notification into the list', () => {
    let notification: IGlobalNotification = globalNotificationsService.getNotificationById(0);

    expect(notification)
      .toBeNull();

    globalNotificationsService.addTypedNotification(
      MOCK_MSG,
      NotificationTypeEnum.info
    );

    notification = globalNotificationsService.getNotificationById(0);
    expect(notification).not
      .toBeNull();
    expect(notification.id)
      .toEqual(0);
    expect(notification.message)
      .toEqual(MOCK_MSG);
    expect(notification.isUltimante)
      .toBeFalsy();
    expect(notification.isClosable)
      .toBeTruthy();
    expect(notification.type)
      .toEqual(NotificationTypeEnum.info);
  });

  describe('should remove notification by id', () => {
    it('should remove first and only notification', () => {
      let notification: IGlobalNotification = globalNotificationsService.getNotificationById(0);

      expect(notification)
        .toBeNull();

      globalNotificationsService.addNotification(MOCK_NOTIFICATION);

      notification = globalNotificationsService.getNotificationById(0);
      expect(notification).not
        .toBeNull();

      globalNotificationsService.removeNotificationById(0);

      notification = globalNotificationsService.getNotificationById(0);
      expect(notification)
        .toBeNull();
    });

    it('should remove notification first notification of notifications all notifications', () => {
      let notification: IGlobalNotification = globalNotificationsService.getNotificationById(0);

      expect(notification)
        .toBeNull();

      globalNotificationsService.addNotification(MOCK_NOTIFICATION);
      globalNotificationsService.addNotification(MOCK_NOTIFICATION);

      globalNotificationsService.removeNotificationById(0);

      notification = globalNotificationsService.getNotificationById(0);
      expect(notification)
        .toBeNull();

      notification = globalNotificationsService.getNotificationById(1);
      expect(notification).not
        .toBeNull();
    });

    it('should not remove any notification with provided incorrect id', () => {
      let notification: IGlobalNotification = globalNotificationsService.getNotificationById(0);

      expect(notification)
        .toBeNull();

      globalNotificationsService.addNotification(MOCK_NOTIFICATION);
      globalNotificationsService.addNotification(MOCK_NOTIFICATION);

      globalNotificationsService.removeNotificationById(2);

      notification = globalNotificationsService.getNotificationById(0);
      expect(notification).not
        .toBeNull();

      notification = globalNotificationsService.getNotificationById(1);
      expect(notification).not
        .toBeNull();
    });
  });

  describe('should get creation animation', () => {
    it('should get info animation', () => {
      const notification: IGlobalNotification = MOCK_NOTIFICATION;
      notification.type = NotificationTypeEnum.info;

      animationBuilder.build.and.callThrough();

      globalNotificationsService.getCreationAnimation(notification);

      expect(animationBuilder.build)
        .toHaveBeenCalled();

      expect(animationBuilder.build)
        .toHaveBeenCalledWith([
          {
            type: 6,
            styles: {
              opacity: 0,
              backgroundColor: '#ffffff'
            },
            offset: null
          },
          {
            type: 4,
            styles: {
              type: 6,
              styles: {
                backgroundColor: 'lightblue',
                opacity: 1,
                padding: '15px 8px'
              },
              offset: null
            },
            timings: 400
          },
          {
            type: 4,
            styles: {
              type: 6,
              styles: {
                backgroundColor: '#befbff',
                color: '#5bc0de',
                opacity: 1,
                padding: '10px 5px'
              },
              offset: null
            },
            timings: 1000
          }
        ]);
    });

    it('should get error animation', () => {
      const notification: IGlobalNotification = MOCK_NOTIFICATION;
      notification.type = NotificationTypeEnum.error;

      animationBuilder.build.and.callThrough();

      globalNotificationsService.getCreationAnimation(notification);

      expect(animationBuilder.build)
        .toHaveBeenCalled();

      expect(animationBuilder.build)
        .toHaveBeenCalledWith([
          {
            type: 6,
            styles: {
              opacity: 0,
              backgroundColor: '#ffffff'
            },
            offset: null
          },
          {
            type: 4,
            styles: {
              type: 6,
              styles: {
                backgroundColor: 'lightblue',
                opacity: 1,
                padding: '15px 8px'
              },
              offset: null
            },
            timings: 400
          },
          {
            type: 4,
            styles: {
              type: 6,
              styles: {
                backgroundColor: '#f5c2ed',
                color: '#d9534f',
                opacity: 1,
                padding: '10px 5px'
              },
              offset: null
            },
            timings: 1000
          }
        ]);
    });

    it('should get success animation', () => {
      const notification: IGlobalNotification = MOCK_NOTIFICATION;
      notification.type = NotificationTypeEnum.success;

      animationBuilder.build.and.callThrough();

      globalNotificationsService.getCreationAnimation(notification);

      expect(animationBuilder.build)
        .toHaveBeenCalled();

      expect(animationBuilder.build)
        .toHaveBeenCalledWith([
          {
            type: 6,
            styles: {
              opacity: 0,
              backgroundColor: '#ffffff'
            },
            offset: null
          },
          {
            type: 4,
            styles: {
              type: 6,
              styles: {
                backgroundColor: 'lightblue',
                opacity: 1,
                padding: '15px 8px'
              },
              offset: null
            },
            timings: 400
          },
          {
            type: 4,
            styles: {
              type: 6,
              styles: {
                backgroundColor: '#ddfdd1',
                color: '#5cb85c',
                opacity: 1,
                padding: '10px 5px'
              },
              offset: null
            },
            timings: 1000
          }
        ]);
    });

    it('should get warning animation', () => {
      const notification: IGlobalNotification = MOCK_NOTIFICATION;
      notification.type = NotificationTypeEnum.warning;

      animationBuilder.build.and.callThrough();

      globalNotificationsService.getCreationAnimation(notification);

      expect(animationBuilder.build)
        .toHaveBeenCalled();

      expect(animationBuilder.build)
        .toHaveBeenCalledWith([
          {
            type: 6,
            styles: {
              opacity: 0,
              backgroundColor: '#ffffff'
            },
            offset: null
          },
          {
            type: 4,
            styles: {
              type: 6,
              styles: {
                backgroundColor: 'lightblue',
                opacity: 1,
                padding: '15px 8px'
              },
              offset: null
            },
            timings: 400
          },
          {
            type: 4,
            styles: {
              type: 6,
              styles: {
                backgroundColor: '#f8fdd7',
                color: '#f0ad4e',
                opacity: 1,
                padding: '10px 5px'
              },
              offset: null
            },
            timings: 1000
          }
        ]);
    });

    it('should get default animation', () => {
      const notification: IGlobalNotification = MOCK_NOTIFICATION;
      notification.type = null;

      animationBuilder.build.and.callThrough();

      globalNotificationsService.getCreationAnimation(notification);

      expect(animationBuilder.build)
        .toHaveBeenCalled();

      expect(animationBuilder.build)
        .toHaveBeenCalledWith([
          {
            type: 6,
            styles: {
              opacity: 0,
              backgroundColor: '#ffffff'
            },
            offset: null
          },
          {
            type: 4,
            styles: {
              type: 6,
              styles: {
                backgroundColor: 'lightblue',
                opacity: 1,
                padding: '15px 8px'
              },
              offset: null
            },
            timings: 400
          },
          {
            type: 4,
            styles: {
              type: 6,
              styles: {
                backgroundColor: '#ffeded',
                color: '#ff6600',
                opacity: 1,
                padding: '10px 5px'
              },
              offset: null
            },
            timings: 1000
          }
        ]);
    });
  });

  it('should get removal animation', () => {
    animationBuilder.build.and.callThrough();

    globalNotificationsService.getRemovalAnimation();

    expect(animationBuilder.build)
      .toHaveBeenCalled();

    expect(animationBuilder.build)
      .toHaveBeenCalledWith([
        {
          type: 6,
          styles: {
            opacity: 1,
            transform: 'translateY(0)'
          },
          offset: null
        },
        {
          type: 4,
          styles: {
            type: 6,
            styles: {
              opacity: 0,
              transform: 'translateY(-100px)',
              'z-index': 100
            },
            offset: null
          },
          timings: 500
        }
      ]);
  });
});
