import { Component } from '@angular/core';

import { animateStateTrigger } from '../../../animations';

@Component({
  selector: 'app-shrink-left',
  templateUrl: './shrink-left.component.html',
  styleUrls: ['./shrink-left.component.scss'],
  animations: [ animateStateTrigger ]
})
export class ShrinkLeftComponent {
  width: number;
  animate: boolean;

  constructor() {
    this.width = 700;
  }
}
