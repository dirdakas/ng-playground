import { Component, HostBinding } from '@angular/core';
import { routeFadeStateTrigger } from '../shared/route-animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // routeFadeStateTrigger
  ]
})
export class HomeComponent {
  // @HostBinding('@routeFadeState') routeAnimation = true;
}
