import { Injectable } from '@angular/core';

import { GlobalNotification } from '../interfaces/globalNotification';

import { Observable, BehaviorSubject } from 'rxjs';
import { NotificationTypeEnum } from '../shared/notificationType.enum';

const EMPTY_NOTIFICATIONS: Array<GlobalNotification> = [];

@Injectable({
  providedIn: 'root'
})
export class GlobalNotificationsService {
  private notificationsSubject = new BehaviorSubject(EMPTY_NOTIFICATIONS);
  notifications$: Observable<Array<GlobalNotification>> = this.notificationsSubject.asObservable();

  addSimpleNotification(message: string): void {
    this.addNotification(message, null);
  }

  addTypedNotification(message: string, type: NotificationTypeEnum): void {
    this.addNotification(message, type);
  }

  removeNotification(id: number): void {
    let newNotificationList = this.notificationsSubject.getValue();
    newNotificationList = newNotificationList
      .filter((notification: GlobalNotification) => {
        return notification.id !== id;
      });
    this.notificationsSubject.next(newNotificationList);
  }

  private addNotification(message: string, type: NotificationTypeEnum): void {
    const newNotificationList = this.notificationsSubject.getValue();
    const lastNotificationInList = this.getLastNotification();
    const id = lastNotificationInList ? (lastNotificationInList.id + 1) : 0;
    const newMessage: GlobalNotification = {
      id: id,
      isClosable: true,
      message: message,
      type: type ? type : null
    };

    newNotificationList.push(newMessage);
    this.notificationsSubject.next(newNotificationList);
  }

  private getLastNotification(): GlobalNotification {
    return this.notificationsSubject.getValue()
      .slice(-1)[0];
  }
}
