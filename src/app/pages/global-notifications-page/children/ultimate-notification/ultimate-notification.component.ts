import { Component } from '@angular/core';

import { GlobalNotificationsService } from '../../../../services/global-notifications.service';

import { NotificationTypeEnum } from '../../../../shared/notificationType.enum';
import { GlobalNotification } from '../../../../interfaces/globalNotification';

@Component({
  selector: 'app-ultimate-notification',
  templateUrl: './ultimate-notification.component.html',
  styleUrls: ['./ultimate-notification.component.scss']
})
export class UltimateNotificationComponent {
  constructor(private globalNotificationsService: GlobalNotificationsService) { }

  showNotification(type: NotificationTypeEnum): void {
    const notification: GlobalNotification = {
      id: 0,
      type: type,
      message: 'It Works!!!! type === ' + type.toString(),
      isUltimante: true,
      isClosable: true
    };

    switch (type) {
      case NotificationTypeEnum.error:
        notification.linkTo = '/404';
        break;
      case NotificationTypeEnum.warning:
        notification.hasInput = true;
        notification.confirmFunction = this.confirmWithInput;
        notification.confirmButtonText = 'Submit';
        break;
      case NotificationTypeEnum.info:
        notification.cancelButtonText = 'Cancel';
        notification.cancelFunction = this.cancelFunction;
        notification.confirmButtonText = 'Confirm';
        notification.confirmFunction = this.confirmFunction;
        break;
      case NotificationTypeEnum.success:
        notification.closeAfter = 4000;
        notification.isClosable = false;
        break;
      default:
        break;
    }

    this.globalNotificationsService.addNotification(notification);
  }

  private cancelFunction(): void {
    console.log('Console log -> it was canceled');
  }

  private confirmFunction(): void {
    console.log('Console log -> it was confirmed');
  }

  private confirmWithInput(value: string): void {
    console.log('Console log => it was confirmed with INPUT:', value);
  }
}
