import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { GlobalNotificationsService } from '../../services/global-notifications/global-notifications.service';
import { IGlobalNotification } from '../../interfaces/global-notification';

@Component({
  selector: 'app-global-notifications',
  templateUrl: './global-notifications.component.html',
  styleUrls: ['./global-notifications.component.scss']
})
export class GlobalNotificationsComponent implements OnInit, OnDestroy {
  notificationsSub: Subscription;
  notifications: IGlobalNotification[] = [];

  constructor(
    private globalNotificationsService: GlobalNotificationsService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.notificationsSub = this.globalNotificationsService.notifications$
      .pipe()
      .subscribe((notifications: IGlobalNotification[]) => {
        this.notifications = notifications;
        this.cd.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.notificationsSub.unsubscribe();
  }
}
