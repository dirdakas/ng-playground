import {
  animate,
  style,
  transition,
  state,
  trigger,
  group,
  keyframes,
  query,
  stagger
} from '@angular/animations';

const notificationStateTrigger = trigger('notificationState', [
  transition(':enter', [
    style({
      opacity: 0,
      backgroundColor: '#ffffff'
    }),
    animate(400, style({
      backgroundColor: 'lightblue',
      opacity: 1,
      padding: '15px 8px'
    })),
    animate(1000, style({
      backgroundColor: '#ffeded',
      opacity: 1,
      padding: '10px 5px'
    }))
  ]),
  transition(':leave', [
    style({
      opacity: 1,
      transform: 'translateY(0)'
    }),
    animate(500, style({
      opacity: 0,
      transform: 'translateY(-100px)',
      'z-index': 100
    }))
  ])
]);

export {
  notificationStateTrigger
};
