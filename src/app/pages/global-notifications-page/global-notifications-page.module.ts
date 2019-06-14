import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalNotificationsPageComponent } from './global-notifications-page.component';

import {
  SimpleNotificationComponent,
  TypedNotificationComponent,
  UltimateNotificationComponent,
} from './component-exports';

@NgModule({
  declarations: [
    GlobalNotificationsPageComponent,
    SimpleNotificationComponent,
    TypedNotificationComponent,
    UltimateNotificationComponent,
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    SimpleNotificationComponent,
    TypedNotificationComponent,
    UltimateNotificationComponent,
  ],
  exports: [
    GlobalNotificationsPageComponent
  ]
})
export class GlobalNotificationsPageModule { }
