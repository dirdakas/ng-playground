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
    ]),
    trigger('numberState', [
      state('notSelected', style({
        color: 'grey',
        paddingLeft: '5px',
        paddingRight: '5px',
        border: '1px solid black'
      })),
      state('selected', style({
        color: 'red',
        backgroundColor: 'yellow',
        paddingLeft: '5px',
        paddingRight: '5px',
        border: '1px solid lime'
      })),
      transition('notSelected => selected', [
        style({
          border: '2px solid black',
          padding: '4px'
        }),
        animate(400, style({
          backgroundColor: 'red',
          padding: '6px'
        })),
        animate(700)
      ])
    ])
  ]
})
export class AppComponent {
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
