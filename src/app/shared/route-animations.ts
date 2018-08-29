import { animate, style, transition, trigger, stagger, query } from '@angular/animations';

export const routeFadeStateTrigger = trigger('routeFadeState', [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0
      }),
      stagger(1000, [
        animate(1000, style({
          opacity: 1
        }))
      ])
    ], { optional: true }),
    query(':leave', [
      style({
        opacity: 1
      }),
      stagger(1000, [
        animate(1000, style({
          opacity: 0
        }))
      ])
    ], { optional: true })
  ])
]);

export const routeSlideStateTrigger = trigger('routeSlideState', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)',
      opacity: 0
    }),
    animate(300)
  ]),
  transition(':leave', [
    animate(300,
      style({
        transform: 'translateY(100%)',
        opacity: 0
      })
    )
  ])
]);
