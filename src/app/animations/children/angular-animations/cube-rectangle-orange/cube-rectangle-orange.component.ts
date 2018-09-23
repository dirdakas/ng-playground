import { Component } from '@angular/core';
import {
  AnimationEvent,
  AnimationBuilder,
  style,
  animate
} from '@angular/animations';

import { clickedStateTrigger } from '../../../animations';

@Component({
  selector: 'app-cube-rectangle-orange',
  templateUrl: './cube-rectangle-orange.component.html',
  styleUrls: ['./cube-rectangle-orange.component.scss'],
  animations: [ clickedStateTrigger ]
})
export class CubeRectangleOrangeComponent {
  clickedOrange = 'default';
  paragClick = 'default';

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
