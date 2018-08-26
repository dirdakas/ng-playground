import { Component } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

import {
  clickedStateTrigger,
  setNumberStateTrigger,
  setBubbleStateTrigger,
  showTextStateTrigger,
  animateStateTrigger,
  showListStateTrigger
} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    clickedStateTrigger,
    setNumberStateTrigger,
    setBubbleStateTrigger,
    showTextStateTrigger,
    animateStateTrigger,
    showListStateTrigger
  ]
})
export class AppComponent {

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
