import { Component } from '@angular/core';

import { showTextStateTrigger } from '../../../animations';

@Component({
  selector: 'app-toggle-element',
  templateUrl: './toggle-element.component.html',
  styleUrls: ['./toggle-element.component.scss'],
  animations: [ showTextStateTrigger ]
})
export class ToggleElementComponent {
  isShown: boolean;
}
