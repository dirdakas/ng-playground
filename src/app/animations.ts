import { animate, style, transition, state, trigger } from '@angular/animations';

export const clickedStateTrigger = trigger('clickedState', [
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
]);

export const setNumberStateTrigger = trigger('numberState', [
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
]);
