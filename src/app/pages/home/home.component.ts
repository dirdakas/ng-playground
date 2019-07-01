import { Component } from '@angular/core';

import { UserService } from 'src/app/services/user-service/user.service';

// import { routeFadeStateTrigger } from '../../shared/route-animations';

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
  constructor(
    public userService: UserService
  ) {}
}
