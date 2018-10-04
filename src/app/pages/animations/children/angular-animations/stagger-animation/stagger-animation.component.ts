import { Component } from '@angular/core';
import {
  AnimationEvent,
  AnimationBuilder,
  style,
  animate
} from '@angular/animations';

import { staggerListAnimationTrigger } from '../../../animations';

@Component({
  selector: 'app-stagger-animation',
  templateUrl: './stagger-animation.component.html',
  styleUrls: ['./stagger-animation.component.scss'],
  animations: [ staggerListAnimationTrigger ]
})
export class StaggerAnimationComponent {
  showStaggerList = false;
  staggerAnimationList = [
    Math.random(),
    Math.random(),
    Math.random()
  ];
}
