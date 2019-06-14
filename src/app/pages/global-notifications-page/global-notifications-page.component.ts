import { Component, ViewContainerRef, ComponentRef } from '@angular/core';
import { ViewChildren } from '@angular/core';

import { DynamicComponentCreationService } from './../../shared/dynamic-component-creation/dynamic-component-creation.service';

import {
  SimpleNotificationComponent,
  TypedNotificationComponent,
  UltimateNotificationComponent,
} from './component-exports';

import { IExampleObject } from '../../interfaces/example-object';

@Component({
  selector: 'app-global-notifications-page',
  templateUrl: './global-notifications-page.component.html',
  styleUrls: ['./global-notifications-page.component.scss']
})
export class GlobalNotificationsPageComponent {
  @ViewChildren('globalNotificationContainer', { read: ViewContainerRef }) globalNotificationContainer;

  examplesList: IExampleObject[] = [
    {
      component: SimpleNotificationComponent,
      description: 'Button to add simple notification to global service and show it'
    },
    {
      component: TypedNotificationComponent,
      description: 'Button to add notification with type'
    },
    {
      component: UltimateNotificationComponent,
      description: 'Buttons to add custom notifications'
    }
  ];

  private componentRef: ComponentRef<any>;

  constructor(
    private dynamicComponentCreationService: DynamicComponentCreationService,
  ) {}

  toggleExample(element: HTMLElement, index: number) {
    if (element.style.display === 'none') {
      element.style.display = 'block';
      this.examplesList[index].isActive = true;

      this.dynamicComponentCreationService.createComponent(
        this.globalNotificationContainer._results[index],
        this.componentRef,
        this.examplesList[index].component
      );
    } else {
      element.style.display = 'none';
      this.examplesList[index].isActive = false;
    }
  }
}
