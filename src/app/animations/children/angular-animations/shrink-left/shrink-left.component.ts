import { Component } from '@angular/core';
import {
  AnimationEvent,
  AnimationBuilder,
  style,
  animate
} from '@angular/animations';

import { animateStateTrigger } from '../../../animations';

@Component({
  selector: 'app-shrink-left',
  templateUrl: './shrink-left.component.html',
  styleUrls: ['./shrink-left.component.scss'],
  animations: [ animateStateTrigger ]
})
export class ShrinkLeftComponent {
  width = 700;
  animate = false;
}
