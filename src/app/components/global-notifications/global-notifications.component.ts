import { Component, OnInit } from '@angular/core';

import { GlobalNotificationsService } from '../../services/global-notifications.service';

import { GlobalNotification } from '../../interfaces/globalNotification';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-global-notifications',
  templateUrl: './global-notifications.component.html',
  styleUrls: ['./global-notifications.component.scss']
})
export class GlobalNotificationsComponent implements OnInit {
  notifications$: Observable<Array<GlobalNotification>>;

  constructor(private globalNotificationsService: GlobalNotificationsService) {}

  ngOnInit() {
    this.notifications$ = this.globalNotificationsService.notifications$
      .pipe();
  }
}
