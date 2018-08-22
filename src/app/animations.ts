import { animate, style, transition, state, trigger } from '@angular/animations';

const clickedStateTrigger = trigger('clickedState', [
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

const setNumberStateTrigger = trigger('numberState', [
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

const setBubbleStateTrigger = trigger('bubbleState', [
  state('default', style({
    height: '50px',
    width: '50px',
    backgroundColor: 'lime',
    borderRadius: '50%',
    margin: '0 5px',
    float: 'left',
    display: 'inline-block'
  })),
  state('selected', style({
    height: '50px',
    width: '50px',
    backgroundColor: 'yellow',
    borderRadius: '50%',
    border: '2px solid red',
    margin: '0 5px',
    float: 'left',
    display: 'inline-block'
  })),
  transition('default => selected', [
    style({
      border: '2px solid black',
      transform: 'scale(1.0)'
    }),
    animate(400, style({
      backgroundColor: 'red',
      border: '4px solid blue',
      transform: 'scale(1.2)'
    })),
    animate(700)
  ])
]);

export {
  clickedStateTrigger,
  setNumberStateTrigger,
  setBubbleStateTrigger
};
