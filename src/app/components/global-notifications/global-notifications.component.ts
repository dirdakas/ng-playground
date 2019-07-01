import { Component, OnInit } from '@angular/core';

import { GlobalNotificationsService } from '../../services/global-notifications/global-notifications.service';
import { IGlobalNotification } from '../../interfaces/global-notification';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-global-notifications',
  templateUrl: './global-notifications.component.html',
  styleUrls: ['./global-notifications.component.scss']
})
export class GlobalNotificationsComponent implements OnInit {
  notifications$: Observable<IGlobalNotification[]>;

  constructor(
    private globalNotificationsService: GlobalNotificationsService
  ) {}

  ngOnInit(): void {
    this.notifications$ = this.globalNotificationsService.notifications$
      .pipe();
  }
}
