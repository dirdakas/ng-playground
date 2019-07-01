import { Component, Input } from '@angular/core';

import { GlobalNotificationsService } from '../../../../services/global-notifications/global-notifications.service';
import { notificationStateTrigger } from '../../notification-animations';
import { IGlobalNotification } from '../../../../interfaces/global-notification';

@Component({
  selector: 'app-global-simple-notification',
  templateUrl: './global-simple-notification.component.html',
  styleUrls: ['./global-simple-notification.component.scss'],
  animations: [ notificationStateTrigger ]
})
export class GlobalSimpleNotificationComponent {
  @Input() notification: IGlobalNotification;

  isVisible: boolean;

  constructor(
    private globalNotificationsService: GlobalNotificationsService
  ) {
    this.isVisible = true;
  }

  closeNotification(id: number): void {
    this.isVisible = false;
    setTimeout(() => {
      this.globalNotificationsService.removeNotification(id);
    }, 500);
  }
}
