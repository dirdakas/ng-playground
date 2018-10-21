import { Component } from '@angular/core';

import {
  AnimationBuilder,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-move-left-prog',
  templateUrl: './move-left-prog.component.html',
  styleUrls: ['./move-left-prog.component.scss']
})
export class MoveLeftProgComponent {
  bLeft: number;

  constructor(private animationBuilder: AnimationBuilder) {
    this.bLeft = 0;
  }

  moveLeftProg(element: HTMLElement): void {
    const animation = this.animationBuilder.build([
      style({
        transform: `translateX(-${this.bLeft}px)`
      }),
      animate(300, style({
        transform: `translateX(-${this.bLeft + 20}px)`
      }))
    ]);

    const player = animation.create(element);
    player.play();
    this.bLeft += 20;
  }
}
