import { Injectable } from '@angular/core';
import {
  AnimationBuilder,
  style,
  animate,
  AnimationFactory
} from '@angular/animations';

import { Observable, BehaviorSubject } from 'rxjs';

import { IGlobalNotification } from '../../interfaces/global-notification';
import { INotificationColors } from '../../interfaces/notification-colors';
import { NotificationTypeEnum } from '../../enums/notificationType.enum';
import { ColorEnum } from '../../enums/color.enum';

export const EMPTY_NOTIFICATIONS: IGlobalNotification[] = [];

@Injectable({
  providedIn: 'root'
})
export class GlobalNotificationsService {
  private notificationsSubject = new BehaviorSubject(EMPTY_NOTIFICATIONS);
  notifications$: Observable<IGlobalNotification[]> = this.notificationsSubject.asObservable();

  constructor(private animationBuilder: AnimationBuilder) {}

  addSimpleNotification(message: string): void {
    const notification: IGlobalNotification = {
      id: 0,
      message: message,
      isUltimante: false,
      isClosable: true,
      type: null
    };
    this.addNotification(notification);
  }

  addTypedNotification(
    message: string,
    type: NotificationTypeEnum,
    closeAfter: number = null
  ): void {
    const notification: IGlobalNotification = {
      id: 0,
      message: message,
      isUltimante: false,
      isClosable: true,
      type: type,
      closeAfter: closeAfter
    };
    this.addNotification(notification);
  }

  removeNotificationById(id: number): void {
    let newNotificationList = this.notificationsSubject.getValue();
    newNotificationList = newNotificationList
      .filter((notification: IGlobalNotification) => {
        return notification.id !== id;
      });
    this.updateNotificationList(newNotificationList);
  }

  getCreationAnimation(notification: IGlobalNotification): AnimationFactory {
    const colors: INotificationColors = this.getNotificationColors(notification);

    return this.animationBuilder.build([
      style({
        opacity: 0,
        backgroundColor: ColorEnum.white
      }),
      animate(400, style({
        backgroundColor: ColorEnum.lightBlue,
        opacity: 1,
        padding: '15px 8px'
      })),
      animate(1000, style({
        backgroundColor: colors.background,
        color: colors.color,
        opacity: 1,
        padding: '10px 5px'
      }))
    ]);
  }

  getRemovalAnimation(): AnimationFactory {
    return this.animationBuilder.build([
      style({
        opacity: 1,
        transform: 'translateY(0px)'
      }),
      animate(500, style({
        opacity: 0,
        transform: 'translateY(-100px)',
        'z-index': 100
      }))
    ]);
  }

  addNotification(notification: IGlobalNotification): void {
    const newNotificationList = this.notificationsSubject.getValue();
    const lastNotificationInList = this.getLastNotification();
    const id = lastNotificationInList ? (lastNotificationInList.id + 1) : 0;
    const newMessage: IGlobalNotification = {
      id: id,
      isClosable: notification.isClosable,
      message: notification.message,
      type: notification.type,
      isUltimante: notification.isUltimante,
      cancelButtonText: notification.cancelButtonText,
      cancelFunction: notification.cancelFunction,
      closeAfter: notification.closeAfter,
      confirmButtonText: notification.confirmButtonText,
      confirmFunction: notification.confirmFunction,
      linkTo: notification.linkTo,
      hasInput: notification.hasInput
    };

    newNotificationList.push(newMessage);
    this.updateNotificationList(newNotificationList);
  }

  getNotificationById(id: number): IGlobalNotification | null {
    const currentNotifications: IGlobalNotification[] = this.notificationsSubject.getValue();
    if (currentNotifications.length > 0) {
      const notification: IGlobalNotification = currentNotifications.find((el: IGlobalNotification) => {
        return el.id === id;
      });

      if (notification) {
        return notification;
      }
    }

    return null;
  }

  updateNotificationList(newList: IGlobalNotification[]): void {
    this.notificationsSubject.next(newList);
  }

  private getLastNotification(): IGlobalNotification {
    return this.notificationsSubject.getValue()
      .slice(-1)[0];
  }

  private getNotificationColors(notification: IGlobalNotification): INotificationColors {
    let result: INotificationColors = {
      background: ColorEnum.fairPink,
      color: ColorEnum.blazeOrange
    };

    switch (notification.type) {
      case NotificationTypeEnum.error:
        result = {
          background: ColorEnum.errorLight,
          color: ColorEnum.errorDark
        };
        break;
      case NotificationTypeEnum.warning:
        result = {
          background: ColorEnum.warningLight,
          color: ColorEnum.warningDark
        };
        break;
      case NotificationTypeEnum.info:
        result = {
          background: ColorEnum.infoLight,
          color: ColorEnum.infoDark
        };
        break;
      case NotificationTypeEnum.success:
        result = {
          background: ColorEnum.successLight,
          color: ColorEnum.successDark
        };
        break;
      default:
        break;
    }

    return result;
  }
}
