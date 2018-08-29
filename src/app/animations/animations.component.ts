import { Component } from '@angular/core';

import {
  AnimationEvent,
  AnimationBuilder,
  style,
  animate
} from '@angular/animations';

import {
  clickedStateTrigger,
  setNumberStateTrigger,
  setBubbleStateTrigger,
  showTextStateTrigger,
  animateStateTrigger,
  showListStateTrigger,
  panelStateTrigger,
  staggerListAnimationTrigger
} from './animations';

@Component({
  selector: 'app-animation-page',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    clickedStateTrigger,
    setNumberStateTrigger,
    setBubbleStateTrigger,
    showTextStateTrigger,
    animateStateTrigger,
    showListStateTrigger,
    panelStateTrigger,
    staggerListAnimationTrigger
  ]
})
export class AnimationsComponent {
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

  isShown: boolean;

  selectedBubbleIndex: number;

  simpleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  inputNumber: number;

  isRectangleClicked: boolean;
  isCircle: boolean;

  clickedOrange = 'default';
  paragClick = 'default';

  isLoadingBarActive: boolean;

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

  loadingBarClicked() {
    this.isLoadingBarActive = true;

    setTimeout(() => {
      this.isLoadingBarActive = false;
    }, 3000);
  }

  changeOrange() {
    switch (this.clickedOrange) {
      case 'default':
        this.clickedOrange = 'clicked';
        break;
      case 'clicked':
        this.clickedOrange = 'default';
        break;
      case 'mousedown':
        this.clickedOrange = 'clicked';
        break;
    }

    if (this.clickedOrange === 'clicked') {
      setTimeout(() => { this.clickedOrange = 'default'; } , 3000);
    }
  }
}
