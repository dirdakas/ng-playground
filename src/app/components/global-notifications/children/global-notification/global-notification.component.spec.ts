import { RouterTestingModule } from '@angular/router/testing';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder
} from '@angular/forms';
import {
  async,
  TestBed,
  ComponentFixture,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { AnimationBuilder } from '@angular/animations';

import { GlobalNotificationsService } from '../../../../services/global-notifications/global-notifications.service';
import { GlobalNotificationComponent } from './global-notification.component';
import { IGlobalNotification } from 'src/app/interfaces/global-notification';
import { NotificationTypeEnum } from 'src/app/shared/notificationType.enum';

describe('GlobalNotification Component', () => {
  let component: GlobalNotificationComponent;
  let fixture: ComponentFixture<GlobalNotificationComponent>;
  let globalNotificationsService: jasmine.SpyObj<GlobalNotificationsService>;
  let animationBuilder: AnimationBuilder;

  const MOCK_AUTO_CLOSE_AFTER: number = 1000;

  const MOCK_NOTIFICATION: IGlobalNotification = {
    id: 0,
    isClosable: true,
    isUltimante: false,
    message: 'message',
    type: NotificationTypeEnum.info
  };
  let isCreateAnimationPlayed: boolean = false;
  let isRemoveAnimationPlayed: boolean = false;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GlobalNotificationComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: GlobalNotificationComponent,
          },
        ]),
      ],
      providers: [
        FormBuilder,
        {
          provide: GlobalNotificationsService,
          useValue: jasmine.createSpyObj('GlobalNotificationsService', [
            'removeNotificationById',
            'getCreationAnimation',
            'getRemovalAnimation'
          ]),
        },
        {
          provide: AnimationBuilder,
          useValue: jasmine.createSpyObj('AnimationBuilder', [
            'build'
          ]),
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalNotificationComponent);
    globalNotificationsService = TestBed.get(GlobalNotificationsService);
    animationBuilder = TestBed.get(AnimationBuilder);

    component = fixture.componentInstance;

    isCreateAnimationPlayed = false;
    isRemoveAnimationPlayed = false;

    globalNotificationsService.getCreationAnimation.and
      .returnValue({
        create: (el) => {
          return {
            play: () => {
              isCreateAnimationPlayed = true;
            }
          };
        }
      });

    globalNotificationsService.getRemovalAnimation.and
    .returnValue({
      create: (el) => {
        return {
          play: () => {
            isRemoveAnimationPlayed = true;
          }
        };
      }
    });

    component.notification = MOCK_NOTIFICATION;
  }));

  it('should create', () => {
    fixture.detectChanges();

    expect(component)
      .toBeDefined();
  });

  describe('should add extra space for notification', () => {
    it('extra space = 0', () => {
      fixture.detectChanges();

      expect(component.extraSpace)
        .toEqual(0);
    });

    it('extra space = 1', () => {
      component.notification.cancelButtonText = 'Some text';

      fixture.detectChanges();

      expect(component.extraSpace)
        .toEqual(1);
    });

    it('extra space = 2', () => {
      component.notification.cancelButtonText = 'Some text';
      component.notification.confirmButtonText = 'Some text';

      fixture.detectChanges();

      expect(component.extraSpace)
        .toEqual(2);
    });

    it('extra space = 3', () => {
      component.notification.cancelButtonText = 'Some text';
      component.notification.confirmButtonText = 'Some text';
      component.notification.linkTo = '/';

      fixture.detectChanges();

      expect(component.extraSpace)
        .toEqual(3);
    });

    it('extra space = 4', () => {
      component.notification.cancelButtonText = 'Some text';
      component.notification.confirmButtonText = 'Some text';
      component.notification.linkTo = '/';
      component.notification.hasInput = true;

      fixture.detectChanges();

      expect(component.extraSpace)
        .toEqual(4);
    });
  });

  it('should create form for user to fill in', () => {
    component.notification.hasInput = true;

    fixture.detectChanges();

    expect(component.inputForm)
      .not
      .toBeUndefined();
  });

  it(
    'should create notification with auto close after ' +
    MOCK_AUTO_CLOSE_AFTER +
    ' seconds',
    fakeAsync(() => {
      component.notification.closeAfter = MOCK_AUTO_CLOSE_AFTER;

      globalNotificationsService.removeNotificationById.and.callThrough();

      fixture.detectChanges();

      tick(MOCK_AUTO_CLOSE_AFTER * 2);

      expect(globalNotificationsService.removeNotificationById)
        .toHaveBeenCalled();
      expect(isRemoveAnimationPlayed)
        .toBeTruthy();
  }));

  it('should play animation CREATE', () => {
    fixture.detectChanges();

    expect(isCreateAnimationPlayed)
      .toBeTruthy();
  });

  it('should close notification on click', fakeAsync(() => {
    globalNotificationsService.removeNotificationById.and.callThrough();
    fixture.detectChanges();

    component.closeNotification();

    tick(MOCK_AUTO_CLOSE_AFTER * 2);

    expect(globalNotificationsService.removeNotificationById)
      .toHaveBeenCalled();
    expect(isRemoveAnimationPlayed)
      .toBeTruthy();
  }));

  describe('should cancel on click', () => {
    it('without function', fakeAsync(() => {
      globalNotificationsService.removeNotificationById.and.callThrough();
      fixture.detectChanges();

      component.cancel();

      tick(MOCK_AUTO_CLOSE_AFTER * 2);

      expect(globalNotificationsService.removeNotificationById)
        .toHaveBeenCalled();
      expect(isRemoveAnimationPlayed)
        .toBeTruthy();
      expect(component.notification.cancelFunction)
        .toBeUndefined();
    }));

    it('with function', fakeAsync(() => {
      component.notification.cancelFunction = () => {};
      globalNotificationsService.removeNotificationById.and.callThrough();
      spyOn(component.notification, 'cancelFunction').and
        .callThrough();
      fixture.detectChanges();

      component.cancel();

      tick(MOCK_AUTO_CLOSE_AFTER * 2);

      expect(globalNotificationsService.removeNotificationById)
        .toHaveBeenCalled();
      expect(isRemoveAnimationPlayed)
        .toBeTruthy();
      expect(component.notification.cancelFunction)
        .toHaveBeenCalled();
    }));
  });

  describe('should confirm on click', () => {
    it('no input, no confirm function', fakeAsync(() => {
      component.notification.hasInput = undefined;
      globalNotificationsService.removeNotificationById.and.callThrough();
      fixture.detectChanges();

      component.confirm();

      tick(MOCK_AUTO_CLOSE_AFTER * 2);

      expect(globalNotificationsService.removeNotificationById)
        .toHaveBeenCalled();
      expect(isRemoveAnimationPlayed)
        .toBeTruthy();
      expect(component.notification.confirmFunction)
        .toBeUndefined();
      expect(component.notification.hasInput)
        .toBeUndefined();
    }));

    it('no input, with confirm function', fakeAsync(() => {
      component.notification.confirmFunction = () => {};
      globalNotificationsService.removeNotificationById.and.callThrough();
      spyOn(component.notification, 'confirmFunction').and
        .callThrough();
      fixture.detectChanges();

      component.confirm();

      tick(MOCK_AUTO_CLOSE_AFTER * 2);

      expect(globalNotificationsService.removeNotificationById)
        .toHaveBeenCalled();
      expect(isRemoveAnimationPlayed)
        .toBeTruthy();
      expect(component.notification.confirmFunction)
        .toHaveBeenCalled();
    }));

    it('with input, with confirm function', fakeAsync(() => {
      const MOCK_INPUT: string = 'MOCK_USER_INPUT';
      component.notification.confirmFunction = () => {};
      component.notification.hasInput = true;
      globalNotificationsService.removeNotificationById.and.callThrough();
      spyOn(component.notification, 'confirmFunction').and
        .callThrough();
      fixture.detectChanges();
      component.inputForm.get('userInput')
        .setValue(MOCK_INPUT);

      component.confirm();

      tick(MOCK_AUTO_CLOSE_AFTER * 2);

      expect(globalNotificationsService.removeNotificationById)
        .toHaveBeenCalled();
      expect(isRemoveAnimationPlayed)
        .toBeTruthy();
      expect(component.notification.confirmFunction)
        .toHaveBeenCalled();
      expect(component.notification.confirmFunction)
        .toHaveBeenCalledWith(MOCK_INPUT);
    }));
  });
});
