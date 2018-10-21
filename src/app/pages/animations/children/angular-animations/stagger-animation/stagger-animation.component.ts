import { Component } from '@angular/core';

import { staggerListAnimationTrigger } from '../../../animations';

@Component({
  selector: 'app-stagger-animation',
  templateUrl: './stagger-animation.component.html',
  styleUrls: ['./stagger-animation.component.scss'],
  animations: [ staggerListAnimationTrigger ]
})
export class StaggerAnimationComponent {
  showStaggerList: boolean;
  staggerAnimationList: Array<number> = [
    Math.random(),
    Math.random(),
    Math.random()
  ];
}
