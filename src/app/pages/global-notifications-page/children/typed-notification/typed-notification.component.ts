import { Component } from '@angular/core';

import { GlobalNotificationsService } from '../../../../services/global-notifications/global-notifications.service';
import { NotificationTypeEnum } from '../../../../shared/notificationType.enum';

@Component({
  selector: 'app-typed-notification',
  templateUrl: './typed-notification.component.html',
  styleUrls: ['./typed-notification.component.scss']
})
export class TypedNotificationComponent {
  notificationType: typeof NotificationTypeEnum = NotificationTypeEnum;

  constructor(
    private globalNotificationsService: GlobalNotificationsService
  ) { }

  showNotification(type: NotificationTypeEnum): void {
    this.globalNotificationsService
      .addTypedNotification(
        'It Works!!!! type === ' + type.toString(),
        type
      );
  }
}
