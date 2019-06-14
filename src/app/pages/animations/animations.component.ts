import { ViewChildren } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { Component, ViewContainerRef } from '@angular/core';

import { DynamicComponentCreationService } from './../../shared/dynamic-component-creation/dynamic-component-creation.service';

import {
  RectangleCircleComponent,
  CubeRectangleComponent,
  SimpleLoadingBarComponent,
  CubeRectangleOrangeComponent,
  NumberSelectComponent,
  BubbleSelectComponent,
  ToggleElementComponent,
  ShrinkLeftComponent,
  HoverExpandLeftComponent,
  CreateElementComponent,
  MoveLeftComponent,
  MoveLeftProgComponent,
  CreateRemoveElementComponent,
  StaggerAnimationComponent,
} from './component-exports';

import { IExampleObject } from '../../interfaces/example-object';

@Component({
  selector: 'app-animation-page',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    // routeFadeStateTrigger
  ]
})
export class AnimationsComponent {
  @ViewChildren('cssAnimationContainer', { read: ViewContainerRef }) cssAnimationContainer;
  @ViewChildren('ng2AnimationContainer', { read: ViewContainerRef }) ng2AnimationContainer;
  @ViewChildren('ng4AnimationContainer', { read: ViewContainerRef }) ng4AnimationContainer;

  cssAnimationList: IExampleObject[] = [
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

  angular2AnimationList: IExampleObject[] = [
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
    }
  ];

  angular4AnimationList: IExampleObject[] = [
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

  private componentRef: ComponentRef<any>;

  constructor(
    private dynamicComponentCreationService: DynamicComponentCreationService,
  ) {}

  toggleCollapsible(
    element: HTMLElement,
    index: number,
    list: IExampleObject[],
    container: any
  ): void {
    if (element.style.display === 'none') {
      element.style.display = 'block';
      list[index]['isActive'] = true;

      this.dynamicComponentCreationService.createComponent(
        container._results[index],
        this.componentRef,
        list[index].component
      );
    } else {
      element.style.display = 'none';
      list[index]['isActive'] = false;
    }
  }

  toggleCss(element: HTMLElement, index: number): void {
    this.toggleCollapsible(
      element,
      index,
      this.cssAnimationList,
      this.cssAnimationContainer
    );
  }

  toggleAngular2Animation(element: HTMLElement, index: number): void {
    this.toggleCollapsible(
      element,
      index,
      this.angular2AnimationList,
      this.ng2AnimationContainer
    );
  }

  toggleAngular4Animation(element: HTMLElement, index: number): void {
    this.toggleCollapsible(
      element,
      index,
      this.angular4AnimationList,
      this.ng4AnimationContainer
    );
  }

  showContent(element: HTMLElement): void {
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
}
