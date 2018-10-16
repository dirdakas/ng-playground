import { Component } from '@angular/core';

import { SimpleNotificationComponent } from './children/simple-notification/simple-notification.component';
import { TypedNotificationComponent } from './children/typed-notification/typed-notification.component';

import { ExampleObject } from '../../interfaces/exampleObject';

@Component({
  selector: 'app-global-notifications-page',
  templateUrl: './global-notifications-page.component.html',
  styleUrls: ['./global-notifications-page.component.scss']
})
export class GlobalNotificationsPageComponent {
  examplesList: Array<ExampleObject> = [
    {
      component: SimpleNotificationComponent,
      description: 'Button to add simple notification to global service and show it'
    },
    {
      component: TypedNotificationComponent,
      description: 'Button to add notification with type'
    }
  ];

  toggleExample(element: HTMLElement, index: number) {
    if (element.style.display === 'none') {
      element.style.display = 'block';
      this.examplesList[index].isActive = true;
    } else {
      element.style.display = 'none';
      this.examplesList[index].isActive = false;
    }
  }
}
