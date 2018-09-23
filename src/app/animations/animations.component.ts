import { Component, HostBinding } from '@angular/core';

import {
  AnimationEvent,
  AnimationBuilder,
  style,
  animate
} from '@angular/animations';

import {
  animateStateTrigger,
  showListStateTrigger,
  panelStateTrigger,
  staggerListAnimationTrigger
} from './animations';

import { routeFadeStateTrigger } from '../shared/route-animations';

import { RectangleCircleComponent } from './children/css/rectangle-circle/rectangle-circle.component';
import { CubeRectangleComponent } from './children/css/cube-rectangle/cube-rectangle.component';
import { SimpleLoadingBarComponent } from './children/css/simple-loading-bar/simple-loading-bar.component';
import { CubeRectangleOrangeComponent } from './children/angular-animations/cube-rectangle-orange/cube-rectangle-orange.component';
import { NumberSelectComponent } from './children/angular-animations/number-select/number-select.component';
import { BubbleSelectComponent } from './children/angular-animations/bubble-select/bubble-select.component';
import { ToggleElementComponent } from './children/angular-animations/toggle-element/toggle-element.component';

@Component({
  selector: 'app-animation-page',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    animateStateTrigger,
    showListStateTrigger,
    panelStateTrigger,
    staggerListAnimationTrigger,
    // routeFadeStateTrigger
  ]
})
export class AnimationsComponent {
  animations = [
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
    }
  ];
  // @HostBinding('@routeFadeState') routeAnimation = true;

  showStaggerList = false;
  staggerAnimationList = [
    Math.random(),
    Math.random(),
    Math.random()
  ];
  showPanel = false;
  showParagraph = true;

  left = 0;
  bLeft = 0;

  addElementResults = [];
  width = 700;
  animate = false;

  constructor(private animationBuilder: AnimationBuilder) { }

  moveLeftProg(element: any) {
    const animation = this.animationBuilder.build([
      style({
        transform: `translateX(-${this.bLeft}px)`
      }),
      animate(300, style({
        transform: `translateX(-${this.bLeft + 20}px)`
      }))
    ]);

    const player = animation.create(element);
    player.play();
    this.bLeft += 20;
  }

  onMove() {
    this.left += 20;
    console.log(this.left);
  }

  onStart(event: AnimationEvent) {
    console.log('start', event);
  }

  onDone(event: AnimationEvent) {
    console.log('done', event);
  }

  addElement() {
    this.addElementResults.push(Math.random());
  }

  toggleCollapsible(element: HTMLElement, index: number) {
    if (element.style.display === 'none') {
      element.style.display = 'block';
      this.animations[index]['isActive'] = true;
    } else {
      element.style.display = 'none';
      this.animations[index]['isActive'] = false;
    }
  }
}
