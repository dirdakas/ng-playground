import { Component } from '@angular/core';

import { setBubbleStateTrigger } from '../../../animations';

@Component({
  selector: 'app-bubble-select',
  templateUrl: './bubble-select.component.html',
  styleUrls: ['./bubble-select.component.scss'],
  animations: [ setBubbleStateTrigger ]
})
export class BubbleSelectComponent {
  selectedBubbleIndex: number;
  simpleArray: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
}
