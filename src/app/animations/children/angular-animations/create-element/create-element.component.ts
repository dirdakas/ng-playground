import { Component } from '@angular/core';
import {
  AnimationEvent,
  AnimationBuilder,
  style,
  animate
} from '@angular/animations';

import { showListStateTrigger } from '../../../animations';

@Component({
  selector: 'app-create-element',
  templateUrl: './create-element.component.html',
  styleUrls: ['./create-element.component.scss'],
  animations: [ showListStateTrigger ]
})
export class CreateElementComponent {
  addElementResults: Array<number> = [];

  addElement() {
    this.addElementResults.push(Math.random());
  }

  onStart(event: AnimationEvent) {
    console.log('start', event);
  }

  onDone(event: AnimationEvent) {
    console.log('done', event);
  }
}
