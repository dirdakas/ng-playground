import { Component } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

import { showListStateTrigger } from '../../../animations';

@Component({
  selector: 'app-create-element',
  templateUrl: './create-element.component.html',
  styleUrls: ['./create-element.component.scss'],
  animations: [ showListStateTrigger ]
})
export class CreateElementComponent {
  addElementResults: Array<number> = [];

  addElement(): void {
    this.addElementResults.push(Math.random());
  }

  onStart(event: AnimationEvent): void {
    console.log('start', event);
  }

  onDone(event: AnimationEvent): void {
    console.log('done', event);
  }
}
