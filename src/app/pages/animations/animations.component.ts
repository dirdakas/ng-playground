import { Component, HostBinding } from '@angular/core';

import {
  AnimationEvent,
  AnimationBuilder,
  style,
  animate
} from '@angular/animations';

import { routeFadeStateTrigger } from '../../shared/route-animations';

import { RectangleCircleComponent } from './children/css/rectangle-circle/rectangle-circle.component';
import { CubeRectangleComponent } from './children/css/cube-rectangle/cube-rectangle.component';
import { SimpleLoadingBarComponent } from './children/css/simple-loading-bar/simple-loading-bar.component';
import { CubeRectangleOrangeComponent } from './children/angular-animations/cube-rectangle-orange/cube-rectangle-orange.component';
import { NumberSelectComponent } from './children/angular-animations/number-select/number-select.component';
import { BubbleSelectComponent } from './children/angular-animations/bubble-select/bubble-select.component';
import { ToggleElementComponent } from './children/angular-animations/toggle-element/toggle-element.component';
import { ShrinkLeftComponent } from './children/angular-animations/shrink-left/shrink-left.component';
import { HoverExpandLeftComponent } from './children/css/hover-expand-left/hover-expand-left.component';
import { CreateElementComponent } from './children/angular-animations/create-element/create-element.component';
import { MoveLeftComponent } from './children/css/move-left/move-left.component';
import { MoveLeftProgComponent } from './children/angular-animations/move-left-prog/move-left-prog.component';
import { CreateRemoveElementComponent } from './children/angular-animations/create-remove-element/create-remove-element.component';
import { StaggerAnimationComponent } from './children/angular-animations/stagger-animation/stagger-animation.component';
import { ExampleObject } from '../../interfaces/exampleObject';
import { GlobalNotificationsService } from '../../services/global-notifications.service';

@Component({
  selector: 'app-animation-page',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    // routeFadeStateTrigger
  ]
})
export class AnimationsComponent {
  cssAnimationList: Array<ExampleObject> = [
    {
      component: RectangleCircleComponent,
      description: 'On click rectangle will move to the right while transforming into circle'
    },
    {
      component: CubeRectangleComponent,
      description: 'On click cube will expand to rectangle'
    },
    {
      component: SimpleLoadingBarComponent,
      description: 'On click for 3seconds there will be loading bar animation, which is repeatable'
    },
    {
      component: HoverExpandLeftComponent,
      description: 'On hover rectangle will expand and show hidden text'
    },
    {
      component: MoveLeftComponent,
      description: 'On click element will move to left'
    }
  ];

  angular2AnimationList: Array<ExampleObject> = [
    {
      component: CubeRectangleOrangeComponent,
      description: 'On click one cube will become rentagle, other one is multi-clickble for animation'
    },
    {
      component: NumberSelectComponent,
      description: 'On number input 0..9 number animates, which was selected'
    },
    {
      component: BubbleSelectComponent,
      description: 'On bubble click - it would animate and become selected'
    },
    {
      component: ToggleElementComponent,
      description: 'On click element will be created/destroyed will animation for appear/dissapear'
    },
    {
      component: ShrinkLeftComponent,
      description: 'On click it will shrink/decrease to left direction'
    },
    {
      component: CreateElementComponent,
      description: 'On click it will create new element and animates it\'s appearing'
    },
    {
      service: GlobalNotificationsService,
      description: 'On button click it will create global notification'
    }
  ];

  angular4AnimationList: Array<ExampleObject> = [
    {
      component: MoveLeftProgComponent,
      description: 'On click will move element to the left programically'
    },
    {
      component: CreateRemoveElementComponent,
      description: 'On element create/remove it would animate. Grouped query elements'
    },
    {
      component: StaggerAnimationComponent,
      description: 'On create -> will create elements with animations using stagger'
    }
  ];

  // @HostBinding('@routeFadeState') routeAnimation = true;

  constructor(private globalNotificationsService: GlobalNotificationsService) { }

  toggleCollapsible(element: HTMLElement, index: number, list: Array<ExampleObject>) {
    if (element.style.display === 'none') {
      element.style.display = 'block';
      list[index]['isActive'] = true;
    } else {
      element.style.display = 'none';
      list[index]['isActive'] = false;
    }
  }

  toggleCss(element: HTMLElement, index: number): void {
    this.toggleCollapsible(element, index, this.cssAnimationList);
  }

  toggleAngular2Animation(element: HTMLElement, index: number): void {
    this.toggleCollapsible(element, index, this.angular2AnimationList);
  }

  toggleAngular4Animation(element: HTMLElement, index: number): void {
    this.toggleCollapsible(element, index, this.angular4AnimationList);
  }

  showContent(element: HTMLElement) {
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }

  addGlobalNotification(): void {
    this.globalNotificationsService.addNotification('Hooray!!!!');
  }
}
