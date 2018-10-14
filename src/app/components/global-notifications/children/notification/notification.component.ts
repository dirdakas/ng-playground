import { Component, Input } from '@angular/core';
import {
  AnimationEvent,
  AnimationBuilder,
  style,
  animate
} from '@angular/animations';

import { GlobalNotificationsService } from '../../../../services/global-notifications.service';

import { notificationStateTrigger } from '../../notification-animations';

import { GlobalNotification } from '../../../../interfaces/globalNotification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [ notificationStateTrigger ]
})
export class NotificationComponent {
  @Input() notification: GlobalNotification;

  isVisible: boolean;

  constructor(private globalNotificationsService: GlobalNotificationsService) {
    this.isVisible = true;
  }

  closeNotification(id: number): void {
    this.isVisible = false;
    setTimeout(() => {
      this.globalNotificationsService.removeNotification(id);
    }, 500);
  }
}
