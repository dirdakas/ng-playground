import { Component } from '@angular/core';

import {
  AnimationEvent,
  AnimationBuilder,
  style,
  animate
} from '@angular/animations';

import { panelStateTrigger } from '../../../animations';

@Component({
  selector: 'app-create-remove-element',
  templateUrl: './create-remove-element.component.html',
  styleUrls: ['./create-remove-element.component.scss'],
  animations: [ panelStateTrigger ]
})
export class CreateRemoveElementComponent {
  showPanel: boolean = false;
  showParagraph: boolean = true;
}
