import { Component } from '@angular/core';

import { panelStateTrigger } from '../../../animations';

@Component({
  selector: 'app-create-remove-element',
  templateUrl: './create-remove-element.component.html',
  styleUrls: ['./create-remove-element.component.scss'],
  animations: [ panelStateTrigger ]
})
export class CreateRemoveElementComponent {
  showPanel: boolean;
  showParagraph: boolean;

  constructor() {
    this.showPanel = false;
    this.showParagraph = false;
  }
}
