import { Component } from '@angular/core';

import { setNumberStateTrigger } from '../../../animations';

@Component({
  selector: 'app-number-select',
  templateUrl: './number-select.component.html',
  styleUrls: ['./number-select.component.scss'],
  animations: [ setNumberStateTrigger ]
})
export class NumberSelectComponent {
  inputNumber: number;
  simpleArray: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
}
