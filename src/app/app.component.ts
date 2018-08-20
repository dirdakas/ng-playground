import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('clickedState', [
      state('default', style({
        backgroundColor: 'orange',
        width: '150px',
        height: '150px'
      })),
      state('clicked', style({
        backgroundColor: 'blue',
        width: '300px',
        height: '50px'
      })),
      state('mousedown', style({
        backgroundColor: 'lime',
        width: '150px',
        height: '150px',
        border: '2px solid blue'
      })),
      transition('default => clicked', animate(
        '0.3s 0.5s ease-in'
      )),
      transition('clicked => default', animate(
        '0.5s 0.3s ease-in'
      )),
      transition('mousedown <=> clicked', animate(
        '1s 0.5s linear'
      ))
    ])
  ]
})
export class AppComponent {
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
