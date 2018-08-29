import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, query, style, animate, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeState', [
      transition('* => *', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(-400px)',
              opacity: 0
            }),
            animate(300)
          ], { optional: true }),
          query(':leave', [
            animate(300,
              style({
                transform: 'translateX(800px)',
                opacity: 0
              })
            )
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  constructor() { }

  getAnimations(routerOutlet: RouterOutlet) {
    const routeData = routerOutlet.activatedRouteData['animations'];
    if (routeData) {
      return routeData['page'];
    } else {
      return 'homePage';
    }
  }
}
