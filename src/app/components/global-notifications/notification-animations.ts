import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';

import { ColorEnum } from '../../enums/color.enum';

const notificationStateTrigger = trigger('notificationState', [
  transition(':enter', [
    style({
      opacity: 0,
      backgroundColor: ColorEnum.white
    }),
    animate(400, style({
      backgroundColor: ColorEnum.lightBlue,
      opacity: 1,
      padding: '15px 8px'
    })),
    animate(1000, style({
      backgroundColor: ColorEnum.fairPink,
      opacity: 1,
      padding: '10px 5px'
    }))
  ]),
  transition(':leave', [
    style({
      opacity: 1,
      transform: 'translateY(0px)'
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
