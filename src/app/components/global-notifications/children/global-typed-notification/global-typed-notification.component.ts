import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { AnimationPlayer } from '@angular/animations';

import { GlobalNotificationsService } from '../../../../services/global-notifications/global-notifications.service';
import { IGlobalNotification } from '../../../../interfaces/global-notification';
import { IAnimationStates } from 'src/app/interfaces/animation-states';

@Component({
  selector: 'app-global-typed-notification',
  templateUrl: './global-typed-notification.component.html',
  styleUrls: ['./global-typed-notification.component.scss']
})
export class GlobalTypedNotificationComponent implements OnInit {
  @Input() notification: IGlobalNotification;
  @ViewChild('notificationWrapper', { static: true }) _self: ElementRef;

  animations: IAnimationStates = {
    create: null,
    remove: null
  };

  constructor(
    private globalNotificationsService: GlobalNotificationsService
  ) {}

  ngOnInit(): void {
    this.createAnimations();
    this.playAnimation('create');
    this.checkIfAutoClosing();
  }

  closeNotification(id: number): void {
    this.playAnimation('remove');
    setTimeout(() => {
      this.globalNotificationsService.removeNotificationById(id);
    }, 500);
  }

  private checkIfAutoClosing(): void {
    if (this.notification.closeAfter) {
      setTimeout(() => {
        this.closeNotification(this.notification.id);
      }, this.notification.closeAfter);
    }
  }

  private createAnimations(): void {
    this.animations.create = this.globalNotificationsService.getCreationAnimation(this.notification);
    this.animations.remove = this.globalNotificationsService.getRemovalAnimation();
  }

  private playAnimation(type: string): void {
    let player: AnimationPlayer;
    if (type === 'create') {
      player = this.animations.create.create(this._self.nativeElement);
    } else if (type === 'remove') {
      player = this.animations.remove.create(this._self.nativeElement);
    }
    player.play();
  }
}
