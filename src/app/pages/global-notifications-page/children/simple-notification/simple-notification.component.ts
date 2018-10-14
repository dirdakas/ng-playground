import { Component } from '@angular/core';
import { GlobalNotificationsService } from '../../../../services/global-notifications.service';

@Component({
  selector: 'app-simple-notification',
  templateUrl: './simple-notification.component.html',
  styleUrls: ['./simple-notification.component.scss']
})
export class SimpleNotificationComponent {
  constructor(private globalNotificationsService: GlobalNotificationsService) { }

  showNotification(): void {
    this.globalNotificationsService.addNotification('Notification!!!!');
  }
}
