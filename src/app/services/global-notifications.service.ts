import { Injectable } from '@angular/core';

import { GlobalNotification } from '../interfaces/globalNotification';

import { Observable, BehaviorSubject } from 'rxjs';

const EMPTY_NOTIFICATIONS: Array<GlobalNotification> = [];

@Injectable({
  providedIn: 'root'
})
export class GlobalNotificationsService {
  private notificationsSubject = new BehaviorSubject(EMPTY_NOTIFICATIONS);
  notifications$: Observable<Array<GlobalNotification>> = this.notificationsSubject.asObservable();

  addNotification(message: string): void {
    let newNotificationList = this.notificationsSubject.getValue();
    const lastNotificationInList = this.getLastNotification();
    const id = lastNotificationInList ? (lastNotificationInList.id + 1) : 0;
    const newMessage: GlobalNotification = {
      id: id,
      isClosable: true,
      message: message
    };
    newNotificationList.push(newMessage);
    this.notificationsSubject.next(newNotificationList);
  }

  removeNotification(id: number): void {
    let newNotificationList = this.notificationsSubject.getValue();
    newNotificationList = newNotificationList
      .filter(notification => {
        return notification.id !== id;
      });
    this.notificationsSubject.next(newNotificationList);
  }

  private getLastNotification(): GlobalNotification {
    return this.notificationsSubject.getValue().slice(-1)[0];
  }
}
