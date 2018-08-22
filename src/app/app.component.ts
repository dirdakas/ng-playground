import { Component } from '@angular/core';
import { clickedStateTrigger, setNumberStateTrigger, setBubbleStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    clickedStateTrigger,
    setNumberStateTrigger,
    setBubbleStateTrigger
  ]
})
export class AppComponent {
  selectedBubbleIndex: number;

  simpleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  inputNumber: number;

  isRectangleClicked: boolean;
  isCircle: boolean;

  clickedOrange = 'default';
  paragClick = 'default';

  isLoadingBarActive: boolean;

  loadingBarClicked() {
    this.isLoadingBarActive = true;

    setTimeout(() => {
      this.isLoadingBarActive = false;
    }, 3000);
  }

  changeOrange() {
    switch (this.clickedOrange) {
      case 'default':
        this.clickedOrange = 'clicked';
        break;
      case 'clicked':
        this.clickedOrange = 'default';
        break;
      case 'mousedown':
        this.clickedOrange = 'clicked';
        break;
    }

    if (this.clickedOrange === 'clicked') {
      setTimeout(() => { this.clickedOrange = 'default'; } , 3000);
    }
  }
}
