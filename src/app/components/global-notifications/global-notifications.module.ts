import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalNotificationsComponent } from './global-notifications.component';

import {
  GlobalNotificationComponent,
  GlobalSimpleNotificationComponent,
  GlobalTypedNotificationComponent,
} from './component-exports';

@NgModule({
  declarations: [
    GlobalNotificationsComponent,
    GlobalNotificationComponent,
    GlobalSimpleNotificationComponent,
    GlobalTypedNotificationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  entryComponents: [
    GlobalNotificationComponent,
    GlobalSimpleNotificationComponent,
    GlobalTypedNotificationComponent,
  ],
  exports: [
    GlobalNotificationsComponent,
  ]
})
export class GlobalNotificationsModule { }
