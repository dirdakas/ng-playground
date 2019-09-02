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

import { ColorEnum } from '../../enums/color.enum';

const clickedStateTrigger = trigger('clickedState', [
  state('default', style({
    backgroundColor: ColorEnum.orange,
    width: '150px',
    height: '150px'
  })),
  state('clicked', style({
    backgroundColor: ColorEnum.blue,
    width: '300px',
    height: '50px'
  })),
  state('mousedown', style({
    backgroundColor: ColorEnum.lime,
    width: '150px',
    height: '150px',
    border: `2px solid ${ ColorEnum.blue }`
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
    color: ColorEnum.grey,
    paddingLeft: '5px',
    paddingRight: '5px',
    border: `1px solid ${ ColorEnum.black }`
  })),
  state('selected', style({
    color: ColorEnum.red,
    backgroundColor: ColorEnum.yellow,
    paddingLeft: '5px',
    paddingRight: '5px',
    border: `1px solid ${ ColorEnum.lime }`
  })),
  transition('notSelected => selected', [
    style({
      border: `2px solid ${ ColorEnum.black }`,
      padding: '4px'
    }),
    animate(400, style({
      backgroundColor: ColorEnum.red,
      padding: '6px'
    })),
    animate(700)
  ])
]);

const setBubbleStateTrigger = trigger('bubbleState', [
  state('default', style({
    height: '50px',
    width: '50px',
    backgroundColor: ColorEnum.lime,
    borderRadius: '50%',
    margin: '0 5px',
    float: 'left',
    display: 'inline-block'
  })),
  state('selected', style({
    height: '50px',
    width: '50px',
    backgroundColor: ColorEnum.yellow,
    borderRadius: '50%',
    border: `2px solid ${ ColorEnum.red }`,
    margin: '0 5px',
    float: 'left',
    display: 'inline-block'
  })),
  transition('default => selected', [
    style({
      border: `2px solid ${ ColorEnum.black }`,
      transform: 'scale(1.0)'
    }),
    animate(400, style({
      backgroundColor: ColorEnum.red,
      border: `4px solid ${ ColorEnum.blue }`,
      transform: 'scale(1.2)'
    })),
    animate(700)
  ])
]);

const showTextStateTrigger = trigger('showText', [
  /**
    void - when el is not in the DOM at start/end
    * wild card -> any state
    can replace 'void => *' with ':enter'
    can replace '* => void' with ':leave'
  */
  transition('void => *', [
    style({
      opacity: 0
    }),
    animate(1000, style({
      opacity: 1
    }))
  ]),
  transition('* => void', [
    style({
      opacity: 1
    }),
    animate(500, style({
      opacity: 0
    }))
  ])
]);

const showListStateTrigger = trigger('showList', [
  transition(':enter', [
    style({
      opacity: 0,
      backgroundColor: ColorEnum.white
    }),
    group([
      animate(1000, style({
        opacity: 0.7
      })),
      animate(5000, keyframes([
        style({
          backgroundColor: ColorEnum.white,
          offset: 0
        }),
        style({
          backgroundColor: ColorEnum.lime,
          offset: 0.8
        }),
        style({
          backgroundColor: ColorEnum.blue,
          offset: 1
        }),
      ]))
    ]),
    animate(300, style({
      backgroundColor: ColorEnum.lightBlue,
      opacity: 1
    }))
  ]),
  transition(':leave', [
    style({
      opacity: 1
    }),
    animate(500, style({
      opacity: 0
    }))
  ])
]);

const animateStateTrigger = trigger('animateState', [
  transition('* => *', [
    animate(500, style({
      width: 0
    })),
    animate(600, style({
      width: '*'
    }))
  ])
]);

/**
  :enter / :leave  => Query added/ removed elements
  :animating  => Query all elements which are currently playing an animation
  @triggerName  => Query all elements which use that animation trigger
  @*  => Query all elements which have ANY animation trigger
  :self  => Query the parent element (i.e. the one on which the trigger triggering the transition was applied on)
*/
const panelStateTrigger = trigger('panelState', [
  transition(':enter', [
    group([
      query(':self', [
        style({
          opacity: 0
        }),
        animate(1000)
      ]),
      query('.panel-heading', [
        style({
          transform: 'translateY(-300px)',
          opacity: 0
        }),
        animate(300)
      ]),
      query('.panel-body', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate(300)
      ]),
      query('.panel-footer', [
        style({
          transform: 'translateY(300px)',
          opacity: 0
        }),
        animate(300)
      ])
    ])
  ]),
  transition(':leave', [
    animate(200, style({
      transform: 'translateX(-100%)',
      opacity: 0
    }))
  ]),
  transition('* => *', [
    query(':enter', [
      style({
        transform: 'scale(1)',
      }),
      animate(200, style({
        transform: 'scale(1.1)'
      })),
      animate(100)
      /**
        limit: 1 if only 1 element inside is animated
        optional -> when not sure how many animated elements inside and IF
        they are animated instantly (prevent error)
       */
    ], { optional: true }),
    query('div p, button', [
      style({
        opacity: 0.3
      }),
      animate(500, style({
        color: ColorEnum.red,
        opacity: 1
      })),
      animate(200)
    ])
  ])
]);

const staggerListAnimationTrigger = trigger('staggerList', [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0,
        backgroundColor: ColorEnum.white,
        transform: 'translateX(100px)'
      }),
      stagger(1000, [
        animate(2000, keyframes([
          style({
            backgroundColor: ColorEnum.pink,
            opacity: 0.4,
            transform: 'translateX(20px)'
          }),
          style({
            backgroundColor: ColorEnum.lime,
            opacity: 0.8,
            transform: 'translateX(10px)'
          }),
          style({
            backgroundColor: ColorEnum.blue,
            opacity: 1,
            transform: 'translateX(0px)'
          }),
        ]))
      ]),
      animate(300, style({
        backgroundColor: ColorEnum.lightBlue,
        opacity: 1
      }))
    ], { optional: true })
  ])
]);

export {
  clickedStateTrigger,
  setNumberStateTrigger,
  setBubbleStateTrigger,
  showTextStateTrigger,
  animateStateTrigger,
  showListStateTrigger,
  panelStateTrigger,
  staggerListAnimationTrigger
};
