import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  query,
  style,
  animate,
  group
} from '@angular/animations';

import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { GlobalNotificationsService } from './services/global-notifications/global-notifications.service';
import { IGlobalNotification } from './interfaces/global-notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeState', [
      transition('* => *', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(-400px)',
              opacity: 0
            }),
            animate(300)
          ], { optional: true }),
          query(':leave', [
            animate(300,
              style({
                transform: 'translateX(800px)',
                opacity: 0
              })
            )
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  private globalNotificationsSub: Subscription;
  constructor(private globalNotificationsService: GlobalNotificationsService) { }

  ngOnInit(): void {
    this.globalNotificationsSub = this.globalNotificationsService.notifications$
      .pipe(
        tap((notifications: IGlobalNotification[]) => {
          console.log('notifications', notifications);
        })
      )
      .subscribe();
  }

  getAnimations(routerOutlet: RouterOutlet) {
    const routeData = routerOutlet.activatedRouteData['animations'];
    if (routeData) {
      return routeData['page'];
    } else {
      return 'homePage';
    }
  }

  ngOnDestroy(): void {
    this.globalNotificationsSub.unsubscribe();
  }
}
